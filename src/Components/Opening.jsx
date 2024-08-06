import React from "react";
import loading from "../assets/download.gif";
function Opening() {
  return (
    <div className="flex flex-col w-100 justify-center items-center ">
      <div className="flex justify-center">
        <img src={loading} alt="" />
      </div>
      <p className="text-2xl text-light-blue">Loading...</p>
    </div>
  );
}

export default Opening;
