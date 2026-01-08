import { motion } from 'framer-motion';
import {
  SiMongodb,
  SiExpress,
  SiReact,
  SiNextdotjs,
  SiNodedotjs,
  SiJavascript,
  SiTailwindcss,
  SiGit,
  SiDocker,
  SiAmazonaws,
  SiRedis,
  SiPostgresql,
  SiFirebase,
  SiRedux,
  SiGithub,
  SiBootstrap,
  SiVercel,
} from 'react-icons/si';

export default function Skills() {
  const skillCategories = [
    {
      title: 'Frontend',
      skills: [
        { name: 'React.js', icon: <SiReact size={40} />, color: '#61DAFB' },
        { name: 'Next.js', icon: <SiNextdotjs size={40} />, color: '#000000' },
        { name: 'JavaScript', icon: <SiJavascript size={40} />, color: '#F7DF1E' },
        { name: 'Tailwind CSS', icon: <SiTailwindcss size={40} />, color: '#06B6D4' },
      ],
    },
    {
      title: 'Backend',
      skills: [
        { name: 'Node.js', icon: <SiNodedotjs size={40} />, color: '#339933' },
        { name: 'Express.js', icon: <SiExpress size={40} />, color: '#FFFFFF' },
        { name: 'MongoDB', icon: <SiMongodb size={40} />, color: '#47A248' },
        { name: 'SQL', icon: <SiPostgresql size={40} />, color: '#4169E1' },
      ],
    },
    {
      title: 'Tools & Technologies',
      skills: [
        { name: 'Git', icon: <SiGit size={40} />, color: '#F05032' },
        { name: 'Docker', icon: <SiDocker size={40} />, color: '#2496ED' },
        { name: 'AWS', icon: <SiAmazonaws size={40} />, color: '#FF9900' },
        { name: 'Vercel , Netlify', icon: <SiVercel size={40} />, color: '#FFFFFF' },
      ],
    },
    {
      title: 'Additional Skills',
      skills: [
        { name: 'Firebase', icon: <SiFirebase size={40} />, color: '#FFCA28' },
        { name: 'Redux', icon: <SiRedux size={40} />, color: '#764ABC' },
        { name: 'GitHub', icon: <SiGithub size={40} />, color: '#FFFFFF' },
        { name: 'Bootstrap', icon: <SiBootstrap size={40} />, color: '#7952B3' },
      ],
    },
  ];

  return (
    <section id="skills" className="py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 section-header mx-auto" style={{ fontFamily: 'Poppins, sans-serif' }}>
            My <span className="gradient-text-pro">Skills</span>
          </h2>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto" style={{ fontFamily: 'Inter, sans-serif' }}>
            Technologies and tools I use to bring ideas to life
          </p>
        </motion.div>

        <div className="grid grid-cols-1 xs:grid-cols-2 lg:grid-cols-4 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={categoryIndex}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: categoryIndex * 0.1 }}
              className="pro-card p-6"
            >
              <h3 className="text-xl font-bold mb-6 gradient-text-pro flex items-center gap-2" style={{ fontFamily: 'Poppins, sans-serif' }}>
                <span className="text-2xl">⚡</span>
                {category.title}
              </h3>
              <div className="space-y-3">
                {category.skills.map((skill, skillIndex) => (
                  <motion.div
                    key={skillIndex}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: (categoryIndex * 0.1) + (skillIndex * 0.05) }}
                    whileHover={{ scale: 1.03, x: 8 }}
                    className="flex items-center gap-4 p-4 rounded-xl glass-pro hover:bg-gradient-to-r hover:from-primary/5 hover:to-secondary/5 transition-all cursor-pointer group border border-white/10 hover:border-primary/40"
                  >
                    <div 
                      style={{ color: skill.color }}
                      className="group-hover:scale-125 transition-transform duration-300"
                    >
                      {skill.icon}
                    </div>
                    <span className="text-gray-300 font-medium group-hover:text-white transition-colors" style={{ fontFamily: 'Inter, sans-serif' }}>{skill.name}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Expertise Bar */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="mt-16 pro-card p-8"
        >
          <h3 className="text-2xl font-bold mb-8 text-center gradient-text-pro" style={{ fontFamily: 'Poppins, sans-serif' }}>Core Expertise</h3>
          <div className="grid md:grid-cols-2 gap-6">
            {[
              { name: 'Full-Stack Development', level: 98 },
              { name: 'MERN Stack', level: 95 },
              { name: 'API Development', level: 97 },
              { name: 'Database Design', level: 93 },
              { name: 'Cloud Deployment', level: 90 },
              { name: 'Performance Optimization', level: 92 },
            ].map((expertise, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <div className="flex justify-between mb-3">
                  <span className="text-gray-300 font-medium" style={{ fontFamily: 'Inter, sans-serif' }}>{expertise.name}</span>
                  <span className="gradient-text-pro font-bold" style={{ fontFamily: 'Poppins, sans-serif' }}>{expertise.level}%</span>
                </div>
                <div className="w-full bg-white/5 rounded-full h-3 border border-white/10 overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: `${expertise.level}%` }}
                    viewport={{ once: true }}
                    transition={{ duration: 1.5, delay: index * 0.1, ease: "easeOut" }}
                    className="bg-gradient-to-r from-primary to-secondary h-full rounded-full relative"
                  >
                    <div className="absolute inset-0 shimmer"></div>
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
