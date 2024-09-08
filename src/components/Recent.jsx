import React, { useEffect, useState } from 'react'
import ChatEntry from './ChatEntry'
import { useDispatch, useSelector } from "react-redux";

function Recent() {
  let RecentList=useSelector(state=>state.RecentList);
  let [recentlist, setrecentlist] = useState([]);
  useEffect(() => {
    setrecentlist(RecentList)

  }, [RecentList])
  
  
  return (
    <div className=' flex flex-col h-fit w-fit justify-start gap-3'>
        <button className=' w-8 h-8 rounded-full bg-slate-400 p-2 flex justify-center items-center'><img className='w-5 h-5  rounded-full' src="src\assets\plus_icon.png" alt="plusbtn" /></button>

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