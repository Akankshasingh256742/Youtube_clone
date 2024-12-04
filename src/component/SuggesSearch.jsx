import React, { useEffect, useState } from 'react'
import { useSelector } from "react-redux";
import { search_suggestion } from '../util/Constant'
import { Link } from 'react-router-dom';

function SuggesSearch() {
  const sugest = useSelector((store) => store.result.a)

  const [searchlist, setsearchlist] = useState([])


  useEffect(() => {
    const result = async () => {
      const response = await fetch(`https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=25&q=${sugest}&key=AIzaSyAe-aEBXlxjKgcZjZx-OK-gnrvR6V3n6Tg`)
      const data = await response.json()
      setsearchlist(data)
    }
    result()

  }, [sugest])


  const { items = [] } = searchlist

  return (
    <div>
      {items.length > 0 && <div>
          {items.map((item) => {
            console.log(item)
            const { title, channelTitle, thumbnails } = item.snippet
            return (
             <Link to={`/watch?v=${item.id.vedioId}`}> <div className='flex gap-5 mb-4'>
                <img src={thumbnails.medium.url} alt="" />
                <div className='flex flex-col gap-2'>
                  <p className='font-bold'>{title}</p>
                  <p>{channelTitle}</p>
                </div>
                </div>
                </Link>
            )
          })}
        </div>
      }
    </div>
  )
}

export default SuggesSearch