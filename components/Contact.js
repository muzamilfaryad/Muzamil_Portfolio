import { motion } from 'framer-motion';
import { FaWhatsapp, FaEnvelope, FaPhone, FaMapMarkerAlt } from 'react-icons/fa';

export default function Contact() {

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

        <div className="grid md:grid-cols-1 gap-6 md:gap-10 lg:gap-12 max-w-4xl mx-auto">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <h3 className="text-xl sm:text-2xl font-bold mb-4 sm:mb-6 gradient-text-pro" style={{ fontFamily: 'Poppins, sans-serif' }}>Contact Information</h3>
            <p className="text-gray-300 mb-8" style={{ fontFamily: 'Inter, sans-serif' }}>
              Feel free to reach out through any of these channels. I'm always open to discussing 
              new projects, creative ideas, or opportunities to be part of your vision.
            </p>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
              {contactInfo.map((info, index) => (
                <motion.a
                  key={index}
                  href={info.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="flex flex-col items-center gap-3 glass-pro p-4 sm:p-5 rounded-lg sm:rounded-xl hover:border-primary/40 transition-all group text-center"
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
              className="stat-card p-8"
            >
              <h4 className="font-bold mb-3 text-2xl gradient-text-pro" style={{ fontFamily: 'Poppins, sans-serif' }}>Let's Connect on WhatsApp</h4>
              <p className="text-gray-400 text-base mb-6" style={{ fontFamily: 'Inter, sans-serif' }}>
                For immediate response and direct communication, connect with me on WhatsApp. 
                I'm available for quick discussions about your projects and ideas.
              </p>
              <a
                href={process.env.NEXT_PUBLIC_WHATSAPP_LINK || 'https://wa.me/message/RVOEO7OMWGBZA1'}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white px-8 py-4 rounded-xl font-semibold transition-all shadow-lg hover:shadow-green-500/30 text-lg"
                style={{ fontFamily: 'Inter, sans-serif' }}
              >
                <FaWhatsapp size={24} />
                Start Chat on WhatsApp
              </a>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
