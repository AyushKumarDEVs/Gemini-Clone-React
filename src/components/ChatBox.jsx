import React from 'react'
import {assets} from "../assets/assets.js"

function ChatBox() {
  return (
    <div className='flex flex-col gap-8 w-full h-fit'>
       
       <div className='flex gap-5 h-fit w-full items-start justify-between'>
       <img className='mt-1 w-10 h-10 rounded-full' src={assets.user_icon} alt="plusbtn" />
        <p className='text-lg'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam, rerum. Harum corrupti dolorum similique, esse rerum labore qui illum consequuntur ipsum et aliquam laboriosam facilis vitae sit, cumque beatae repudiandae!</p>
       </div>

       <div className='flex gap-5 h-fit w-full items-start justify-between'>
       <img className='mt-1 w-10 h-10 rounded-full' src={assets.gemini_icon} alt="plusbtn" />
        <p className='text-lg'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam, rerum. Harum corrupti dolorum similique, esse rerum labore qui illum consequuntur ipsum et aliquam laboriosam facilis vitae sit, cumque beatae repudiandae!</p>
       </div>

    </div>
  )
}

export default ChatBox