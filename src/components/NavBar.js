import React, {useState, useEffect} from 'react';
import { Link } from 'react-router-dom';
import './NavBar.css';
import { Button } from './Button';

function Navbar() {
    const [click, setClick] = useState(false);
    const [button, setButton] = useState(true)

    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false)

    

    const showButton = () => {
      if(window.innerWidth <= 960) {
        setButton(false);
      } else {
        setButton(true);
      }
    };

    useEffect (() => {
      showButton();
    }, []); 
    
    window.addEventListener('resize', showButton);



    return (
        <>
          <nav className='navbar'>
              <div className='navbar-container'>
                  <Link to='/' className='navbar-logo' onClick={closeMobileMenu}>
                      מפעלי הרשת <i className='fab fa-typo3' />
                  </Link>
                  <div className='menu-icon' onClick={handleClick}>
                      <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
                  </div>
                  <ul className={click ? 'nav-menu active': 'nav-menu'}>
                      <li className='nav-item'>
                          <Link to='/' className='nav-links' onClick={closeMobileMenu}>
                            Home
                          </Link>
                     </li>
                     <li className='nav-item'>
                          <Link to='/services' className='nav-links' onClick={closeMobileMenu}>
                            Services
                          </Link>
                     </li>
                     <li className='nav-item'>
                          <Link to='/graphs' className='nav-links' onClick={closeMobileMenu}>
                            Graphs 
                          </Link>
                     </li>
                     <li className='nav-item'>
                          <Link to='/contact-us' className='nav-links-mobile' onClick={closeMobileMenu}>
                            CONTACT US   
                          </Link>
                     </li>
                  </ul>
                  {button && <button className='btn--outline'>CONTACT US</button>}
                </div>
          </nav>
    </>
    )

}

export default Navbar;