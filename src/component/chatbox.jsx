import React from 'react'
import Chatboxmsg from './chatboxmsg'
import { useState } from 'react'
const Chatbox = () => {
    const [msg,setMassage] = useState(true)
  return (
    <>
    {msg?<Chatboxmsg/>:''}
    
    <div className='chat__box' >
        <i onClick={()=>setMassage(!msg)} className="bi bi-chat-dots-fill"></i>
      
    </div>
    </>
  )
}

export default Chatbox
