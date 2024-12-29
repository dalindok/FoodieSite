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
    <div className="max-w-md mx-auto p-4 font-zain">
      <h1 className="text-lg font-bold mb-4">Table Booking</h1>

      <div className="mb-4 relative">
        <div className="relative flex items-center border border-yellow-500 rounded-md">
          <BsPeople className="text-4xl text-black pl-3" />
          <select
            className="w-full p-2 border-0 outline-none rounded-md focus:ring-0"
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

      <div className="relative flex items-center border border-yellow-500 rounded-md mb-4">
        <SlCalender className="text-4xl text-black pl-3" />
        <DatePicker
          className="w-full p-2 rounded-md text-base text-black font-light"
          selected={date}
          onChange={(selectedDate) => setDate(selectedDate)}
          dateFormat="yyyy-MM-dd"
          minDate={new Date()}
          placeholderText="Date"
        />
      </div>

      <div className="relative flex items-center border border-yellow-500 rounded-md p-2 mb-5">
        <IoTimeOutline className="text-4xl text-black" />
        <div className="relative w-full">
          <TimePicker
            value={time}
            onChange={handleTimeChange}
            disableClock={true}
            format="hh:mm a"
            className="w-full border-0 outline-none focus:ring-0 focus:border-transparent"
            clearIcon={null}
          />
        </div>
      </div>

      {time && <p className="text-gray-700 mb-5">Selected Time: {time}</p>}

      <div className="mb-4">
        <label className="block text-xl font-semibold mb-2">Select Table</label>
        <div className="w-full h-32 rounded-md bg-gray-100"></div>
      </div>

      <div className="flex justify-between">
        <button
          className="px-4 py-2 bg-white text-black rounded-md border-customColor border-2 font-light hover:bg-customColor hover:shadow-lg"
          onClick={handleCancel}
        >
          Cancel
        </button>
        <button
          className="px-4 py-2 bg-white text-black rounded-md border-customColor border-2 font-light hover:bg-customColor hover:shadow-lg"
          onClick={handleConfirm}
        >
          Confirm
        </button>
      </div>
    </div>
  );
};

export default Booking;
