import img from "../assets/about.jpg";
// motion
import { motion } from "framer-motion";
import { fadeIn } from "../varients";

const About = () => {
  return (
    <div
      id="about"
      className=" min-h-screen flex flex-col lg:flex-row justify-between items-center lg:px-32 px-5 pt-24 lg:pt-16 gap-5 z-10  "
    >
      <motion.div
        variants={fadeIn({ direction: "right", delay: 0.2 })}
        initial="hidden"
        whileInView={"show"}
        viewport={{ once: false, amount: 0.6 }}
        className=" w-full lg:w-3/4 space-y-4"
      >
        <h1 className=" text-4xl font-semibold text-center lg:text-start text-brightColor ">
          About Us
        </h1>
        <p className=" text-justify lg:text-start">
          Combing the precision of AI with human physiotherapist expertise for a
          pain-free world 🥇Quality assured by BAPIO Training Academy, UK 👍🏼
          100,000+ Sessions Done for patients from 30+ countries
        </p>
        <p className="text-justify lg:text-start">
          Combing the precision of AI with human physiotherapist expertise for a
          pain-free world 🥇Quality assured by BAPIO Training Academy, UK 👍🏼
          100,000+ Sessions Done for patients from 30+ countries
        </p>
        <p className="text-justify lg:text-start">
          Combing the precision of AI with human physiotherapist expertise for a
          pain-free world 🥇Quality assured by BAPIO Training Academy, UK 👍🏼
          100,000+ Sessions Done for patients from 30+ countries
        </p>
      </motion.div>

      <motion.div
        variants={fadeIn({ direction: "left", delay: 0.2 })}
        initial="hidden"
        whileInView={"show"}
        viewport={{ once: false, amount: 0.6 }}
        className=" w-full lg:w-3/4"
      >
        <img className=" rounded-lg" src={img} alt="img" />
      </motion.div>
    </div>
  );
};

export default About;
