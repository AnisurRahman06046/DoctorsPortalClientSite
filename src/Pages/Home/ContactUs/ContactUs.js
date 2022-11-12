import React from "react";
import appointment from "../../../assets/images/appointment.png";

const ContactUs = () => {
  return (
    <div
      className="px-32 py-16"
      style={{ backgroundImage: `url(${appointment})` }}
    >
      <section className="text-center">
        <h1 className="text-xl">Contact Us</h1>
        <h1 className="text-4xl">Stay Connected with us</h1>
      </section>
      <form className="text-center mt-8 ">
        <input
          type="email"
          placeholder="Email"
          className="input bg-white input-bordered input-primary w-full lg:w-1/2 lg:h-10 max-w-xs"
        />
        <br />
        <input
          type="text"
          placeholder="Subject"
          className="input input-bordered input-primary bg-white mt-4 mb-4 w-full lg:w-1/2 lg:h-10  max-w-xs"
        />
        <br />
        <textarea
          className="textarea w-full input-bordered input-primary max-w-xs bg-white"
          placeholder="Your Message"
        ></textarea>
        <br />
        <button className="btn btn-primary px-8 text-white mt-3">Submit</button>
      </form>
    </div>
  );
};

export default ContactUs;
