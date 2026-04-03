import { useEffect, useRef, useState } from 'react';
import {
  MdLocationOn, MdPhone, MdEmail, MdSend
} from 'react-icons/md';
import { FaWhatsapp } from 'react-icons/fa';
import './Contact.css';

export default function Contact() {
  const sectionRef = useRef(null);
  const [form, setForm] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => entries.forEach(e => {
        if (e.isIntersecting) e.target.classList.add('visible');
      }),
      { threshold: 0.1 }
    );

    sectionRef.current?.querySelectorAll('.fade-in').forEach(el =>
      observer.observe(el)
    );

    return () => observer.disconnect();
  }, []);

  const handleChange = (e) => {
    setForm(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // WhatsApp number (with country code, no +)
    const phoneNumber = "919989588766";

    // Message
    const message = `New Enquiry:
Name: ${form.name}
Email: ${form.email}
Phone: ${form.phone}
Message: ${form.message}`;

    const whatsappURL = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

    // Open WhatsApp
    window.open(whatsappURL, "_blank");

    // UI feedback
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 4000);

    // Reset form
    setForm({
      name: '',
      email: '',
      phone: '',
      message: ''
    });
  };

  const contactInfo = [
    {
      icon: <MdLocationOn size={22} />,
      label: 'Our Office',
      value: 'D No. 7/269, Holmespeta, Proddatur, 516360, Kadapa Dist, A.P.',
      color: '#F97316',
    },
    {
      icon: <MdPhone size={22} />,
      label: 'Call Us',
      value: '+91 9989588766',
      href: 'tel:+919989588766',
      color: '#22C55E',
    },
    {
      icon: <MdEmail size={22} />,
      label: 'Email Us',
      value: 'gurubharathreddy1@gmail.com',
      href: 'mailto:gurubharathreddy1@gmail.com',
      color: '#3B82F6',
    },
  ];

  return (
    <section id="contact" className="contact" ref={sectionRef}>
      <div className="container">
        <div className="section-header fade-in">
          <span className="section-badge">
            <MdPhone size={14} />
            Get In Touch
          </span>
          <h2 className="section-title">
            Let's Build Something Great Together
          </h2>
          <p className="section-subtitle">
            Have a project in mind? Reach out to our team via WhatsApp.
          </p>
        </div>

        <div className="contact__layout">
          {/* LEFT INFO */}
          <div className="contact__info fade-in">
            <h3 className="contact__info-heading">
              Contact Information
            </h3>
            <p className="contact__info-sub">
              We're available Mon–Sat, 9AM–7PM.
            </p>

            <div className="contact__info-cards">
              {contactInfo.map((item, i) => (
                <div
                  key={i}
                  className="contact__info-card"
                  style={{ '--info-color': item.color }}
                >
                  <div
                    className="contact__info-icon"
                    style={{
                      background: `${item.color}18`,
                      color: item.color
                    }}
                  >
                    {item.icon}
                  </div>

                  <div>
                    <div className="contact__info-label">
                      {item.label}
                    </div>

                    {item.href ? (
                      <a
                        href={item.href}
                        className="contact__info-value contact__info-link"
                      >
                        {item.value}
                      </a>
                    ) : (
                      <div className="contact__info-value">
                        {item.value}
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>

            {/* WhatsApp Button */}
            <a
              href="https://wa.me/919989588766"
              target="_blank"
              rel="noopener noreferrer"
              className="contact__whatsapp-btn"
            >
              <FaWhatsapp size={20} />
              Chat on WhatsApp
            </a>
          </div>

          {/* RIGHT FORM */}
          <div className="contact__form-wrapper fade-in fade-in-delay-2">
            <h3 className="contact__form-heading">
              Send via WhatsApp
            </h3>

            {submitted && (
              <div className="contact__success">
                Opening WhatsApp...
              </div>
            )}

            <form className="contact__form" onSubmit={handleSubmit}>
              <div className="contact__form-row">
                <div className="contact__form-group">
                  <label>Full Name</label>
                  <input
                    name="name"
                    type="text"
                    placeholder="John Doe"
                    value={form.name}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="contact__form-group">
                  <label>Email</label>
                  <input
                    name="email"
                    type="email"
                    placeholder="john@example.com"
                    value={form.email}
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>

              <div className="contact__form-group">
                <label>Phone</label>
                <input
                  name="phone"
                  type="tel"
                  placeholder="+91 9989588766"
                  value={form.phone}
                  onChange={handleChange}
                />
              </div>

              <div className="contact__form-group">
                <label>Message</label>
                <textarea
                  name="message"
                  rows={5}
                  placeholder="Tell us about your project..."
                  value={form.message}
                  onChange={handleChange}
                  required
                />
              </div>

              <button type="submit" className="contact__submit-btn">
                Send via WhatsApp <MdSend size={18} />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}