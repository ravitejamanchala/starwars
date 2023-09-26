import React from "react";
import TitleCard from "../TitleCard";
import Notifications from "../../../../components/notifications/Notifications";
import Profile from "../../../../components/profile/Profile";

export default function DesktopHeader(props) {
  return (
    <div className="header-flex">
      <div className="d-flex justify-content-between align-items-center  custom-title">
      <TitleCard></TitleCard>
      {props.collpased && <button className="btn btn-primary text-white" onClick={()=>props.onUpdate(true)}>Today’s Activity</button>}
      </div>
      <div className="d-flex align-items-center justify-content-between">        
        <Notifications/>
        <div className="px-2"></div>
        <Profile/>
      </div>
    </div>
  );
}
