import React from 'react';
import { useSelector } from 'react-redux';

const Sidebar = () => {
  const user = useSelector((state: {user: any}) => state.user);

  return (
    <section className="sidebar tracker-container">
      <div className="sidebar-item flex-container">
        <h2>{user.name}</h2>
      </div>
      <div className="flex-container">
        <h2>Lunch</h2>
      </div>
      <div className="flex-container">
        <h2>Dinner</h2>
      </div>
      <div className="flex-container">
        <h2>Snacks</h2>
      </div>
    </section>
  );
};

export default Sidebar;
