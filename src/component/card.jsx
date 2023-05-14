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
    <div className='singlecart' >
      {onecartitem.map((e,i)=>{
        return(
            <div key={i} className="single-box">
         <img className='singlecart-img' src={e.info.image.url} alt="" />
         <h2>{e.info.name}</h2>
         <p>{e.info.cfo.text}</p>
         <p>{e.info.locality.address}</p>
         {e.info.cuisine.map((m)=>{
            return (
                <h3>{m.name}</h3>
            )
         })}
         <button className='addtocart' onClick={()=>handelclick(e)} >add to cart</button>
            </div>
        )
      })}
    </div>
  )
}

export default card
