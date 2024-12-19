import React from "react";
import { IoIosArrowDown } from "react-icons/io";
import { FaSquare } from "react-icons/fa6";

function MessageBar() {
  return (
    <div className="w-full md:w-1/7 shadow-2xl  border-l-blue-400 border-r-purple-400 border-t-blue-500 border-x-2 border h-[16rem] border-t-2 bg-white rounded-xl p-3 m-1 mr-20  border-gradient-to-r from-blue-500 to-purple-500">
      <div>
        <div className="flex  -mt-3 items-center justify-start gap-2">
          <div className="font-semibold text-sm">
            Hi Mona, <span className="text-blue-700">68%</span> of goal achieved
            and the rest can be achieved by focusing on 20 top leads.
          </div>

          <div className="flex flex-col items-start justify-center bottom-1 pb-2">
            <div>
              <span className="text-[0.5rem] mr-[10rem]">
                1 month until Q4 ends
              </span>
              <span className="text-[0.5rem] mr-[5rem]">
                Target: $45 million
              </span>
              <span className="text-[0.5rem]">68% of target achieved</span>
            </div>

            <div className="w-full  border-white h-2 rounded-r-full flex">
              <div className="bg-green-400 h-full w-[9rem] rounded-l-full "></div>
              <div className="bg-blue-400 h-full w-10"></div>
              <div className="bg-purple-400 h-full w-5"></div>
              <div className="bg-orange-400 h-full w-3"></div>
              <div className="bg-gray-400 h-full w-[15rem] rounded-r-full"></div>
            </div>
            <div className="flex gap-3">
              <div className="flex items-center text-[0.5rem] gap-1">
                <span className="bg-green-400 w-2 h-2 rounded-full"></span>{" "}
                <span>Won $18m</span>
              </div>
              <div className="flex items-center text-[0.5rem] gap-1">
                <span className="bg-blue-400 w-2 h-2 rounded-full"></span>{" "}
                <span>Committed $8m</span>
              </div>
              <div className="flex items-center text-[0.5rem] gap-1">
                <span className="bg-purple-400 w-2 h-2 rounded-full"></span>{" "}
                <span>Best case $7m</span>
              </div>
              <div className="flex items-center text-[0.5rem] gap-1">
                <span className="bg-orange-400 w-2 h-2 rounded-full"></span>{" "}
                <span>Qualified $3m</span>
              </div>
              <div className="flex items-center text-[0.5rem] gap-1">
                <span className="bg-gray-400 w-2 h-2 rounded-full"></span>{" "}
                <span>Leads $75m</span>
              </div>
            </div>
          </div>
          <div>
            <IoIosArrowDown />
          </div>
        </div>
      </div>
      {/* copilit sidee */}
      <div className="mt-1 flex p-2">
        <div className="border flex-[3] border-r-gray-200 pr-2 border-white">
          <div className="text-xs font-semibold">
            Copilot has pinpointed 20 key leads that show purchase intent and
            are actively engaging. These leads need your focus
          </div>
          <div className="flex flex-row p-2 gap-2 ">
            <div className="w-[24rem] shadow-sm h-[8rem] border rounded-md">
              <div className="flex  justify-start ">
                {" "}
                <div className="h-5 w-5 mt-2 ml-2 rounded-full bg-gray-300"></div>
                <div className="flex mt-1 ml-1 flex-col text-[0.59rem] font-semibold justify-center -left-3">
                  <div>Jane Reyes</div>
                  <div className="text-gray-400">COO. Northwind Traders</div>
                </div>
              </div>
              <div className="bg-gray-200 w-[95%] h-[4rem] rounded-lg ml-2 p-2">
                <div className="flex items-center gap-1 font-semibold">
                  <FaSquare className="text-xs" />{" "}
                  <span className="text-xs">Engage with Jane Reyes</span>
                </div>
                <div className="text-xs text-gray-500">
                  {" "}
                  Jane maybe interested in upgrading espresso machines for her
                  in-store coffee shops
                </div>
              </div>
              <div className="text-xs text-gray-400 ml-2 mt-2">
                Expand Business . High buying intent
              </div>
            </div>
            <div className="w-[24rem] h-[8rem] shadow-sm border rounded-md">
              <div className="flex  justify-start ">
                {" "}
                <div className="h-5 w-5 mt-2 ml-2 rounded-full bg-gray-300"></div>
                <div className="flex mt-1 ml-1 flex-col text-[0.59rem] font-semibold justify-center -left-3">
                  <div>Alan Munger</div>
                  <div className="text-gray-400">
                    Head of Real Estate Development . Contoso Coffee
                  </div>
                </div>
              </div>
              <div className="bg-gray-200 w-[95%] h-[4rem] rounded-lg ml-2 p-2">
                <div className="flex items-center gap-1 font-semibold">
                  <FaSquare className="text-xs" />{" "}
                  <span className="text-xs">
                    Prepare for a meeting with Alan
                  </span>
                </div>
                <div className="text-xs text-gray-500">
                  {" "}
                  Prepare for high buying intent meeting Copilot scheduled for 2
                  PM regarding upgrading service contract.
                </div>
              </div>
              <div className="text-xs text-gray-400 ml-2 mt-2">
                Expand Business . High buying intent
              </div>
            </div>
          </div>
        </div>
        <div className=" flex-[1.5] text-xs font-semibold pl-4">
          <div>Other key activities</div>
          <div className="border-2 shadow-sm h-[4rem] w-[17rem] rounded-lg border-t-0 mb-3">
            <div className="flex flex-row">
              <div className="h-6 w-6 mt-2 ml-2 rounded-full bg-gray-300"></div>
              <div className="flex mt-1 ml-1 flex-col text-[0.59rem] font-semibold justify-center -left-3">
                <div className="font-bold">Cafe A100 for Woodland Bank</div>
                <div className="text-gray-400 text-[.5rem]">
                  Woodland Bank .$280,000 . 8 days to close
                </div>
              </div>
            </div>
            <div className="bg-gray-100 w-[95%] h-[1rem] rounded-lg ml-2 pl-2">
              <div className="text-[.5rem] text-gray-500">Review draft and reply to Chris Naido</div>
            </div>
          </div>
          <div className="border-2 shadow-sm h-[4rem] w-[17rem] rounded-lg border-t-0">
            <div className="flex flex-row">
              <div className="h-6 w-6 mt-2 ml-2 rounded-full bg-gray-300"></div>
              <div className="flex mt-1 ml-1 flex-col text-[0.59rem] font-semibold justify-center -left-3">
                <div className="font-bold">Partnership opportunity for Fabrikam</div>
                <div className="text-gray-400 text-[.5rem]">
                  Fabrikam  .$280,000 . 12 days to close
                </div>
              </div>
            </div>
            <div className="bg-gray-100 w-[95%] h-[1rem] rounded-lg ml-2 pl-2">
              <div className="text-[.5rem] text-gray-500">Prepare me for Fabrikam's key stakeholder meeting</div>
            </div>
          </div>
          <div className="text-blue-800">show all key activities</div>
        </div>
      </div>
    </div>
  );
}

export default MessageBar;
