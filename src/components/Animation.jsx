import React from "react";
import Marquee from "react-fast-marquee";
import { MoveRight, Phone } from "lucide-react";

export default function Animation() {
  return (
    <div className="bg-gradient-to-b from-pink-50 to-white py-10">
      <div className="w-11/12 mx-auto ">

        <div className="flex flex-col text-center space-y-2 ">
          <h1 className=" text-4xl font-bold bg-gradient-to-r from-purple-950  via-pink-500 to-purple-900 bg-clip-text text-transparent py-1 ">
            Our Happy Customers
          </h1>
          <p className="text-lg opacity-80 mb-12">
            Don't just take our word for it. Here's what our customers have to
            say about us.
          </p>
        </div>

       

        <Marquee pauseOnHover={true} speed={30}>
          <div className="grid grid-cols-4 gap-8 py-6">
            {/* first cmt */}

            <div className="ml-4 bg-white w-81 h-40  py-4 rounded-xl shadow-xl">
              <div className=" flex items-center space-x-3">
                <div className="pl-4">
                  <p className="h-12 w-12  rounded-full  flex items-center justify-center bg-gray-50 ">
                    {" "}
                    <p className="h-10 w-10  rounded-full bg-gradient-to-br from-yellow-300 to-green-400"></p>{" "}
                  </p>
                </div>

                <p className="font-medium opacity-85">
                  Sarita Sharma
                  <p className="text-sm font-medium text-pink-400">@sarita</p>
                </p>
              </div>

              <p className="font-medium opacity-60 pl-6 pr-2">
                Despite being in a new distribution line, it has been a
                rewarding experience working with you
              </p>

              <p className="flex justify-end items-center -space-x-2 pr-2">
                <Phone size={16} className="rotate-45 text-pink-200 " />
                <Phone size={16} className="rotate-45 text-pink-200 " />
              </p>
            </div>

            {/* Second cmt */}

            <div className="bg-white w-81 h-36 py-4 rounded-xl shadow-xl">
              <div className=" flex items-center space-x-3">
                <div className="pl-4">
                  <p className="h-12 w-12  rounded-full  flex items-center justify-center bg-gray-50 ">
                    {" "}
                    <p className="h-10 w-10  rounded-full bg-gradient-to-br from-purple-800 to-orange-400"></p>{" "}
                  </p>
                </div>

                <p className="font-medium opacity-85">
                  Suman Adhikari
                  <p className="text-sm font-medium text-pink-400">@suman</p>
                </p>
              </div>

              <p className="font-medium opacity-60 pl-6 pr-6">
                The product quality is amazing! I am very happy with my purchase
              </p>

              <p className="flex justify-end items-center -space-x-2 pr-2">
                <Phone size={16} className="rotate-45 text-pink-200 " />
                <Phone size={16} className="rotate-45 text-pink-200 " />
              </p>
            </div>

            {/* Third cmt */}

            <div className="bg-white h-36 w-81 py-4 rounded-xl shadow-xl">
              <div className=" flex items-center space-x-3">
                <div className="pl-4">
                  <p className="h-12 w-12  rounded-full  flex items-center justify-center bg-gray-50 ">
                    {" "}
                    <p className="h-10 w-10  rounded-full bg-gradient-to-br from-orange-500 to-green-400"></p>{" "}
                  </p>
                </div>

                <p className="font-medium opacity-85">
                  Rita Bhandari
                  <p className="text-sm font-medium text-pink-400">@rita</p>
                </p>
              </div>

              <p className="font-medium opacity-60 pl-6">
                Great service and fast delivery! I will definitely buy again.
              </p>

              <p className="flex justify-end items-center -space-x-2 pr-2">
                <Phone size={16} className="rotate-45 text-pink-200 " />
                <Phone size={16} className="rotate-45 text-pink-200 " />
              </p>
            </div>

            {/* Fourth cmt */}

            <div className="bg-white h-40 w-81 py-4 rounded-xl shadow-xl">
              <div className=" flex items-center space-x-3">
                <div className="pl-4">
                  <p className="h-12 w-12  rounded-full  flex items-center justify-center bg-gray-50 ">
                    {" "}
                    <p className="h-10 w-10  rounded-full bg-gradient-to-br from-yellow-300 to-green-400"></p>{" "}
                  </p>
                </div>

                <p className="font-medium opacity-85">
                  Sarita Sharma
                  <p className="text-sm font-medium text-pink-400">@sarita</p>
                </p>
              </div>

              <p className="font-medium opacity-60 pl-6">
                Despite being in a new distribution line, it has been a
                rewarding experience working with you
              </p>

              <p className="flex justify-end items-center -space-x-2 pr-2">
                <Phone size={16} className="rotate-45 text-pink-200 " />
                <Phone size={16} className="rotate-45 text-pink-200 " />
              </p>
            </div>
          </div>
        </Marquee>

        <Marquee direction={"right"} pauseOnHover={true} speed={30}>
        <div className="grid grid-cols-4 gap-8 py-4">
          {/* secTag- first cmt */}

          <div className=" ml-3 bg-white w-81 h-40  py-4 rounded-xl shadow-xl">
            <div className=" flex items-center space-x-3">
              <div className="pl-4">
                <p className="h-12 w-12  rounded-full  flex items-center justify-center bg-gray-50 ">
                  {" "}
                  <p className="h-10 w-10  rounded-full bg-gradient-to-br from-yellow-300 to-green-400"></p>{" "}
                </p>
              </div>

              <p className="font-medium opacity-85">
              Anil Karki
                <p className="text-sm font-medium text-pink-400">@anil</p>
              </p>
            </div>

            <p className="font-medium opacity-60 pl-6 pr-2">
            Very satisfied with my order. The product is exactly as described.
            </p>

            <p className="flex justify-end items-center -space-x-2 pr-2">
              <Phone size={16} className="rotate-45 text-pink-200 " />
              <Phone size={16} className="rotate-45 text-pink-200 " />
            </p>
          </div>

          {/* secTag-Second cmt */}

          <div className="bg-white w-81 h-36 py-4 rounded-xl shadow-xl">
            <div className=" flex items-center space-x-3">
              <div className="pl-4">
                <p className="h-12 w-12  rounded-full  flex items-center justify-center bg-gray-50 ">
                  {" "}
                  <p className="h-10 w-10  rounded-full bg-gradient-to-br from-purple-800 to-orange-400"></p>{" "}
                </p>
              </div>

              <p className="font-medium opacity-85">
              Pooja Thapa
                <p className="text-sm font-medium text-pink-400">@pooja</p>
              </p>
            </div>

            <p className="font-medium opacity-60 pl-6 pr-6">
            Good quality and reasonable price. Highly recommend!
            </p>

            <p className="flex justify-end items-center -space-x-2 pr-2">
              <Phone size={16} className="rotate-45 text-pink-200 " />
              <Phone size={16} className="rotate-45 text-pink-200 " />
            </p>
          </div>

          {/* secTag-Third cmt */}

          <div className="bg-white h-36 w-81 py-4 rounded-xl shadow-xl">
            <div className=" flex items-center space-x-3">
              <div className="pl-4">
                <p className="h-12 w-12  rounded-full  flex items-center justify-center bg-gray-50 ">
                  {" "}
                  <p className="h-10 w-10  rounded-full bg-gradient-to-br from-orange-500 to-green-400"></p>{" "}
                </p>
              </div>

              <p className="font-medium opacity-85">
              Bikash Gurung
                <p className="text-sm font-medium text-pink-400">@bikash</p>
              </p>
            </div>

            <p className="font-medium opacity-60 pl-6">
            I love the product! Thank you for the great customer service.
            </p>

            <p className="flex justify-end items-center -space-x-2 pr-2">
              <Phone size={16} className="rotate-45 text-pink-200 " />
              <Phone size={16} className="rotate-45 text-pink-200 " />
            </p>
          </div>

          {/* secTag-Fourth cmt */}

          <div className="bg-white w-81 h-40  py-4 rounded-xl shadow-xl">
            <div className=" flex items-center space-x-3">
              <div className="pl-4">
                <p className="h-12 w-12  rounded-full  flex items-center justify-center bg-gray-50 ">
                  {" "}
                  <p className="h-10 w-10  rounded-full bg-gradient-to-br from-yellow-300 to-green-400"></p>{" "}
                </p>
              </div>

              <p className="font-medium opacity-85">
              Anil Karki
                <p className="text-sm font-medium text-pink-400">@anil</p>
              </p>
            </div>

            <p className="font-medium opacity-60 pl-6 pr-2">
            Very satisfied with my order. The product is exactly as described.
            </p>

            <p className="flex justify-end items-center -space-x-2 pr-2">
              <Phone size={16} className="rotate-45 text-pink-200 " />
              <Phone size={16} className="rotate-45 text-pink-200 " />
            </p>
          </div>

        </div>
        </Marquee>

      </div>
    </div>
  );
}
