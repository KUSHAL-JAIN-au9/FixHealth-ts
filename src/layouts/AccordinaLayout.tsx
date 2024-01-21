import { Accordion } from "flowbite-react";
import { ReactNode } from "react";

// motion
import { motion } from "framer-motion";
import { fadeIn } from "../varients";

interface AccordinaLayoutProps {
  title: string;
  children: ReactNode;
}

const AccordinaLayout: React.FC<AccordinaLayoutProps> = ({
  title,
  children,
}) => {
  return (
    <Accordion collapseAll className=" w-[80%] p-4 my-2">
      <Accordion.Panel className="hover:bg-[#242424] focus:bg-red-950  focus:border-none bg-red-950  ">
        <Accordion.Title className="hover:bg-[#242424] bg-transparent focus:border-none text-white ">
          <motion.div
            variants={fadeIn({ direction: "right", delay: 0.2 })}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.6 }}
          >
            {title}
          </motion.div>
        </Accordion.Title>
        <Accordion.Content>
          {children}
          {/* {" "}
          <p className=" text-gray-500 dark:text-gray-400">
            Fix Health (YourPhysio previously) was started by Dr. Sheetal
            Mundhada who's a renowned physiotherapist with 33+ years of
            experience. The team has 60+ physiotherapists & has delivered
            30,000+ online sessions with 96% patient satisfaction.
          </p>
          <p className="text-gray-500 dark:text-gray-400">
            The organization has been featured in Economic Times, Business
            World, Times of India for its effective online pain relief programs.{" "}
            <br />
            Fix Health shares the same investors as companies like Ola, Snapdeal
            & Khatabook and the technology innovation is done by a team from IIT
            Bombay, IIT Madras & BITS Pilani.
          </p> */}
        </Accordion.Content>
      </Accordion.Panel>
    </Accordion>
  );
};

export default AccordinaLayout;
