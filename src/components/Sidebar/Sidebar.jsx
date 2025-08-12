import profilePicture from '../../assets/images/temp-profile-picture.png';
import './Sidebar.css';
import { useUserData } from '../../hooks/useUserData';
import { useModal } from '../../hooks/useModal';

const Sidebar = () => {
  const { userData } = useUserData();
  const { setModal } = useModal();
  const { handleLogout } = useUserData();
  return (
    <div className='sidebar'>
      <div className='sidebar__user-details'>
        <img
          src={userData.avatar}
          alt='Profile picture of Terrence Tegengne'
          className='sidebar__profile-picture'
        />
        <h1 className='sidebar__name'>{userData.name}</h1>
      </div>

      <div className='sidebar__controls'>
        <button
          className='sidebar__button sidebar__button_edit-profile'
          onClick={() => setModal('edit-profile-modal')}>
          Change profile data
        </button>
        <button
          className='sidebar__button sidebar__button_log-out'
          onClick={handleLogout}>
          Log out
        </button>
      </div>
    </div>
  );
};

export default Sidebar;
