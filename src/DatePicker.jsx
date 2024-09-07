import React, { useState, useEffect } from "react";
import NthDaySelector from "./components/NthDaySelector";
import CalendarPreview from "./components/CalendarPreview";
import { calculateRecurringDates } from "./utils/helper";
import DateRangeSelector from "./components/DateRangeSelector";
import DaySelector from "./components/DaySelector";
import RecurrenceOptions from "./components/RecurrenceOptions";

const recurrenceOptions = ["Daily", "Weekly", "Monthly", "Yearly"];

const DatePicker = () => {
  const [recurrence, setRecurrence] = useState("Daily");
  const [interval, setInterval] = useState(1); // For "every X days/weeks/etc."
  const [nthDay, setNthDay] = useState("");
  const [selectedDays, setSelectedDays] = useState([]);
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);
  const [previewDates, setPreviewDates] = useState([]);

  console.log(previewDates);

  useEffect(() => {
    const calculatedDates = calculateRecurringDates({
      startDate,
      recurrence,
      interval,
      nthDay,
      selectedDays,
      endDate,
    });

    setPreviewDates(calculatedDates);
  }, [recurrence, startDate, endDate, nthDay, selectedDays, interval]);

  const handleDaySelection = (day) => {
    if (selectedDays.includes(day)) {
      setSelectedDays(selectedDays.filter((d) => d !== day));
    } else {
      setSelectedDays([...selectedDays, day]);
    }
  };

  return (
    <div className="p-6 bg-gray-100 rounded-lg shadow-lg ">
      {/* Recurrence Pattern */}
      <RecurrenceOptions
        recurrence={recurrence}
        setRecurrence={setRecurrence}
        interval={interval}
        setInterval={setInterval}
      />
      {/* Customization */}
      {recurrence === "Weekly" && (
        <DaySelector
          handleDaySelection={handleDaySelection}
          selectedDays={selectedDays}
        />
      )}
      {recurrence === "Monthly" && (
        <NthDaySelector nthDay={nthDay} setNthDay={setNthDay} />
      )}
      <DateRangeSelector setStartDate={setStartDate} setEndDate={setEndDate} />
      <CalendarPreview previewDates={previewDates} />
    </div>
  );
};

export default DatePicker;
