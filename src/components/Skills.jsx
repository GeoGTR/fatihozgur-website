import React from "react";
import { useTranslation } from "react-i18next";
import HTML from "../assets/imgs/html.png";
import CSS from "../assets/imgs/css.png";
import JavaScript from "../assets/imgs/javascript.png";
import ReactImg from "../assets/imgs/react.png";
import VueImg from "../assets/imgs/vue.png";
import CImg from "../assets/imgs/c.png";
import CSharp from "../assets/imgs/csharp.png";
import sqlImg from "../assets/imgs/sql.png";
import Xamarin from "../assets/imgs/xamarin.png";

const Skills = () => {
  const { t } = useTranslation();

  return (
    <div name="skills" className="w-full bg-[#0a192f] text-gray-300">
      <div className="py-8"></div>
      <div>
        {/* Container */}
        <div className="max-w-[1000px] mx-auto p-4 pbflex flex-col justify-center w-full h-full">
          <div>
            <p className="text-4xl font-bold inline border-b-4 border-blue-600 ">
              {t("skills-skills")}
            </p>
            <p className="py-4"> {t("explication-skills")}</p>
          </div>

          <div className="w-full grid grid-cols-2 sm:grid-cols-4 gap-4 text-center py-8">
            <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
              <img className="w-20 mx-auto" src={HTML} alt="HTML icon" />
              <p className="my-4">HTML</p>
            </div>
            <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
              <img className="w-20 mx-auto" src={CSS} alt="HTML icon" />
              <p className="my-4">CSS</p>
            </div>
            <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
              <img className="w-20 mx-auto" src={JavaScript} alt="HTML icon" />
              <p className="my-4">JavaScript</p>
            </div>
            <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
              <img className="w-20 mx-auto" src={ReactImg} alt="HTML icon" />
              <p className="my-4">React</p>
            </div>
            <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
              <img className="w-20 mx-auto" src={VueImg} alt="HTML icon" />
              <p className="my-4">Vue</p>
            </div>
            <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
              <img className="w-20 mx-auto" src={CImg} alt="HTML icon" />
              <p className="my-4">C</p>
            </div>
            <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
              <img className="w-20 mx-auto" src={CSharp} alt="HTML icon" />
              <p className="my-4">C#</p>
            </div>
            <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
              <img className="w-20 mx-auto" src={Xamarin} alt="HTML icon" />
              <p className="my-4">Xamarin</p>
            </div>
            <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
              <img className="w-20 mx-auto" src={sqlImg} alt="HTML icon" />
              <p className="my-4">SQL</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
