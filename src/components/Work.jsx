import React from 'react';
import { useTranslation } from 'react-i18next'
import KzKulaklik from '../assets/imgs/kzkulaklik.jpg';
import Kzmobil from '../assets/imgs/kzmobil.png';
import fatihozgur from '../assets/imgs/fatihozgurWebsite.png'

const Work = () => {
  const { t }= useTranslation();

  return (
    <div name='work' className='w-full md:h-screen text-gray-300 bg-[#0a192f]'>
      <div className='py-8'></div>
      <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
        <div className='pb-8'>
          <p className='text-4xl font-bold inline border-b-4 text-gray-300 border-blue-600'>
            {t("work-work")}
          </p>
          <p className='py-6'>{t("explication-work")}</p>
        </div>

        {/* Container */}
        <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-4'>

          {/* Grid Item */}
          <div
            style={{ backgroundImage: `url(${fatihozgur})` }}
            className='shadow-lg text-center shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'
          >
            {/* Hover Effects */}
            <div className='opacity-0 group-hover:opacity-100'>
              <span className='text-2xl font-bold  text-white tracking-wider'>
                Portfolio Website
              </span>
              <div className='pt-8 text-center'>
                <a href='/'>
                  <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>
                  {t("demo-work")}
                  </button>
                </a>
                <a href='https://github.com/GeoGTR/fatihozgur-website'>
                  <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>
                  {t("code-work")}
                  </button>
                </a>
              </div>
            </div>
          </div>
          <div
            style={{ backgroundImage: `url(${KzKulaklik})` }}
            className='shadow-lg text-center shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'
          >
            {/* Hover Effects */}
            <div className='opacity-0 group-hover:opacity-100'>
              <span className='text-2xl font-bold  text-white tracking-wider'>
                E-commerce Website Clone
              </span>
              <div className='pt-8 text-center'>
                {/* 
                <a href='/'>
                  <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>
                  {t("demo-work")}
                  </button>
                </a>
                */}
                <a href='https://github.com/GeoGTR/kzkulaklik.com-clone'>
                  <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>
                  {t("code-work")}
                  </button>
                </a>
              </div>
            </div>
          </div>
          <div
            style={{ backgroundImage: `url(${Kzmobil})` }}
            className='shadow-lg text-center shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'
          >
            {/* Hover Effects */}
            <div className='opacity-0 group-hover:opacity-100'>
              <span className='text-2xl font-bold  text-white tracking-wider'>
                E-commerce Mobile App
              </span>
              <div className='pt-8 text-center'>
                {/* 
                <a href='/'>
                  <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>
                  {t("demo-work")}
                  </button>
                </a>
                */}
                <a href='https://github.com/SampleTextHere/KzProje'>
                  <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>
                  {t("code-work")}
                  </button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Work;