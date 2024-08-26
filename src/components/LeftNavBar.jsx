import React from 'react'
import Recent from './Recent'
import {assets} from "../assets/assets.js"

function LeftNavBar() {
  return (
    <>

        <div className='bg-slate-200 p-7 py-5 flex gap-5 flex-col justify-between items-start w-fit h-screen '>
            <div className='flex flex-col justify-start gap-16 items-start'>
            <button><img className='w-9 h-7 ' src={assets.menu_icon} alt="menubtn" /></button>            
           {
            //<Recent/>
           } 

            </div>
            <div className='flex flex-col gap-5 items-center'>
            <button className='w-5 h-5'><img className='w-5 h-5 ' src={assets.question_icon} alt="menubtn" /></button>
            <button className='w-5 h-5'><img className='w-5 h-5 ' src={assets.history_icon} alt="menubtn" /></button>
            <button className='w-5 h-5'><img className='w-5 h-5 ' src={assets.setting_icon} alt="menubtn" /></button>

            </div >
        </div>

    </>
  )
}

export default LeftNavBar