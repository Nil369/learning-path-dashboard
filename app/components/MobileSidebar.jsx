import React from "react";
import Sidebar from "./Sidebar";
import {Menu} from "lucide-react"
import {
    Sheet,
    SheetContent,
    SheetTrigger,
  } from "@/components/ui/sheet"
  
const MobileSidebar = () => {
  return (
    <Sheet>
        <SheetTrigger className="md:hidden pr-4 hover:opacity-75 transition align-left">
            <Menu/>
        </SheetTrigger>
        <SheetContent side="left" className="p-0 w-80 sm:w-72" >
            <Sidebar/>
        </SheetContent>
    </Sheet>
  );
};

export default MobileSidebar;
