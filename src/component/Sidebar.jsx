import React from 'react'
import { useSelector } from 'react-redux'

function Sidebar() {
  
    const selector = useSelector((store)=> store.app.ismenuopen)
    if(!selector) return null
  return (
    <div className='p-3 w-48  absolute bg-white'>
        <ul className='pb-3'>
            <li className=' text-lg '>Home</li>
            <li className=' text-lg '>Shorts</li>
            <li className='text-lg '>Subscription</li>
        </ul>
        <hr
            style={{
              border: "1px solid pt-3 rgba(4, 10, 12, 0.10)",
            }}
          />
        <h4 className='py-1 text-xl'>You</h4>
        <ul className=''>
            <li className=' text-sm py-1 '>Your Channel</li>
            <li className=' text-sm py-1'>Playlists</li>
            <li className=' text-sm py-1'>History</li>
            <li className=' text-sm py-1'>Your vedios</li>
            <li className=' text-sm py-1'>Your cources</li>
            <li className=' text-sm py-1'>Watch later</li>
            <li className=' text-sm py-1'>Liked vedios</li>
        </ul>
    </div>
  )
}

export default Sidebar