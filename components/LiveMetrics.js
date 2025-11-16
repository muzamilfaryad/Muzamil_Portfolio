import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import { FaCode, FaClock, FaChartLine, FaGithub } from 'react-icons/fa';

export default function LiveMetrics() {
  const [activeHours, setActiveHours] = useState({ from: '9:00 AM', to: '11:00 PM', status: 'Online' });
  const [realtimeStats, setRealtimeStats] = useState({
    linesOfCode: 250000,
    activeProjects: 5,
    commitsToday: 12,
    currentStreak: 45
  });

  useEffect(() => {
    // Check if current time is within active hours
    const checkActiveStatus = () => {
      const now = new Date();
      const hour = now.getHours();
      
      if (hour >= 9 && hour < 23) {
        setActiveHours({ from: '9:00 AM', to: '11:00 PM', status: 'Online' });
      } else {
        setActiveHours({ from: '9:00 AM', to: '11:00 PM', status: 'Offline' });
      }
    };

    checkActiveStatus();
    const interval = setInterval(checkActiveStatus, 60000); // Check every minute
    
    return () => clearInterval(interval);
  }, []);

  // Technology usage breakdown
  const techStack = [
    { name: 'React/Next.js', percentage: 85, color: 'from-blue-500 to-cyan-500' },
    { name: 'Node.js/Express', percentage: 90, color: 'from-green-500 to-emerald-500' },
    { name: 'MongoDB', percentage: 80, color: 'from-green-600 to-lime-600' },
    { name: 'TypeScript', percentage: 75, color: 'from-blue-600 to-indigo-600' },
    { name: 'AWS/Cloud', percentage: 70, color: 'from-orange-500 to-amber-500' },
    { name: 'Docker/K8s', percentage: 65, color: 'from-blue-700 to-sky-700' }
  ];

  // GitHub-like contribution graph (simplified)
  const generateContributions = () => {
    const contributions = [];
    for (let week = 0; week < 52; week++) {
      const weekData = [];
      for (let day = 0; day < 7; day++) {
        const level = Math.floor(Math.random() * 5);
        weekData.push(level);
      }
      contributions.push(weekData);
    }
    return contributions;
  };

  const contributions = generateContributions();

  const getContributionColor = (level) => {
    const colors = [
      'bg-gray-800',
      'bg-primary/20',
      'bg-primary/40',
      'bg-primary/60',
      'bg-primary'
    ];
    return colors[level];
  };

  return (
    <section className="py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Live <span className="gradient-text">Metrics</span>
          </h2>
          <p className="text-gray-400 text-lg">Real-time development statistics and activity</p>
        </motion.div>

        {/* Active Hours Indicator */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="glass rounded-2xl p-6 mb-8"
        >
          <div className="flex items-center justify-between flex-wrap gap-4">
            <div className="flex items-center gap-4">
              <div className="relative">
                <div className={`w-4 h-4 rounded-full ${activeHours.status === 'Online' ? 'bg-green-500' : 'bg-gray-500'}`}>
                  {activeHours.status === 'Online' && (
                    <div className="absolute inset-0 w-4 h-4 rounded-full bg-green-500 animate-ping" />
                  )}
                </div>
              </div>
              <div>
                <h3 className="text-xl font-bold text-white">Active Hours</h3>
                <p className="text-gray-400 text-sm">
                  {activeHours.from} - {activeHours.to} PKT
                </p>
              </div>
            </div>
            <div className="flex items-center gap-2 bg-primary/10 px-4 py-2 rounded-full">
              <FaClock className="text-primary" />
              <span className="text-white font-semibold">{activeHours.status}</span>
            </div>
          </div>
        </motion.div>

        {/* Real-time Project Stats */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {[
            { icon: FaCode, label: 'Lines of Code', value: realtimeStats.linesOfCode.toLocaleString(), color: 'text-blue-500' },
            { icon: FaChartLine, label: 'Active Projects', value: realtimeStats.activeProjects, color: 'text-green-500' },
            { icon: FaGithub, label: 'Commits Today', value: realtimeStats.commitsToday, color: 'text-purple-500' },
            { icon: FaClock, label: 'Day Streak', value: realtimeStats.currentStreak, color: 'text-orange-500' }
          ].map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="glass rounded-2xl p-6 hover-glow group"
            >
              <stat.icon className={`${stat.color} text-3xl mb-3`} />
              <h3 className="text-3xl font-bold text-white mb-1">{stat.value}</h3>
              <p className="text-gray-400 text-sm">{stat.label}</p>
            </motion.div>
          ))}
        </div>

        {/* Technology Usage Breakdown */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="glass rounded-2xl p-8 mb-8"
        >
          <h3 className="text-2xl font-bold mb-6">Technology Usage</h3>
          <div className="space-y-6">
            {techStack.map((tech, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <div className="flex justify-between mb-2">
                  <span className="text-white font-medium">{tech.name}</span>
                  <span className="text-gray-400">{tech.percentage}%</span>
                </div>
                <div className="w-full bg-darker rounded-full h-3 overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: `${tech.percentage}%` }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, delay: index * 0.1 }}
                    className={`h-full bg-gradient-to-r ${tech.color} rounded-full`}
                  />
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* GitHub Contributions Graph */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="glass rounded-2xl p-8"
        >
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-2xl font-bold">GitHub Contributions</h3>
            <a
              href="https://github.com/muzamilfaryad"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-primary hover:text-secondary transition-colors"
            >
              <FaGithub size={20} />
              <span className="text-sm">View Profile</span>
            </a>
          </div>
          
          <div className="overflow-x-auto">
            <div className="inline-flex gap-1 min-w-full">
              {contributions.map((week, weekIndex) => (
                <div key={weekIndex} className="flex flex-col gap-1">
                  {week.map((day, dayIndex) => (
                    <motion.div
                      key={`${weekIndex}-${dayIndex}`}
                      initial={{ scale: 0 }}
                      whileInView={{ scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: (weekIndex * 7 + dayIndex) * 0.001 }}
                      whileHover={{ scale: 1.5 }}
                      className={`w-3 h-3 rounded-sm ${getContributionColor(day)} transition-all cursor-pointer`}
                      title={`${day} contributions`}
                    />
                  ))}
                </div>
              ))}
            </div>
          </div>
          
          <div className="flex items-center justify-end gap-2 mt-4 text-xs text-gray-400">
            <span>Less</span>
            <div className="flex gap-1">
              {[0, 1, 2, 3, 4].map(level => (
                <div key={level} className={`w-3 h-3 rounded-sm ${getContributionColor(level)}`} />
              ))}
            </div>
            <span>More</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
