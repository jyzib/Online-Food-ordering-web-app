import React from 'react'
import { useParams } from 'react-router-dom'
import { useContext } from 'react'
import { Alldata } from '../context'
const card = () => {
    const {data,setCartitem,cartitem} = useContext(Alldata)
    const x = useParams()
    console.log(x.id)
    const onecartitem = data.filter((e)=>{
       if(e.info.name == x.id){
        return e
       }
    })
  const handelclick = (e)=>{
    setCartitem([...cartitem,e])
  }
console.log(onecartitem)
  return (
    <div>
      {onecartitem.map((e,i)=>{
        return(
            <div key={i} className="">
         <img src={e.info.image.url} alt="" />
         {e.info.cuisine.map((m)=>{
            return (
                <h3>{m.name}</h3>
            )
         })}
         <button onClick={()=>handelclick(e)} >add to cart</button>
            </div>
        )
      })}
    </div>
  )
}

export default card
