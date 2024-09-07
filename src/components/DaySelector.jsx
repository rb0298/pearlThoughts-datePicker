function DaySelector({ selectedDays, handleDaySelection }) {
  return (
    <div className="mb-4">
      <label className="block text-lg font-semibold mb-2">
        Select Days of the Week:
      </label>
      <div className="flex gap-2">
        {["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].map((day, idx) => (
          <label key={day} className="flex items-center">
            <input
              type="checkbox"
              className="mr-2"
              value={idx}
              checked={selectedDays.includes(idx)}
              onChange={() => handleDaySelection(idx)}
            />
            {day}
          </label>
        ))}
      </div>
    </div>
  );
}

export default DaySelector;
