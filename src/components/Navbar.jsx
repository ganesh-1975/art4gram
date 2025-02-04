import React from "react";
import logo from "../assets/logo.png";

function Navbar() {
  return (
    <>
      <div className="flex justify-between items-center p-2 ">
        <img src={logo} alt="LOGO" height="100" width="100" />
        <ul className="flex gap-6 text-lg">
          <li>
            <a href="">About us</a>
          </li>
          <li>
            <a href="">Services</a>
          </li>
          <li>
            <a href="">Our Clients</a>
          </li>
        </ul>
        <div className="bg-white text-black px-4 py-2 rounded-xl">
          <a href="https://wa.me/919499003946?text=Hi there!" target="_blank">
            Get in Touch 
          </a>
        </div>
      </div>
    </>
  );
}

export default Navbar;
