import React from "react";
import "../../App.css";
import NavBar from "@/components/NavBar";
import TabBar from "@/components/TabBar";
import Search from "@/components/search";
import Card from "@/components/Card";

export default function index() {
  return (
    <div className="h-full p-2">
      <div className="h-full bg-gradient-to-r from-pink-200 via-purple-200">
        <NavBar />
        <TabBar />
        <Search />
        <Card />
      </div>
    </div>
  );
}
