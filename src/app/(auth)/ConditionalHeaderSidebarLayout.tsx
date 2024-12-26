"use client";
import React, { useState } from "react";
import DemoSidebarApp from "./demo/App";
import DemoHeaderNavApp from "./DemoHeaderNav/DemoHeaderNavApp";
import { Icon } from "@iconify/react";

export default function ConditionalHeaderSidebarLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [isSidebarOpen, setSidebarOpen] = useState(false);

  const openSidebar = () => {
    console.log("Opening sidebar");
    setSidebarOpen(true);
  };

  const closeSidebar = () => {
    console.log("Closing sidebar");
    setSidebarOpen(false);
  };

  return (
    <div className="flex h-screen overflow-hidden">
      {/* Sidebar */}
      <aside
        className={`fixed z-30 top-0 left-0 bg-gray-800 text-white w-64 h-full transform ${
          isSidebarOpen ? "translate-x-0" : "-translate-x-full"
        } lg:translate-x-0 lg:relative lg:w-64 transition-transform`}
      >
        <DemoSidebarApp />
        {isSidebarOpen && (
          <button
            className="lg:hidden absolute top-4 right-4 flex items-center justify-center w-10 h-10 bg-gray-600 text-white rounded-full"
            onClick={closeSidebar}
            aria-label="Close Sidebar"
          >
            <Icon icon="solar:exit-line-duotone" width={20} height={20} />
          </button>
        )}
      </aside>

      {/* Main Content Area */}
      <div
        className={`flex flex-1 flex-col overflow-hidden ${
          isSidebarOpen ? "lg:ml-64" : "ml-0"
        } transition-all`}
      >
        <DemoHeaderNavApp />
        <main className="flex-1 overflow-y-auto mt-16 lg:mt-0 bg-gray-50 p-4">
          {children}
        </main>
      </div>

      {/* Sidebar Toggle Button */}
      {!isSidebarOpen && (
        <button
          className="lg:hidden fixed bottom-4 right-4 z-40 flex items-center justify-center w-12 h-12 bg-purple-600 text-white rounded-full"
          onClick={openSidebar}
          aria-label="Open Sidebar"
        >
          <Icon icon="solar:siderbar-line-duotone" width={24} height={24} />
        </button>
      )}
    </div>
  );
}
