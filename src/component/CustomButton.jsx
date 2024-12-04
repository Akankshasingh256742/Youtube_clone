import React from 'react'

function CustomButton({name}) {
  return (
    <div>
       <button className='border-0 py-1 rounded-lg bg-gray-200 px-3 border-black'>{name}</button>
    </div>
  )
}

export default CustomButton