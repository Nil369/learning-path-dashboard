"use client";

import { usePathname, useRouter } from "next/navigation";
import React from "react";

export const SidebarItem = ({ icon: Icon, label, href }) => {
  const pathname = usePathname();
  const router = useRouter();

  // check if the user is on the dashboard page or not
  const isActive =
    (pathname === "/dashboard" && href === "/dashboard") ||
    pathname === href ||
    pathname?.startsWith(`${href}/dashboard`);

  const onClick = () => {
    router.push(href);
  };

  const buttonClasses = `
    w-full flex items-center gap-x-2 text-slate-500 text-sm font-[500] pl-7 transition-all hover:text-slate-600 hover:bg-slate-300/20
    ${isActive ? 'text-sky-700 bg-sky-200/20 hover:bg-sky-200/20 hover:text-sky-700 border-r-4 border-blue-500' : ''}
  `;

  const iconClasses = `
    text-sky-500
    ${isActive ? 'text-sky-700' : ''}
  `;


  return (
    <div>
      <button
        onClick={onClick}
        type="button"
        className={buttonClasses}
      >
        <div className="flex items-center gap-x-2 py-4">
          <Icon
            size={22}
            className={iconClasses}
          />
          {label}
        </div>
      </button>
    </div>
  );
};
