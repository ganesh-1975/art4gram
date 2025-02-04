import React, { useState } from "react";
import fb from "../assets/fb.svg";
import linkedin from "../assets/linkedin.svg";
import insta from "../assets/insta.svg";

function Footer() {
  return (
    <>
      <h1>Footer</h1>
      <div className="flex">
        <div className="hover:bg-white w-fit p-0.5">
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src={insta}
              alt="Instagram"
              className="w-6 h-6 transition duration-300 filter invert hover:invert-0"
            />
          </a>
        </div>

        <div className="hover:bg-white w-fit">
          {" "}
          <a href="https://instagram.com" target="_blank">
            <img
              src={fb}
              alt="Instagram"
              className="w-6 h-6 transition duration-300 filter invert hover:invert-0"
            />
          </a>
        </div>

        <div className="hover:bg-white w-fit ">
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src={linkedin}
              alt="Instagram"
              className="w-6 h-6 transition duration-300 filter invert hover:invert-0"
            />
          </a>
        </div>
      </div>
    </>
  );
}

export default Footer;
