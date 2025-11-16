import { motion } from 'framer-motion';
import { FaCode, FaRocket, FaLightbulb, FaUsers } from 'react-icons/fa';

export default function About() {
  const stats = [
    { icon: <FaCode size={30} />, number: '6 month+', label: 'Years Experience' },
    { icon: <FaRocket size={30} />, number: '150+', label: 'Projects Completed' },
    { icon: <FaUsers size={30} />, number: '80+', label: 'Happy Clients' },
    { icon: <FaLightbulb size={30} />, number: '50+', label: 'Awards Won' },
  ];

  return (
    <section id="about" className="py-12 sm:py-16 md:py-20 px-4 sm:px-6">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-3 sm:mb-4 section-header mx-auto" style={{ fontFamily: 'Poppins, sans-serif' }}>
            About <span className="gradient-text-pro">Me</span>
          </h2>
          <p className="text-gray-300 text-base sm:text-lg max-w-2xl mx-auto" style={{ fontFamily: 'Inter, sans-serif' }}>
            Passionate developer turning ideas into reality through clean code and innovative solutions
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6 md:gap-8 lg:gap-10 mb-12 md:mb-16">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="pro-card p-5 sm:p-6 md:p-8"
          >
            <h3 className="text-xl sm:text-2xl font-bold mb-4 sm:mb-6 gradient-text-pro" style={{ fontFamily: 'Poppins, sans-serif' }}>My Journey</h3>
            <p className="text-gray-300 leading-relaxed mb-4" style={{ fontFamily: 'Inter, sans-serif' }}>
              With an experience in full-stack development, I've mastered the art of 
              building scalable, high-performance web applications using the MERN stack. My expertise 
              spans from architecting complex backend systems to crafting beautiful, responsive user interfaces.
            </p>
            <p className="text-gray-300 leading-relaxed" style={{ fontFamily: 'Inter, sans-serif' }}>
              I specialize in Next.js for server-side rendering and static site generation, MongoDB for 
              efficient data management, Express.js for robust API development, and Node.js for scalable 
              backend solutions. My passion lies in solving complex problems and delivering exceptional 
              user experiences.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="pro-card p-5 sm:p-6 md:p-8"
          >
            <h3 className="text-xl sm:text-2xl font-bold mb-4 sm:mb-6 gradient-text-pro" style={{ fontFamily: 'Poppins, sans-serif' }}>What I Do</h3>
            <ul className="space-y-4" style={{ fontFamily: 'Inter, sans-serif' }}>
              <li className="flex items-start gap-3 group">
                <span className="text-primary text-xl group-hover:scale-125 transition-transform">✓</span>
                <span className="text-gray-300 group-hover:text-white transition-colors">Full-stack web application development using MERN stack</span>
              </li>
              <li className="flex items-start gap-3 group">
                <span className="text-primary text-xl group-hover:scale-125 transition-transform">✓</span>
                <span className="text-gray-300 group-hover:text-white transition-colors">RESTful API design and implementation</span>
              </li>
              <li className="flex items-start gap-3 group">
                <span className="text-primary text-xl group-hover:scale-125 transition-transform">✓</span>
                <span className="text-gray-300 group-hover:text-white transition-colors">Database architecture and optimization</span>
              </li>
              <li className="flex items-start gap-3 group">
                <span className="text-primary text-xl group-hover:scale-125 transition-transform">✓</span>
                <span className="text-gray-300 group-hover:text-white transition-colors">Cloud deployment and DevOps (AWS, Heroku, Vercel)</span>
              </li>
              <li className="flex items-start gap-3 group">
                <span className="text-primary text-xl group-hover:scale-125 transition-transform">✓</span>
                <span className="text-gray-300 group-hover:text-white transition-colors">Performance optimization and scalability solutions</span>
              </li>
              <li className="flex items-start gap-3 group">
                <span className="text-primary text-xl group-hover:scale-125 transition-transform">✓</span>
                <span className="text-gray-300 group-hover:text-white transition-colors">Technical consultation and code reviews</span>
              </li>
            </ul>
          </motion.div>
        </div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-5 md:gap-6"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="glass p-6 rounded-xl text-center hover-glow"
            >
              <div className="text-primary mb-3 flex justify-center">{stat.icon}</div>
              <div className="text-3xl font-bold gradient-text mb-2">{stat.number}</div>
              <div className="text-gray-400 text-sm">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
