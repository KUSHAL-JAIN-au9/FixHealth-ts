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

  const services = [
    {
      title: "Knee Pain",
      content:
        "Knee pain is a common complaint affecting people of all ages. More than 15 crore Indians suffer from knee problems, imposing a huge health burden on the country.",
      icon: icon1,
    },
    {
      title: "Neck Pain",
      content:
        "Neck pain affects 10% to 20% of all adults. It is more common in women and  It is more likely to develop as you get older. If left untreated, neck pain can disrupt your daily activities and can cause lower quality of life.",
      icon: icon2,
    },
    {
      title: "Back Pain",
      content:
        "Back pain is a common reason for absence from work and seeking medical attention. Low back pain is now a common condition that affects almost everyone at some point in their lives. It occurs as a result of a wide range of risks and predisposing factors.",
      icon: icon3,
    },
  ];

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
            Conditions we Treat !
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
        {services.map((service) => {
          return (
            <ServicesCard
              icon={service.icon}
              title={service.title}
              content={service.content}
            />
          );
        })}
      </motion.div>
    </div>
  );
};

export default Services;
