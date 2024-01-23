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
import { useEffect, useState } from "react";
import { DocContext } from "./context/doctorContext";

interface Doctor {
  img: string;
  name: string;
  specialties: string;
  city: string;
}

interface ContextValue {
  doctors: Doctor[];
  cities: Cities;
  updateDoctor: (newValue: Doctor[]) => void;
}
type Cities = string[];

function App() {
  const [doctors, setDoctors] = useState<Doctor[]>([]);
  const [cities, setCities] = useState<Cities>([]);

  useEffect(() => {}, []);

  const updateDoctor = (data: Doctor[]) => {
    setDoctors(data);
    const filteredCities = data.map(({ city }) => city);
    const distinctFilteredCities: string[] = [...new Set(filteredCities)];
    // console.log("filteredCities", distinctFilteredCities, data);
    setCities(distinctFilteredCities);
  };

  const contextValue: ContextValue = {
    doctors,
    updateDoctor,
    cities,
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
