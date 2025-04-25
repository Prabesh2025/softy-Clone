import React from 'react'
import PerViewImga from "../assets/preView1.webp"
import PerViewImgb from "../assets/preView2.webp"
import PerViewImgc from "../assets/preView3.webp"

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";


// import required modules
import { Autoplay, EffectFade, Navigation } from "swiper/modules";

import { ArrowLeft, ArrowRight } from 'lucide-react';



export default function PerViewCarousel() {
  return (
    <div className="space-y-15 border-b border-red-300 relative ">
      
      <div>
        <Swiper
          spaceBetween={30}
          effect={"fade"}
          loop={true}
          autoplay={{
            delay: 3500,
            disableOnInteraction: false,
          }}
          navigation={true} 
         
          
          modules={[Autoplay, EffectFade, Navigation ]}
          className="mySwiper relative"
        >
          <SwiperSlide>
            <img
              className="h-[110vh] w-full object-cover"
              src={PerViewImga} alt='Img'
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              className="h-[110vh] w-full object-cover"
              src={PerViewImgb} alt='Img'
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              className="h-[110vh] w-full object-cover"
              src={PerViewImgc} alt='Img'
            />
          </SwiperSlide>

           {/* Custom Prev Button */}
           <div className="swiper-button-prev bg-gradient-to-r  from-purple-700 via-pink-400 to-purple-600 p-1   rounded-full flex items-center justify-center shadow-md border border-white hover:opacity-70">
            <ArrowLeft className=" text-white" />
          </div>


          {/* Custom Next Button */}
          <div className="swiper-button-next bg-gradient-to-r  from-purple-600 via-pink-400 to-purple-700 p-1  rounded-full flex items-center justify-center text-white shadow-md border border-white hover:opacity-70">
            <ArrowRight className=" text-white" />
          </div>
         
        </Swiper>
      </div>

      
    </div>
  )
}
