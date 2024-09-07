// /src/components/DateRangeSelector.jsx
import { useDateContext } from "../context/DateContext";

export default function DateRangeSelector({ setStartDate, setEndDate }) {
  return (
    <div className="flex gap-4 mb-4">
      <div className="w-1/2">
        <label htmlFor="startDate" className="block text-lg font-semibold mb-2">
          Start Date
        </label>
        <input
          type="date"
          id="startDate"
          className="w-full p-2 border rounded"
          onChange={(e) => setStartDate(e.target.value)}
        />
      </div>
      <div className="w-1/2">
        <label htmlFor="endDate" className="block text-lg font-semibold mb-2">
          End Date
        </label>
        <input
          type="date"
          id="endDate"
          className="w-full p-2 border rounded"
          onChange={(e) => setEndDate(e.target.value)}
        />
      </div>
    </div>
  );
}
