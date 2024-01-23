import {
  Button,
  Checkbox,
  Label,
  Modal,
  Select,
  TextInput,
  Textarea,
} from "flowbite-react";
import { useEffect, useRef, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { IoIosPerson } from "react-icons/io";
import { FaBuilding, FaCity } from "react-icons/fa";
import { MdSmartphone } from "react-icons/md";
import { GiAges } from "react-icons/gi";
import { FaUserDoctor } from "react-icons/fa6";
import { useDoctorContext } from "../context/doctorContext";

interface BookingModalProps {
  openModal: boolean;
  setOpenModal: Function;
}
interface Doctor {
  name: string;
  city: string;
}

const BookingModal: React.FC<BookingModalProps> = ({
  openModal,
  setOpenModal,
}) => {
  const [doctors, setDoctors] = useState<Doctor[]>([]);

  // const [openModal, setOpenModal] = useState(false);
  const nameInputRef = useRef<HTMLInputElement>(null);
  const [name, setName] = useState<string>("");
  const [phone, setphone] = useState<string>("");
  const [age, setage] = useState<number | undefined>();
  const [city, setcity] = useState<string>("");
  const [company, setcompany] = useState<string>("");
  const [complaints, setComplaints] = useState<string>("");

  const [doctor, setdoctor] = useState<string>("");
  const [isExperiencePhysiotherapy, setIsExperiencePhysiotherapy] =
    useState<boolean>(false);
  const location = useLocation();
  const navigate = useNavigate();
  const queryParams = new URLSearchParams(location.search);
  const myParam = queryParams.get("city");
  const { doctors: data, cities } = useDoctorContext();

  useEffect(() => {
    const listDoc = data.filter((item) => item.city === myParam);

    // console.log("params changes", listDoc);
    setDoctors([...listDoc]);
    if (myParam !== null) {
      setcity(myParam);
    }
  }, [myParam]);
  // console.log("ApiData", data, cities);

  //   const handleChangeCity = (e: {
  //     target: { value: SetStateAction<string> };
  //   }) => {
  //     console.log(e.target.value);
  //     setcity(e.target.value);
  //     navigate(`/search?city=${e.target.value}`);
  //   };

  const handleSubmit = (e: { preventDefault: () => void }) => {
    e.preventDefault();
    console.log("formvalues", {
      name,
      age,
      city,
      isExperiencePhysiotherapy,
      phone,
      doctor,
      company,
      complaints,
    });
    alert(
      `Form submitted 🧮 
      Name: ${name},
      Company: ${company},
      AGE: ${age},
      phone: ${phone},
      doctor: ${doctor},
      isExperiencePhysioiated: ${isExperiencePhysiotherapy},
      city: ${city},
      complaints: ${complaints},
      `
    );
    setcity("");
    setphone("");
    setName("");
    setdoctor("");
    setcompany("");
    setIsExperiencePhysiotherapy(false);
    setage(undefined);
    setOpenModal(false);
    setComplaints("");
  };

  console.log("cityyyyyyyyyyyyyyyyyyyyyyyy", city);

  {
    /* {doctors.map((item, i) => (
                <Dropdown.Item>{item.name}</Dropdown.Item>
              ))} */
  }

  return (
    <Modal
      //   dismissible

      show={openModal}
      size="md"
      popup
      className="h-[110vh] rounded-md p-10"
      onClose={() => setOpenModal(false)}
      initialFocus={nameInputRef}
    >
      <Modal.Header className="bg-[#374151]">
        <h3 className="text-lg p-1 font-medium text-backgroundDarkTextColor">
          BOOK A DOCTOR
        </h3>
      </Modal.Header>

      <form
        className="h-auto overflow-auto custom-scrollbar rounded-b-md "
        onSubmit={handleSubmit}
      >
        <Modal.Body className="custom-scrollbar rounded-md  ">
          <div className="space-y-4  custom-scrollbar text-brightColor ">
            {/* <h3 className="text-xl font-medium text-gray-900 dark:text-white">
            BOOK FORM
          </h3> */}

            <div>
              <div className="mb-1 block ">
                <Label
                  //   className=" text-brightColor"
                  htmlFor="name"
                  value="Your name"
                />
              </div>
              <TextInput
                id="name"
                icon={IoIosPerson}
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Enter Your name"
                ref={nameInputRef}
                required
              />
            </div>
            <div>
              <div className="mb-1 block">
                <Label
                  //   className=" text-brightColor"
                  htmlFor="company"
                  value="Your company"
                />
              </div>
              <TextInput
                id="company"
                placeholder="Enter Your company"
                required
                icon={FaBuilding}
              />
            </div>

            <div>
              <div className="mb-1 block">
                <Label
                  //   className=" text-brightColor"
                  htmlFor="phone"
                  value="Phone Number"
                />
              </div>
              <TextInput
                id="phone"
                type="tel"
                pattern="[789]\d{9}"
                title="Enter a valid Indian mobile number"
                maxLength={10}
                value={phone}
                onChange={(e) => setphone(e.target.value)}
                placeholder="Enter Your phone number"
                required
                icon={MdSmartphone}
              />
            </div>

            <div>
              <div className="mb-1 block">
                <Label
                  //   className=" text-brightColor"
                  htmlFor="age"
                  value="age"
                />
              </div>
              <TextInput
                id="age"
                min={1}
                max={100}
                type="number"
                value={age}
                onChange={(e) => {
                  setIsExperiencePhysiotherapy(false);
                  if (e.target.value) setage(Number(e.target.value));
                }}
                placeholder="Enter Your age "
                required
                icon={GiAges}
              />
            </div>

            <div className="max-w-md">
              <div className="mb-2 block">
                <Label
                  //   className=" text-brightColor"
                  htmlFor="cities"
                  value="Select a city"
                />
              </div>
              <Select
                id="cities"
                onChange={(e: React.ChangeEvent<HTMLSelectElement>) => {
                  const selectedValue = e.target.value;
                  setcity(selectedValue);
                  console.log(selectedValue);
                  navigate(`/search?city=${selectedValue}`);
                }}
                value={city}
                required
                icon={FaCity}
              >
                <option disabled></option>

                {cities.map((city) => (
                  <option className="mb-2" value={city}>
                    {city}
                  </option>
                ))}
                <option disabled></option>
                {/* <option value={"Bangalore"}>Bangalore</option>
                <option value={"Delhi"}>Delhi</option>
                <option value={"Noida"}>Noida</option>
                <option value={"Chennai"}>Chennai</option> */}
              </Select>
            </div>

            <div className="max-w-md">
              <div className="mb-2 block">
                <Label
                  //   className=" text-brightColor"
                  htmlFor="doctor"
                  value="Select a Doctor"
                />
              </div>
              <Select
                id="doctor"
                onChange={(e: React.ChangeEvent<HTMLSelectElement>) => {
                  setdoctor(e.target.value);
                }}
                value={doctor}
                required
                icon={FaUserDoctor}
              >
                <option disabled></option>
                {doctors.map((item, index) => (
                  <option key={index} value={item.name}>
                    {item.name}
                  </option>
                ))}
                <option disabled></option>
              </Select>
            </div>

            {age !== undefined && age > 40 && (
              <div className="flex justify-between">
                <div className="flex items-center gap-2">
                  <Checkbox
                    id="experience"
                    //   className="focus:text-black"
                    checked={isExperiencePhysiotherapy}
                    onChange={() =>
                      setIsExperiencePhysiotherapy(!isExperiencePhysiotherapy)
                    }
                  />
                  <Label
                    // className=" text-brightColor"
                    htmlFor="experience"
                  >
                    {" "}
                    Any previous experience with physiotherapy
                  </Label>
                </div>
              </div>
            )}

            <div className="max-w-md">
              <div className="mb-2 block">
                <Label
                  //   className=" text-brightColor"
                  htmlFor="comment"
                  value="Chief complaints"
                />
              </div>
              <Textarea
                id="comment"
                placeholder="Leave a comment..."
                required
                rows={4}
                value={complaints}
                onChange={(e) => setComplaints(e.target.value)}
              />
            </div>
            {/* <div className="w-full flex flex-row items-center justify-between gap-4 ">
            <Button
              className="w-1/2"
              disabled={true}
              //   style={{ backgroundColor: "#00ACC1" }}
              onClick={handleSubmit}
            >
              Book
            </Button>
            <Button
              className="w-1/2"
              color="gray"
              onClick={() => setOpenModal(false)}
            >
              close
            </Button>
          </div> */}
          </div>
        </Modal.Body>
        <Modal.Footer className="rounded-md">
          <Button
            className="w-1/2"
            type="submit"
            // disabled={true}
            //   style={{ backgroundColor: "#00ACC1" }}
            // onClick={handleSubmit}
          >
            Book
          </Button>
          <Button
            className="w-1/2 bg-gray-500 hover:!bg-gray-400"
            // color="gray"
            onClick={() => setOpenModal(false)}
          >
            close
          </Button>
        </Modal.Footer>
      </form>
    </Modal>
  );
};

export default BookingModal;
