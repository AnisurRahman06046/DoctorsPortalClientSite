import React from "react";
import fluoride from "../../../assets/images/fluoride.png";
import cavity from "../../../assets/images/cavity.png";
import whitening from "../../../assets/images/whitening.png";
import ServiceCard from "./ServiceCard";
import ExceptionalTerms from "./ExceptionalTerms";
const Services = () => {
  const servicesData = [
    {
      id: 1,
      name: "Fluoride Treatment",
      description:
        "lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum",
      img: fluoride,
    },
    {
      id: 2,
      name: "Cavity Filling",
      description:
        "lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum",
      img: cavity,
    },
    {
      id: 3,
      name: "Teeth Whitening",
      description:
        "lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum",
      img: whitening,
    },
  ];
  return (
    <div className="mt-16">
      <div className="text-center">
        <h3 className="text-primary uppercase text-xl font-bold">
          Our Services
        </h3>
        <h2 className="text-3xl">Services We Provide</h2>
      </div>
      <div className="grid gap-8 lg:grid-cols-3 md:grid-cols-2 grid-cols-1">
        {servicesData.map((service) => (
          <ServiceCard key={service.id} service={service}></ServiceCard>
        ))}
      </div>
      <div className="lg:mt-[148px]">
        <ExceptionalTerms></ExceptionalTerms>
      </div>
    </div>
  );
};

export default Services;
