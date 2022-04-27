import React from 'react'
import Typical from 'react-typical'
import { HiArrowNarrowRight } from 'react-icons/hi'
import { useTranslation } from 'react-i18next'
import Link from 'react-scroll/modules/components/Link'

const Home = () => {
  const { t }= useTranslation();

  return (
    <div name='home' className='w-full h-screen bg-[#0a192f]'>
      {/* Container */}
      <div className='max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full'>
        <p className='text-[#43baff]'>{t('greeting-home')}</p>
        <h1 className='text-4xl sm:text-7xl font-bold text-[#ccd6f6]'>
          Fatih Özgür
        </h1>
        <h2 className='text-4xl sm:text-7xl font-bold text-[#8892b0]'>
          I'm a 
        </h2>
        <div className='pb-4 font-bold text-transparent text-4xl sm:text-7xl bg-clip-text bg-gradient-to-r from-[#8892b0] to-blue-600'>
          <Typical
            loop={Infinity}
            wrapper="p"
            steps={[
                "Computer Engineer",
                2000,
                "Developer",
                2000,
            ]}
            />
        </div>
        <p className='text-[#8892b0] py-4 max-w-[700px]'>
          {t('self-promotion-home')}
        </p>
        <div>
          <Link to="work" smooth={true} duration={500}>
          <button className='text-white group border-2 px-6 py-3 my-2 flex items-center hover:bg-[#43baff] hover:border-[#43baff]'>
            {t('view-work-home')}
            <span className='group-hover:rotate-90 duration-300'>
              <HiArrowNarrowRight className='ml-3 ' />
            </span>
          </button>
          </Link>
          
        </div>
      </div>
    </div>
  )
}

export default Home