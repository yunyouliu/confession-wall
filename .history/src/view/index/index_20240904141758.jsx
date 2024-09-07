import React from "react";
import "../../App.css";
import NavBar from "@/components/NavBar";
import TabBar from "@/components/TabBar";

export default function index() {
  return (
    <div className="h-full p-5">
      <div className="h-full">
        <NavBar />
        <TabBar />
      </div>
    </div>
  );
}
