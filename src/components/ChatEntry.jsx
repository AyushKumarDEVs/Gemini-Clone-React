import React from 'react'

function ChatEntry() {
  return (
    <div className=' flex gap-2 '>
    <button><img className='w-5 h-5 ' src="src\assets\message_icon.png" alt="menubtn" /></button>
    <p className='w-48 overflow-hidden text-ellipsis whitespace-nowrap'>
  Nobody's following me on Instagram so I created my own!
</p>
</div>
  )
}

export default ChatEntry