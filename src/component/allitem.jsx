import React from 'react'
import { Link } from 'react-router-dom'
import { useContext,useState,useEffect } from 'react'
import { Alldata } from '../context'
const allitem = () => {
    const {data,setCartitem,cartitem} = useContext(Alldata)
    const [search,setsearch] = useState('')
    const [item,setitem] = useState(data)

useEffect(()=>{
    const filter = data.filter((e)=>{
       if((e.info.name).toLowerCase().includes(search.toLowerCase())||(e.info.locality.address).toLowerCase().includes(search.toLowerCase())  ){
        return e
       }
    })
    setitem(filter)
  console.log(search)
},[search])



    function ratingg(i){
        let x = Number(Math.floor(i))
        let rating = ''
        switch(x){
         case 0:
             rating = '<i className="bi bi-star-fill"></i> '
         break;
         case 1:
             rating = ' ⭐ '
         break;
         case 2:
             rating = '⭐ ⭐'
         break;
         case 3:
             rating = '⭐ ⭐ ⭐ '
         break;
         case 4:
             rating = '⭐ ⭐ ⭐ ⭐ '
         break;
         case 5:
             rating = '⭐ ⭐ ⭐ ⭐ ⭐ '
         break;
       
    
       
    
    
        }
        return rating
       }

const handelcart = (e)=>{
    setCartitem([...cartitem,e])

}
  return (
    <div className='allcads' >
         
  <input onChange={(e)=>setsearch(e.target.value)} type="text" name="" id=""  placeholder='Search for restaurant, cuisine or a dish'/>

{item.length == 0 ?'empty':''}
    <div className='cards-box' >
      
    {item.map((e)=>{
     

       return (
        
         
       <div key={e.id} className="card">
           <Link to={`${e.info.name}`} >
          <div className="card-image">
          <img className='card-img' src={e.info.image.url} alt="" />
          </div>
          </Link>
          <div className="text-bottom">
              <div className="text-mrp">
              <h3 className='food-title' >{e.info.name}</h3>
              <h3 className='food-title' >{e.info.cfo.text}</h3>
              </div>
              <div className="btn">
              
              <p>Address: {e.info.locality.address}</p>
                  <p title={e.info.rating.rating_subtitle} >{ratingg(e.info.rating.rating_text) }</p>
                 
                  <button onClick={()=>handelcart(e)} className='addtocart' >Add to cart</button>
              </div>
        
          </div>
         
        

          </div>
      )
    })}
   
  </div>
  </div>
  )
}

export default allitem
