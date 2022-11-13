import React from "react";

const AppointmentOption = ({ option }) => {
  const { name, slots } = option;
  return (
    <div className="card  shadow-xl">
      <div className="card-body text-center  ">
        <h2 className="text-2xl text-center text-secondary font-bold ">
          {name}
        </h2>
        <p>{slots.length > 0 ? slots[0] : "try another day"}</p>
        <p>
          {slots.length} {slots.length > 1 ? "spaces" : "space"} available
        </p>
        <div className="card-actions justify-center">
          <button className="btn text-white btn-primary">
            Book Appointment
          </button>
        </div>
      </div>
    </div>
  );
};

export default AppointmentOption;
