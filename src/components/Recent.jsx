import React from 'react'
import ChatEntry from './ChatEntry'

function Recent() {
  return (
    <div className=' flex flex-col h-fit w-fit justify-start gap-3'>
        <button className=' w-8 h-8 rounded-full bg-slate-400 p-2 flex justify-center items-center'><img className='w-5 h-5  rounded-full' src="src\assets\plus_icon.png" alt="plusbtn" /></button>

        <h1>Recent</h1>
        <div>
            <ChatEntry/>
        </div>
    </div>
  )
}

export default Recent