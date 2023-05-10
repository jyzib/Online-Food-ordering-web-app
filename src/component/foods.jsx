import React from 'react'
import { useEffect,useState } from 'react'
import { useContext } from 'react'
import { Alldata } from '../context'
import { Link } from 'react-router-dom'
const foods = () => {
 const {data,setData} = useContext(Alldata)

   
    // useEffect(()=>{
    //     const datafetch = async ()=>{
    //         const responce = await fetch('http://localhost:3500/restrunt')
    //         const alldata = await responce.json()
    //         console.log(alldata.slice(1))
    //         setData(alldata)
    //      } 
    //      datafetch()

    // },[])
   function ratingg(i){
    let x = Number(Math.round(i))
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
  return (
    <div className='cards-box' >
      {data.slice(2,8).map((e)=>{
       

         return (
           
         <div key={e.id} className="card">
             <Link to={`${e.info.name}`} >
            <div className="card-image">
            <img className='card-img' src={e.info.image.url} alt="" />
            </div>
            <div className="text-bottom">
                <div className="text-mrp">
                <h3 className='food-title' >{e.info.name}</h3>
                <h3 className='food-title' >{e.info.cfo.text}</h3>
                </div>
                <div className="btn">
                <p>{e.info.locality.address}</p>
                    <p title={e.info.rating.rating_subtitle} >{ratingg(e.info.rating.rating_text) } </p>
                   
                    <button className='addtocart' >Add to cart</button>
                </div>
          
            </div>
           
            </Link>

            </div>
        )
      })}
     
    </div>
  )
}

export default foods