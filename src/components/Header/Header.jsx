import Nav from '../Nav/Nav';
import './Header.css';

const Header = ({ city }) => {

  return (
    <header className='header'>
      <Nav city={city}/>
    </header>
  );
};

export default Header;
