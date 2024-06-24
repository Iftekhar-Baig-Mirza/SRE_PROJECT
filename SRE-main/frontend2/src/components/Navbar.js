import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
import Logo from "./Pictures/images.png";
function Navbar() {
  const [click, setClick] = useState(false);
  const [dropdown, setDropdown] = useState(false);
  const [fix,setFix]=useState(false);
  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const onMouseEnter = () => {
    if (window.innerWidth < 960) {
      setDropdown(false);
    } else {
      setDropdown(true);
    }
  };

  const onMouseLeave = () => {
    if (window.innerWidth < 960) {
      setDropdown(false);
    } else {
      setDropdown(false);
    }
  };

  return (
    <div>
    <nav className={fix?'navbar2':"navbar"}>
      <div className='menu-icon' onClick={handleClick}>
          <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
        </div>
        <Link to='/' className='navbar-logo' onClick={closeMobileMenu}>

          <img src={Logo}></img>
         
        </Link>
        
        <ul className={click ? 'nav-menu active' : 'nav-menu'}>
          <li className='nav-item'>
            <Link to='/' className='nav-links' onClick={closeMobileMenu}>
            <a href="#" id="style-2" data-replace="Home"><span>Home</span></a>
            </Link>
          </li>
          <li
            className='nav-item'
            onMouseEnter={onMouseEnter}
            onMouseLeave={onMouseLeave}
          >
            <Link to='/buyasset' className='nav-links' onClick={closeMobileMenu}>
              
            <a href="#" id="style-2" data-replace="Buy Asset"><span>Buy Asset</span></a>
              
            </Link>
          </li>
          <li className='nav-item'>
            <Link
              to='/sellasset'
              className='nav-links'
              onClick={closeMobileMenu}
            ><a href="#" id="style-2" data-replace="Sell Asset"><span>Sell Asset</span></a>
             
            </Link>
          </li>
          <li className='nav-item'>
            <Link
              to='/predict'
              className='nav-links'
              onClick={closeMobileMenu}
            ><a href="#" id="style-2" data-replace="Predict"><span>Predict</span></a>
             
            </Link>
          </li>

        </ul>
      </nav>
    </div>
  );
}

export default Navbar;
