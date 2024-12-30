import React from "react";
import { NavLink, useNavigate } from "react-router-dom";

function Navbar() {
  const navigate = useNavigate();
  return (
    <>
      <div id="navWrapper" className="px-7 py-3">
        <nav className="w-full flex items-center justify-around bg-transparent">
          <div>
            <img
              className="w-[100px] rounded-full"
              src="https://encrypted-tbn3.gstatic.com/licensed-image?q=tbn:ANd9GcRvfaK9kjLritKOxR1mmeQvX9F5qIV1mAzTODWjGKZIT8fPFgdZhxhhkCQbZjRmeGtJM1CB_tYcQjxncWk"
              alt="image"
            />
          </div>
          <div className=" flex justify-center items-center">
            <NavLink
              to="/home"
              end
              className={({ isActive }) => {
                return `mx-7 text-2xl ${isActive ? "text-blue-700" : ""}`;
              }}
            >
              Home
            </NavLink>
            <NavLink
              to="/home/profile"
              className={({ isActive }) => {
                return `mx-7 text-2xl ${isActive ? "text-blue-700" : ""}`;
              }}
            >
              Profile
            </NavLink>
            <NavLink
              to="/home/settings"
              className={({ isActive }) => {
                return `mx-7 text-2xl ${isActive ? "text-blue-700" : ""}`;
              }}
            >
              Settings
            </NavLink>

            <button
              onClick={() => navigate("/logout")}
              className="mx-7 text-2xl bg-blue-700 px-3 py-2 text-white rounded-md hover:bg-blue-800 outline-none active:scale-95 duration-200"
            >
              Log Out
            </button>
          </div>
        </nav>
      </div>
    </>
  );
}

export default Navbar;
