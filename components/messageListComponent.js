import React from 'react'

function MessageListComponent({Name, Topic, Status, Created}){
    return(
        <div className='w-full text-xs pl-2 border-t-2 p-2 flex '>
            <div className='mr-[9rem]'><input type='checkbox' /> <span className='text-blue-500 '>{Name}</span></div>
            <div className='mr-[4rem] text-gray-500'>{Topic}</div>
            <div className='mr-[15rem]'>{Status}</div> 
            <div className='mr-2'>{Created}</div>
        </div>
    )
}

export default MessageListComponent;
