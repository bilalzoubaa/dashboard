import React, { useState } from "react";
import Sidebar from "./components/Sidebar";
import Header from "./components/Header";
import MainContent from "./components/MainContent";

export default function App() {
  const [selected, setSelected] = useState("overview");

  return (
    <div className="min-h-screen flex bg-gray-50">
      <Sidebar selected={selected} onSelect={setSelected} />
      <div className="flex-1 p-6">
        <Header />
        <div className="mt-4">
          <MainContent />
        </div>
      </div>
    </div>
  );
}
