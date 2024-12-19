import React, {useState} from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { Disclosure } from "@headlessui/react";
// import {
//   MdOutlineSpaceDashboard,
//   MdOutlineAnalytics,
//   MdOutlineIntegrationInstructions,
//   MdOutlineMoreHoriz,
//   MdOutlineSettings,
//   MdOutlineLogout,
// } from "react-icons/md";
import { FaHouseChimney } from "react-icons/fa6";
import { CgProfile } from "react-icons/cg";
import { FaRegComments } from "react-icons/fa";
import { BiMessageSquareDots } from "react-icons/bi";
import SideBarComp from "./sideComponent";

function SideNavbar() {
  // const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  // const toggleSidebar = () => {
  //   setIsSidebarOpen(!isSidebarOpen);
  // };
  return (
    <div>
      
        <Disclosure.Button  className="absolute top-4 right-4 inline-flex items-center peer justify-center rounded-md p-2 text-gray-800 hover:bg-gray-900 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white group ">
          <GiHamburgerMenu
            className="block md:hidden h-6 w-6"
            aria-hidden="true"
          />
        </Disclosure.Button>
        <div className="p-2 w-1/2 h-screen border-r border-gray-300    z-20 fixed top-0 -left-96 lg:left-0 lg:w-44 bg-gray-200   peer-focus:left-0 peer:transition ease-out delay-150 duration-200">
          <div className="flex flex-col justify-start item-center border ">
            {/* <h1 className="text-base text-center cursor-pointer font-bold text-blue-900 border-b border-gray-100 pb-4 w-full">
              Virtual Dashboard
            </h1> */}
            <div className=" my-1  border-gray-100 pb-1">
              <div className="flex mb-1 justify-start items-center gap-2 pl-1 hover:bg-gray-900 p-1 rounded-md group cursor-pointer hover:shadow-lg m-auto">
                <FaHouseChimney className="text-xs text-gray-600 group-hover:text-white " />
                <h3 className="text-xs text-gray-800 group-hover:text-white font-semibold ">
                  Home
                </h3>
              </div>
              <div className="flex  mb-1 justify-start items-center gap-2 pl-1 hover:bg-gray-900 p-1 rounded-md group cursor-pointer hover:shadow-lg m-auto">
                <CgProfile className="text-xs text-gray-600 group-hover:text-white " />
                <h3 className="text-xs text-gray-800 group-hover:text-white font-semibold ">
                  Recent
                </h3>
              </div>
              <div className="flex  mb-1 justify-start items-center gap-2  pl-1 hover:bg-gray-900 p-1 rounded-md group cursor-pointer hover:shadow-lg m-auto">
                <FaRegComments className="text-xs text-gray-600 group-hover:text-white " />
                <h3 className="text-xs text-gray-800 group-hover:text-white font-semibold ">
                  pin
                </h3>
              </div>
            </div>
            <div className=" my-h   pb-1">
              <h2 className="text-sm text-gray-900 mb-1 font-semibold">
                My work
              </h2>
              <SideBarComp title={"Sales acelerator"} />
              <SideBarComp title={"Dashboards"} />
              <SideBarComp title={"Activities"} />
            </div>
            <div className=" my-h   pb-1">
              <h2 className="text-sm text-gray-900 mb-1 font-semibold">
                Customers
              </h2>
              <SideBarComp title={"Accounts"} />
              <SideBarComp title={"Contacts"} />
            </div>
            <div className=" my-h   pb-1">
              <h2 className="text-sm text-gray-900 mb-1 font-semibold">
                Sales
              </h2>
              <SideBarComp title={"Lead"} />
              <SideBarComp title={"Opportunities"} />
              <SideBarComp title={"Competitors"} />
            </div>
            <div className=" my-h   pb-1">
              <h2 className="text-sm text-gray-900 mb-1 font-semibold">
                Collateral
              </h2>
              <SideBarComp title={"Quotes"} />
              <SideBarComp title={"Order"} />
              <SideBarComp title={"Invoice"} />
              <SideBarComp title={"Products"} />
            </div>
            <div className=" my-h   pb-1">
              <h2 className="text-sm text-gray-900 mb-1 font-semibold">
                Marketing
              </h2>
              <SideBarComp title={"Market List"} />
              <SideBarComp title={"Campaigns"} />
            </div>
            <div className=" my-h   pb-1">
              <h2 className="text-sm text-gray-900 mb-1 font-semibold">
                Performance
              </h2>
              <SideBarComp title={"Sales"} />
            </div> 
          </div>
          
        </div>
    </div>
  );
}
export default SideNavbar;
