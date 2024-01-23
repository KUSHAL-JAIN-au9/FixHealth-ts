import React from "react";

interface Doctor {
  img: string;
  name: string;
  specialties: string;
  city: string;
  id?: string;
}

interface DoctorsCardProps {
  doctor: Doctor;
}

const DoctorsCard: React.FC<DoctorsCardProps> = ({ doctor }) => {
  const { img, name, specialties, city, id } = doctor;
  return (
    <div
      key={id}
      className=" mx-3 bg-gray-400 relative mb-12 cursor-pointer rounded-md"
    >
      <img
        src={img}
        alt=""
        className="mx-auto border-none h-80 hover:scale-95 transition-all duration-300 rounded-xl border border-white"
      />

      <div className="text-center px-3 py-8 bg-gradient-to-b from-black to-gray-800 shadow-lg border border-white rounded-md md:w-4/5 mx-auto absolute -bottom-12 left-0 right-0  ">
        <h1 className="mb-3 text-xl text-neutralGrey font-semibold">{name}</h1>
        <span className="flex items-center text-sm font-medium text-white me-3 justify-center my-2 ">
          <span className="flex w-2.5 h-2.5 bg-blue-600 rounded-full me-1.5 flex-shrink-0"></span>
          {specialties}
        </span>

        <span className="flex items-center text-sm font-medium text-white me-3 justify-center my-2">
          <span className="flex w-2.5 h-2.5 bg-teal-500 rounded-full me-1.5 flex-shrink-0"></span>
          {city}
        </span>
        <button
          className={`bg-brightColor text-white px-4 py-2 rounded-md hover:bg-hoverColor transition duration-300 ease-in-out `}
        >
          Book Now
        </button>
        {/* <p> </p> */}
        {/* <Rating className="w-full text-center flex flex-row flex-wrap items-center justify-around ">
          <div className="w-20 flex flex-row">
            <Rating.Star />
            <p className="ml-2 mr-4 text-sm font-bol text-white">4.95</p>
          </div>
          <div>
            <span className="mx-1.5 h-1 w-1 rounded-full bg-gray-400"></span>
            <a href="#" className="text-sm font-medium no-underline text-white">
              73 reviews
            </a>
          </div>
        </Rating> */}
        {/* <div className="flex gap-8 items-center justify-center">
          Check all Capsules
        </div> */}
      </div>
    </div>
  );
};

export default DoctorsCard;
