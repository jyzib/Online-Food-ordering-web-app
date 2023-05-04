import React from 'react'
import { Outlet } from 'react-router-dom'

const navbar = () => {
  return (
    <> <div className='navbar'>
       <div className="logo-left">
        <h3>logo</h3>
       </div>
       <div className="nav-right">
           <ul>
            <li>
                <a href="#">Home</a>
            </li>
            <li> <a href="#">Foods</a></li>
               <li>  <a href="#">Restaurants</a></li>
              <li>   <a href="#">My Cart</a></li>
             </ul>
        <button className='order-now' >Order Now</button>
       </div>
    
    </div>
    <Outlet/>
    </>

  )
}

export default navbar
