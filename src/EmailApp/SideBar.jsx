import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const Sidebar = () => {
  const location = useLocation(); // Get the current route to highlight the active link

  const navItems = [
    { name: 'Home', path: '/' },
   
  ];

  return (
    <div className="w-[1005] from-primary to-secondary shadow-md pt-[19px] pl-[13px] text-[black]  h-[100%] dark:text-[white]">
      <h2 className="text-2xl font-semibold mb-8">Dashboard</h2>
      <ul>
        {navItems.map((item) => (
          <li key={item.name} className="mb-4">
            <Link
              to={item.path}
              className={`block p-2 rounded-md transition duration-300 hover:bg-blue-600 dark:hover:bg-blue-600 ${
                location.pathname === item.path ? 'bg-blue-600' : ''
              }`}
            >
              {item.name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Sidebar;
