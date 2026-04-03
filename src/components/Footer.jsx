import { MdConstruction, MdLocationOn, MdPhone, MdEmail } from 'react-icons/md';
import { FaWhatsapp, FaLinkedin, FaInstagram, FaFacebook } from 'react-icons/fa';
import './Footer.css';

export default function Footer() {
  const year = new Date().getFullYear();

  const quickLinks = ['Home', 'Services', 'Portfolio', 'Contact'];

  const handleNav = (link) => {
    document.getElementById(link.toLowerCase())?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer className="footer">
      <div className="footer__top">
        <div className="container footer__grid">
          {/* Brand */}
          <div className="footer__brand">
            <div className="footer__logo">
              <div className="footer__logo-icon">
                <MdConstruction size={22} />
              </div>
              <div>
                <span className="footer__logo-gbr">GBR</span>
                <span className="footer__logo-constructions"> Constructions</span>
              </div>
            </div>
            <p className="footer__tagline">
              Building your vision into reality with excellence, integrity, and precision
              for over 15 years. Your trusted construction partner.
            </p>
            <div className="footer__socials">
              <a href="https://wa.me/919989588766" target="_blank" rel="noopener noreferrer" className="footer__social-btn footer__social-btn--whatsapp" aria-label="WhatsApp">
                <FaWhatsapp size={18} />
              </a>
              <a href="#" className="footer__social-btn" aria-label="Instagram">
                <FaInstagram size={18} />
              </a>
              <a href="#" className="footer__social-btn" aria-label="Facebook">
                <FaFacebook size={18} />
              </a>
              <a href="#" className="footer__social-btn" aria-label="LinkedIn">
                <FaLinkedin size={18} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="footer__col">
            <h4 className="footer__col-title">Quick Links</h4>
            <ul className="footer__col-list">
              {quickLinks.map(link => (
                <li key={link}>
                  <button className="footer__link-btn" onClick={() => handleNav(link)}>
                    {link}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="footer__col footer__col--contact">
            <h4 className="footer__col-title">Contact Info</h4>
            <div className="footer__contact-items">
              <div className="footer__contact-item">
                <MdLocationOn size={16} color="#F97316" />
                <span>D No. 7/269, Holmespeta, Proddatur, 516360, Kadapa Dist, A.P</span>
              </div>
              <div className="footer__contact-item">
                <MdPhone size={16} color="#22C55E" />
                <a href="tel:+919989588766" className="footer__contact-link">+91 9989588766</a>
              </div>
              <div className="footer__contact-item">
                <MdEmail size={16} color="#3B82F6" />
                <a href="mailto:gurubharathreddy1@gmail.com" className="footer__contact-link">gurubharathreddy1@gmail.com</a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="footer__bottom">
        <div className="container footer__bottom-inner">
          <p>© {year} <strong>GBR Constructions</strong>. All rights reserved.</p>
          <p className="footer__bottom-credits">
            Built with ❤️ for excellence in construction
          </p>
        </div>
      </div>
    </footer>
  );
}
