import React from 'react'

function UpperNavBar() {
  return (
   <>
   
        <div className=' flex justify-between p-4'>
            <h1 className=' text-2xl font-semibold'>Gemini</h1>
            <button className='rounded-full'><img className='w-11 h-11 rounded-full' src="src\assets\user_icon.png" alt="menubtn" /></button>

        </div>
   
   </>
  )
}

export default UpperNavBar