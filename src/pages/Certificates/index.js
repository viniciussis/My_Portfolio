import { useLanguage } from '../../context/LanguageContext';
import { useTheme } from '../../context/ThemeContext';
import { useState, useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react'
import certificatesData from '../../data/certificatesData';
import './Certificates.css'

const Certificates = () => {

  const [slidePerView, setSlidePerView] = useState(2);
  const { isDarkMode } = useTheme();
  const { language } = useLanguage();

  useEffect(() => {

    function handleResize() {
      if (window.innerWidth < 720) {
        setSlidePerView(1)
      }
      else {
        setSlidePerView(2)
      }
    }

    handleResize()
    window.addEventListener('resize', handleResize)
    return () => {
      window.removeEventListener('resize', handleResize)
    }

  }, [])

  return (
    <div className={`certificates ${isDarkMode ? '' : 'certificates--light'}`}>
      <h1 className='certificates__title'>{language === 'pt' ? 'Certificados' : 'Certificates'}</h1>
      <div className='certificates__container'>
        <Swiper
          slidesPerView={slidePerView}
          navigation
          pagination
          grabCursor
          loop
        >
          {certificatesData.map((certificate) => (
            <SwiperSlide key={certificate.id}>
              <img className='certificates__image' src={certificate.imagePath} alt={certificate.name} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  )
}

export default Certificates