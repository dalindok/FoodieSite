import React, { useState } from "react";

const StatusTabs = () => {
  const [activeTab, setActiveTab] = useState("Pending");

  return (
    <div className="font-zain pl-20 pr-20 pt-10 ">
      <p className="text-4xl">My Booking History</p>
      <p className="text-slate-500">View all your booking here</p>
      <div className="flex flex-row justify-around space-x-6 mt-10">
        {["Pending", "Complete", "Cancel"].map((status) => (
          <p
            key={status}
            className={`cursor-pointer ${
              activeTab === status
                ? "underline font-semibold underline-offset-8"
                : "text-gray-600"
            }`}
            onClick={() => setActiveTab(status)}
          >
            {status}
          </p>
        ))}
      </div>
    </div>
  );
};

export default StatusTabs;
