import React from "react";
import "./styles.css";
import Timer from "./components/Timer";

export default function App() {
  return (
    <div className="appClass">
      <h1>Welcome to the custom Timer test App</h1>
      <Timer/>
      <div>(c)Alex Agniev</div>
    </div>
  );
}