import React, { useState } from 'react';
import './NavBar.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons';

function NavBar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav>
      <div className="nav-container">
          <img
            className="logo"
            src="https://tuwaiq.edu.sa/img/logos/logo.svg"
            alt="Logo"
          />
        <div className="burger-menu" onClick={toggleMenu}>
          <FontAwesomeIcon
            style={{ color: 'white' }}
            className="icon"
            icon={isMenuOpen ? faTimes : faBars}
          />
        </div>
        <ul className={`nav-links ${isMenuOpen ? 'open' : ''}`}>
          <li>English</li>
          <li className='nav2'>تسجيل الدخول</li>
          <li>
            مركز الاختبارات
          </li>
          <li>الأكاديميات التابعة</li>
          <li>
           حول الأكاديمية
          </li>
          <li>المعسكرات والبرامج</li>
          <li>
           الرئيسية
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default NavBar;
