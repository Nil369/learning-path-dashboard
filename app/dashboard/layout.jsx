import React from "react";
import Sidebar from "../components/Sidebar";

const DashboardLayout = ({ children }) => {
  return (
    <div className="h-full">
        <div className="hidden md:flex h-full w-60 flex-col fixed inset-y-0 z-50 ">
          <Sidebar/>
        </div>
        <main className="md:pl-60 h-full">
        {children}
        </main>
        
    </div>
  );
};

export default DashboardLayout;
