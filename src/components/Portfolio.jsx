import { useEffect, useRef, useState } from 'react';
import { MdPhotoLibrary, MdZoomIn, MdClose } from 'react-icons/md';
import { FaImages } from 'react-icons/fa';
import './Portfolio.css';

const projects = [
  {
    id: 1,
    title: 'Modern Villa Complex',
    category: 'Residential',
    imgUrl: 'https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=800&q=80',
  },
  {
    id: 2,
    title: 'Corporate Office Tower',
    category: 'Commercial',
    imgUrl: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&q=80',
  },
  {
    id: 3,
    title: 'Luxury Apartment Project',
    category: 'Residential',
    imgUrl: 'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=800&q=80',
  },
  {
    id: 4,
    title: 'Shopping Mall Development',
    category: 'Commercial',
    imgUrl: 'https://images.unsplash.com/photo-1555636222-cae831e670b3?w=800&q=80',
  },
  {
    id: 5,
    title: 'Road Infrastructure Project',
    category: 'Infrastructure',
    imgUrl: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=800&q=80',
  },
  {
    id: 6,
    title: 'Industrial Warehouse',
    category: 'Commercial',
    imgUrl: 'https://images.unsplash.com/photo-1464938050520-ef2270bb8ce8?w=800&q=80',
  },
];

const categories = ['All', 'Residential', 'Commercial', 'Infrastructure'];

export default function Portfolio() {
  const sectionRef = useRef(null);
  const [active, setActive] = useState('All');
  const [lightbox, setLightbox] = useState(null);

  const filtered = active === 'All' ? projects : projects.filter(p => p.category === active);

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

  useEffect(() => {
    const handleKey = (e) => { if (e.key === 'Escape') setLightbox(null); };
    window.addEventListener('keydown', handleKey);
    return () => window.removeEventListener('keydown', handleKey);
  }, []);

  return (
    <section id="portfolio" className="portfolio" ref={sectionRef}>
      {/* Orb */}
      <div className="portfolio__orb" aria-hidden="true" />

      <div className="container">
        <div className="section-header fade-in">
          <span className="section-badge" style={{ color: 'white', borderColor: 'rgba(249,115,22,0.4)' }}>
            <FaImages size={14} />
            Our Past Works
          </span>
          <h2 className="section-title" style={{ color: 'white' }}>Projects We're Proud Of</h2>
          <p className="section-subtitle" style={{ color: 'rgba(255,255,255,0.55)' }}>
            A showcase of our finest constructions — built with quality material, skilled craftsmanship,
            and passion for excellence.
          </p>
        </div>

        {/* Filter tabs */}
        <div className="portfolio__filters fade-in">
          {categories.map(cat => (
            <button
              key={cat}
              className={`portfolio__filter-btn ${active === cat ? 'portfolio__filter-btn--active' : ''}`}
              onClick={() => setActive(cat)}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Image Grid */}
        <div className="portfolio__grid">
          {filtered.map((project, i) => (
            <div
              key={project.id}
              className={`portfolio__card fade-in fade-in-delay-${(i % 3) + 1}`}
              onClick={() => setLightbox(project)}
              role="button"
              tabIndex={0}
              aria-label={`View ${project.title}`}
              onKeyDown={(e) => e.key === 'Enter' && setLightbox(project)}
            >
              <img
                src={project.imgUrl}
                alt={project.title}
                className="portfolio__card-img"
                loading="lazy"
              />
              <div className="portfolio__card-overlay">
                <span className="portfolio__card-category">{project.category}</span>
                <h3 className="portfolio__card-title">{project.title}</h3>
                <div className="portfolio__card-zoom">
                  <MdZoomIn size={22} />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Upload CTA */}
        <div className="portfolio__upload-hint fade-in">
          <MdPhotoLibrary size={20} />
          <span>More projects coming soon — you can add your own photos here</span>
        </div>
      </div>

      {/* Lightbox */}
      {lightbox && (
        <div className="portfolio__lightbox" onClick={() => setLightbox(null)} role="dialog" aria-modal="true">
          <button className="portfolio__lightbox-close" onClick={() => setLightbox(null)} aria-label="Close">
            <MdClose size={28} />
          </button>
          <div className="portfolio__lightbox-inner" onClick={e => e.stopPropagation()}>
            <img src={lightbox.imgUrl.replace('w=800', 'w=1400')} alt={lightbox.title} />
            <div className="portfolio__lightbox-info">
              <span className="portfolio__card-category">{lightbox.category}</span>
              <h3>{lightbox.title}</h3>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
