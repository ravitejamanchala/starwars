import React, { useState } from 'react';
import { Dropdown, DropdownItem, DropdownMenu, DropdownToggle } from 'reactstrap';
import { IoNotificationsOutline } from 'react-icons/io5';
export default function Profile() {
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
          className='cursor-pointer full-rounded profile-icon'
          
        >
          <img src='https://img.freepik.com/free-photo/close-up-portrait-cheerful-glamour-girl-with-cute-make-up-smiling-white-teeth-looking-happy-camera-standing-blue-background_1258-70300.jpg?w=100'/>
        </DropdownToggle>
        <DropdownMenu className='p-3 mt-3' right>
          <div  className='mb-2' onClick={toggle}>Prodile</div>
          <div  className='mb-2' onClick={toggle}>Settings</div>
          <hr/>
          <div  className='my-2' onClick={toggle}>Log Out</div>
        </DropdownMenu>
      </Dropdown>
    );
}
