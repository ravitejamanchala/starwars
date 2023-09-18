import React from 'react';
import './Sidebar.scss';
import DestopSidebar from './desktop/DestopSidebar';
export default function Sidebar() {
  return (
    <div className='sidebar'>
      <DestopSidebar/>
    </div>
  )
}
