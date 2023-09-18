import React from 'react'
import './DestopSidebar.scss'
import {BsGrid,BsPerson} from 'react-icons/bs'
import { FiSettings } from "react-icons/fi";
import{BiMessageDots} from "react-icons/bi"
export default function DestopSidebar() {
  return (
    <div className="d-flex flex-column p-3 bg-white destop-sidebar">
    <div className="d-flex align-items-center mb-3 link-dark text-decoration-none ms-3">     
      <img alt="logo" src="./logo.png" style={{width:24,height:24}}/><span className="fw-bold ms-2" style={{fontSize:24}}>Tracker<span className='text-primary'>Pro</span></span>
    </div>
    <ul className="nav nav-pills flex-column m-3 text-left">
      <li className="nav-item">
     
        <a href="#" className="nav-link bg-light link-dark p-3 d-flex align-items-center mb-2" aria-current="page">
         <BsGrid/>        
         <span >Overview</span>
        </a>
      </li>
      <li>
        <a href="#" className="nav-link link-secondary p-3 d-flex align-items-center">
          <BsPerson/>
          <span >Contributors</span>
        </a>
      </li>
      <li>
        <a href="#" className="nav-link link-secondary p-3 d-flex align-items-center">
            <BiMessageDots></BiMessageDots>
        <span >Message</span>
        </a>
      </li>
      <li>
        <a href="#" className="nav-link link-secondary  p-3 d-flex align-items-center">
            <FiSettings></FiSettings>
        <span >Settings</span>
        </a>
      </li>
    </ul>
  </div>
  )
}
