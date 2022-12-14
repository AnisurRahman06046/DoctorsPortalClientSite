import React from "react";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import { useLoaderData } from "react-router-dom";
import CheckOutForm from "./CheckOutForm";
import { useNavigation } from "react-day-picker";
import Loading from "../../../Shared/Loading/Loading";
const stripePromise = loadStripe(process.env.REACT_APP_STRIPE);
const Payment = () => {
  const booking = useLoaderData();
  //   const navigation = useNavigation();
  //   if (navigation.state === "loading") {
  //     return <Loading></Loading>;
  //   }
  //   console.log(booking);
  const { treatment, price, slot, appointmentDate } = booking;
  return (
    <div>
      <h1 className="text-3xl">Payment for {treatment}</h1>
      <p className="text-xl">
        Please pay $ {price} for your appointment on {appointmentDate} at {slot}
      </p>
      <div className="w-96 my-12">
        <Elements stripe={stripePromise}>
          <CheckOutForm booking={booking} />
        </Elements>
      </div>
    </div>
  );
};

export default Payment;
