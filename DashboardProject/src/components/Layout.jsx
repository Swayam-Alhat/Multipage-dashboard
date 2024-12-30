import React from "react";
import Navbar from "./Navbar";
import { Outlet } from "react-router-dom";
import Logout from "./Logout";
import Home from "./Home";
import Setting from "./Setting";
import Profile from "./Profile";

function Layout() {
  return (
    <>
      <Navbar />
      <Outlet />
    </>
  );
}

export default Layout;
