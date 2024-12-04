import React, { useEffect, useState } from 'react'
import { link_detail } from '../util/Constant'
import Vediocard from './Vediocard'
import { Link } from 'react-router-dom'

function Vediocontainer() {
    useEffect(()=>{
        fetchdata()
     },[])
  
     const fetchdata = async()=>{
        const response = await fetch(link_detail)
        const data = await response.json()
        
        setvediodata(data.items)
     } 
   
     const [vediodata,setvediodata] = useState([])
   
  
  return (
   <div className='flex flex-wrap gap-8 mt-3'>
    {vediodata.length>0 
       ? vediodata.map((data)=>{
            return <Vediocard key={data.id} data={data} />})
        :<p>loading..</p>} 
     </div>
     
  )
}



export default Vediocontainer