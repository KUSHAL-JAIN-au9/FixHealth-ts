import { useEffect, useState } from "react";
import { Link } from "react-scroll";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
// import Contact from "../models/Contact";
import Logo from "../assets/Logo.svg";
import BookingModal from "../layouts/Modal";

const Navbar = () => {
  const [menu, setMenu] = useState(false);
  const [openModal, setOpenModal] = useState(false);
  const [navFixed, setNavFixed] = useState(false);

  useEffect(() => {
    const positionNavbar = () => {
      window.pageYOffset > 100 ? setNavFixed(true) : setNavFixed(false);
    };
    window.addEventListener("scroll", positionNavbar);
    return () => window.removeEventListener("scroll", positionNavbar);
  }, []);

  const handleChange = () => {
    setMenu(!menu);
  };

  const closeMenu = () => {
    setMenu(false);
  };

  return (
    <div
      className={`  w-full h-auto z-10 ${
        navFixed
          ? "fixed bg-gradient-to-b from-black to-gray-800  border-b border-gray-200 text-white shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px] z-20  "
          : "absolute  border-transparent text-white  "
      }  `}
    >
      <div>
        <div className=" flex flex-row justify-between p-5 md:px-32 px-5 bg-transparent ">
          <div className=" flex flex-row items-center cursor-pointer">
            <Link to="home" spy={true} smooth={true} duration={500}>
              {/* <h1 className=" text-2xl font-semibold">FIXHEALTH.</h1> */}
              <img src={Logo} alt="fix health mai  logo" />
            </Link>
          </div>
          <div className="w-full flex flex-row flex-wrap justify-end gap-8 ">
            <nav className=" hidden lg:flex flex-row items-center text-lg font-medium gap-8 ">
              <Link
                to="home"
                spy={true}
                smooth={true}
                duration={500}
                className=" hover:text-backgroundDarkTextColor transition-all cursor-pointer"
              >
                Home
              </Link>
              <Link
                to="about"
                spy={true}
                smooth={true}
                duration={500}
                className=" hover:text-backgroundDarkTextColor transition-all cursor-pointer"
              >
                About Us
              </Link>
              <Link
                to="services"
                spy={true}
                smooth={true}
                duration={500}
                className=" hover:text-backgroundDarkTextColor transition-all cursor-pointer"
              >
                Services
              </Link>
              <Link
                to="doc"
                spy={true}
                smooth={true}
                duration={500}
                className="  hover:text-backgroundDarkTextColor transition-all cursor-pointer"
              >
                Doctors
              </Link>
              <Link
                to="testimonials"
                spy={true}
                smooth={true}
                duration={500}
                className=" hover:text-backgroundDarkTextColor transition-all cursor-pointer"
              >
                testimonials
              </Link>
            </nav>

            <div className=" hidden lg:flex ">
              <button
                className={`bg-brightColor text-white px-4 py-2 rounded-md hover:bg-hoverColor transition duration-300 ease-in-out ${
                  !navFixed ? "opacity-0" : "opacity-100"
                } `}
                onClick={() => setOpenModal(true)}
              >
                Contact Us
              </button>
            </div>
          </div>

          {/* {showForm && <Contact closeForm={closeForm} />} */}

          <div className=" lg:hidden flex items-center">
            {menu ? (
              <AiOutlineClose size={28} onClick={handleChange} />
            ) : (
              <AiOutlineMenu size={28} onClick={handleChange} />
            )}
          </div>
        </div>
        <div
          className={`${
            menu ? "translate-x-0" : "-translate-x-full"
          } lg:hidden flex flex-col absolute bg-brightColor z-50 text-white left-0 top-16 font-semibold text-2xl text-center pt-8 pb-4 gap-8 w-full h-fit transition-transform duration-300`}
        >
          <Link
            to="home"
            spy={true}
            smooth={true}
            duration={500}
            className=" hover:text-backgroundDarkTextColor transition-all cursor-pointer"
            onClick={closeMenu}
          >
            Home
          </Link>
          <Link
            to="about"
            spy={true}
            smooth={true}
            duration={500}
            className=" hover:text-hoverColor transition-all cursor-pointer"
            onClick={closeMenu}
          >
            About Us
          </Link>
          <Link
            to="services"
            spy={true}
            smooth={true}
            duration={500}
            className=" hover:text-hoverColor transition-all cursor-pointer"
            onClick={closeMenu}
          >
            Services
          </Link>
          <Link
            to="doctors"
            spy={true}
            smooth={true}
            duration={500}
            className=" hover:text-hoverColor transition-all cursor-pointer"
            onClick={closeMenu}
          >
            Doctors
          </Link>
          <Link
            to="blog"
            spy={true}
            smooth={true}
            duration={500}
            className=" hover:text-hoverColor transition-all cursor-pointer"
            onClick={closeMenu}
          >
            Blog
          </Link>

          <div className=" lg:hidden">
            <button
              className={`bg-brightColor text-white px-4 py-2 rounded-md hover:bg-hoverColor transition duration-300 ease-in-out opacity-100 `}
              onClick={() => setOpenModal(true)}
            >
              Contact Us
            </button>
          </div>
        </div>
      </div>

      <BookingModal openModal={openModal} setOpenModal={setOpenModal} />
    </div>
  );
};

export default Navbar;
