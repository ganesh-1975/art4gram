import React from "react";

function ServiceCard({img, title}) {
  
  return (
    <>
      <div className="p-3 border rounded-xl border-neutral-500 w-fit shadow">
        <img
          src={img}
          height="400px"
          width="400px"
          className="rounded-xl mb-2"
        />
        <h3>{title}</h3>
      </div>
    </>
  );
}
export default ServiceCard;
