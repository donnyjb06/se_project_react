import profilePicture from '../../assets/images/temp-profile-picture.png';
import './Sidebar.css';

const Sidebar = () => {
  return (
    <div className='sidebar'>
      <img
        src={profilePicture}
        alt='Profile picture of Terrence Tegengne'
        className='sidebar__profile-picture'
      />

      <div className='sidebar__controls'>
        <h1 className='sidebar__name'>Terrence Tegegne</h1>
        <button className='sidebar__button sidebar__button_edit-profile'>
          Change profile data
        </button>
        <button className='sidebar__button sidebar__button_log-out'>
          Log out
        </button>
      </div>
    </div>
  );
};

export default Sidebar;
