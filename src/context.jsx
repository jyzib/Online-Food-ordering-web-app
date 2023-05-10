import React from 'react'
import { createContext,useState,useEffect } from 'react'
export const Alldata = createContext()
const Context = ({children}) => {
const [data,setData] = useState([])
const [cartitem,setCartitem] = useState([])
    useEffect(()=>{
        const datafetch = async ()=>{
            const responce = await fetch('http://localhost:3500/restrunt')
            const alldata = await responce.json()
            console.log(alldata.slice(1))
            setData(alldata)
         } 
         datafetch()

    },[])
    
  return (
    <div >
        <Alldata.Provider value={{data,setData,cartitem,setCartitem}} >
          {children}
        </Alldata.Provider>
      
    </div>
  )
}

export default Context
