import React, { useState } from 'react'
import { useEffect } from 'react'
const msgsent = ({msg}) => {
    const msgarray = [
        {massage:"Hey please enter your name"}
    ]
    const [masage,setMasage] = useState(msgarray)
useEffect(()=>{
    masage.push({massage:msg})
    setMasage(masage)
    console.log(masage)
},[])

  return (
    <div>
      {masage.map((e)=>{
        return <p>{e.massage}</p>
      })}
    </div>
  )
}

export default msgsent
