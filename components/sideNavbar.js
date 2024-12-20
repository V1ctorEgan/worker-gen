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
// import { BiMessageSquareDots } from "react-icons/bi";
import { TfiPinAlt } from "react-icons/tfi";
import { FaRegClock, FaSquare  } from "react-icons/fa";
import { HiOutlineRocketLaunch } from "react-icons/hi2";
import { LuLayoutDashboard,LuClipboardPen  } from "react-icons/lu";
import SideBarComp from "./sideComponent";
import { MdOutlineWallpaper, MdOutlineQuickreply  } from "react-icons/md";
import { IoPersonOutline } from "react-icons/io5";
import { TbPhoneEnd } from "react-icons/tb";
import { RiFilePaper2Line, RiBox3Line  } from "react-icons/ri";
import { BsPersonGear } from "react-icons/bs";
import { PiNewspaperLight } from "react-icons/pi";
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
                <FaRegClock className="text-xs text-black group-hover:text-white " />
                <h3 className="text-xs text-gray-800 group-hover:text-white font-semibold ">
                  Recent
                </h3>
              </div>
              <div className="flex  mb-1 justify-start items-center gap-2  pl-1 hover:bg-gray-900 p-1 rounded-md group cursor-pointer hover:shadow-lg m-auto">
                <TfiPinAlt className="text-xs text-gray-600 group-hover:text-white " />
                <h3 className="text-xs text-gray-800 group-hover:text-white font-semibold ">
                  pinned
                </h3>
              </div>
            </div>
            <div className=" my-h   pb-1">
              <h2 className="text-sm text-gray-900 mb-1 font-semibold">
                My work
              </h2>
              <SideBarComp title={"Sales acelerator"} icon={ <HiOutlineRocketLaunch className="text-xs text-gray-600 group-hover:text-white" />}/>
              <SideBarComp title={"Dashboards"} icon={<LuLayoutDashboard className="text-xs text-gray-600 group-hover:text-white" />}/>
              <SideBarComp title={"Activities"}icon={<LuClipboardPen  className="text-xs text-gray-600 group-hover:text-white" />}/>
            </div>
            <div className=" my-h   pb-1">
              <h2 className="text-sm text-gray-900 mb-1 font-semibold">
                Customers
              </h2>
              <SideBarComp title={"Accounts"} icon={<MdOutlineWallpaper className="text-xs text-gray-600 group-hover:text-white" />}/>
              <SideBarComp title={"Contacts"} icon={<IoPersonOutline className="text-xs text-gray-600 group-hover:text-white" />}/>
            </div>
            <div className=" my-h   pb-1">
              <h2 className="text-sm text-gray-900 mb-1 font-semibold">
                Sales
              </h2>
              <SideBarComp title={"Lead"} icon={<TbPhoneEnd className="text-xs text-gray-600 group-hover:text-white" />}/>
              <SideBarComp title={"Opportunities"} icon={<RiFilePaper2Line className="text-xs text-gray-600 group-hover:text-white" />}/>
              <SideBarComp title={"Competitors"} icon={<BsPersonGear className="text-xs text-gray-600 group-hover:text-white" />}/>
            </div>
            <div className=" my-h   pb-1">
              <h2 className="text-sm text-gray-900 mb-1 font-semibold">
                Collateral
              </h2>
              <SideBarComp title={"Quotes"} icon={<PiNewspaperLight className="text-xs text-gray-600 group-hover:text-white" />}/>
              <SideBarComp title={"Order"} icon={<PiNewspaperLight className="text-xs text-gray-600 group-hover:text-white" />}/>
              <SideBarComp title={"Invoice"} icon={<PiNewspaperLight className="text-xs text-gray-600 group-hover:text-white" />}/>
              <SideBarComp title={"Products"} icon={<RiBox3Line  className="text-xs text-gray-600 group-hover:text-white" />}/>
            </div>
            <div className=" my-h   pb-1">
              <h2 className="text-sm text-gray-900 mb-1 font-semibold">
                Marketing
              </h2>
              <SideBarComp title={"Market List"} icon={<LuLayoutDashboard className="text-xs text-gray-600 group-hover:text-white" />}/>
              <SideBarComp title={"Quick Campaigns"} icon={<MdOutlineQuickreply  className="text-xs text-gray-600 group-hover:text-white" />}/>
            </div>
            <div className=" my-h   pb-1">
              <h2 className="text-sm text-gray-900 mb-1 font-semibold">
                Performance
              </h2>
              <SideBarComp sale title={"Sales"} icon={<FaSquare  className="text-xs text-purple-800 group-hover:text-white" />}/>
            </div> 
          </div>
          
        </div>
    </div>
  );
}
export default SideNavbar;
