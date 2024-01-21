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
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Veniam
          labore rerum tempore tenetur commodi natus quos itaque voluptatum
          repudiandae nostrum accusantium vero voluptate aspernatur totam,
          laboriosam aut, et quae consequatur?
        </p>
        <p className="text-justify lg:text-start">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tempora quia
          suscipit illum, numquam incidunt nostrum dolor officia doloremque
          cupiditate, placeat explicabo sed iure atque neque quidem ipsam!
          Dolor, minus reiciendis.
        </p>
        <p className="text-justify lg:text-start">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe, illum.
          Accusantium ab expedita veniam nobis aut, in rerum repellendus!
          Exercitationem libero recusandae corrupti accusantium reiciendis in
          placeat illo maxime ea.
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
