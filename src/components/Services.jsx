import React from "react";
import ServiceCard from "./sub/ServiceCard";

function Services() {
  let items = [
   
    {
      img: "https://images.unsplash.com/photo-1481487196290-c152efe083f5?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8d2Vic2l0ZXxlbnwwfHwwfHx8MA%3D%3D",
      title: "webSite Designing",
    },
    {
      img: "https://plus.unsplash.com/premium_photo-1679079456083-9f288e224e96?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8dmlkZW8lMjBlZGl0aW5nfGVufDB8fDB8fHww",
      title: "Video Editing",
    },
    {
      img: "https://images.unsplash.com/photo-1572044162444-ad60f128bdea?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8R3JhcGhpYyUyMGRlc2lnbmluZ3xlbnwwfHwwfHx8MA%3D%3D",
      title: "Graphic Designing",
    },
  ];
  return (
    <>
      <div className="p-8">
        <h1>Our Digital Services</h1>
        <div className="flex justify-between ">
          {items.map((item) => (
            <ServiceCard img={item.img} title={item.title} />
          ))}
        </div>
      </div>
    </>
  );
}

export default Services;
