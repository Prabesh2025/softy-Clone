import React from "react";
import babyImg from "../assets/softyImg/babyimg1.png";
import baby2Img from "../assets/softyImg/babyimg2.png";
import minimeImg from "../assets/softyImg/minime1.png";
import minime1Img from "../assets/softyImg/minime2.jpg";
import minime2Img from "../assets/softyImg/minime3.jpg";






import { CircleCheckBig } from "lucide-react";
import { Droplet } from "lucide-react";
import { Baby } from "lucide-react";
import { Shield } from "lucide-react";
import { Layers } from "lucide-react";
import { FileQuestion } from 'lucide-react';
import { Search } from 'lucide-react';
import { Eye } from 'lucide-react';


export default function DetailCardSection() {
  return (
    <div>
      {/* Detail card  */}
      <div className=" py-10 bg-purple-50">
        <div className=" grid grid-cols-2 w-11/12 mx-auto">
          <div>
            <div>
              <h1 className="  w-65 py-2 font-medium bg-gradient-to-r from-purple-800  via-pink-400 to-purple-950  bg-clip-text text-transparent ">
                Nepal's No.1 Hygiene Brand
              </h1>
              <h2 className=" w-140 py-4 text-4xl font-bold bg-gradient-to-r from-purple-950  via-pink-400 to-purple-950  bg-clip-text text-transparent">
                Innovating Hygiene Solutions
              </h2>
              <p className="text-[17px] opacity-85 py-4">
                High-quality, safe, and hygienic products designed for the
                well-being of women, children, and families.
              </p>
            </div>

            <div className="py-3 flex items-center space-x-4">
              <Droplet className="text-purple-900" />
              <div>
                <h1 className="text-[17px] font-medium">
                  Premium Quality Wipes
                </h1>
                <p className="opacity-80">
                  Soft and durable wet wipes for babies and everyday use.
                </p>
              </div>
            </div>

            <div className="py-3 flex items-center space-x-4">
              <Baby className="text-purple-900" />
              <div>
                <h1 className="text-[17px] font-medium">
                  Comfortable Baby Diapers
                </h1>
                <p className="opacity-80">
                  Ensuring comfort and protection for your little ones.
                </p>
              </div>
            </div>

            <div className="py-3 flex items-center space-x-4">
              <Shield size={28} className="text-purple-900" />
              <div>
                <h1 className="text-[17px] font-medium">
                  Safe Sanitary Napkins
                </h1>
                <p className="opacity-80">
                  High quality hygiene solutions with ultra-soft top sheet, and
                  superior absorbency for maximum comfort.
                </p>
              </div>
            </div>

            <div className="py-3 flex items-center space-x-4">
              <Layers className="text-purple-900" />
              <div>
                <h1 className="text-[17px] font-medium">
                  Versatile Tissue Papers
                </h1>
                <p className="opacity-80">
                  Versatile Tissue Papers Daily hygiene essentials for homes and
                  workplaces.
                </p>
              </div>
            </div>
          </div>
          {/* img div  */}
          <div>
            <p className=" absolute -mt-5 text-sm font-medium gap-1.5 h-13 w-56 pl-5 flex items-center bg-white rounded-lg ">
              {" "}
              <CircleCheckBig size={20} className="text-purple-800" /> No 1 in
              Personal hygienic
            </p>
            <img src={babyImg} alt="" className="border-none rounded-2xl" />
            <p className=" absolute -mt-5 ml-118 text-sm font-medium gap-2 h-13 w-56 pl-5 flex items-center bg-white rounded-lg ">
              <svg
                className="text-purple-900"
                
                xmlns="http://www.w3.org/2000/svg"
                width="18"
                height="18"
                viewBox="0 0 512 512"
              >
                <path
                  fill="currentColor"
                  d="m383.88 287.82l64-192H338.47a70.2 70.2 0 0 1-66.59-48a70.21 70.21 0 0 0-66.6-48H63.88l64 288Zm-384 192a32 32 0 0 0 32 32h448a32 32 0 0 0 32-32v-64h-512Zm480-256h-40.94l-21.33 64h14.27a16 16 0 0 1 0 32h-352a16 16 0 1 1 0-32h15.21l-14.22-64h-49a32 32 0 0 0-32 32v128h512v-128a32 32 0 0 0-31.99-32"
                ></path>
              </svg>
              Nepal's No.1 Hygiene Brand
            </p>
          </div>
        </div>
      </div>

       {/* sec-detailcard   */}

      <div className="py-6">
        <div className="w-11/12 mx-auto ">

      <div className="flex flex-col text-center space-y-2 py-10">
          <h1 className=" text-4xl font-bold bg-gradient-to-r from-purple-950  via-pink-400 to-purple-800 bg-clip-text text-transparent py-1 ">
          Why to Choose Softy Hygiene Pvt. Ltd
          </h1>
          <p className="text-lg opacity-80">
          We SOFTY HYGIENE PVT.LTD. are one of the largest private level manufacturing of <br /> disposable wet wipes, Baby wipes ,Baby Diaper, Sanitary Napkins and Tissue paper.
          </p>
        </div>


        <div className="grid grid-cols-2 space-x-14 items-center">
         {/* img-sec  */}
        <div>
            <p className=" absolute -mt-5 text-sm font-medium gap-1.5 h-13 w-56 pl-5 flex items-center bg-yellow-100 rounded-lg opacity-90 ">
              {" "}
              <CircleCheckBig size={20} className="text-purple-800" /> No 1 in
              Personal hygienic
            </p>
            <img src={baby2Img} alt="" className="border-none rounded-2xl" />
            <p className=" absolute -mt-5 ml-104 text-sm font-medium gap-2 h-13 w-56 pl-5 flex items-center bg-yellow-100 opacity-90 rounded-lg ">
              <svg
                className="text-purple-900"
              
                xmlns="http://www.w3.org/2000/svg"
                width="18"
                height="18"
                viewBox="0 0 512 512"
              >
                <path
                  fill="currentColor"
                  d="m383.88 287.82l64-192H338.47a70.2 70.2 0 0 1-66.59-48a70.21 70.21 0 0 0-66.6-48H63.88l64 288Zm-384 192a32 32 0 0 0 32 32h448a32 32 0 0 0 32-32v-64h-512Zm480-256h-40.94l-21.33 64h14.27a16 16 0 0 1 0 32h-352a16 16 0 1 1 0-32h15.21l-14.22-64h-49a32 32 0 0 0-32 32v128h512v-128a32 32 0 0 0-31.99-32"
                ></path>
              </svg>
              Nepal's No.1 Hygiene Brand
            </p>
          </div>

          <div className="space-y-7">

          <div className="py-4 pl-7 flex  space-x-4 bg-gradient-to-r from-pink-50 to-purple-50 rounded-lg">
          <FileQuestion className="mt-3 opacity-90"/> 
              <div>
                <h1 className="text-[17px] font-medium opacity-80 py-2">
                Why Softy?
                </h1>
                <p className="opacity-80 text-[16.5px]">
                As action speaks louder than words.”We SOFTY HYGIENE PVT.LTD. is one of <br /> the largest private level manufacturing of disposable wet wipes, Baby wipes <br />,Baby Diaper, Sanitary Napkins and Tissue paper.
                </p>
              </div>
            </div>
                  

            <div className="py-4 pl-7 flex  space-x-4 bg-gradient-to-r from-green-50 to-yellow-50 rounded-lg">
            <Search  className="mt-3 opacity-90"/>
              <div>
                <h1 className="text-[17px] font-medium opacity-80 py-2">
                Our Vision
                </h1>
                <p className="opacity-80 text-[16.5px]">
                To become one of the most liable, respectable manufacturing company based <br /> on wet  tissue, Sanitary Napkins, Baby Diaper and tissue paper and expand our <br /> business all over  Nepal and Global Market too.
                </p>
              </div>
            </div>



            <div className="py-4 pl-7 flex  space-x-4 bg-gradient-to-r from-blue-50 to-yellow-50 rounded-lg">
            <Eye  className="mt-3 opacity-90"/> 
              <div>
                <h1 className="text-[17px] font-medium opacity-80 py-2">
                Our Mission
                </h1>
                <p className="opacity-80 text-[16.5px]">
                Our mission is to bring joy, happiness and inspiration to baby ,and all people <br /> all over Nepal and Global market by providing our products to ensure you with <br /> best experience with us.
                </p>
              </div>
            </div>             

          </div>

        </div>
        </div>

      </div>


      {/* latest addition  */}

      <div className="bg-gray-100 py-12">

        <div className="w-11/12 mx-auto">

        <div className="flex flex-col text-center space-y-2 ">
          <h1 className=" text-4xl font-bold bg-gradient-to-r from-purple-950  via-pink-500 to-purple-900 bg-clip-text text-transparent py-1 ">
          Introducing our latest addition to the Minime <br /> family - the Minime 360!
          </h1>
          <p className="text-lg opacity-80 mb-12">
          Introducing our latest addition to the Minime family - the Minime 360!
          </p>
        </div>

        
        <div className="grid grid-cols-3 space-x-4">

        <div >
            <img src={minimeImg} alt="latest addition" className="border border-purple-200 rounded-xl" />

          </div>


          <div >
            <img src={minime1Img} alt="latest addition" className="border border-purple-200 rounded-xl" />

          </div>



          <div >
            <img src={minime2Img} alt="latest addition" className="border border-purple-200 rounded-xl" height={450} width={450}/>

          </div>


        </div>

        </div>
      </div>


    </div>
  );
}
