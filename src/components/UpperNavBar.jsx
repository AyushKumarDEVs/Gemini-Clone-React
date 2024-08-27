import React from 'react'
import {assets} from "../assets/assets.js"

function UpperNavBar() {
  return (
   <>
   
        <div className=' flex justify-between p-4 max-w-full h-fit'>
            <h1 className=' text-2xl font-semibold'>Gemini</h1>
            <button className='rounded-full'><img className='w-11 h-11 rounded-full' src={assets.user_icon} alt="menubtn" /></button>

        </div>
   
   </>
  )
}

export default UpperNavBar