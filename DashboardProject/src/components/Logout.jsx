import React from "react";
import { useNavigate } from "react-router-dom";

function Logout() {
  const navigate = useNavigate();
  return (
    <div className="w-full h-screen flex justify-center items-center">
      <div className="border-2 border-gray-500 py-2 px-5 rounded-md">
        <h2 className="w-full text-3xl text-center px-3 py-2">
          Are you sure, you want to Logout ??
        </h2>
        <div className="w-full text-3xl text-center px-3 py-2">
          <button
            onClick={() => navigate("/")}
            className="mx-7 text-2xl bg-blue-700 px-3 py-2 text-white rounded-md hover:bg-blue-800 outline-none"
          >
            YES
          </button>
          <button
            onClick={() => navigate(-1)}
            className="mx-7 text-2xl bg-blue-700 px-3 py-2 text-white rounded-md hover:bg-blue-800 outline-none"
          >
            NO
          </button>
        </div>
      </div>
    </div>
  );
}

export default Logout;
