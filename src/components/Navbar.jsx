import React, {useState} from "react";
import { FaBars, FaTimes, FaGithub, FaLinkedin } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { BsFillPersonLinesFill } from "react-icons/bs";
import { useTranslation } from 'react-i18next'
import { Link } from "react-scroll";

import Logo from "../assets/imgs/logo.svg";
import TR from "../assets/imgs/tr.svg";
import GB from "../assets/imgs/gb.svg";

import i18n from "../i18n";

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const handleClick = () => setNav(!nav);

  const { t }= useTranslation();

  const changeLanguage = (ln) => {
    return () => {
      i18n.changeLanguage(ln);
    };
  };

  return (
    <div className="fixed w-full h-[80px] flex justify-between items-center px-4 bg-[#0a192f] text-gray-300">
      <div>
        <img src={Logo} alt="Logo" style={{ width: "80px" }} />
      </div>

      {/* menu */}
      <ul className="hidden md:flex">
        <li>
          <Link to="home" smooth={true} duration={500}>
            {t('home-nav')}
          </Link>
        </li>
        <li>
          <Link to="about" smooth={true} duration={500}>
          {t('about-nav')}
          </Link>
        </li>
        <li>
          <Link to="skills" smooth={true} duration={500}>
          {t('skills-nav')}
          </Link>
        </li>
        <li>
          <Link to="work" smooth={true} duration={500}>
          {t('work-nav')}
          </Link>
        </li>
        <li>
          <Link to="contact" smooth={true} duration={500}>
          {t('contact-nav')}
          </Link>
        </li>
        <li>
          <div className="grid grid-cols-2 gap-1 px-1">
            <button
              onClick={changeLanguage("tr")}
              className="border-2 flex items-center text-white hover:bg-[#43baff] hover:border-[#43baff]"
            >
              TR 
              <span className="pl-2">
                <img src={TR} alt="Logo" style={{ width: "20px" }} />
              </span>
            </button>
            <button
              onClick={changeLanguage("en")}
              className="border-2 flex items-center text-white hover:bg-[#43baff] hover:border-[#43baff]"
            >
              EN 
              <span className="pl-2">
                <img src={GB} alt="Logo" style={{ width: "20px" }} />
              </span>
            </button>
          </div>
        </li>
      </ul>

      {/* hamburger */}
      <div onClick={handleClick} className="md:hidden z-10">
        {!nav ? <FaBars /> : <FaTimes />}
      </div>

      {/* mobile */}
      <ul
        className={
          !nav
            ? "hidden"
            : "absolute top-0 left-0 w-full h-screen bg-[#0a192f] flex flex-col justify-center items-center"
        }
      >
        <li className="py-6 ">
          <Link onClick={handleClick} to="home" smooth={true} duration={500}>
          <div className="grid grid-cols-2 gap-1 px-1">
            <button
              onClick={changeLanguage("tr")}
              className="border-2 flex items-center text-white hover:bg-[#43baff] hover:border-[#43baff]"
            >
              TR 
              <span className="pl-2">
                <img src={TR} alt="Logo" style={{ width: "20px" }} />
              </span>
            </button>
            <button
              onClick={changeLanguage("en")}
              className="border-2 flex items-center text-white hover:bg-[#43baff] hover:border-[#43baff]"
            >
              EN 
              <span className="pl-2">
                <img src={GB} alt="Logo" style={{ width: "20px" }} />
              </span>
            </button>
          </div>
          </Link>
        </li>
        <li className="py-6 text-4xl">
          <Link onClick={handleClick} to="home" smooth={true} duration={500}>
          {t('home-nav')}
          </Link>
        </li>
        <li className="py-6 text-4xl">
          {" "}
          <Link onClick={handleClick} to="about" smooth={true} duration={500}>
          {t('about-nav')}
          </Link>
        </li>
        <li className="py-6 text-4xl">
          {" "}
          <Link onClick={handleClick} to="skills" smooth={true} duration={500}>
          {t('skills-nav')}
          </Link>
        </li>
        <li className="py-6 text-4xl">
          {" "}
          <Link onClick={handleClick} to="work" smooth={true} duration={500}>
          {t('work-nav')}
          </Link>
        </li>
        <li className="py-6 text-4xl">
          {" "}
          <Link onClick={handleClick} to="contact" smooth={true} duration={500}>
          {t('contact-nav')}
          </Link>
        </li>
        
      </ul>

      {/* social icons */}
      <div className="hidden lg:flex fixed flex-col top-[35%] left-0">
        <ul>
          <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-blue-600">
            <a
              className="flex justify-between items-center w-full text-gray-300"
              href="https://www.linkedin.com/in/fatih-%C3%B6zg%C3%BCr-3406b2167/"
            >
              Linkedin <FaLinkedin size={30} />
            </a>
          </li>
          <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#333333]">
            <a
              className="flex justify-between items-center w-full text-gray-300"
              href="https://github.com/GeoGTR"
            >
              Github <FaGithub size={30} />
            </a>
          </li>
          <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#6fc2b0]">
            <a
              className="flex justify-between items-center w-full text-gray-300"
              href="mailto:fatihozgurcmpe@email.com"
            >
              Email <HiOutlineMail size={30} />
            </a>
          </li>
          <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#565f69]">
            <a
              className="flex justify-between items-center w-full text-gray-300"
              href="https://drive.google.com/file/d/1rfFfmqgyVhxwuOnjhMmD_2cE3C4P0nEt/view?usp=sharing"
            >
              {t('resume-nav')} <BsFillPersonLinesFill size={30} />
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
