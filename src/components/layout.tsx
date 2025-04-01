import React from "react";
import Header from "@/components/header";
import { Outlet } from "react-router-dom";

const MainLayout = () => {
  return (
    <main>
      <Header />
      <div className="">
        <Outlet />
      </div>
    </main>
  );
};

export default MainLayout;
