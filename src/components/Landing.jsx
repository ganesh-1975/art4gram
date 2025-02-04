import React from "react";
import a4g from "../assets/a4g.mp4";

function Landing() {
  return (
    <>
      <div className="relative h-[calc(100vh-120px)] rounded-4xl">
        <video src={a4g} muted autoPlay className="h-full w-full "></video>
        <div className="text-center absolute top-0 translate-[42%] ">
          <div>
            <h1 className="font-black text-4xl mb-6">
              Designing the Future, One Pixel at a Time.
            </h1>
            <p className="text-neutral-400">
              We blend creativity, technology, and strategy to bring your ideas
              to life. Let's create something amazing together! 🚀
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
export default Landing;
