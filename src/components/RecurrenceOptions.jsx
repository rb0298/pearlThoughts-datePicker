// /src/components/RecurrenceOptions.jsx
import { useDateContext } from "../context/DateContext";

const recurrenceOptions = ["Daily", "Weekly", "Monthly", "Yearly"];
export default function RecurrenceOptions({
  recurrence,
  setRecurrence,
  interval,
  setInterval,
}) {
  return (
    <>
      <div className="mb-4">
        <label
          htmlFor="recurrence"
          className="block text-lg font-semibold mb-2"
        >
          Recurrence Pattern
        </label>
        <select
          id="recurrence"
          className="w-full p-2 border rounded"
          value={recurrence}
          onChange={(e) => setRecurrence(e.target.value)}
        >
          {recurrenceOptions.map((option) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </select>
      </div>

      {/* Every X Days/Weeks/Months/Years */}
      <div className="mb-4">
        <label htmlFor="interval" className="block text-lg font-semibold mb-2">
          Every
        </label>
        <div className="flex gap-2 items-center">
          <input
            type="number"
            id="interval"
            min={1}
            value={interval}
            onChange={(e) => setInterval(parseInt(e.target.value))}
            className="w-16 p-2 border rounded"
          />
          <span>
            {recurrence === "Daily"
              ? "Day(s)"
              : recurrence === "Weekly"
                ? "Week(s)"
                : recurrence === "Monthly"
                  ? "Month(s)"
                  : "Year(s)"}
          </span>
        </div>
      </div>
    </>
  );
}
