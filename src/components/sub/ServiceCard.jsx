import React from "react";

function ServiceCard({img, title, desc}) {
  
  return (
    <>
      <div className="p-3 border rounded-xl border-neutral-500 w-[460px] shadow">
        <img
          src={img}
          className="rounded-xl mb-4 h-[280px] object-cover w-full"
        />
        <h3 className="text-2xl font-semibold mb-2">{title}</h3>
        <p className="text-neutral-400 my-3">{desc}</p>
      </div>
    </>
  );
}
export default ServiceCard;
