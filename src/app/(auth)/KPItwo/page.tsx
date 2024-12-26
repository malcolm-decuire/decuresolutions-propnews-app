import DemoSidebarApp from '../demo/App';
import DemoKPItwo from '../demo/DemoKPItwo'
import React from "react";

export default function DemoPage() {
  return (
    <div className="flex h-screen">
      <DemoSidebarApp />
      <div className="flex-1 p-6 flex justify-center items-start bg-gray-50">
        <div className="w-full max-w-lg p-6 bg-white shadow-md rounded-lg">
          <DemoKPItwo/>
        </div>
      </div>
    </div>
  );
}
