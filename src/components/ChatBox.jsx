import React, { useEffect, useState } from 'react'
import {assets} from "../assets/assets.js"
import run from '../features/GeminiInitialize.js';
import { useDispatch, useSelector } from 'react-redux';
import { AddChats, AddRecentChats, UpdateChat } from '../slices/ChatStoreSlice.js';

function ChatBox({prompt,id,isResponseCompleted,Response}) {
  const [response, setresponse] = useState(null);
  const dispatch=useDispatch();
  let ChatsList = useSelector((state) => state.ChatsList);


  useEffect(() => {
    prompt&&!isResponseCompleted? run(prompt).then((data)=>{
      if(data){
        setresponse(data);
        dispatch(
          UpdateChat({
            isResponseCompleted:true,
            response:data,
          })
        );   
        
        dispatch(AddRecentChats({
          Chat:{
            isResponseCompleted:true,
            prompt:prompt,
            response:data,
            id:id,
          }          
        }))
       

      }
    }).catch((e)=>console.log(e))
    :
    prompt&&isResponseCompleted? setresponse(Response)
    :null

    console.log(ChatsList)
    console.log(Response)


  }, [Response])
  
  return (
    <div className='flex flex-col gap-8 w-full h-fi'>
       
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