import React from 'react'

function ExamlePromptBox({prompt,icon}) {
  return (
    <div className="bg-slate-200 w-52 h-full  p-5 rounded-lg flex flex-col justify-between items-center gap-5">
    <p className=" text-lg text-wrap w-full ">{prompt}</p>
    <div className='flex justify-end w-full h-fit'>
    <button><img className='w-7 h-7 ' src={icon} alt="menubtn" /></button>

    </div>


  </div>
  )
}

export default ExamlePromptBox