import React, { useState, useEffect } from 'react';
import { MdMarkEmailUnread } from "react-icons/md";
import DarkMode from '../components/Navbar/DarkMode';

const Header = () => {
 

  return (
    <div className="  from-primary to-secondary  text-[black]  h-[100%] w-[100%] flex items-center justify-center dark:text-[white] shadow-md">
      <div className="flex w-[100%] pl-[15px] pr-[10px] h-[100%] justify-between items-center">
        {/* Title */}
        <h1 className="text-3xl font-semibold flex  justify-center items-center gap-[10px] ">
          <MdMarkEmailUnread size={29} color='blue'/> Emailer
        </h1>

        {/* User Profile / Log Out Button */}
        <div className="flex items-center space-x-4">
          <span className="text-[18px]">Welcome, User</span>
        
          <DarkMode/>
        </div>
      </div>
    </div>
  );
};

export default Header;
