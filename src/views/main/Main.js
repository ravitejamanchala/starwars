import React from "react";
import "./Main.scss";
import DesktopHeader from "./header/desktop/DesktopHeader";
import CircularProgress from "@mui/joy/CircularProgress";
import Sidebar from "./sidebar/Sidebar";
import MontlyContributers from "./contributors/MontlyContributers";
import UpcomingTasks from "./tasks/UpcomingTasks";
import Taskcalender from "./tasks/Taskcalender";
import Chart from "../../components/chart/Chart";
const classNames = require("classnames");
export default function Main() {
  // var ActivityPanel = classNames({
  //     'activity-panel d-flex mt-3': true,
  //     'collapsed': true
  //   });
  const [screenSize, getDimension] = React.useState({
    dynamicWidth: window.innerWidth
  });
  const setDimension = () => {
    getDimension({
      dynamicWidth: window.innerWidth
    })
  }
  const [collapsed, setCollapsed] = React.useState(true);
  function updateCollapse() {
    setCollapsed(!collapsed);
  }
  React.useEffect(() => {
    window.addEventListener('resize', setDimension);
    
    return(() => {
        window.removeEventListener('resize', setDimension);
    })
  }, [screenSize])
  return (
    <div className=" d-flex">
      <Sidebar></Sidebar>
      <div
        className={
          collapsed ? "collapsed desktop-main d-flex" : "desktop-main d-flex"
        }
      >
        <div className="main-content p-4">
          <DesktopHeader onUpdate={updateCollapse} collpased={collapsed}></DesktopHeader>
          <div className="row  gx-3 mt-3">
            <div className="col-md-6 col-sm-12 col-lg-4 ">
              <div className="custom-card">
              <div className="-white p-3 rounded">
                <div style={{zIndex:9999,width:"100%"}}>
                  <h3>Running Task</h3>
                  <h3>65</h3>
                  <div className="d-flex justify-content-between mt-5 align-items-end">
                    <CircularProgress
                      size="lg"
                      determinate
                      value={64}
                      color="#8B54FF"
                      style={{ stroke: "#8E92BC" }}
                    >
                      <span className="fw-bold">64 %</span>
                    </CircularProgress>
                    <div>
                      <div className="h4 mb-0">100</div>
                      <div className="text-secondary text-small">tasks</div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="bg-group">
                {" "}
                <div className="custom-bg"></div>
                <div className="circle-1"></div>
                <div className="circle-2"></div>
                <div className="circle-3"></div>
              </div>
              </div>
            
            </div>
            <div className="col-md-6 col-sm-12 col-lg-8">
              <div className="bg-light custom-chat-card">  
               <div className="  p-3">
                <div className="h6">Activity</div>
                <Chart />
              </div></div>
            
            </div>
          </div>
          {screenSize.dynamicWidth > 768 ?  <MontlyContributers col={collapsed ? 3 : 2} />:  <MontlyContributers col={1}/>}
          {screenSize.dynamicWidth > 768 ?   <UpcomingTasks col={collapsed ? 3 : 2} />:   <UpcomingTasks col={1} />}
        
         
        </div>
        <div className="activity-panel collapsed">
          <Taskcalender onUpdate={updateCollapse} />
        </div>
      </div>
    </div>
  );
}
