import React, { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { togglemenu } from "../util/navslice";
import { search_link } from "../util/Constant";
import { cacheresult } from "../util/searchslice";
import { fetchresult } from "../util/searchfetch";
import { Link, Outlet } from "react-router-dom";

function Header() {
  const [searchparams, setsearchparams] = useState('');
  const [suggestion, setsuggestions] = useState([]);
  const [showsuggestion,setshowsuggestion] = useState(true);



  const cache = useSelector((store)=>store.search)
  
      useEffect(() => {
    
    const timer = setTimeout(() => {
      if(cache[searchparams]){
        setsuggestions(cache[searchparams])
      }
      else{
      searchsuggestion();
      }
    }, 200);

    return () => {
      clearTimeout(timer);
    };
  }, [searchparams]);


  const searchsuggestion = async () => {
    const response = await fetch(search_link + searchparams);
    const result = await response.json();
    
    setsuggestions(result[1]);

    dispatch(cacheresult({
          [searchparams]:result[1]
  }))
  };

  const dispatch = useDispatch();
  const handletoggle = () => {
    dispatch(togglemenu());
  };

  const handleFocus = () => setshowsuggestion(true);
  const handleBlur = () => {
    // Delay hiding the suggestions to allow clicks
    setTimeout(() => setshowsuggestion(false), 500);
  };

  return (
    <div className="flex flex-col">
    <div className="grid grid-flow-col p-1 m-2 shadow">
      <div className="flex items-center gap-1 col-span-1">
        <img
          onClick={() => handletoggle()}
          className="w-7 h-6"
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Hamburger_icon.svg/800px-Hamburger_icon.svg.png"
          alt=""
        />
        <img
          className="w-24"
          src="https://cdn.mos.cms.futurecdn.net/8gzcr6RpGStvZFA2qRt4v6.jpg"
          alt=""
        />
      </div>
      <div className="col-span-10 pl-60 mt-2 flex">
        <div className="flex flex-col">
          <input
            className="w-[400px] py-1 px-2 rounded-l-full text-gray-500 border border-gray-400"
            type="text"
            placeholder="Search"
            onChange={(e) => setsearchparams(e.target.value)}
            value={searchparams}
            onFocus={handleFocus}
            onBlur={handleBlur}
            
          />
          {showsuggestion?<div className="absolute top-14 left-[420px] z-50 bg-white flex flex-col w-96 px-3 py-2 cursor-pointer">
            {suggestion.map((item, index) => {
              
              return <Link key={index} to='/suggestion'><p onClick={()=> dispatch(fetchresult(item))} >{item}</p></Link>
               
            })}
          </div>
          :<div></div>}
          
          
        </div>
        <div>
          <Link to='/suggestion'>
          <button onClick={()=>dispatch(fetchresult(searchparams))} className="py-1 px-2 rounded-r-full text-black border border-gray-400 bg-gray-200">
            Search
          </button>
          </Link>
        </div>
      </div>
      <div className="col-span-1">
        <img
          className="w-12 rounded-full border-2 border-gray-300"
          src="https://cdn1.iconfinder.com/data/icons/website-internet/48/website_-_female_user-512.png"
          alt=""
        />
      </div>
      </div>
      <Outlet />
    </div>
  );
}

export default Header;
