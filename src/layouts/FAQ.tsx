import { fadeIn } from "../varients";
import AccordinaLayout from "./AccordinaLayout";

// motion
import { motion } from "framer-motion";

const FAQ = () => {
  return (
    <div className="w-full grid place-items-center my-4 ">
      <motion.div
        variants={fadeIn({ direction: "right", delay: 0.2 })}
        initial="hidden"
        whileInView={"show"}
        viewport={{ once: false, amount: 0.6 }}
        className=" text-4xl font-semibold text-center lg:text-start text-brightColor "
      >
        <h1>FAQ's</h1>
      </motion.div>
      <AccordinaLayout title={" I Want to Know more about Fix Health"}>
        <>
          <p>
            Fix Health (YourPhysio previously) was started by Dr. Sheetal
            Mundhada who's a renowned physiotherapist with{" "}
            <strong>33+ years</strong> of experience. The team has{" "}
            <strong>60+ physiotherapists</strong> & has delivered{" "}
            <strong>30,000+</strong> online sessions with
            <strong> 96% patient satisfaction.</strong>
          </p>

          <br />
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
        </>
      </AccordinaLayout>

      <AccordinaLayout title={"What will happen in the cunsultation?"}>
        <>
          <p className="mb-2">
            <ol className="list-disc p-4">
              During the consultation, the doctor will:
              <li>Discuss your medical history</li>
              <li> Make you do movements to evaluate your problem</li>
              <li>
                {" "}
                Use 3D Anatomy technology to explain the root cause of the
                problem
              </li>
              <li> Explain the time to recovery</li>
            </ol>
          </p>
        </>
      </AccordinaLayout>
      <AccordinaLayout
        title={"What are the requirements befor cunsultation starts?"}
      >
        <>
          <p className="mb-2">
            <ol className="list-disc p-4">
              You will need to be prepared with the following requirements
              before the consultation starts:
              <li>
                Share relevant medical documents & test reports on WhatsApp.
              </li>
              <li>
                {" "}
                Zoom link for the session will be shared 1 hour before the
                consultation
              </li>
              <li> Connect Zoom via mobile or laptop</li>
              <li>
                Sit in a silent place with open space around (4ft x 4 ft) & good
                internet connection
              </li>
            </ol>
          </p>
        </>
      </AccordinaLayout>

      <AccordinaLayout
        title={
          "What to do if medical documents/test reports are not available?"
        }
      >
        <p className="mb-2">
          It is completely fine if medical documents & test reports are not
          available. Our chief physiotherapist will diagnose your condition
          during the consultation.
        </p>
      </AccordinaLayout>

      <AccordinaLayout title={"How can i share my X-Ray/MRI Reports?"}>
        <p className="mb-2">
          You can share it to us over <a>whatsapp</a>
        </p>
      </AccordinaLayout>

      <AccordinaLayout title={"What is Expertise of the doctor?"}>
        <>
          <p className="mb-2">
            <ol className="list-disc p-4">
              We are 60+ certified physiotherapists across India:
              <li>
                Nanavati, Leelavati, Fortis, Sakra, Manipal, AktivOrtho are a
                few of the hospitals they have worked at
              </li>
              <li>
                {" "}
                Univ. of Pittsburgh (US), Univ. of Dundee (UK), Teesside Univ.
                (UK), are some of the colleges they have completed their
                graduation from
              </li>
              <li>
                {" "}
                Sania Mirza, Indian Olympic players are few of the athletes they
                have treated
              </li>
              <li>11+ yrs average experience</li>
            </ol>
          </p>
        </>
      </AccordinaLayout>

      <AccordinaLayout title={"What will be the duration of cunsultation?"}>
        <p className="mb-2">
          The consultation duration may vary according to the condition. It
          generally take 30 - 45 mins.
        </p>
      </AccordinaLayout>

      <AccordinaLayout title={"Why is the cunsultation Free?"}>
        <>
          <p className=" mt-2">
            Our approach is new and we want you to experience it first before
            starting the treatment. Hence, the detailed consultation is FREE
          </p>
          <br />
          <br />
          <p className="mt-2">
            Having said this, our approach has proven to work. Our online pain
            relief & recovery program is research-backed & published in the
            International Journal of Physiotherapy. Link to the research paper.{" "}
            <br />
            <br />
          </p>
          <p className="mt-2">
            We are passionate about helping as many people recover from joint
            and back pain as possible.
          </p>
        </>
      </AccordinaLayout>

      <AccordinaLayout title={"Where will the cunsultation happen?"}>
        <p className="mb-2">
          The consultation will happen online over Zoom video call. It is
          important that you are in a quite room and appropriately dressed for
          our physiotherapists to carry out the consultation properly.
        </p>
      </AccordinaLayout>

      <AccordinaLayout title={"Do you have any physical clinics nearby?"}>
        <>
          <p className=" mt-2">
            Clinics mean travel & wait time, one doctor for many patients & only
            a limited choice of doctors is available nearby
          </p>
          <br />
          <br />
          <p className="mt-2">
            With YourPhysio, our experts have consulted 10,000+ patients from
            100+ cities & 10+ countries.
            <br />
            <br />
          </p>
          <p className="mt-2">
            Take a Free consultation with the BEST & then decide!
          </p>{" "}
          <br />
          <br />
          <p className="mt-2">
            {" "}
            <a
              className="text-cyan-600 hover:underline dark:text-cyan-500 cursor-pointer "
              href="https://www.youtube.com/watch?v=hn-B9K7ga7c&t=5s"
            >
              Click here
            </a>
            to listen what our patients say.
          </p>
        </>
      </AccordinaLayout>

      <AccordinaLayout title={"What time will the cunsultation happen?"}>
        <>
          <p className=" mt-2">
            You can choose a consultation slot after filling in our form. If you
            didn't find a slot with a suitable timing, rest assured our team
            will connect with you and you can schedule the consultation at an
            appropriate time.
          </p>
          <br />
          <br />
          <p className="mt-2">
            Please ensure that you'd be available for 30-45 mins in a quite room
            during your consultation. This gives the best environment for our
            experts to diagnose your condition accurately.
          </p>
        </>
      </AccordinaLayout>

      <AccordinaLayout title={"What is the pricing?"}>
        <>
          <p className=" mt-2">The first consultation is FREE.</p>
          <br />
          <br />
          <p className="mt-2">
            The charges after that depend on the problem and the duration of the
            treatment required. Pricing plans will be explained immediately
            after the consultation.
            <br />
            <br />
          </p>
          <p className="mt-2">
            <strong>
              The BONUS is, personalized treatment at ZERO travelling cost and
              ZERO waiting time
            </strong>
          </p>{" "}
          <br />
          <br />
          <p className="mt-2">
            {" "}
            <a
              className="text-cyan-600 hover:underline dark:text-cyan-500 cursor-pointer "
              href="https://www.youtube.com/watch?v=hn-B9K7ga7c&t=5s"
            >
              Click here
            </a>{" "}
            to listen what our patients say.
          </p>
        </>
      </AccordinaLayout>

      <AccordinaLayout title={"Can i Change the timing of the cunsultation?"}>
        <p className="mb-2">
          Yes, you can drop in a request to change your consultation timing in
          our whatsapp channel or call us directly. Our team will ensure to find
          a slot timing that suits your requirements.
        </p>
      </AccordinaLayout>

      <AccordinaLayout title={"Can patients be treated online?"}>
        <>
          <p className=" mt-2">
            We have treated patients across 200+ conditions through our
            innovative pain relief programs.
          </p>
          <br />
          <br />
          <p className=" mt-2">
            Click on the link below to hear an actual patient share their
            recovery experience for the condition they were suffering from:
          </p>

          <p className="mb-2">
            <ol className="list-disc p-4">
              <li>
                <a className="text-cyan-600 hover:underline dark:text-cyan-500 cursor-pointer">
                  Back Pain
                </a>
              </li>
              <li>
                <a className="text-cyan-600 hover:underline dark:text-cyan-500 cursor-pointer">
                  Neck Pain
                </a>
              </li>
              <li>
                <a className="text-cyan-600 hover:underline dark:text-cyan-500 cursor-pointer">
                  Shoulder Pain
                </a>
              </li>
              <li>
                <a className="text-cyan-600 hover:underline dark:text-cyan-500 cursor-pointer">
                  Knee Pain
                </a>
              </li>
              <li>
                <a className="text-cyan-600 hover:underline dark:text-cyan-500 cursor-pointer">
                  Post Surgery Rehab
                </a>
              </li>
            </ol>
          </p>
        </>
      </AccordinaLayout>

      <AccordinaLayout title={"Can Someone visit my home?"}>
        <>
          <p className=" mt-2">
            Home visits leave you with a limited choice of physios from your
            area & are very expensive.
          </p>
          <br />
          <br />
          <p className="mt-2">
            With YourPhysio, you have access to experts who have consulted
            <strong> 10,000+ patients from 100+ cities & 10+ countries.</strong>
            <br />
            <br />
          </p>
          <p className="mt-2">
            Take a Free consultation with the BEST & then decide!
          </p>{" "}
          <br />
          <br />
          <p className="mt-2">
            {" "}
            <a
              className="text-cyan-600 hover:underline dark:text-cyan-500 cursor-pointer "
              href="https://www.youtube.com/watch?v=hn-B9K7ga7c&t=5s"
            >
              Click here
            </a>{" "}
            to listen what our patients say.
          </p>
        </>
      </AccordinaLayout>

      <AccordinaLayout
        title={"I Have been Recommended machine treatment,can you help?"}
      >
        <>
          <p className=" mt-2">
            Machines help with temporary pain relief but do not fix the root
            cause of the pain.
          </p>
          <br />
          <br />
          <p className="mt-2">
            Advanced countries like the USA, Canada have minimal use of machines
            & focus on exercise therapy.
            <br />
            <br />
          </p>
          <p className="mt-2">
            In the last 1 year, via 30,000+ sessions, YourPhysio has treated
            patients with a satisfaction rate of 96%.
          </p>{" "}
          <br />
          <br />
          <p className="mt-2">Try our unique approach & decide!</p>
        </>
      </AccordinaLayout>
    </div>
  );
};

export default FAQ;
