import Nav from '../Nav/Nav';
import './Header.css';

const Header = ({ city, openModal }) => {

  return (
    <header className='header'>
      <Nav city={city} openModal={openModal}/>
    </header>
  );
};

export default Header;
