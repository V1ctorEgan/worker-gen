import React from "react";
import { BiUpArrow } from "react-icons/bi";
import { FaHouseChimney } from "react-icons/fa6";
import { MdOutlineKeyboardArrowDown, MdOutlineKeyboardArrowUp } from "react-icons/md";


function SideBarComp({title, icon, sale}) {
  return (
    <div style={{ padding: '0.15rem'}}className="flex mb-1 justify-start items-center gap-1 pl-1 hover:bg-gray-900  rounded-md group cursor-pointer hover:shadow-lg m-auto">
      {/* <FaHouseChimney className="text-xs text-gray-600 group-hover:text-white " />
       */}
      {icon }
      <h3 className="text-xs text-gray-700 group-hover:text-white font-semibold ">
        {title}
      </h3>
      {sale ?<div className="ml-20 relative gap-0"><MdOutlineKeyboardArrowUp className="  top-0   " /> <MdOutlineKeyboardArrowDown className=" transform -translate-y-1/2 " /> </div>  : null}
    </div>
  );
}
export default SideBarComp;
