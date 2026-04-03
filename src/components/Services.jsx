import { useEffect, useRef } from 'react';
import {
  MdApartment, MdBusiness, MdHomeRepairService,
  MdDesignServices, MdEngineering, MdFoundation
} from 'react-icons/md';
import { FaCheckCircle } from 'react-icons/fa';
import './Services.css';

const services = [
  {
    icon: <MdApartment size={30} />,
    title: 'Residential Construction',
    desc: 'Custom homes built with care and precision',
    items: ['Custom Home Building', 'Duplex & Villas', 'Apartment Complexes', 'Gated Communities'],
    color: '#F97316',
  },
  {
    icon: <MdBusiness size={30} />,
    title: 'Commercial Development',
    desc: 'Modern commercial spaces that drive business growth',
    items: ['Office Buildings', 'Retail Outlets', 'Warehouses & Factories', 'Hospitality Projects'],
    color: '#3B82F6',
  },
  {
    icon: <MdHomeRepairService size={30} />,
    title: 'Renovation & Remodeling',
    desc: 'Transforming existing spaces with modern upgrades',
    items: ['Interior Renovation', 'Kitchen & Bath Remodel', 'Structural Upgrades', 'Room Additions'],
    color: '#10B981',
  },
  {
    icon: <MdDesignServices size={30} />,
    title: 'Interior Design',
    desc: 'Aesthetic interiors that reflect your personality',
    items: ['Space Planning', 'Material Selection', 'Furniture & Décor', '3D Visualization'],
    color: '#8B5CF6',
  },
  {
    icon: <MdEngineering size={30} />,
    title: 'Project Management',
    desc: 'End-to-end project oversight for seamless delivery',
    items: ['Timeline Planning', 'Cost Estimation', 'Vendor Coordination', 'Quality Inspection'],
    color: '#F59E0B',
  },
  {
    icon: <MdFoundation size={30} />,
    title: 'Infrastructure Works',
    desc: 'Large-scale civil and infrastructure solutions',
    items: ['Road Construction', 'Bridge Works', 'Water & Drainage', 'Government Contracts'],
    color: '#EF4444',
  },
];

export default function Services() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => entries.forEach(e => {
        if (e.isIntersecting) e.target.classList.add('visible');
      }),
      { threshold: 0.1 }
    );
    sectionRef.current?.querySelectorAll('.fade-in').forEach(el => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <section id="services" className="services" ref={sectionRef}>
      <div className="container">
        <div className="section-header fade-in">
          <span className="section-badge">
            <MdEngineering size={14} />
            What We Do
          </span>
          <h2 className="section-title">Our Professional Services</h2>
          <p className="section-subtitle">
            Comprehensive construction and design solutions tailored to bring your vision
            to life — on time, on budget, and beyond expectations.
          </p>
        </div>

        <div className="services__grid">
          {services.map((svc, i) => (
            <div
              key={i}
              className={`services__card fade-in fade-in-delay-${(i % 3) + 1}`}
              style={{ '--card-accent': svc.color }}
            >
              <div className="services__card-icon" style={{ background: `${svc.color}18`, color: svc.color }}>
                {svc.icon}
              </div>
              <h3 className="services__card-title">{svc.title}</h3>
              <p className="services__card-desc">{svc.desc}</p>
              <ul className="services__card-list">
                {svc.items.map((item, j) => (
                  <li key={j} className="services__card-item">
                    <FaCheckCircle size={13} color={svc.color} />
                    {item}
                  </li>
                ))}
              </ul>
              <div className="services__card-accent-bar" style={{ background: svc.color }}></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
