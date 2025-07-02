import './ToggleSwitch.css';
import { useCurrentTemperatureUnit } from "../../hooks/useCurrentTemperatureUnit";


const ToggleSwitch = ({ optionLeft, optionRight, className = '' }) => {
  const {handleToggleSwitchChange} = useCurrentTemperatureUnit()
  // I looked at the review and I'm confused on why I would be destructuring the CurrentTemperatureUnit from the hook
  // since I dont even use it here

  const handleToggle = (e) => {
    handleToggleSwitchChange(e.target.checked);
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
