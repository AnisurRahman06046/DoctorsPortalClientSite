import React from "react";
import treatment from "../../../assets/images/treatment.png";
const ExceptionalTerms = () => {
  return (
    <div className="hero  bg-base-200">
      <div className="hero-content flex-col lg:flex-row">
        <img
          src={treatment}
          className="lg:w-[458px] lg:h-[576px]  rounded-lg shadow-2xl"
          alt=""
        />
        <div className="lg:w-[497px] lg:h-[347px] ">
          <h1 className="text-5xl font-bold">
            Exceptional Dental Care, on Your Terms
          </h1>
          <p className="py-6">
            It is a long established fact that a reader will be distracted by
            the readable content of a page when looking at its layout. The point
            of using Lorem Ipsumis that it has a more-or-less normal
            distribution of letters,as opposed to using 'Content here, content
            here', making it look like readable English. Many desktop publishing
            packages and web page
          </p>
          <button className="btn btn-primary">Get Started</button>
        </div>
      </div>
    </div>
  );
};

export default ExceptionalTerms;
