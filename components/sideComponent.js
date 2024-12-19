import React from "react";
import { FaHouseChimney } from "react-icons/fa6";



function SideBarComp({title}) {
  return (
    <div style={{ padding: '0.15rem'}}className="flex mb-1 justify-start items-center gap-2 pl-1 hover:bg-gray-900  rounded-md group cursor-pointer hover:shadow-lg m-auto">
      <FaHouseChimney className="text-xs text-gray-600 group-hover:text-white " />
      <h3 className="text-xs text-gray-700 group-hover:text-white font-semibold ">
        {title}
      </h3>
    </div>
  );
}
export default SideBarComp;
