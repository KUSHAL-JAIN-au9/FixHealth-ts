import "./App.css";
import About from "./components/About";
import Contact from "./components/Contact";
import Doctors from "./components/Doctors";
import Download from "./components/Download";
import Navbar from "./components/Navbar";
import Services from "./components/Services";
import FAQ from "./layouts/FAQ";
import FooterBar from "./layouts/Footer";
import Testimonials from "./layouts/Testimonials";
import HeroBanner from "./layouts/HeroBanner";
import { useState } from "react";
import { DocContext } from "./context/doctorContext";

interface Doctor {
  img: string;
  name: string;
  specialties: string;
  city: string;
}

interface ContextValue {
  doctors: Doctor[];
  updateDoctor: (newValue: Doctor[]) => void;
}

function App() {
  const [doctors, setDoctors] = useState<Doctor[]>([]);

  const updateDoctor = (data: Doctor[]) => {
    setDoctors(data);
  };

  const contextValue: ContextValue = {
    doctors,
    updateDoctor,
  };

  return (
    <div className=" w-full  ">
      <DocContext.Provider value={contextValue}>
        <Navbar />
        {/* <Homebanner city={city} setcity={setcity} /> */}
        <HeroBanner />
        {/* <BookingForm  city={city} setcity={setcity} /> */}
        <About />
        <Services />
        <Doctors />
        <FAQ />
        <Testimonials />
        <Download />
        <Contact />
        <FooterBar />
      </DocContext.Provider>
    </div>
  );
}

export default App;
