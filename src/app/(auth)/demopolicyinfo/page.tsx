import React from "react";
import DemoPolicy1 from "../demo/DemoPolicy1";
import DemoPolicy2 from "../demo/DemoPolicy2";
import DemoPolicy3 from "../demo/DemoPolicy3";
import DemoPolicy4 from "../demo/DemoPolicy4";

export default function DemoPage() {
  return (
    <div className="flex h-screen">
      <div className="flex-1 p-6 bg-gray-50">
        <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          <div className="bg-white shadow-md rounded-lg p-4">
            <DemoPolicy1 />
          </div>
          <div className="bg-white shadow-md rounded-lg p-4">
            <DemoPolicy2 />
          </div>
          <div className="bg-white shadow-md rounded-lg p-4">
            <DemoPolicy3 />
          </div>
          <div className="bg-white shadow-md rounded-lg p-4">
            <DemoPolicy4 />
          </div>
        </div>
      </div>
    </div>
  );
}
