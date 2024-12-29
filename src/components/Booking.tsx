import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import TimePicker from "react-time-picker";
import "react-time-picker/dist/TimePicker.css";
import { BsPeople } from "react-icons/bs";
import { SlCalender } from "react-icons/sl";
import { IoTimeOutline } from "react-icons/io5";

const Booking = () => {
  const [numberOfPeople, setNumberOfPeople] = useState<string>("");
  const [date, setDate] = useState<Date | null>(null);
  const [time, setTime] = useState<string | null>(null);

  const handleTimeChange = (value: string | null) => {
    setTime(value); // Store as string
  };

  const handleConfirm = () => {
    console.log({
      numberOfPeople,
      date: date ? date.toISOString().split("T")[0] : "",
      time,
    });
    // Add your logic for booking confirmation
  };

  const handleCancel = () => {
    setNumberOfPeople("");
    setDate(null);
    setTime(null);
  };

  return (
    <div className="max-w-lg mx-auto p-6 font-zain bg-white border border-gray-300 rounded-lg shadow-lg w-[400px] mb-5 mt-5">
      <h1 className="text-lg font-bold mb-4 text-center">Table Booking</h1>

      {/* Number of People */}
      <div className="mb-4 relative">
        <div className="relative flex items-center border border-customColor rounded-md h-12">
          <BsPeople className="text-3xl text-black pl-3" />
          <select
            className="w-full p-2 border-0 outline-none rounded-md focus:ring-0 text-base"
            value={numberOfPeople}
            onChange={(e) => setNumberOfPeople(e.target.value)}
          >
            <option value="">Number of people</option>
            {Array.from({ length: 10 }, (_, index) => (
              <option key={index + 1} value={index + 1}>
                {index + 1}
              </option>
            ))}
          </select>
        </div>
      </div>

      {/* Date Picker */}
      <div className="relative flex items-center border border-customColor rounded-md mb-4 h-12">
        <SlCalender className="text-3xl text-black pl-3" />
        <DatePicker
          className="w-full p-2 rounded-md text-base text-black font-light"
          selected={date}
          onChange={(selectedDate) => setDate(selectedDate)}
          dateFormat="yyyy-MM-dd"
          minDate={new Date()}
          placeholderText="Date"
        />
      </div>

      {/* Time Picker */}
      <div className="relative flex items-center border border-customColor rounded-md h-12 mb-5 p-2">
        <IoTimeOutline className="text-3xl text-black" />
        <TimePicker
          value={time}
          onChange={handleTimeChange}
          disableClock={true}
          format="hh:mm a"
          className="w-full border-0 outline-none focus:ring-0"
          clearIcon={null}
        />
      </div>

      {/* Selected Time */}
      {time && <p className="text-gray-700 mb-5">Selected Time: {time}</p>}

      {/* Table Selector */}
      <div className="mb-4">
        <label className="block text-lg font-semibold mb-2">Select Table</label>
        <div className="w-full h-24 rounded-md bg-gray-100 flex items-center justify-center">
         
        </div>
      </div>

      {/* Buttons */}
      <div className="flex justify-between">
        <button
          className="px-4 py-2 bg-white text-black rounded-md border-customColor border-2 font-light hover:bg-customColor hover:shadow-lg w-24"
          onClick={handleCancel}
        >
          Cancel
        </button>
        <button
          className="px-4 py-2 bg-white text-black rounded-md border-customColor border-2 font-light hover:bg-customColor hover:shadow-lg w-24"
          onClick={handleConfirm}
        >
          Confirm
        </button>
      </div>
    </div>
  );
};

export default Booking;
