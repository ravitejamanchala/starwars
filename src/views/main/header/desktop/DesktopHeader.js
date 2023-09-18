import React from "react";
import TitleCard from "../TitleCard";
import Notifications from "../../../../components/notifications/Notifications";
import Profile from "../../../../components/profile/Profile";

export default function DesktopHeader(props) {
  return (
    <div className="d-flex justify-content-between align-items-center">
      <TitleCard></TitleCard>
      <div className="d-flex align-items-center justify-content-between">
        {props.collpased && <button className="btn btn-primary text-white me-3 btn-lg" onClick={()=>props.onUpdate(true)}>Today’s Activity</button>}
        
        <Notifications/>
        <div className="px-2"></div>
        <Profile/>
      </div>
    </div>
  );
}
