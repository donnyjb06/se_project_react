import profilePicture from '../../assets/images/temp-profile-picture.png';
import './Sidebar.css';
import { useUserData } from '../../hooks/useUserData';

const Sidebar = () => {
  const { userData } = useUserData();
  return (
    <div className='sidebar'>
      <img
        src={userData.avatar}
        alt='Profile picture of Terrence Tegengne'
        className='sidebar__profile-picture'
      />

      <div className='sidebar__controls'>
        <h1 className='sidebar__name'>{userData.name}</h1>
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
