import { Button } from "bootstrap";
import React from "react";

export default function TitleCard() {
  const Name = "Jade Joe";
  return (
    <div className="">
      <div>
        <h1 style={{fontSize:24}} className="fw-bold">Hi, {Name}</h1>
        <span className="text-secondary"> Let's finish your task today!</span>
      </div>
      
    </div>
  );
}
