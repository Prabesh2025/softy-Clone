import React from "react";
import softy1Img from "../assets/softy11.jpg";
import softy2Img from "../assets/softyImg/imgo.png";
import softy3Img from "../assets/softyImg/imgn.png";
import softy4Img from "../assets/softyImg/imgk.png";

import { ArrowRight } from "lucide-react";
import { Droplet } from "lucide-react";
import { Award } from 'lucide-react';
import { Truck } from 'lucide-react';
import { Flag } from 'lucide-react';
import { Phone } from 'lucide-react';
import { Disc2 } from 'lucide-react';

export default function HeroSection() {
  return (
    <div>
      {/* first div */}
      <div className=" py-10  border-b border-gray-300  space-y-10 bg-gray-50">
        <div className="flex flex-col text-center space-y-2">
          <h1 className=" text-4xl font-bold bg-gradient-to-r from-purple-950  via-pink-400 to-purple-800 bg-clip-text text-transparent py-1 ">
            Explore Our Categories
          </h1>
          <p className="text-lg opacity-80">
            Discover the wide range of products we offer for your personal and
            professional hygiene <br /> needs.
          </p>
        </div>

        <div className="flex items-center justify-around  ">
          {/* first Img */}
          <div className=" ml-8 group relative bg-gradient-to-r from-pink-100 to-purple-100   border border-gray-300 rounded-sm h-92 w-87 flex items-center text-start hover:bg-gradient-to-r hover:from-pink-200 hover:to-purple-300 duration-500">
            <div className=" border-none rounded-lg bg-white mb-19 ml-3">
              <img
                src={softy1Img}
                alt="Softy"
                height={260}
                width={260}
                className="  object-cover m-8 group-hover:scale-110 duration-500 h-52 "
              />
            </div>

            <div className="absolute mt-74 ml-2">
              <h1 className="text-lg font-medium opacity-75 group-hover:ml-2 duration-500 ">
                Diaper
              </h1>
              <p className="text-sm font-medium opacity-70 flex items-center group-hover:text-purple-950 ">
                View Category{" "}
                <ArrowRight
                  size={16}
                  className="group-hover:ml-3 ml-1 mt-0.5 duration-500 "
                />
              </p>
            </div>
          </div>

          {/* Second Img */}
          <div className=" group relative bg-gradient-to-r from-pink-100 to-purple-100   border border-gray-300 rounded-sm h-92 w-87 flex items-center text-start hover:bg-gradient-to-r hover:from-pink-200 hover:to-purple-300 duration-500">
            <div className=" border-none rounded-lg bg-white mb-19 ml-3">
              <img
                src={softy2Img}
                alt="Softy"
                height={260}
                width={260}
                className="  object-cover m-8 group-hover:scale-110 duration-500 h-52   "
              />
            </div>

            <div className="absolute mt-74 ml-2">
              <h1 className="text-lg font-medium opacity-75 group-hover:ml-2 duration-500 ">
                Wipes
              </h1>
              <p className="text-sm font-medium opacity-70 flex items-center group-hover:text-purple-950 ">
                View Category{" "}
                <ArrowRight
                  size={16}
                  className="group-hover:ml-3 ml-1 mt-0.5 duration-500 "
                />
              </p>
            </div>
          </div>

          {/* Third Img */}
          <div className=" group relative bg-gradient-to-r from-pink-100 to-purple-100   border border-gray-300 rounded-sm h-92 w-87 flex items-center text-start hover:bg-gradient-to-r hover:from-pink-200 hover:to-purple-300 duration-500">
            <div className=" border-none rounded-lg bg-white mb-19 ml-3">
              <img
                src={softy3Img}
                alt="Softy"
                height={260}
                width={260}
                className=" object-cover m-8 group-hover:scale-110 duration-500 h-52"
              />
            </div>

            <div className="absolute mt-74 ml-2">
              <h1 className="text-lg font-medium opacity-75 group-hover:ml-2 duration-500 ">
                Sanitary Napkins
              </h1>
              <p className="text-sm font-medium opacity-70 flex items-center group-hover:text-purple-950 ">
                View Category
                <ArrowRight
                  size={16}
                  className="group-hover:ml-3 ml-1 mt-0.5 duration-500 "
                />
              </p>
            </div>
          </div>

          {/* Fourth Img */}
          <div className=" mr-8 group relative bg-gradient-to-r from-pink-100 to-purple-100   border border-gray-300 rounded-sm h-92 w-87 flex items-center text-start hover:bg-gradient-to-r hover:from-pink-200 hover:to-purple-300 duration-500">
            <div className=" border-none rounded-lg bg-white mb-19 ml-3">
              <img
                src={softy4Img}
                alt="Softy"
                height={260}
                width={260}
                className="  object-cover m-8 group-hover:scale-110 duration-500 h-52 "
              />
            </div>

            <div className="absolute mt-74 ml-2">
              <h1 className="text-lg font-medium opacity-75 group-hover:ml-2 duration-500 ">
                Tissue Paper
              </h1>
              <p className="text-sm font-medium opacity-70 flex items-center group-hover:text-purple-950 ">
                View Category{" "}
                <ArrowRight
                  size={16}
                  className="group-hover:ml-3 ml-1 mt-0.5 duration-500 "
                />
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* second div  */}
      <div className="border-b border-purple-200 py-10 bg-gray-100  ">
        {/* Sec-first div  */}
        <div className=" flex flex-col text-center space-y-1 w-11/12 mx-auto">
          <h1 className=" text-4xl font-bold bg-gradient-to-r from-purple-950  via-pink-400 to-purple-800 bg-clip-text text-transparent py-1 ">
            Discover the Softy Hygiene Advantage
          </h1>
          <p className="text-lg opacity-80">
            Delivering innovative and high-quality hygiene solutions for every
            home and business.
          </p>
        </div>

        {/* Sec-second div  */}

        <div className="grid grid-cols-3 space-x-4 space-y-4 items-center text-start w-11/12 mx-auto mt-10">
          <div className=" border border-red-100 rounded-md bg-gradient-to-r from-blue-50 to-purple-50 py-8 px-7 hover:shadow-md duration-400 group h-65">
            <p className="bg-blue-100 px-3 py-3 h-12 w-12 rounded-xl  mb-6">
              {" "}
              <Droplet className="text-blue-600"/>{" "}
            </p>
            <h3 className="text-xl font-semibold opacity-80 group-hover:text-purple-950 mb-4">
              Innovative Hygiene Solutions
            </h3>
            <p className="text-[17px] opacity-55">
              Providing a diverse range of premium hygiene <br /> products,
              including wet wipes, tissues, and personal <br /> care items.
            </p>
          </div>

          <div className=" border border-red-100 rounded-md bg-gradient-to-r from-green-50 to-purple-50 py-8 px-7 hover:shadow-md duration-400 group h-65">
            <p className="bg-green-100 px-3 py-3 h-12 w-12 rounded-xl  mb-6">
              
            <Award className="text-green-600"/>
            </p>
            <h3 className="text-xl font-semibold opacity-80 group-hover:text-purple-950 mb-4">
              Uncompromising Quality
            </h3>
            <p className="text-[17px] opacity-55">
              {" "}
              Ensuring the highest standards in product quality to meet the
              hygiene needs of families and businesses.{" "}
            </p>
          </div>

          <div className=" border border-red-100 rounded-md bg-gradient-to-r from-purple-100 to-purple-50 py-8 px-7 hover:shadow-md duration-400 group h-65">
            <p className="bg-purple-200 px-3 py-3 h-12 w-12 rounded-xl  mb-6">
              
              <Truck className="text-purple-800"/>
            </p>
            <h3 className="text-xl font-semibold opacity-80 group-hover:text-purple-950 mb-4">
              Nationwide Distribution
            </h3>
            <p className="text-[17px] opacity-55">
              Efficient and reliable delivery services that ensure timely
              availability of hygiene products across Nepal.
            </p>
          </div>

          <div className=" border border-red-100 rounded-md bg-gradient-to-r from-orange-50 to-purple-50 py-8 px-7 hover:shadow-md duration-400 group h-65">
            <p className="bg-orange-100 px-3 py-3 h-12 w-12 rounded-xl  mb-6">
              {" "}
              <Flag className="text-orange-400"/>
            </p>
            <h3 className="text-xl font-semibold opacity-80 group-hover:text-purple-950 mb-4">
              Proudly Made in Nepal
            </h3>
            <p className="text-[17px] opacity-55">
              Softy Hygiene is a locally established brand, offering innovative
              and accessible hygiene products to every household.
            </p>
          </div>

          <div className=" border border-red-100 rounded-md bg-gradient-to-r from-pink-50 to-purple-50 py-8 px-7 hover:shadow-md duration-400 group h-65">
            <p className="bg-red-100 px-3 py-3 h-12 w-12 rounded-xl  mb-6">
              {" "}
              <Phone className="text-pink-400"/>
            </p>
            <h3 className="text-xl font-semibold opacity-80 group-hover:text-purple-950 mb-4">
              Dedicated Customer Support
            </h3>
            <p className="text-[17px] opacity-55">
              Reach us at +01-5191390 or softy.corporate@gmail.com for queries
              and feedback. Located in Maitighar, Kathmandu.
            </p>
          </div>

          <div className=" border border-red-100 rounded-md bg-gradient-to-r from-orange-50 to-purple-50 py-8 px-7 hover:shadow-md duration-400 group h-65 mb-3 w-112">
            <p className="bg-orange-100 px-3 py-3 h-12 w-12 rounded-xl  mb-6">
              {" "}
              <Disc2 className="text-orange-400"/>
            </p>
            <h3 className="text-xl font-semibold opacity-80 group-hover:text-purple-950 mb-4">
              Committed to Growth
            </h3>
            <p className="text-[17px] opacity-55">
              Focused on enhancing customer satisfaction while expanding into
              new markets and setting industry benchmarks.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
