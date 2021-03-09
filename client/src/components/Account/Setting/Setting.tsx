/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable react/prop-types */
import React from 'react';

const Setting = ({ name, currentValue, macro = false }:
  {name: string, currentValue: Number, macro: boolean}) => (
    <div className="setting">
      <p>{name}</p>
      {!macro ? <input type="text" placeholder={currentValue.toString()} id={name} />
        : <input type="text" placeholder={`${currentValue.toString()}g`} id={name} />}
    </div>
);

export default Setting;
