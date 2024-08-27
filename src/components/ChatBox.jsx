import React, { useEffect, useState } from 'react'
import {assets} from "../assets/assets.js"
import run from '../features/GeminiInitialize.js';
import { useDispatch } from 'react-redux';
import { UpdateChat } from '../slices/ChatStoreSlice.js';

function ChatBox({prompt,id}) {
  const [response, setresponse] = useState(null);
  const dispatch=useDispatch();


  useEffect(() => {
    prompt? run(prompt).then((data)=>{
      if(data){
        setresponse(data);
        dispatch(UpdateChat({response:response,id:id,isResponseCompleted:true}));
        console.log(data)

      }
    }).catch((e)=>alert(e))
    :
    null
  }, [])
  
  return (
    <div className='flex flex-col gap-8 w-full h-fit'>
       
       <div className='flex gap-5 h-fit w-full items-start justify-between'>
       <img className='items-start w-10 h-10 rounded-full' src={assets.user_icon} alt="plusbtn" />
        <p className='text-lg w-full'>{prompt}</p>
       </div>

       <div className='flex gap-5 h-fit w-full items-start justify-between'>
       <img className='items-start w-10 h-10 rounded-full' src={assets.gemini_icon} alt="plusbtn" />
        <p className='text-lg w-full'>{
          response!=null? response:"Loading..."
      }</p>
       </div>

    </div>
  )
}

export default ChatBox