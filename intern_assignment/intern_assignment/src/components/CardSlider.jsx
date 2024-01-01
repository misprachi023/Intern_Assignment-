import React, { useEffect, useState} from 'react'
import '../styles/CardSlider.css'
import { Swiper, SwiperSlide } from 'swiper/react';
import card from "../assets/Card.svg"
import cardRightArrow from "../assets/cardRightArrow.svg"
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';
// import required modules
import { FreeMode } from 'swiper/modules';

const CardSlider = () => {

    const cardDetails=[
        {cardImg:card, h3:"Lorem ipsum", p:"Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod", btnTex:"Know More", icon:cardRightArrow},
        {cardImg:card, h3:"Lorem ipsum", p:"Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod", btnTex:"Know More", icon:cardRightArrow},
        {cardImg:card, h3:"Lorem ipsum", p:"Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod", btnTex:"Know More", icon:cardRightArrow},
        {cardImg:card, h3:"Lorem ipsum", p:"Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod", btnTex:"Know More", icon:cardRightArrow},
        {cardImg:card, h3:"Lorem ipsum", p:"Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod", btnTex:"Know More", icon:cardRightArrow},
        {cardImg:card, h3:"Lorem ipsum", p:"Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod", btnTex:"Know More", icon:cardRightArrow},
        {cardImg:card, h3:"Lorem ipsum", p:"Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod", btnTex:"Know More", icon:cardRightArrow},
        {cardImg:card, h3:"Lorem ipsum", p:"Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod", btnTex:"Know More", icon:cardRightArrow},
        {cardImg:card, h3:"Lorem ipsum", p:"Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod", btnTex:"Know More", icon:cardRightArrow},
        {cardImg:card, h3:"Lorem ipsum", p:"Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod", btnTex:"Know More", icon:cardRightArrow}
    ]

    const [slidesPerView, setSlidesPerView] = useState(3.3);
    const [spaceBetween, setSpaceBetween]=useState(30)

  useEffect(() => {
    const updateSlidesPerView = () => {
      const windowWidth = window.innerWidth;

      if(windowWidth >= 1000){
        setSlidesPerView(3.3);
        setSpaceBetween(25)
      }
      else if (windowWidth >= 768) {
        setSlidesPerView(2.5);
        setSpaceBetween(20)
      } else if (windowWidth >= 481) {
        setSlidesPerView(2.1);
        setSpaceBetween(10)
      } else {
        setSlidesPerView(1.1);
        setSpaceBetween(15)
      }
    };

    updateSlidesPerView();

    window.addEventListener('resize', updateSlidesPerView);
    return () => {
      window.removeEventListener('resize', updateSlidesPerView);
    };
  }, []);

  return (
    <div className='cardSliderMainDiv'>
      <Swiper
        slidesPerView={slidesPerView}
        spaceBetween={spaceBetween}
        freeMode={true}
        modules={[FreeMode]}
        className="mySwiper"
      >
        {cardDetails.map((ele, ind)=>(
            <SwiperSlide key={ind}>
                <div className='cardSliderImgDiv'>
                  <img className='cardSliderImg' src={ele.cardImg} alt="card" />
                </div>
                <div className='cardSliderTextBtnDiv'>
                    <h3>{ele.h3}</h3>
                    <p>{ele.p}</p>
                    <button><p>{ele.btnTex}</p> <img src={ele.icon} alt="icon" /></button>
                </div>
            </SwiperSlide>
        ))}
      </Swiper>
    </div>
  )
}

export default CardSlider
