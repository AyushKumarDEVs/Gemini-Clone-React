import React, { useEffect, useState } from 'react'
import ChatEntry from './ChatEntry'
import { useDispatch, useSelector } from "react-redux";
import { clearChatlist, SetChatsList } from '../slices/ChatStoreSlice';

function Recent() {
  let RecentList=useSelector(state=>state.RecentList);
  const dispatch=useDispatch();
  
  let [recentlist, setrecentlist] = useState([]);
  useEffect(() => {
    setrecentlist(RecentList)

  }, [RecentList])

  function onclicknew(){
    dispatch(clearChatlist())
  }
  
  
  return (
    <div className=' flex flex-col h-fit w-fit justify-start gap-3'>
        <button  onClick={()=>onclicknew()} className=' w-8 h-8 rounded-full bg-slate-400 p-2 flex justify-center items-center'><img className='w-5 h-5  rounded-full' src="src\assets\plus_icon.png" alt="plusbtn" /></button>

        <h1>Recent</h1>
        <div>
        {
          recentlist.length>0? 
          recentlist.map((each)=>(
            <div key={each.id}>
            <ChatEntry prompt={each.prompt} id={each.id} response={each.response}/>
        </div>
          ))
          :
          null
        }
          
        </div>
        
       
    </div>
  )
}

export default Recent