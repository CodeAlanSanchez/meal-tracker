import React from 'react';
import Setting from './Setting/Setting';

const Account = () => (
  <section className="account">
    <h1>Account Settings</h1>
    <h3>Change daily goals</h3>
    <div className="settings">
      <form action="">
        <Setting name="Calories" currentValue={2800} macro={false} />
        <Setting name="Protein" currentValue={48} macro />
        <Setting name="Carbs" currentValue={124} macro />
        <Setting name="Fat" currentValue={32} macro />
        <Setting name="Fiber" currentValue={38} macro />
        <button type="submit">Apply</button>
      </form>
    </div>
  </section>
);

export default Account;
