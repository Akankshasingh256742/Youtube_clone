import React from "react";
import Sidebar from "./Sidebar";
import { Outlet } from "react-router-dom";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

function Body() {
  
  return (
    <div className="flex relative m-2 gap-3  ">
      <div className="z-20">
        <Sidebar />
      </div>
      <div className="flex gap-3 z-10 absolute">
        <div className="flex flex-col gap-7 m-3 ">
          <div className="w-10 flex-col justify-center items-center ">
            <Link to="/">
              <img
                className=""
                src="https://w7.pngwing.com/pngs/848/762/png-transparent-computer-icons-home-house-home-angle-building-rectangle-thumbnail.png"
                alt=""
              />
              <p className="text-sm">Home</p>
            </Link>
          </div>
          <div className="w-10 flex-col justify-center items-center">
            <img
              src="https://i.pinimg.com/originals/17/d2/18/17d21878c22fe49e7e4752eecaa36541.png"
              alt=""
            />
            <p className="text-sm">Shorts</p>
          </div>
          <div className="w-10 flex flex-col justify-center  items-center pl-2">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT1o_Vq9498Dq4nl5sDkxh0T4XL0GBzE-brxQ&s"
              alt=""
            />
            <p className="text-sm">Subscription</p>
          </div>
          <div className="w-10 flex flex-col justify-center  items-center">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSjhuoLq2CnjmuARZnELQlQvdBd1hlgMGVXhQ&s"
              alt=""
            />
            <p className="text-sm">You</p>
          </div>
        </div>
        <div>
        <Outlet />
        </div>
      </div>
    </div>
  );
}

export default Body;
