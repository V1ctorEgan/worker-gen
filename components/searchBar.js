import React from "react";

function SearchBar(){
    return(
        <div className="w-[22rem] mt-2 shadow-lg flex justify-center items-center h-6 ml-2 rounded-md bg-gradient-to-r from-blue-300 to-purple-400 border border-r-green-400 z-10">
            <input  className="bg-gray-100 h-[95%] shadow-sm w-[99%] rounded-sm flex items-center text-xs pl-2" placeholder="Sort, filter and search with Copilot"/>
        </div>
    )
}
export default SearchBar;