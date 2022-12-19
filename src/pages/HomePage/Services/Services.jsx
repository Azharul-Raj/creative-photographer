import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import ServiceCard from "./ServiceCard";

const Services = () => {
  const [homeService, setHomeService] = useState([]);
  useEffect(() => {
    fetch("https://assignment-11-server-ten.vercel.app/services")
      .then((res) => res.json())
      .then((data) => setHomeService(data))
      .catch((err) => console.error(err));
  }, []);
  return (
    <div data-aos="fade-up"
    data-aos-duration="3000" className="">
      <div className="flex flex-col justify-center items-center ">
        <h2 className="text-4xl text-white text-center font-bold">
          My Services
        </h2>
        <p className="mx-5 lg:w-3/4 lg:my-5">
          I'm a professional photographer. I generally do events related
          photography. I have different package those are shown below. You can
          choose your better package from here. Hopefully you'll love my work.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 lg:mx-14">
        {homeService?.map((service) => (
          <ServiceCard key={service._id} service={service} />
        ))}
      </div>
      <div className="text-center mt-5">
        <Link to='/services'>
                  <button type="button" className="text-white bg-gradient-to-r from-cyan-500 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2">See All Services</button>
        </Link>
      </div>
    </div>
  );
};

export default Services;
