import React from 'react'
import { IoIosArrowDown } from "react-icons/io";
import { FaSquare } from "react-icons/fa6";
import { FiPlus,FiPieChart  } from "react-icons/fi";
import { VscRefresh } from "react-icons/vsc";
import { GiStrongbox } from "react-icons/gi";
import { RiDeleteBinLine } from "react-icons/ri";
import { BsThreeDotsVertical } from "react-icons/bs";
import { AiOutlineBars, AiOutlineAlignCenter } from "react-icons/ai";
import { LiaGripLinesVerticalSolid } from "react-icons/lia";
import { MdOutlineMarkunreadMailbox } from "react-icons/md";

function Navbar(){
    return(
        <div className='h-7 shadow-lg justify-between flex flex-row items-center font-semibold pl-1  w-full md:w-1/7  m-2 py-2 mr-20 bg-white rounded-sm'>
            <div className='text-xs justify-start flex  gap-1 items-center'> <span> My open leads</span>  <IoIosArrowDown className='top-30' /></div>
            <div className=' flex flex-row gap-4'>
                <div className='flex flex-row gap-1 text-xs items-center'><FaSquare /><span >Show Chart</span></div>
                <div className='flex flex-row gap-1 text-xs items-center'><AiOutlineBars /><span >Focus view</span></div>
                <div className='flex flex-row gap-[.15rem] text-xs items-center'><FiPlus /><span >New</span></div>
                <div className='flex flex-row gap-1 text-xs items-center'><VscRefresh /><span >Refresh</span></div>
                <div className='flex flex-row gap-1 text-xs items-center'><GiStrongbox /><span >Collaborate</span></div>
                <div className='flex flex-row gap-1 text-xs items-center'><RiDeleteBinLine /><span >Delete</span></div>
                <div className='text-xs justify-center items-center pt-[0.15rem] flex gap-1 bg-gray-100 rounded-sm'><IoIosArrowDown /> <BsThreeDotsVertical /></div>
                <div className='flex flex-row gap-2 border border-gray-300 p-1 rounded-sm text-xs items-center'><FiPieChart /><span >Smart data</span></div>
                <div className='flex flex-row gap-2 border border-gray-300 p-1 rounded-sm text-xs items-center'><AiOutlineAlignCenter /><span >Edit filters</span></div>
                <div className='flex flex-row gap-2 border border-gray-300 p-1 rounded-sm text-xs items-center'><LiaGripLinesVerticalSolid /><span >Edit columns</span></div>
                <div className='text-xs justify-center items-center pt-[0.15rem] p-1 mr-1 bg-blue-700 flex gap-1  rounded-md'><MdOutlineMarkunreadMailbox className='text-white' /><span className='text-white'>|</span><IoIosArrowDown className='pt-[0.15rem] pr-1 text-white'/> </div>


            </div>
        </div>
    )
}

export default Navbar;