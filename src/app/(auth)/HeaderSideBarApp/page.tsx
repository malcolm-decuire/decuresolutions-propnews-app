//20241226 CHG TYPE TO ANY BC NPM RUN BUILD KEPT THROWIN ERRORS -> HAPPENS WITH A LOT OF NEXTUI OFF THE SHELF STUFF 
"use client";

import { usePathname } from "next/navigation";
import React from "react";
import DemoSidebarApp from "../demo/App";
import DemoHeaderNavApp from "../DemoHeaderNav/DemoHeaderNavApp";

export default function ConditionalHeaderSidebarLayout({
  children,
}: any) { // Using `any` type here
  const pathname = usePathname();

  // Pages where the layout applies
  const demoPages = [
    "/demo",
    "/KPIone",
    "/KPItwo",
    "/KPIthree",
    "/demopolicyinfo",
    "/CaseStudies",
  ];

  const isDemoPage = demoPages.includes(pathname);

  if (!isDemoPage) {
    return <>{children}</>;
  }

  return (
    <div className="flex flex-col lg:flex-row h-screen">
      {/* Sidebar */}
      <aside className="w-full lg:w-64 h-16 lg:h-full fixed lg:static top-0 left-0 bg-gray-800 text-white z-20">
        <DemoSidebarApp />
      </aside>

      {/* Main Content Area */}
      <div className="flex flex-1 flex-col">
        {/* Header Navbar */}
        <header className="w-full h-16 bg-gray-100 fixed lg:static top-0 z-10">
          <DemoHeaderNavApp />
        </header>

        {/* Page Content */}
        <main className="flex-1 mt-16 lg:mt-0 overflow-y-auto p-4 bg-gray-50">
          {children}
        </main>
      </div>
    </div>
  );
}
