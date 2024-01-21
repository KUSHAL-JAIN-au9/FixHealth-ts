import Button from "../layouts/Button";
import { RiMicroscopeLine } from "react-icons/ri";
import ServicesCard from "../layouts/ServicesCard";
import { MdHealthAndSafety } from "react-icons/md";
import { FaHeartbeat } from "react-icons/fa";
import { fadeIn } from "../varients";
// motion
import { motion } from "framer-motion";

const Services = () => {
  const icon1 = (
    <RiMicroscopeLine size={35} className=" text-backgroundColor" />
  );
  const icon2 = (
    <MdHealthAndSafety size={35} className=" text-backgroundColor" />
  );
  const icon3 = <FaHeartbeat size={35} className=" text-backgroundColor" />;

  return (
    <div
      id="services"
      className=" min-h-screen flex flex-col justify-center lg:px-32 px-5 pt-24 lg:pt-16  "
    >
      <div className=" flex flex-col items-center lg:flex-row justify-between">
        <motion.div
          variants={fadeIn({ direction: "right", delay: 0.2 })}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.7 }}
          className=" flex flex-col lg:flex-row gap-5 pt-14"
        >
          <h1 className=" text-4xl font-semibold text-center lg:text-start text-brightColor">
            Our Services
          </h1>
          <p className=" mt-2 text-center lg:text-start">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Natus,
            quidem.
          </p>
        </motion.div>

        <motion.div
          variants={fadeIn({ direction: "left", delay: 0.2 })}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.7 }}
          className=" mt-4 lg:mt-0"
        >
          <Button title="See Services" />
        </motion.div>
      </div>
      <motion.div
        variants={fadeIn({ direction: "up", delay: 0.2 })}
        initial="hidden"
        whileInView={"show"}
        viewport={{ once: false, amount: 0.7 }}
        className=" flex flex-col lg:flex-row gap-5 pt-14"
      >
        <ServicesCard icon={icon1} title="Lab Test" />
        <ServicesCard icon={icon2} title="Health Check" />
        <ServicesCard icon={icon3} title="Heart Health" />
      </motion.div>
    </div>
  );
};

export default Services;
