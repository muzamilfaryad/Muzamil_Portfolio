import { useState } from 'react';
import { motion } from 'framer-motion';
import { FaWhatsapp, FaEnvelope, FaPhone, FaMapMarkerAlt, FaPaperPlane } from 'react-icons/fa';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [status, setStatus] = useState('');

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('sending');

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok && data.emailSent) {
        setStatus('success');
        setFormData({ name: '', email: '', subject: '', message: '' });
        setTimeout(() => setStatus(''), 3000);
      } else if (response.ok && !data.emailSent) {
        setStatus('warning');
        setTimeout(() => setStatus(''), 5000);
      } else {
        setStatus('error');
      }
    } catch (error) {
      setStatus('error');
    }
  };

  const contactInfo = [
    {
      icon: <FaWhatsapp size={24} />,
      title: 'WhatsApp',
      value: '+92 3214238769',
      link: process.env.NEXT_PUBLIC_WHATSAPP_LINK || 'https://wa.me/message/RVOEO7OMWGBZA1',
    },
    {
      icon: <FaEnvelope size={24} />,
      title: 'Email',
      value: 'muzamilfaryad77@gmail.com',
      link: 'mailto:muzamilfaryad77@gmail.com',
    },
    {
      icon: <FaPhone size={24} />,
      title: 'Phone',
      value: '+92 3214238769',
      link: 'tel:+923214238769',
    },
    {
      icon: <FaMapMarkerAlt size={24} />,
      title: 'Location',
      value: 'Pakistan',
      link: '#',
    },
  ];

  return (
    <section id="contact" className="py-12 sm:py-16 md:py-20 px-4 sm:px-6">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-3 sm:mb-4 section-header mx-auto" style={{ fontFamily: 'Poppins, sans-serif' }}>
            Get In <span className="gradient-text-pro">Touch</span>
          </h2>
          <p className="text-gray-300 text-base sm:text-lg max-w-2xl mx-auto" style={{ fontFamily: 'Inter, sans-serif' }}>
            Let's discuss your next project and bring your ideas to life
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6 md:gap-10 lg:gap-12">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-xl sm:text-2xl font-bold mb-4 sm:mb-6 gradient-text-pro" style={{ fontFamily: 'Poppins, sans-serif' }}>Contact Information</h3>
            <p className="text-gray-300 mb-8" style={{ fontFamily: 'Inter, sans-serif' }}>
              Feel free to reach out through any of these channels. I'm always open to discussing 
              new projects, creative ideas, or opportunities to be part of your vision.
            </p>

            <div className="space-y-4">
              {contactInfo.map((info, index) => (
                <motion.a
                  key={index}
                  href={info.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="flex items-center gap-3 sm:gap-4 glass-pro p-4 sm:p-5 rounded-lg sm:rounded-xl hover:border-primary/40 transition-all group"
                >
                  <div className="text-primary group-hover:scale-110 transition-transform">{info.icon}</div>
                  <div>
                    <div className="text-sm text-gray-400" style={{ fontFamily: 'Inter, sans-serif' }}>{info.title}</div>
                    <div className="text-white font-medium group-hover:text-primary transition-colors" style={{ fontFamily: 'Inter, sans-serif' }}>{info.value}</div>
                  </div>
                </motion.a>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="mt-8 stat-card p-6"
            >
              <h4 className="font-bold mb-3 text-lg" style={{ fontFamily: 'Poppins, sans-serif' }}>Quick Connect</h4>
              <p className="text-gray-400 text-sm mb-4" style={{ fontFamily: 'Inter, sans-serif' }}>
                For immediate response, connect with me on WhatsApp
              </p>
              <a
                href={process.env.NEXT_PUBLIC_WHATSAPP_LINK || 'https://wa.me/message/RVOEO7OMWGBZA1'}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white px-6 py-3 rounded-xl font-semibold transition-all shadow-lg hover:shadow-green-500/30"
                style={{ fontFamily: 'Inter, sans-serif' }}
              >
                <FaWhatsapp size={20} />
                Chat on WhatsApp
              </a>
            </motion.div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="pro-card p-5 sm:p-6 md:p-8"
          >
            <h3 className="text-xl sm:text-2xl font-bold mb-4 sm:mb-6 gradient-text-pro" style={{ fontFamily: 'Poppins, sans-serif' }}>Send a Message (Email)</h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-sm font-medium mb-2 text-gray-300" style={{ fontFamily: 'Inter, sans-serif' }}>Name</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full glass-pro border border-white/10 rounded-lg sm:rounded-xl px-4 sm:px-5 py-3 sm:py-4 text-sm sm:text-base text-white focus:outline-none focus:border-primary/50 transition-all"
                  placeholder="Your Name"
                  style={{ fontFamily: 'Inter, sans-serif' }}
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-2 text-gray-300" style={{ fontFamily: 'Inter, sans-serif' }}>Email</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full glass-pro border border-white/10 rounded-lg sm:rounded-xl px-4 sm:px-5 py-3 sm:py-4 text-sm sm:text-base text-white focus:outline-none focus:border-primary/50 transition-all"
                  placeholder="your.email@example.com"
                  style={{ fontFamily: 'Inter, sans-serif' }}
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-2 text-gray-300" style={{ fontFamily: 'Inter, sans-serif' }}>Subject</label>
                <input
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full glass-pro border border-white/10 rounded-lg sm:rounded-xl px-4 sm:px-5 py-3 sm:py-4 text-sm sm:text-base text-white focus:outline-none focus:border-primary/50 transition-all"
                  style={{ fontFamily: 'Inter, sans-serif' }}
                  placeholder="Project Discussion"
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-2 text-gray-300" style={{ fontFamily: 'Inter, sans-serif' }}>Message</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows="5"
                  className="w-full glass-pro border border-white/10 rounded-lg sm:rounded-xl px-4 sm:px-5 py-3 sm:py-4 text-sm sm:text-base text-white focus:outline-none focus:border-primary/50 transition-all resize-none"
                  placeholder="Tell me about your project..."
                  style={{ fontFamily: 'Inter, sans-serif' }}
                />
              </div>

              <button
                type="submit"
                disabled={status === 'sending'}
                className="w-full btn-pro btn-pro-primary flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {status === 'sending' ? (
                  'Sending...'
                ) : (
                  <>
                    <FaPaperPlane />
                    Send Message
                  </>
                )}
              </button>

              {status === 'success' && (
                <p className="text-green-400 text-center font-medium" style={{ fontFamily: 'Inter, sans-serif' }}>✓ Message sent successfully!</p>
              )}
              {status === 'warning' && (
                <p className="text-yellow-400 text-center font-medium" style={{ fontFamily: 'Inter, sans-serif' }}>⚠ Message received! Email will be sent once configured.</p>
              )}
              {status === 'error' && (
                <p className="text-red-400 text-center font-medium" style={{ fontFamily: 'Inter, sans-serif' }}>✗ Failed to send message. Please try again.</p>
              )}
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
