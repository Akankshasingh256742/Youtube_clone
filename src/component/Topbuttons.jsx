import React from 'react'
import CustomButton from './CustomButton'

const list =['All','Music','Web Devlopment','T-series','Data Structure','Indian Pop Music','Mixes','Sunidhi chauhan','Coding','React','Fashion']

function Topbuttons() {
  return (
    <div className='flex gap-2'>
        {list.map((item,index)=>{
           return <CustomButton key={index}  name={item} />
        })}
        
    </div>
  )
}

export default Topbuttons