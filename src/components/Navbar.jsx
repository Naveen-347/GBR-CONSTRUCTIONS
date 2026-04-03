import { useState, useEffect } from 'react';
import { HiMenu, HiX } from 'react-icons/hi';
import { MdConstruction } from 'react-icons/md';
import './Navbar.css';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const navLinks = ['Home', 'Services', 'Portfolio', 'Contact'];

  const handleNavClick = (link) => {
    setMenuOpen(false);
    const id = link.toLowerCase();
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <nav className={`navbar ${scrolled ? 'navbar--scrolled' : ''}`}>
      <div className="container navbar__inner">
        {/* Logo */}
        <div className="navbar__logo" onClick={() => handleNavClick('home')}>
          <span className="navbar__logo-icon">
            <MdConstruction size={24} />
          </span>
          <span className="navbar__brand">
            <span className="brand-gbr">GBR</span>
            <span className="brand-constructions"> Constructions</span>
          </span>
        </div>

        {/* Desktop Links */}
        <ul className="navbar__links">
          {navLinks.map(link => (
            <li key={link}>
              <button
                className="navbar__link-btn"
                onClick={() => handleNavClick(link)}
              >
                {link}
              </button>
            </li>
          ))}
          <li>
            <button
              className="navbar__cta"
              onClick={() => handleNavClick('contact')}
            >
              Get a Quote
            </button>
          </li>
        </ul>

        {/* Mobile hamburger */}
        <button
          className="navbar__hamburger"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          {menuOpen ? <HiX size={24} /> : <HiMenu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div className={`navbar__mobile ${menuOpen ? 'navbar__mobile--open' : ''}`}>
        {navLinks.map(link => (
          <button
            key={link}
            className="navbar__mobile-link"
            onClick={() => handleNavClick(link)}
          >
            {link}
          </button>
        ))}
        <button
          className="navbar__cta navbar__cta--mobile"
          onClick={() => handleNavClick('contact')}
        >
          Get a Quote
        </button>
      </div>
    </nav>
  );
}
