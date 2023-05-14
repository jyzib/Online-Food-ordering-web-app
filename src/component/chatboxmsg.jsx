import React from 'react'
import Msgsent from './msgsent'
const chatboxmsg = () => {
  return (
    <div className='msg__box' >
      <div className="top">
       <Msgsent msg={'hi hi'} />
      </div>
      <div className="iinput">
        <input className='inputmsg' type="text" placeholder='Enter Your message' />
      </div>
    </div>
  )
}

export default chatboxmsg
