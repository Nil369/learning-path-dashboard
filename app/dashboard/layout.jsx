import React from "react";
import Sidebar from "../components/sidebar/Sidebar";
import Navbar from "../components/navbar/Navbar";


const DashboardLayout = ({ children }) => {
  return (

    <section className="h-full">
      <div className="h-[80px] w-full md:pl-60 fixed inset-y-0 z-50">
        <Navbar/>
      </div>

      <div className="hidden md:flex h-full w-60 flex-col fixed inset-y-0 z-50 ">
        <Sidebar />
      </div>
      <div className="md:pl-60 pt-[80px] h-full">
          {children}
      </div>

    </section>
  );
};

export default DashboardLayout;
