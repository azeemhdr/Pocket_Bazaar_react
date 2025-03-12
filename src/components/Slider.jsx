import React from "react";
import { Navigation, A11y } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import sliderImage1 from '../assets/images/slider-1.png'
import sliderImage2 from '../assets/images/slider-2.png'
import sliderImage3 from '../assets/images/slider-3.png'
import sliderImage4 from '../assets/images/slider-4.png'
import sliderImage5 from '../assets/images/slider-5.png'


export default function Slider() {
  return (
    <>
      <div className="py-8 px-6">
        <Swiper
          modules={[Navigation, A11y]}
          spaceBetween={24}
          slidesPerView={4}
          navigation
          onSwiper={(swiper) => console.log(swiper)}
          onSlideChange={() => console.log("slide change")}
		  className=""
        >
          <SwiperSlide>
            <img src={sliderImage1} alt="Express Delivery" className="w-full object-cover"/>
          </SwiperSlide>
          <SwiperSlide>
            <img src={sliderImage2} alt="Cash on Delivery" className="w-full object-cover"/>
          </SwiperSlide>
          <SwiperSlide>
            <img src={sliderImage3} alt="Gift Voucher" className="w-full object-cover"/>
          </SwiperSlide>
		  <SwiperSlide>
            <img src={sliderImage4} alt="Free Delivery" className="w-full object-cover"/>
          </SwiperSlide>
		  <SwiperSlide>
            <img src={sliderImage5} alt="Coupon Saving" className="w-full object-cover"/>
          </SwiperSlide>
        </Swiper>
      </div>
    </>
  );
}
