import React from "react";
import quote from "../../../../assets/icons/quote.svg";
import people1 from "../../../../assets/images/people1.png";
import people2 from "../../../../assets/images/people2.png";
import people3 from "../../../../assets/images/people3.png";
import TestimonialCard from "./TestimonialCard";
const Testimonials = () => {
  const reviewData = [
    {
      id: 1,
      name: "Winson Herry",
      review:
        "It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content",
      location: "Mirpur,Dhaka",
      img: people1,
    },
    {
      id: 2,
      name: "Winson Herry",
      review:
        "It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content",
      location: "Mirpur,Dhaka",
      img: people2,
    },
    {
      id: 3,
      name: "Winson Herry",
      review:
        "It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content",
      location: "Mirpur,Dhaka",
      img: people3,
    },
  ];
  return (
    <section className="my-16">
      <div className="flex justify-between">
        <div>
          <h4 className="text-xl font-bold">Testimonials</h4>
          <h1 className="text-4xl">What our patients says</h1>
        </div>
        <figure>
          <img className="w-24 lg:w-48" src={quote} alt="" />
        </figure>
      </div>
      <div className="grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {reviewData.map((reviews) => (
          <TestimonialCard key={reviews.id} reviews={reviews}></TestimonialCard>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;
