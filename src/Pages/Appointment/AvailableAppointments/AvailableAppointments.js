import { format } from "date-fns";
import React from "react";

const AvailableAppointments = ({ selectedDate }) => {
  return (
    <div>
      <p className="text-center my-16 text-secondary font-bold">
        Available Appointments on {format(selectedDate, "PP")}
      </p>
    </div>
  );
};

export default AvailableAppointments;
