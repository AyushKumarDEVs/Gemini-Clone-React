import React from "react";
import ExamlePromptBox from "./ExamlePromptBox";
import ChatBox from "./ChatBox";

function Content() {
  return (
    <div className="w-full h-full overflow-y-scroll scrollbar-thin scrollbar-thumb-rounded scrollbar-thumb-gray-500 px-2  flex flex-col justify-between py-5">
      {
        //this div will disable if we have chats
      
      <div className="w-full h-fit flex flex-col gap-16">
        <div className=" flex flex-col gap-1">
          <h1 className="text-transparent bg-clip-text text-4xl  font-semibold font-sans h-20 bg-gradient-to-r from-blue-500 via-red-500 to-red-900">
            Hello, Ayush
          </h1>
          <h2 className="text-transparent bg-clip-text text-3xl font-semibold font-sans h-20 bg-gray-400">
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
}
      {
        //this div will enaple if we have chats
       // <ChatBox/>
      }

      <div className="w-full h-fit flex flex-col gap-16 overflow-y-scroll">

      </div>

      <div className=" flex flex-col items-center px-4 gap-3">
        <div className="w-full h-fit bg-slate-100 rounded-lg gap-5  flex flex-col justify-start px-7 py-5 items-center">
            <textarea  placeholder="Enter a prompt here" className=" resize-none grid-rows-2 w-full h- placeholder-gray-400 bg-transparent  outline-none"></textarea>
            <div className="flex gap-4 ml-3">
            <button className="w-6 h-5"><img className='w-8 h-6 ' src="src\assets\gallery_icon.png" alt="menubtn" /></button>
            <button className="w-6 h-5"><img className='w-8 h-6 ' src="src\assets\mic_icon.png" alt="menubtn" /></button>
            <button className="w-6 h-5"><img className='w-8 h-6 ' src="src\assets\send_icon.png" alt="menubtn" /></button>

            </div>
           
        </div>
        <h6 className="text-xs">Gemini may display inaccurate info, including about people, so double-check its responses. Your privacy & Gemini Apps</h6>
      </div>
    </div>
  );
}

export default Content;
