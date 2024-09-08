import React, { useDebugValue } from "react";
import { useDispatch } from "react-redux";
import { AddChats } from "../slices/ChatStoreSlice";


function ExamlePromptBox({ prompt, icon }) {
  const dispatch = useDispatch();

  function onclick(){
    dispatch(
      AddChats({
        Chat: {
          id: Date.now(),
          isResponseCompleted: false,
          prompt: prompt,
          response: "",
        },
      })
    );
  }
 
 
  return (
    <div onClick={()=>onclick()}  className="bg-slate-200 w-full h-full  p-5 rounded-lg flex flex-col justify-between items-center gap-5">
    <h5  className=" text-lg w-40 text-wrap ">{prompt}</h5>
    <div className='flex justify-end items-center w-full h-fit'>
    <button><img className='w-7 h-7 ' src={icon} alt="menubtn" /></button>

    </div>


  </div>
  )
}

export default ExamlePromptBox