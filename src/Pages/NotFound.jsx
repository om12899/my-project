import React from "react";
import alert from "../assets/alertIcon.png";
import { useNavigate } from "react-router-dom";

function NotFound() {
  const navigate = useNavigate();
  return (
    <div className="flex flex-col items-center justify-center h-fit text-center text-light-blue">
      <img
        className=" flex-1 mb-4"
        style={{ height: "96px", maxWidth: "100%" }}
        src={alert}
        alt="Alert Icon"
      />
      <p className="text-2xl sm:text-3xl md:text-4xl font-semibold">
        Sorry, this link does not exist or is under maintenance.
      </p>
      <button
        onClick={() => navigate("/")}
        className="mt-16 text-lg border border-light-blue p-3 rounded-md"
      >
        Go to Homepage
      </button>
    </div>
  );
}

export default NotFound;
