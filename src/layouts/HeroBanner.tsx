import { Carousel } from "flowbite-react";
import { useState } from "react";
import BookingModal from "./Modal";

const HeroBanner = () => {
  const [openModal, setOpenModal] = useState(false);

  return (
    <div className="h-96 md:h-screen ">
      <Carousel slide={false}>
        {Array.from([0, 1, 2, 3, 4, 5, 6]).map((item) => {
          return (
            <div
              className={`flex bg-my-image-class${item} ${
                item === 0 || item === 1 || item === 3
                  ? "text-backgroundDarkTextColor"
                  : "text-black"
              } h-full items-center justify-start bg-cover  dark:text-white`}
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
        })}
        {/* <div className="flex bg-my-image-class0  h-full items-center justify-start  dark:text-white">
          Slide 1
           <div className=" mt-auto md:w-1/2 h-[400px] bg-green-400">
              <h1 className="banner-main-heading md:text-4xl">
                FALCON 9{" "}
                <span className="text-brandPrimary leading-snug">
                  First Orbital Class Rocket Capable of Reflight
                </span>
              </h1>
              <p className="text-neutralGrey text-base mb-8">
                Falcon 9 is a two-stage rocket designed and manufactured by
                SpaceX for the reliable and safe transport of satellites and the
                Dragon spacecraft into orbit.
              </p>
               <button
                  data-testid="home-btn"
                  className="btn-primary"
                //   onClick={() => {
                //     history("/capsules");
                //   }}
                >
                  Check Capsules
                </button>
              </div>
        </div>
        <div className="flex bg-my-image-class1 h-full items-center justify-center  dark:text-white">
          Slide 2
        </div>
        <div className="flex bg-my-image-class3 h-full items-center justify-center  dark:text-white">
          Slide 3
        </div> */}
      </Carousel>
      <BookingModal openModal={openModal} setOpenModal={setOpenModal} />
    </div>
  );
};

export default HeroBanner;
