"use client"
import React from "react";
import UserCard from "../components/userCard";
import CountChart from "../components/countChart";
import AttendanceChart from "../components/AttendenceChart";
import EventCalendar from "../components/EventCalender";
import Announcements from "../components/Announcements";
import ProductivityChart from "../components/Productivity";
import { ModeToggle } from "../components/modeToggle";
import { useTheme } from "next-themes";

const DashboardPage = () => {
  const { theme } = useTheme();
    // Determine if dark mode is enabled
    const isDarkMode = theme === "dark";

  return (
    <div>
      <div className="p-4 flex gap-4 flex-col md:flex-row">
        {/* LEFT */}
        <div className="w-full lg:w-2/3 flex flex-col gap-8">
        {/* USER CARDS */}
        <div className="flex gap-4 justify-between flex-wrap">
          <UserCard type="student" />
          <UserCard type="teacher" />
          <UserCard type="parent" />
          <UserCard type="staff" />
        </div>
        {/* MIDDLE CHARTS */}
        <div className="flex gap-4 flex-col lg:flex-row">
          {/* COUNT CHART */}
          <div className="w-full lg:w-1/3 h-[450px]">
            <CountChart />
          </div>
          {/* ATTENDANCE CHART */}
          <div className="w-full lg:w-2/3 h-[450px]">
            <AttendanceChart />
          </div>
        </div>
        {/* BOTTOM CHART */}
        <div className="w-full h-[500px]">
          <ProductivityChart/>
        </div>
      </div>
        {/* RIGHT */}
        <div className="w-full lg:w-1/3 flex flex-col gap-8">
          {!isDarkMode?<EventCalendar/>:" "}
          <Announcements/>
        </div>
      </div>
    </div>
  );
};

export default DashboardPage;
