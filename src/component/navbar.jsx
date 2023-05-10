import React from 'react'
import { Outlet } from 'react-router-dom'
import { NavLink } from 'react-router-dom'
import Carttogle from './carttogle'
import { useContext } from 'react'
import { useState } from 'react'
import { Alldata } from '../context'
const navbar = () => {
  const {cartitem} = useContext(Alldata)
  const [cartvisible,setcartvisible] = useState('')
  const handeltoggle = ()=>{
    setcartvisible('visible')
    console.log('mouse')
  }
  const handelLeave = ()=>{
    setcartvisible('')
  }
  return (
    <> <div className='navbar'>
       <div className="logo-left">
        <h3>logo</h3>
       </div>
       <div className="nav-right">
           <ul>
            <li>
               <NavLink to={'/'} ><a href="#">Home</a></NavLink> 
            </li>
            <li> <a href="#">Foods</a></li>
               <li>  <a href="#">Restaurants</a></li>
               <span  onMouseLeave={handelLeave}  className='mycart' ><li><a onMouseEnter={handeltoggle} href="#">My Cart <i className="bi bi-cart3"></i> </a></li>
               <span className='totalitem' >{cartitem.length}</span>
                {cartvisible? <Carttogle/>:""}
              
               </span>
              
             </ul>
        <button className='order-now' >Order Now</button>
       </div>
    
    </div>
    <Outlet/>
    </>

  )
}

export default navbar
