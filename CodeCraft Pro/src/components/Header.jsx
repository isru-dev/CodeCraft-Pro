import { useState } from 'react';
import './header.css';

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="header">
      <nav className="nav-container">
        <div className="logo">
          CodeCraft <span>Pro</span>
        </div>

        {/* Desktop Menu */}
        <ul className={`nav-links ${isMenuOpen ? 'active' : ''}`}>
          <li><a href="#courses" onClick={() => setIsMenuOpen(false)}>Courses</a></li>
          <li><a href="#mentorship" onClick={() => setIsMenuOpen(false)}>Mentorship</a></li>
          <li><a href="#testimonials" onClick={() => setIsMenuOpen(false)}>Stories</a></li>
          <li><button className="btn-nav-login">Login</button></li>
        </ul>

        {/* Hamburger Icon */}
        <div className={`hamburger ${isMenuOpen ? 'open' : ''}`} onClick={toggleMenu}>
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </div>
      </nav>
      
      {/* Overlay to close menu when clicking outside */}
      {isMenuOpen && <div className="menu-overlay" onClick={toggleMenu}></div>}
    </header>
  );
}