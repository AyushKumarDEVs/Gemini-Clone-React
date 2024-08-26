import React from "react";
import ExamlePromptBox from "./ExamlePromptBox";
import ChatBox from "./ChatBox";
import {assets} from "../assets/assets.js"
function Content() {
  return (
    <div className="w-full h-full overflow-y-scroll sm:gap-1 scrollbar-none  px-2 sm:px-48 sm:py-5 flex flex-col justify-between py-5 ">
      {
        //this div will disable if we have chats
      
      <div className="w-fit h-fit flex flex-col gap-16 sm:gap-10">
        <div className=" flex flex-col  gap-3 item-center">
          <h1 className="text-transparent bg-clip-text text-4xl sm:text-5xl  font-semibold font-sans h-fit sm:h-14 bg-gradient-to-r from-blue-500 via-red-500 to-red-900">
            Hello, Ayush
          </h1>
          <h2 className="mb-5 text-transparent bg-clip-text text-3xl sm:text-5xl font-semibold font-sans sm:h-16 h-20 bg-gray-400">
            How can I help you today?
          </h2>
        </div>

        <div className=" sm:grid grid-cols-1 sm:grid-cols-4 h-52 gap-5 w-full grid-rows-1 sm:w-full  overflow-x-scroll  scrollbar-none ">
          
         
           <ExamlePromptBox
            prompt={       
              "Outline an organized & logical sales pitch for a new product"
            }
            icon={assets.mic_icon}
          />
           <ExamlePromptBox
            prompt={
              "Outline an organized & logical sales pitch for a new product"
            }
            icon={assets.mic_icon}
          />
           <ExamlePromptBox
            prompt={       
              "Outline an organized & logical sales pitch for a new product"
            }
            icon={assets.mic_icon}
          />
           <ExamlePromptBox
            prompt={
              "Outline an organized & logical sales pitch for a new product"
            }
            icon={assets.mic_icon}
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
        <div className="w-full h-fit sm:h-16 bg-slate-100 rounded-lg sm:rounded-full gap-5  flex flex-col sm:flex-row justify-start sm:justify-center first-letter: px-7 py-5 items-center">
            <textarea  placeholder="Enter a prompt here" className=" scrollbar-none scrollbar-thumb-rounded scrollbar-thumb-gray-500 resize-none grid-rows-2 sm:grid-rows-4 w-full h-fit sm:h-full placeholder-gray-700 bg-transparent  outline-none"></textarea>
            <div className="flex gap-4 ml-3">
            <button className="w-6 h-5"><img className='w-8 h-6 ' src={assets.gallery_icon} alt="menubtn" /></button>
            <button className="w-6 h-5"><img className='w-8 h-6 ' src={assets.mic_icon} alt="menubtn" /></button>
            <button className="w-6 h-5"><img className='w-8 h-6 ' src={assets.send_icon} alt="menubtn" /></button>

            </div>
           
        </div>
        <h6 className="text-xs">Gemini may display inaccurate info, including about people, so double-check its responses. Your privacy & Gemini Apps</h6>
      </div>
    </div>
  );
}

export default Content;
