import { useEffect, useRef, useState } from 'react';
import { MdTimelapse } from 'react-icons/md';
import { FaHardHat, FaUsers, FaAward } from 'react-icons/fa';
import './Stats.css';

const stats = [
  { icon: <MdTimelapse size={28} />, end: 350, suffix: '+', label: 'Projects Completed' },
  { icon: <FaHardHat size={28} />, end: 15, suffix: '+', label: 'Years Experience' },
  { icon: <FaUsers size={28} />, end: 200, suffix: '+', label: 'Happy Clients' },
  { icon: <FaAward size={28} />, end: 40, suffix: '+', label: 'Expert Engineers' },
];

function useCounter(end, duration = 2000, start = false) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!start) return;
    let startTime;
    const step = (timestamp) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.floor(eased * end));
      if (progress < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }, [start, end, duration]);

  return count;
}

function StatItem({ icon, end, suffix, label, start, delay }) {
  const count = useCounter(end, 2000, start);
  return (
    <div className={`stats__item fade-in fade-in-delay-${delay}`}>
      <div className="stats__item-icon">{icon}</div>
      <div className="stats__item-value">{count}{suffix}</div>
      <div className="stats__item-label">{label}</div>
    </div>
  );
}

export default function Stats() {
  const sectionRef = useRef(null);
  const [started, setStarted] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => entries.forEach(e => {
        if (e.isIntersecting) {
          e.target.classList.add('visible');
          setStarted(true);
        }
      }),
      { threshold: 0.3 }
    );
    const el = sectionRef.current;
    if (el) {
      observer.observe(el);
      el.querySelectorAll('.fade-in').forEach(child => observer.observe(child));
    }
    return () => observer.disconnect();
  }, []);

  return (
    <section className="stats" ref={sectionRef}>
      {/* Background pattern */}
      <div className="stats__bg-pattern" aria-hidden="true" />

      <div className="container">
        <div className="stats__header fade-in">
          <h2 className="stats__headline">
            Trusted by Hundreds of <span className="stats__headline-accent">Satisfied Clients</span>
          </h2>
          <p className="stats__subheadline">
            Our numbers speak for the trust our clients place in us every single day.
          </p>
        </div>

        <div className="stats__grid">
          {stats.map((s, i) => (
            <StatItem key={i} {...s} start={started} delay={i + 1} />
          ))}
        </div>
      </div>
    </section>
  );
}
