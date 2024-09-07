import React from "react";
import "../../App.css";
import NavBar from "@/components/NavBar";
import TabBar from "@/components/TabBar";

export default function index() {
  return (
    <div className="h-full p-2">
      <div className="h-full bg-gradient-to-r from-pink-200 via-purple-200">
        <NavBar />
        <TabBar />
        <div className="position-fixed right-0 top-56">1111</div>
      </div>
      
    </div>
  );
}
