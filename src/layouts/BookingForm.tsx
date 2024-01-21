import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { data } from "../data";

interface Doctor {
  name: string;
  city: string;
}

interface BookingFormProps {
  city: string;
  setcity:Function
}

const BookingForm:React.FC<BookingFormProps> = ({city,setcity}) => {
  const [doctors, setDoctors] = useState<Doctor[]>([]);
  const [name, setName] = useState<string>("");
  const [phone, setphone] = useState<string>("");
  const [age, setage] = useState<number>(0);
  const [company, setcompany] = useState<string>("");
 
  const [doctor, setdoctor] = useState<string>("");
  const [isExperiencePhysiotherapy, setIsExperiencePhysiotherapy] =
    useState<boolean>(false);
  const location = useLocation();
  const navigate = useNavigate();
  const queryParams = new URLSearchParams(location.search);
  const myParam = queryParams.get("city");
  useEffect(() => {
    const listDoc = data.filter((item) => item.city === myParam);
    console.log("params changes", listDoc);
    setDoctors([...listDoc]);
  }, [myParam]);
  // console.log("params", queryParams, myParam);

  const handleChangeCity = (e: React.ChangeEvent<HTMLSelectElement>) => {
    console.log(e.target.value);
    setcity(e.target.value);
    navigate(`/search?city=${e.target.value}`);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("formvalues", {
      name,
      age,
      city,
      isExperiencePhysiotherapy,
      phone,
      doctor,
      company,
    });
    alert("form submitted")
    setcity("")
    setphone("")
    setName("")
    setdoctor("")
    setcompany("")
    setIsExperiencePhysiotherapy(false)
    setage(0)

  };

  console.log("cityyyyyyyyyyyyyyyyyyyyyyyy",city);
  return (
    <form
      id="contact"
      className="max-w-sm mx-auto mb-4"
      onSubmit={handleSubmit}
    >
      <h1 className="w-full text-4xl text-brightColor font-semibold text-center lg:text-start">
        Book A Doctor
      </h1>
      <label htmlFor="name" className="block mt-4 mb-2 text-sm font-medium">
        Name:
      </label>
      <input
        type="text"
        name="name"
        id="name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        aria-describedby="helper-text-explanation"
        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
        placeholder="name"
        required
      />
      <label
        htmlFor="number-input"
        className="block mt-4 mb-2 text-sm font-medium"
      >
        Phone Number:
      </label>
      <input
        type="number"
        id="number-input"
        name="phone"
        value={phone}
        onChange={(e) => setphone(e.target.value)}
        aria-describedby="helper-text-explanation"
        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
        placeholder="your number"
        required
      />
      <label htmlFor="age" className="block mt-4 mb-2 text-sm font-medium">
        Age:
      </label>
      <input
        min={1}
        max={100}
        type="number"
        id="age"
        name="age"
        value={age}
        onChange={(e) => {
          setIsExperiencePhysiotherapy(false)
            setage(Number(e.target.value))
        } }
        aria-describedby="helper-text-explanation"
        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        placeholder="age"
        required
      />
      <label htmlFor="city" className="block mt-4 mb-2 text-sm font-medium">
        Select a city:
      </label>
      <select
        id="city"
        name="city"
        onChange={handleChangeCity}
        required
        value={city}
        // defaultChecked={city}
        // defaultValue={"select"}
        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
      >
        <option value="" hidden>
          Choose a city
        </option>
        <option value="Bangalore">Bangalore</option>
        <option value="Delhi">Delhi</option>
        <option value="Noida">Noida</option>
        <option value="Chennai">Chennai</option>
      </select>
      <label htmlFor="company" className="block mt-4 mb-2 text-sm font-medium">
        Company:
      </label>
      <input
        type="text"
        name="company"
        id="company"
        value={company}
        onChange={(e) => setcompany(e.target.value)}
        aria-describedby="helper-text-explanation"
        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        placeholder="company name"
        required
      />
      {age >= 40 && (
        <div className="flex items-center  mt-4 mb-4">
          <input
            id="default-checkbox"
            type="checkbox"
            name="experience"
            checked={isExperiencePhysiotherapy}
            onChange={() => setIsExperiencePhysiotherapy(!isExperiencePhysiotherapy)}
            className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500   focus:ring-2"
          />
          <label
            htmlFor="default-checkbox"
            className="ms-2 text-sm font-medium"
          >
            Any previous experience with physiotherapy
          </label>
        </div>
      )}
      <label htmlFor="doctors" className="block mt-4 mb-2 text-sm font-medium">
        Select a doctor:
      </label>
      <select
        id="doctors"
        name="doctors"
        value={doctor}
        onChange={(e: React.ChangeEvent<HTMLSelectElement>) => {
          return setdoctor(e.target.value);
        }}
        required
        className="bg-gray-50 border mt-4 border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
      >
        {doctors.length === 0 ? (
          <option selected>
            Doctor Not Available for city {myParam}
          </option>
        ) : (
          <option hidden  disabled>
            Choose a doctor
          </option>
        )}
        {doctors.map((item, i) => (
          <option key={i} value={item.name}>
            {item.name}
          </option>
        ))}
      </select>
      <button
        type="submit"
        disabled={city === "" && doctor === ""}
        className={"w-full mt-4 bg-brightColor text-white px-4 py-2 rounded-md hover:bg-hoverColor transition duration-300 ease-in-out" + ((city === "" && doctor === "")?"cursor-not-allowed":"cursor-pointer")}
      >
        Book
      </button>
    </form>
  );
};

export default BookingForm;


