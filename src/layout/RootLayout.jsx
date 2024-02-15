import React from "react";
import { Outlet } from "react-router-dom";
import SideBar from "../components/SideBar/SideBar";
import Search from "../components/Search/Search";

const RootLayout = () => {
  return (
    <div>
      <SideBar />
      <Search />
      <Outlet />
    </div>
  );
};

export default RootLayout;
