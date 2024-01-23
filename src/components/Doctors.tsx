import { useEffect, useRef } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import DoctorsCard from "../layouts/DoctorsCard";
// import { data } from "../data";
import { useDoctorContext } from "../context/doctorContext";
import { getDoctors } from "../api";

// motion
import { motion } from "framer-motion";
import { fadeIn } from "../varients";

// interface ApiResponse {
//   data: Doctor[];
// }

const Doctors = () => {
  const slider = useRef(null);
  const { doctors, updateDoctor } = useDoctorContext();

  console.log("hiii", doctors);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await getDoctors();
        console.log("api data", res);
        updateDoctor(res); // Assuming res is of type Doctor[]
        return res; // Return the data to fulfill the promise
      } catch (error) {
        console.error("Error fetching data:", error);
        // Handle error if needed
        return null; // Return null or some default value
      }
    };
    fetchData();
  }, []);

  //   const settings = {
  //     accessibility: true,
  //     dots: true,
  //     infinite: true,
  //     speed: 500,
  //     arrows: false,
  //     slidesToShow: 3,
  //     slidesToScroll: 1,
  //     responsive: [
  //       {
  //         breakpoint: 1023,
  //         settings: {
  //           slidesToShow: 3,
  //           slidesToScroll: 3,
  //           infinite: true,
  //           dots: true,
  //         },
  //       },
  //       {
  //         breakpoint: 768,
  //         settings: {
  //           slidesToShow: 2,
  //           slidesToScroll: 2,
  //           initialSlide: 2,
  //         },
  //       },
  //       {
  //         breakpoint: 480,
  //         settings: {
  //           slidesToShow: 1,
  //           slidesToScroll: 1,
  //           initialSlide: 2,
  //         },
  //       },
  //     ],
  //   };

  var settings = {
    dots: true,
    infinite: true,
    // slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: false,
    autoplaySpeed: 2000,
    pauseOnHover: true,
    ...(window.innerWidth > 640 ? { slidesToShow: 3 } : { slidesToShow: 1 }),
  };

  return (
    <div
      id="doc"
      className=" min-h-screen flex flex-col justify-center lg:px-32 px-5 pt-16"
    >
      <div className=" ml-4 flex flex-col items-center lg:flex-row justify-between mb-10 lg:mb-0">
        <motion.div
          variants={fadeIn({ direction: "right", delay: 0.2 })}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.7 }}
          className=" flex flex-col lg:flex-row gap-5 pt-14"
        >
          <h1 className=" text-brightColor text-4xl font-semibold text-center lg:text-start">
            Meet Our Experts
          </h1>
          <p className=" mt-2 text-center lg:text-start">
            Experience the Benefits of Advanced Technology and Expert Care
          </p>
        </motion.div>
        {/* <div className="flex gap-5 mt-4 lg:mt-0">
          <button
            className=" bg-[#d5f2ec] text-backgroundColor px-4 py-2 rounded-lg active:bg-[#ade9dc]"
            onClick={() => slider.current.slickPrev()}
          >
            <FaArrowLeft size={25} />
          </button>
          <button
            className=" bg-[#d5f2ec] text-backgroundColor px-4 py-2 rounded-lg active:bg-[#ade9dc]"
            onClick={() => slider.current.slickNext()}
          >
            <FaArrowRight size={25} />
          </button>
        </div> */}
      </div>
      <div className=" mt-5 h-[500px] ">
        <Slider ref={slider} {...settings}>
          {doctors.map((doc) => (
            <DoctorsCard doctor={doc} />
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default Doctors;
