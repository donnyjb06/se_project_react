import './ToggleSwitch.css';
import { useCurrentTemperatureUnit } from '../../hooks/useCurrentTemperatureUnit';

const ToggleSwitch = ({ optionLeft, optionRight, className = '' }) => {
  const { handleToggleSwitchChange } = useCurrentTemperatureUnit();

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
      <span className='custom-toggle__knob'></span>
    </label>
  );
};

export default ToggleSwitch;
