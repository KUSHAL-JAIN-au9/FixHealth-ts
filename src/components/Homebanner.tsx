import  { useEffect, useState } from "react";
import { imagArray } from "../data";
import { IoSearchOutline } from "react-icons/io5";
import { useNavigate} from "react-router-dom";
// import Doctor1 from "../assets/doctor8.jpg";

interface HomebannerProps {
  city: string;
  setcity:Function
}


const Homebanner:React.FC<HomebannerProps> = ({city,setcity}) => {
  const [image, setImage] = useState(0);
  // const [city, setCity] = useState("");

  const navigate = useNavigate();

  useEffect(() => {
    const interval = setInterval(
      () => setImage(image >= 6 ? 0 : image + 1),
      10000
    );
    return () => clearInterval(interval);
  }, [image]);

  console.log(`Image`, image);

  return (
    <div id="home" className="w-full bg-cover relative ">
      <div className="  w-full   transition-opacity z-0">
        <img
          className={`${
            image === image ? "opacity-100" : "opacity-0"
          } w-full  transition-all duration-1000 max-h-[120vh]  `}
          src={imagArray[image]}
          alt="hero banner"
        />
        <div
          className={` relative ${
            image == 1 ? "top-[-25rem]" : " top-[-30rem] sm:top-[-25rem]"
          } left-0  sm:w-[50%] flex justify-center flex-col h-full gap-5 ml-1 z-0 lg:ml-20 `}
        >
          <h1
            className={`${
              image === 4 ? "text-brightColor" : "text-white"
            } text-5xl leading-snug z-0 `}
            // className={`absolute w-fit h-auto top-64 left-36 text-5xl leading-snug z-10  ${
            //   image === 4 || image === 1 || image === 5
            //     ? "text-brightColor"
            //     : "text-white"
            // }   shadow-inner font-semibold `}
          >
            Experience the Benefits of <br />
            {/* the perfect&nbsp; */}
            <i>Advanced Technology</i>
            <br />& Expert Care
            {/* services for your business */}
          </h1>
          <div className="flex align-middle  flex-col sm:flex-row sm:ml-0  ">
            <div className="relative ">
              <IoSearchOutline className="absolute text-gray-500 text-2xl flex align-middle h-full left-2" />
              <input
                type="text"
                className="h-14 w-full px-10   rounded-md  text-black"
                placeholder={`Try Searching city like Delhi`}
                value={city}
                onChange={(e) => setcity(e.target.value)}
              />
            </div>
            <button
              type="button"
              disabled={city === ""}
              className=" bg-brightColor mt-2 sm:mt-0 text-white sm:ml-2 px-4 py-2 rounded-md disabled:hover:bg-hoverColor hover:bg-hoverColor transition duration-300 ease-in-out disabled:opacity-50 disabled:hover:bg-none "
              onClick={() => {
                const res = city.charAt(0).toUpperCase() + city.slice(1)
                console.log("ressssssssss",res);
                setcity(res);
                navigate(
                  `/search?city=${city.charAt(0).toUpperCase() + city.slice(1)}`
                );
              }}
            >
              Search
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Homebanner;
