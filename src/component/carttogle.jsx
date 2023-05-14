import React from 'react'
import { useContext } from 'react'
import { Alldata } from '../context'
const carttogle = () => {
    const {cartitem} = useContext(Alldata)
  
  return (
    <div className='carttoggle' >
      {cartitem.length==0?
      <div className='cart-empty' >      <img className='cartisempty' src="img/cart.svg" alt="" />
              <p>Empty</p>
      </div>

      
      :
      ''}
      {cartitem.map((e,i)=>{
         return (
         <div key={i} className="cart-item">
             <div className="cart-image">
                <img className='cart-img' src={e.info.image.url} alt="" />
             </div>
             <div className="cart-title">
                <h4>{e.info.name}</h4>
                <p>{e.info.cfo.text}</p>
             </div>
 
         </div>
          

         )
      })}
    </div>
  )
}

export default carttogle
