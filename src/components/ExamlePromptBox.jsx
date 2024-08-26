import React from "react";

function ExamlePromptBox({ prompt, icon }) {
  return (
    <div className="bg-slate-200 w-full h-full  p-5 rounded-lg flex flex-col justify-between items-center gap-5">
    <h5 className=" text-lg w-40 text-wrap ">{prompt}</h5>
    <div className='flex justify-end w-full h-full'>
    <button><img className='w-7 h-7 ' src={icon} alt="menubtn" /></button>

    </div>


  </div>
  )
}

export default ExamlePromptBox