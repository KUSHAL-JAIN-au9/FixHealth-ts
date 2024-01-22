import { Carousel } from "flowbite-react";
import { useState } from "react";
import BookingModal from "./Modal";

const HeroBanner = () => {
  const [openModal, setOpenModal] = useState(false);

  return (
    <div className="h-96 md:h-screen ">
      <Carousel slide={false}>
        <div
          className={`flex bg-my-image-class0  h-full items-center justify-start bg-cover text-backgroundDarkTextColor `}
        >
          <div className=" mt-auto ml-28 md:w-1/2 h-[70%] bg-transparent font-semibold ">
            <h1 className="banner-main-heading md:text-4xl xl:text-5xl">
              Experience the Benefits of <br />
              <i>Advanced Technology</i>
              <br />& Expert Care
            </h1>
            <button
              className="bg-brightColor text-white px-4 py-4 mt-4 rounded-md hover:bg-hoverColor transition duration-300 ease-in-out"
              onClick={() => setOpenModal(true)}
            >
              Contact Us
            </button>
          </div>
        </div>

        <div
          className={`flex bg-my-image-class1  h-full items-center justify-start bg-cover text-backgroundDarkTextColor `}
        >
          <div className=" mt-auto ml-28 md:w-1/2 h-[70%] bg-transparent font-semibold ">
            <h1 className="banner-main-heading md:text-4xl xl:text-5xl">
              Experience the Benefits of <br />
              <i>Advanced Technology</i>
              <br />& Expert Care
            </h1>
            <button
              className="bg-brightColor text-white px-4 py-4 mt-4 rounded-md hover:bg-hoverColor transition duration-300 ease-in-out"
              onClick={() => setOpenModal(true)}
            >
              Contact Us
            </button>
          </div>
        </div>

        <div
          className={`flex bg-my-image-class2  h-full items-center justify-start bg-cover text-black `}
        >
          <div className=" mt-auto ml-28 md:w-1/2 h-[70%] bg-transparent font-semibold ">
            <h1 className="banner-main-heading md:text-4xl xl:text-5xl">
              Experience the Benefits of <br />
              <i>Advanced Technology</i>
              <br />& Expert Care
            </h1>
            <button
              className="bg-brightColor text-white px-4 py-4 mt-4 rounded-md hover:bg-hoverColor transition duration-300 ease-in-out"
              onClick={() => setOpenModal(true)}
            >
              Contact Us
            </button>
          </div>
        </div>

        <div
          className={`flex bg-my-image-class3  h-full items-center justify-start bg-cover text-backgroundDarkTextColor `}
        >
          <div className=" mt-auto ml-28 md:w-1/2 h-[70%] bg-transparent font-semibold ">
            <h1 className="banner-main-heading md:text-4xl xl:text-5xl">
              Experience the Benefits of <br />
              <i>Advanced Technology</i>
              <br />& Expert Care
            </h1>
            <button
              className="bg-brightColor text-white px-4 py-4 mt-4 rounded-md hover:bg-hoverColor transition duration-300 ease-in-out"
              onClick={() => setOpenModal(true)}
            >
              Contact Us
            </button>
          </div>
        </div>

        <div
          className={`flex bg-my-image-class4  h-full items-center justify-start bg-cover text-black`}
        >
          <div className=" mt-auto ml-28 md:w-1/2 h-[70%] bg-transparent font-semibold ">
            <h1 className="banner-main-heading md:text-4xl xl:text-5xl">
              Experience the Benefits of <br />
              <i>Advanced Technology</i>
              <br />& Expert Care
            </h1>
            <button
              className="bg-brightColor text-white px-4 py-4 mt-4 rounded-md hover:bg-hoverColor transition duration-300 ease-in-out"
              onClick={() => setOpenModal(true)}
            >
              Contact Us
            </button>
          </div>
        </div>

        <div
          className={`flex bg-my-image-class5  h-full items-center justify-start bg-cover text-black`}
        >
          <div className=" mt-auto ml-28 md:w-1/2 h-[70%] bg-transparent font-semibold ">
            <h1 className="banner-main-heading md:text-4xl xl:text-5xl">
              Experience the Benefits of <br />
              <i>Advanced Technology</i>
              <br />& Expert Care
            </h1>
            <button
              className="bg-brightColor text-white px-4 py-4 mt-4 rounded-md hover:bg-hoverColor transition duration-300 ease-in-out"
              onClick={() => setOpenModal(true)}
            >
              Contact Us
            </button>
          </div>
        </div>

        <div
          className={`flex bg-my-image-class6  h-full items-center justify-start bg-cover text-backgroundDarkTextColor`}
        >
          <div className=" mt-auto ml-28 md:w-1/2 h-[70%] bg-transparent font-semibold ">
            <h1 className="banner-main-heading md:text-4xl xl:text-5xl">
              Experience the Benefits of <br />
              <i>Advanced Technology</i>
              <br />& Expert Care
            </h1>
            <button
              className="bg-brightColor text-white px-4 py-4 mt-4 rounded-md hover:bg-hoverColor transition duration-300 ease-in-out"
              onClick={() => setOpenModal(true)}
            >
              Contact Us
            </button>
          </div>
        </div>
        {/* {Array.from(["0", "1", "2", "3", "4", "5", "6"]).map((item) => {
          return (
            <div
              className={`flex bg-my-image-class2 ${
                item === "2" || item === "4" || item === "5"
                  ? "text-backgroundDarkTextColor"
                  : "text-black "
              } h-full items-center justify-start bg-cover `}
            >
              <div className=" mt-auto ml-28 md:w-1/2 h-[70%] bg-transparent font-semibold ">
                <h1 className="banner-main-heading md:text-4xl xl:text-5xl">
                  Experience the Benefits of <br />
                  <i>Advanced Technology</i>
                  <br />& Expert Care
                </h1>
                <button
                  className="bg-brightColor text-white px-4 py-4 mt-4 rounded-md hover:bg-hoverColor transition duration-300 ease-in-out"
                  onClick={() => setOpenModal(true)}
                >
                  Contact Us
                </button>
              </div>
            </div>
          );
        })} */}
      </Carousel>
      <BookingModal openModal={openModal} setOpenModal={setOpenModal} />
    </div>
  );
};

export default HeroBanner;
