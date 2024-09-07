// Helper function to calculate nth day of the month (e.g., second Tuesday)
const getNthDayOfMonth = (date, nthDayString) => {
  const [nth, dayOfWeek] = nthDayString.split(" ");
  const targetDay = getDayOfWeekIndex(dayOfWeek); // e.g., 'Tuesday' -> 2
  const nthOccurrence = parseInt(nth[0]); // e.g., '2nd' -> 2

  const year = date.getFullYear();
  const month = date.getMonth();

  console.log(year, month);

  let occurrenceCount = 0;
  let nthDayDate = null;

  // Find nth occurrence of the day in the given month
  for (let day = 1; day <= 31; day++) {
    const currentDate = new Date(year, month, day);
    if (currentDate.getMonth() !== month) break; // Break if it exceeds the month

    if (currentDate.getDay() === targetDay) {
      occurrenceCount++;
      if (occurrenceCount === nthOccurrence) {
        nthDayDate = currentDate;
        break;
      }
    }
  }

  return nthDayDate;
};
const getDayOfWeekIndex = (day) => {
  const daysOfWeek = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  return daysOfWeek.indexOf(day);
};

export const calculateRecurringDates = ({
  startDate,
  recurrence, // 'daily', 'weekly', 'monthly', 'yearly'
  interval = 1, // every X days/weeks/months/years
  selectedDays = [], // for weekly: [0 (Sunday), 1 (Monday), ..., 6 (Saturday)]
  nthDay, // for monthly: e.g., 2 for the second Tuesday
  endDate,
}) => {
  const dates = [];
  recurrence = recurrence.toLowerCase();

  startDate = startDate || Date.now();
  startDate = new Date(startDate);
  let currentDate = new Date(startDate);
  console.log(currentDate);

  // Continue adding dates until reaching the endDate or a reasonable limit (e.g., 1 year)
  const limit = endDate
    ? new Date(endDate)
    : new Date(
        new Date(currentDate).setFullYear(
          new Date(currentDate).getFullYear() + 1
        )
      );

  while (currentDate <= limit) {
    switch (recurrence) {
      case "daily":
        // Push current date and move by the 'interval' of days
        dates.push(new Date(currentDate));
        currentDate.setDate(currentDate.getDate() + interval);
        break;

      case "weekly":
        if (selectedDays.length === 0) {
          dates.push(new Date(currentDate));
          currentDate.setDate(currentDate.getDate() + 7 * interval);
        } else {
          if (selectedDays.includes(currentDate.getDay())) {
            dates.push(new Date(currentDate));
          }
          currentDate.setDate(currentDate.getDate() + 1);
          // Move forward by 1 day and check if it's a selected day
          // if (countOfSelectedDays === selectedDays.length) {
          //   currentDate.setDate(
          //     getNextSunday(currentDate).getDate() + (interval - 1) * 7
          //   );
        }
        break;

      case "monthly":
        // Handle nth day of the month (e.g., second Tuesday)
        if (nthDay) {
          // helper function
          const nthDayDate = getNthDayOfMonth(currentDate, nthDay);

          if (nthDayDate && nthDayDate <= limit && nthDayDate >= startDate) {
            dates.push(nthDayDate);
          }
          currentDate.setMonth(currentDate.getMonth() + interval);
        } else {
          // Regular monthly recurrence
          dates.push(new Date(currentDate));
          currentDate.setMonth(currentDate.getMonth() + interval);
        }
        break;

      case "yearly":
        dates.push(new Date(currentDate));
        currentDate.setFullYear(currentDate.getFullYear() + interval);
        break;

      default:
        console.error("Unsupported recurrence type");
        return [];
    }
  }

  return dates;
};

// function getNextSunday(date) {
//   const nextSunday = new Date(date);
//   const currentDay = nextSunday.getDay();
//   const daysToAdd = currentDay === 0 ? 7 : 7 - currentDay;

//   nextSunday.setDate(nextSunday.getDate() + daysToAdd);

//   return nextSunday;
// }

// // Your given date
// const givenDate = new Date("Sat Sep 07 2024 13:49:35 GMT+0530");

// console.log(givenDate);

// // Get the next Sunday
// const nextSunday = getNextSunday(givenDate);

// console.log(nextSunday.toDateString());
