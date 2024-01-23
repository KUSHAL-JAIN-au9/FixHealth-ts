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

        <p>
          Fix Health (YourPhysio previously) was started by Dr. Sheetal Mundhada
          who's a renowned physiotherapist with <strong>33+ years</strong> of
          experience. The team has <strong>60+ physiotherapists</strong> & has
          delivered <strong>30,000+</strong> online sessions with
          <strong> 96% patient satisfaction.</strong>
        </p>

        <br />

        <p>
          The organization has been featured in{" "}
          <strong> Economic Times, Business World, Times of India </strong>
          for its effective online pain relief programs. <br />
          <br />
          Fix Health shares the same investors as companies like{" "}
          <strong> Ola, Snapdeal & Khatabook</strong> and the technology
          innovation is done by a team from{" "}
          <strong> IIT Bombay, IIT Madras & BITS Pilani.</strong>
        </p>
        <p className=" text-justify lg:text-start">
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
