import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';

const Sidebar = () => {
  const users = useSelector((state: {users: object[]}) => state.users);

  useEffect(() => {
    console.log(users);
  }, []);

  return (
    <section className="sidebar tracker-container">
      <div className="sidebar-item flex-container">
        <h2>Breakfast</h2>
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
