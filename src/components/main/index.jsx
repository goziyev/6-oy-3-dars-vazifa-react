import React from "react";
import Hero from "../hero";
import Navbar from "../navbar";
import "./main.css";

export default function Main() {
  return (
    <div className="background">
      <div className="container">
        <Navbar />
        <Hero />
      </div>
    </div>
  );
}
