import React from "react";
import { IoIosArrowDown } from "react-icons/io";
import MessageListComponent from "./messageListComponent";
import { list } from "../utils";

function MessageList(){
    return(
        <div>
            <div className="w-full flex items-center gap-[12rem] p-3 pr-4">
            <div className="flex text-[0.55rem] font-semibold  item-center justify-center gap-1"><span> Name</span><IoIosArrowDown className="text-gray-400 mt-[.15rem]" /></div>
            <div className="flex text-[0.55rem] font-semibold  item-center justify-center gap-1"><span> Topic</span><IoIosArrowDown className="text-gray-400 mt-[.15rem]" /></div>
            <div className="flex text-[0.55rem] font-semibold  item-center justify-center gap-1"><span> Status reason</span><IoIosArrowDown className="text-gray-400 mt-[.15rem]" /></div>
            <div className="flex text-[0.55rem] font-semibold  item-center justify-center gap-1"><span> Created on</span><IoIosArrowDown className="text-gray-400 mt-[.15rem]" /></div>
            </div>
            {list.map(item => (
                <MessageListComponent key={item.id} Name={item.Name} Topic={item.Topic} Status={item.Status} Created={item.Created} />
            ))}
        </div>
    )
}

export default MessageList;