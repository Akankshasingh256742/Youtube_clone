import React from 'react'
import { useSearchParams } from 'react-router-dom'
import Comments from './Comments'

function Watch() {
  let [searchparams] = useSearchParams()
  return (
    <div className='flex flex-col gap-6'>
      <iframe
      className='rounded' 
      width="600" 
      height="365" 
      src={`https://www.youtube.com/embed/${searchparams.get('v')}`} 
      title="YouTube video player" 
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
      />
      <Comments />
    </div>
  )
}

export default Watch