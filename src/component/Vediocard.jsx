import React from 'react'
import { Link } from 'react-router-dom'

function Vediocard({data}) {
    const { snippet , statistics} = data
    const {title,channelTitle,thumbnails} = snippet
  return (
    <Link to={`/watch?v=${data.id}`}> <div className='w-64'>
        <img className='rounded' src={thumbnails.medium.url} alt="" />
        <p className='pt-1 font-bold'>{title}</p>
        <p>{channelTitle}</p>
    </div>
    </Link>
  )
}

export default Vediocard