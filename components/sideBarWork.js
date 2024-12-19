import React from 'react';
import { FaHouseChimney } from "react-icons/fa6";
import SideBarComp from './sideComponent';

function SideBarComponent(){
    // use later border-b
    return(
        <div className=" my-1   pb-1 text-green-400">
            <h3 className=' text-gray-900 mb-1 font-semibold' style={{'font-size': '0.50rem',
    'line-height': '.75rem' }}>My work</h3>
              <SideBarComp title={'Sales acelerator'}/>
              <SideBarComp title={'Dashboards'} />
              {/* <SideBarComp title={'Activities'} />    */}
        </div>
    )
}

export default SideBarComponent;
