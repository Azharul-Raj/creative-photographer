import React from "react";
import { Link } from "react-router-dom";
import { PhotoProvider, PhotoView } from "react-photo-view";
import "react-photo-view/dist/react-photo-view.css";

const ServiceCard = ({ service }) => {
  const { _id, title, img, desc, price, rating } = service;
  return (
    <div className="max-w-sm bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
      <Link href="#">
        <PhotoProvider>
          <PhotoView src={img}>
            <img className="rounded-t-lg" src={img} alt="" />
          </PhotoView>
        </PhotoProvider>
      </Link>
      <div
        data-aos="fade-down"
        data-aos-easing="linear"
        data-aos-duration="1500"
        className="p-5"
      >
        <Link href="#">
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            {title}
          </h5>
        </Link>
        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
          {desc.slice(0, 100) + "..."}
        </p>
        <div className="flex justify-between mb-5">
          <p>Price : {price}$</p>
          <p>Rating : {rating}</p>
        </div>
        <Link to={`/service/${_id}`}>
          <button className="w-full items-center py-2 px-3 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
            {" "}
            View Details
          </button>
        </Link>
      </div>
    </div>
  );
};

export default ServiceCard;
