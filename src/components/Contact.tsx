import { FaWhatsapp } from "react-icons/fa";
import { Button } from "flowbite-react";
import { fadeIn } from "../varients";

// motion
import { motion } from "framer-motion";

const Contact = () => {
  return (
    <div
      className="px-4 lg:px-14 max-w-screen-2xl mx-auto bg-neutralSilver py-16"
      id="subscribe"
    >
      <div className="text-center">
        <motion.div
          variants={fadeIn({ direction: "down", delay: 0.2 })}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.7 }}
        >
          <h2 className="lg:text-5xl text-3xl text-brightColor font-semibold mb-6 lg:leading-snug">
            Still have Questions?
          </h2>
        </motion.div>
        <span className="mb-5 text-base text-gray-500 sm:text-lg dark:text-gray-400">
          Can't find the answer you're looking for? Please chat with our
          friendly team
        </span>

        <motion.div
          variants={fadeIn({ direction: "up", delay: 0.2 })}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.7 }}
        >
          <div className="flex gap-8 items-center justify-center my-4">
            {/* <Input /> */}

            <Button className="bg-brightColor">
              Get In Touch
              <FaWhatsapp className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Contact;
