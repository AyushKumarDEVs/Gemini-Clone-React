import React from 'react'

function LeftNavBar() {
  return (
    <>

        <div className='bg-slate-200 p-7 flex gap-5 flex-col justify-start items-center w-fit h-screen '>
            <div className='flex flex-col gap-16 items-center'>
            <button><img className='w-7 h-7 ' src="src\assets\menu_icon.png" alt="menubtn" /></button>

            <button className='rounded-full bg-slate-400 p-2'><img className='w-5 h-5  rounded-full' src="src\assets\plus_icon.png" alt="plusbtn" /></button>
            </div>
            <div className='flex flex-col gap-5 items-center'>
            <button><img className='w-5 h-5 ' src="src\assets\question_icon.png" alt="menubtn" /></button>
            <button><img className='w-5 h-5 ' src="src\assets\history_icon.png" alt="menubtn" /></button>
            <button><img className='w-5 h-5 ' src="src\assets\setting_icon.png" alt="menubtn" /></button>

            </div >
        </div>

    </>
  )
}

export default LeftNavBar