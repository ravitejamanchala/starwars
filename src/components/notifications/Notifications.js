import React, { useState } from 'react';
import { Dropdown, DropdownItem, DropdownMenu, DropdownToggle } from 'reactstrap';
import { IoNotificationsOutline } from 'react-icons/io5';

export default function Notifications() {
    const [dropdownOpen, setDropdownOpen] = useState(false);

    const toggle = () => {
      setDropdownOpen(!dropdownOpen);
    }
  
    return (
      <Dropdown isOpen={dropdownOpen} toggle={toggle}>
        <DropdownToggle
          tag="span"
          onClick={toggle}
          data-toggle="dropdown"
          aria-expanded={dropdownOpen}           
          className='cursor-pointer border border-1 p-3 full-rounded notification-icon'
          
        >
          <IoNotificationsOutline style={{width:23,height:18}}/>
        </DropdownToggle>
        <DropdownMenu className='p-3' right>
          <div  className='card p-2 mb-2' onClick={toggle}>Notifiaction 1</div>
          <div  className='card p-2 mb-2' onClick={toggle}>Notifiaction 2</div>
          <div  className='card p-2 mb-2' onClick={toggle}>Notifiaction 3</div>
          <div  className='card p-2 mb-2' onClick={toggle}>Notifiaction 4</div>
        </DropdownMenu>
      </Dropdown>
    );
}
