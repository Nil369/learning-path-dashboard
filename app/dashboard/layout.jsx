import React from "react";
import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";

const DashboardLayout = ({ children }) => {
  return (
    <div className="h-full">
      <div className="h-[80px] w-full md:pl-60 fixed inset-y-0 z-50">
        <Navbar/>
      </div>

      <div className="hidden md:flex h-full w-60 flex-col fixed inset-y-0 z-50 ">
        <Sidebar />
      </div>
      <main className="md:pl-60 pt-[80px] h-full">{children}</main>
    </div>
  );
};

export default DashboardLayout;
