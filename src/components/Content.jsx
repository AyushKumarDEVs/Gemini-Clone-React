import React from "react";
import ExamlePromptBox from "./ExamlePromptBox";

function Content() {
  return (
    <div className="w-full h-full overflow-y-scroll scrollbar-thin scrollbar-thumb-rounded scrollbar-thumb-gray-500 px-60  flex flex-col justify-between py-5">
      {
        //this div will disable if we have chats
      }
      <div className="w-full h-fit flex flex-col gap-16">
        <div className=" flex flex-col gap-1">
          <h1 className="text-transparent bg-clip-text text-6xl  font-semibold font-sans h-20 bg-gradient-to-r from-blue-500 via-red-500 to-red-900">
            Hello, Ayush
          </h1>
          <h2 className="text-transparent bg-clip-text text-6xl font-semibold font-sans h-20 bg-gray-400">
            How can I help you today?
          </h2>
        </div>

        <div className=" flex gap-5 w-full h-52">
          <ExamlePromptBox
            prompt={
              "Outline an organized & logical sales pitch for a new product"
            }
            icon={"src/assets/question_icon.png"}
          />
        </div>
      </div>

      {
        //this div will enaple if we have chats
      }

      <div className="w-full h-fit flex flex-col gap-16 overflow-y-scroll">

      </div>

      <div className=" flex flex-col items-center px-4 gap-3">
        <div className="w-full h-16 bg-slate-100 rounded-full flex justify-start px-7 py-5 items-center">
            <input type="text" name="" id="" className="bg-transparent w-full outline-transparent outline-none placeholder-gray-600 text-lg" placeholder="Enter a prompt here"/>
            <div className="flex gap-4 ml-3">
            <button><img className='w-8 h-6 ' src="src\assets\gallery_icon.png" alt="menubtn" /></button>
            <button><img className='w-8 h-6 ' src="src\assets\mic_icon.png" alt="menubtn" /></button>
            <button><img className='w-8 h-6 ' src="src\assets\send_icon.png" alt="menubtn" /></button>

            </div>
           
        </div>
        <h6 className="text-xs">Gemini may display inaccurate info, including about people, so double-check its responses. Your privacy & Gemini Apps</h6>
      </div>
    </div>
  );
}

export default Content;
