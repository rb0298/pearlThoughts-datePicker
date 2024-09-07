import React, { useState } from "react";

// Constants for nth occurrence and weekdays
const nthOptions = ["1st", "2nd", "3rd", "4th"];
const weekdays = [
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
  "Sunday",
];

const NthDaySelector = ({ nthDay, setNthDay }) => {
  const handleChange = (e) => {
    setNthDay(e.target.value);
  };

  return (
    <div className="mb-4">
      <label htmlFor="nthDay" className="block text-lg font-semibold mb-2">
        Select the nth day of the month
      </label>
      <select
        id="nthDay"
        value={nthDay}
        onChange={handleChange}
        className="w-full p-2 border rounded"
      >
        <option value="">None</option>
        {nthOptions.map((nth) =>
          weekdays.map((day) => (
            <option key={`${nth} ${day}`} value={`${nth} ${day}`}>
              {`${nth} ${day}`}
            </option>
          ))
        )}
      </select>

      {/* Display selected nth day */}
      {nthDay && (
        <div className="mt-4">
          <p className="text-lg">Selected: {nthDay}</p>
        </div>
      )}
    </div>
  );
};

export default NthDaySelector;
