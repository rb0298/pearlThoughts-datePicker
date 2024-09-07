import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import "../styles/calendar.css";

const CalendarPreview = ({ previewDates }) => {
  // Create a Set with string representations of the preview dates for fast lookup
  const previewDatesSet = new Set(
    previewDates.map((date) => new Date(date).toDateString())
  );

  return (
    <div className="mb-4">
      <h3 className="text-lg font-semibold mb-2">Recurring Dates Preview</h3>
      <Calendar
        value={new Date()} // Default date
        tileClassName={({ date, view }) => {
          if (view === "month") {
            // Check if the date exists in the Set
            return previewDatesSet.has(date.toDateString())
              ? "bg-blue-400 text-white rounded-full"
              : "";
          }
          return "";
        }}
      />
    </div>
  );
};

export default CalendarPreview;
