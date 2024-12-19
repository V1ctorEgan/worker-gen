import React from "react";

function MessageBar() {
  return (
    <div className="w-full md:w-1/7 shadow-xl  border-l-blue-400 border-r-purple-400 border-t-blue-500 border-x-2 border h-[16rem] border-t-2 bg-white rounded-xl p-3 m-1 mr-20  border-gradient-to-r from-blue-500 to-purple-500">
      jgkflj
      <div>
        <div className="flex border border-pink-400">
          <div className="font-semibold">
            Hi Mona, <span className="text-blue-700">68%</span> of goal achieved
            and the rest can be achieved by focusing on 20 top leads.
          </div>

          <div className="flex flex-col ">
            <div>
              <span>one month until Q4 ends</span>
            </div>

            <div className="w-full border border-gray-800"></div>
            <div className="flex gap-3">
              <div className="flex items-center text-[0.5rem]">
                <span className="bg-green-400 w-2 h-2 rounded-full"></span>{" "}
                <span>Won $18m</span>
              </div>
              <div className="flex items-center text-[0.5rem]">
                <span className="bg-blue-400 w-2 h-2 rounded-full"></span>{" "}
                <span>Committed $8m</span>
              </div>
              <div className="flex items-center text-[0.5rem]">
                <span className="bg-purple-400 w-2 h-2 rounded-full"></span>{" "}
                <span>Best case $7m</span>
              </div>
              <div className="flex items-center text-[0.5rem]">
                <span className="bg-orange-400 w-2 h-2 rounded-full"></span>{" "}
                <span>Qualified $3m</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div></div>
      <div></div>
    </div>
  );
}

export default MessageBar;
