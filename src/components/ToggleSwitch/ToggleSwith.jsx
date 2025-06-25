import React from 'react';
import './ToggleSwitch.css';

const ToggleSwitch = ({ onToggle, optionLeft, optionRight, className = '' }) => {
  const handleToggle = (e) => {
    onToggle(e.target.checked);
  };

  return (
    <label className={`custom-toggle ${className}`}>
      <input
        type='checkbox'
        className='custom-toggle__input'
        onChange={handleToggle}
      />
      <span className='custom-toggle__option custom-toggle__option_left'>
        {optionLeft}
      </span>
      <span className='custom-toggle__option custom-toggle__option_right'>
        {optionRight}
      </span>
      <span className="custom-toggle__knob"></span>     
    </label>
  );
};

export default ToggleSwitch;
