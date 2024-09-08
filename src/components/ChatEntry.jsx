import React, { useEffect, useState } from 'react'
import {assets} from "../assets/assets.js"
import { useDispatch, useSelector } from 'react-redux'
import { SetChatsList } from '../slices/ChatStoreSlice.js';

function ChatEntry({prompt,id,response}) {
  let RecentList=useSelector(state=>state.RecentList);
  let [recentlist, setrecentlist] = useState();
  let ChatsList = useSelector((state) => state.ChatsList);

  const dispatch=useDispatch();
  useEffect(() => {
    console.log("dkkk")
    setrecentlist(RecentList)

  }, [RecentList])
  

  function onclick(){

    dispatch(SetChatsList({c:{response:response,id:id,prompt:prompt,isResponseCompleted:true}}))
    console.log(ChatsList)
  }
  return (
    <div onClick={()=>onclick()} className=' flex gap-2 '>
    <button><img className='w-5 h-5 ' src={assets.message_icon} alt="menubtn" /></button>
    <p className='w-48 overflow-hidden text-ellipsis whitespace-nowrap'>
  {prompt}
</p>
</div>
  )
}

export default ChatEntry