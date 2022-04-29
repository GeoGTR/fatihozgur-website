import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { BsFillPersonLinesFill } from "react-icons/bs";
import { useTranslation } from "react-i18next";

const Contact = () => {
  const { t } = useTranslation();

  return (
    <div className="pt-10 bg-[#0a192f]">
      <div
        name="contact"
        className="w-full pt-30 flex justify-center items-center p-4"
      >
        <div className="py-8"></div>
        <form
          method="POST"
          action="https://getform.io/f/7f9854fd-a1b6-4e1e-8153-b0ee65ec4459"
          className="flex flex-col max-w-[600px] w-full"
        >
          <div className="pb-8">
            <p className="text-4xl font-bold inline border-b-4 border-blue-600 text-gray-300">
              {t("contact-contact")}
            </p>
            <p className="text-gray-300 py-4">
              {t("explication-contact")}
              <span className="inline border-b-2 border-blue-600">
                fatihozgurcmpe@gmail.com
              </span>
            </p>
          </div>
          <input
            className="bg-[#ccd6f6] p-2"
            type="text"
            placeholder={t("name-contact")}
            name="name"
          />
          <input
            className="my-4 p-2 bg-[#ccd6f6]"
            type="email"
            placeholder="Email"
            name="email"
          />
          <textarea
            className="bg-[#ccd6f6] p-2"
            name="message"
            rows="10"
            placeholder={t("message-contact")}
          ></textarea>
          <button className="text-white border-2 hover:bg-blue-600 hover:border-blue-600 px-4 py-3 my-8 mx-auto flex items-center">
            {t("submit-form-contact")}
          </button>
        </form>
      </div>

      {/* social icons */}
      <div className="text-sm sm:text-base">
        <div className="mx-auto flex flex-col justify-center w-full h-full">
          <ul className="grid grid-cols-4 lg:hidden">
            <li className="w-full h-[40px] flex justify-between items-center bg-blue-600">
              <a
                className="flex justify-between items-center w-full text-gray-300"
                href="https://www.linkedin.com/in/fatih-%C3%B6zg%C3%BCr-3406b2167/"
              >
                Linkedin <FaLinkedin size={30} />
              </a>
            </li>
            <li className="w-full h-full flex justify-between items-center bg-[#333333]">
              <a
                className="flex justify-between items-center w-full text-gray-300"
                href="https://github.com/GeoGTR"
              >
                Github <FaGithub size={30} />
              </a>
            </li>
            <li className="w-full h-full flex justify-between items-center bg-[#6fc2b0]">
              <a
                className="flex justify-between items-center w-full text-gray-300"
                href="mailto:fatihozgurcmpe@email.com"
              >
                Email <HiOutlineMail size={30} />
              </a>
            </li>
            <li className="w-full h-full flex justify-between items-center bg-[#565f69]">
              <a
                className="flex justify-between items-center w-full text-gray-300"
                href="https://drive.google.com/file/d/1rfFfmqgyVhxwuOnjhMmD_2cE3C4P0nEt/view?usp=sharing"
              >
                {t("resume-nav")} <BsFillPersonLinesFill size={30} />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Contact;
