import React from "react";
import { BiEnvelope, BiPencil, BiX } from "react-icons/bi";
import { FaSquare } from "react-icons/fa6";

export default function PopUp({ handleClose }) {
  return (
    <div className="w-[45rem] h-[35rem] p-[0.15rem] z-50 absolute top-10 left-[21%] bg-gradient-to-r from-blue-500 to-purple-500 rounded-xl ">
      <div className="w-full h-full p-5 bg-gray-50 rounded-xl ">
        {/* {first div} */}
        <div className="flex justify-between bg-white mb-[0.15rem]">
          <div className="flex items-center gap-1">
            <BiEnvelope /> <p>Engage with Jane Reyes</p>
          </div>
          
          <BiX onClick={handleClose} className="text-xl hover:text-white hover:bg-black rounded-md"/>
        </div>

        {/* second div */}
        <div className="flex bg-white rounded-lg">
          <div className="h-7 w-7 mt-2 ml-2 rounded-full bg-gray-300"></div>
          <div className="flex mt-1 ml-1 flex-col text-[0.79rem] font-semibold justify-center -left-3 p-1">
            <div className="font-semibold">Jane Reyes</div>
            <div className="text-gray-600">COO. Northwind Traders</div>
          </div>
        </div>

        {/* third main div */}
        <div className="w-full h-[80%] bg-gradient-to-b p-2 from-white to-gray-50 opacity-4 border mt-3 shadow-lg text-xs">
          <div className="bg-blue-100 flex justify-between h-8 w-[98%] mx-2 rounded-lg p-1  justify-items-center">
            <div className="flex ">
              <span className=" pl-4 text-[0.65rem] font-semibold text-purple-600">
                Jane maybe interested in upgrading espresso machine for her
                in-store coffe shop
              </span>
            </div>
            <div className="flex gap-1">
              <div className="bg-white text-black text-[0.55rem] rounded-sm p-1 text-center flex h-4 items-center justify-center gap-1 w-11">
                {" "}
                <BiPencil /> <span>Edit</span>
              </div>
              <div className="  bg-gradient-to-r from-blue-700 to-purple-800 rounded-md flex justify-center items-center h-4 w-28 text-white text-[0.55rem] p-1">
                <span>Approve and send</span>
              </div>
            </div>
          </div>
          <div className="bg-white flex  opacity-8 text-gray-700 cursor-pointer items-end gap-3  pl-5  h-12 mt-2 shadow-sm w-[98%] mx-2 rounded-lg   ">
            <div className="text-black hover:opacity-1 pb-2">Engage</div>
            <div className="hover:text-black hover:opacity-1 pb-2 border-b-2 border-blue-400">
              Research
            </div>
          </div>

          <div className="bg-white flex flex-col  opacity-8 text-gray-700 cursor-pointer gap-3  pl-4 pt-2 h-[12rem] mt-2 shadow-sm w-[98%] mx-2 rounded-lg   ">
            <div className=" bg-gradient-to-r from-blue-100 pl-3 pt-3 to-white w-[99%] h-[9rem] rounded-md">
              <p className="text-purple-500 font-semibold opacity-8">
                Why i picked this lead
              </p>
              <div className=" font-semibold text-[0.59rem]">
                <li className="">
                  Jane is a key maker and was browsing epresso machine on the
                  First Coffee Website
                </li>
                <li>
                  Jane is a key maker and was browsing epresso machine on the
                  First Coffee Website
                </li>
                <li>
                  Jane is a key maker and was browsing epresso machine on the
                  First Coffee Website
                </li>
              </div>
              <div className="flex">
                <div className="bg-white h-[3rem] w-[10rem] rounded-lg m-2 shadow-md"><BiX /></div>
                <div className="bg-white h-[3rem] w-[10rem] rounded-lg m-2 shadow-md"></div>
                <div className="bg-white h-[3rem] w-[10rem] rounded-lg m-2 shadow-md"></div>
              </div>
            </div>
            <div className="w-full  h-3 flex gap-1">
              <div className="bg-gray-200 h-4 rounded-sm  w-4"></div>
              <div className="bg-gray-200 h-4  rounded-sm w-[5rem]"></div>
              <div className="bg-gray-200 h-4  rounded-sm w-4  "></div>
            </div>
          </div>

          <div className="bg-white flex-row  opacity-8 text-gray-700 cursor-pointer justify-center  items-end gap-3  pl-5  h-20 mt-2 shadow-sm w-[98%] mx-2 rounded-lg   ">
            <p className="mb-2 font-bold">About Jane</p>
            <p>
              Lorem dfety rejhyt yyt yt ytyityt ytyt ytiytt6ti98yi
              7t66dcyip8y8987t yt787t7t7t7t 7tut yyu 6u7it8t ytti ut7 t y tit7i
              tfifi ytgout7fyuity y{" "}
            </p>
          </div>
        </div>

        <div>
          <span></span>
        </div>
      </div>
    </div>
  );
}
