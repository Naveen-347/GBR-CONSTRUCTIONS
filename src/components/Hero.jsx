import { useEffect, useRef } from 'react';
import { FaHardHat, FaArrowRight, FaPhone } from 'react-icons/fa';
import { MdConstruction, MdVerified } from 'react-icons/md';
import { HiOutlineBuildingOffice2 } from 'react-icons/hi2';
import { BsStarFill } from 'react-icons/bs';
import './Hero.css';

export default function Hero() {
  const heroRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => entries.forEach(e => {
        if (e.isIntersecting) e.target.classList.add('visible');
      }),
      { threshold: 0.1 }
    );
    heroRef.current?.querySelectorAll('.fade-in').forEach(el => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  const stats = [
    { icon: <MdConstruction size={22} />, value: '350+', label: 'Projects Done' },
    { icon: <FaHardHat size={22} />, value: '15+', label: 'Years Experience' },
    { icon: <HiOutlineBuildingOffice2 size={22} />, value: '200+', label: 'Happy Clients' },
  ];

  return (
    <section id="home" className="hero" ref={heroRef}>
      {/* Background grid pattern */}
      <div className="hero__grid-overlay" aria-hidden="true"></div>

      {/* Glowing orbs */}
      <div className="hero__orb hero__orb--1" aria-hidden="true"></div>
      <div className="hero__orb hero__orb--2" aria-hidden="true"></div>

      <div className="container hero__inner">
        {/* Left content */}
        <div className="hero__content">
          <div className="hero__badge fade-in">
            <FaHardHat size={14} />
            GBR Constructions
          </div>

          <h1 className="hero__title fade-in fade-in-delay-1">
            Building Your <br />
            <span className="hero__title-accent">Vision</span> Into
            <br />Reality
          </h1>

          <p className="hero__subtitle fade-in fade-in-delay-2">
            We deliver world-class residential, commercial, and infrastructure
            construction with precision, quality, and on-time delivery — trusted by
            hundreds of clients for over 15 years.
          </p>

          <div className="hero__actions fade-in fade-in-delay-3">
            <a href="#contact" className="btn-primary hero__btn-primary">
              Get Free Quote <FaArrowRight size={14} />
            </a>
            <a href="#services" className="btn-outline">
              Our Services
            </a>
          </div>

          {/* Trust badges */}
          <div className="hero__trust fade-in fade-in-delay-4">
            <div className="hero__trust-item">
              <MdVerified size={18} color="#22c55e" />
              <span>ISO Certified</span>
            </div>
            <div className="hero__trust-divider"></div>
            <div className="hero__trust-item">
              <div className="hero__stars">
                {[...Array(5)].map((_, i) => <BsStarFill key={i} size={12} color="#FBBF24" />)}
              </div>
              <span>5.0 Rated</span>
            </div>
            <div className="hero__trust-divider"></div>
            <div className="hero__trust-item">
              <FaPhone size={14} color="#F97316" />
              <span>+91 9989588766</span>
            </div>
          </div>
        </div>

        {/* Right side stat cards */}
        <div className="hero__visual fade-in fade-in-delay-2">
          <div className="hero__card-wrapper">
            {/* Main card */}
            <div className="hero__main-card">
              <div className="hero__main-card-header">
                <span className="hero__main-card-title">GBR Constructions</span>
                <div className="hero__main-card-dots">
                  <span style={{background:'#ef4444'}}></span>
                  <span style={{background:'#f59e0b'}}></span>
                  <span style={{background:'#22c55e'}}></span>
                </div>
              </div>
              <div className="hero__main-card-body">
                {stats.map((stat, i) => (
                  <div className="hero__stat-row" key={i}>
                    <div className="hero__stat-icon">{stat.icon}</div>
                    <div>
                      <div className="hero__stat-value">{stat.value}</div>
                      <div className="hero__stat-label">{stat.label}</div>
                    </div>
                    <div className="hero__stat-bar">
                      <div className="hero__stat-bar-fill" style={{ width: `${[88, 95, 76][i]}%` }}></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Floating badge */}
            <div className="hero__floating-badge">
              <div className="hero__floating-badge-icon">
                <MdConstruction size={20} color="#F97316" />
              </div>
              <div>
                <div className="hero__floating-badge-val">100%</div>
                <div className="hero__floating-badge-label">Quality Guaranteed</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="hero__scroll-hint">
        <div className="hero__scroll-mouse">
          <div className="hero__scroll-wheel"></div>
        </div>
        <span>Scroll to explore</span>
      </div>
    </section>
  );
}
