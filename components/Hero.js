import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaWhatsapp, FaFileDownload } from 'react-icons/fa';
import Image from 'next/image';
import { useLanguage } from '../contexts/LanguageContext';

export default function Hero() {
  const { t } = useLanguage();
  const whatsappLink = process.env.NEXT_PUBLIC_WHATSAPP_LINK || 'https://wa.me/message/RVOEO7OMWGBZA1';
  
  // Safely get window dimensions
  const getWindowDimensions = () => {
    if (typeof window !== 'undefined') {
      return { width: window.innerWidth, height: window.innerHeight };
    }
    return { width: 1920, height: 1080 }; // Default values for SSR
  };
  
  const { width, height } = getWindowDimensions();

  return (
    <section id="home" className="min-h-screen flex items-center justify-center pt-16 sm:pt-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Large Animated Gradient Orbs */}
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            x: [0, 100, 0],
            y: [0, -50, 0],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute top-20 left-10 w-[500px] h-[500px] bg-gradient-to-r from-primary/40 to-purple-500/40 rounded-full blur-[100px]"
        />
        <motion.div
          animate={{
            scale: [1, 1.3, 1],
            x: [0, -80, 0],
            y: [0, 80, 0],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute bottom-20 right-10 w-[600px] h-[600px] bg-gradient-to-l from-secondary/40 to-pink-500/40 rounded-full blur-[120px]"
        />
        <motion.div
          animate={{
            scale: [1, 1.15, 1],
            rotate: [0, 180, 360]
          }}
          transition={{
            duration: 30,
            repeat: Infinity,
            ease: "linear"
          }}
          className="absolute top-1/3 right-1/4 w-[400px] h-[400px] bg-gradient-to-br from-cyan-500/30 to-blue-500/30 rounded-full blur-[80px]"
        />

        {/* Floating Grid Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `
              linear-gradient(rgba(99, 102, 241, 0.3) 1px, transparent 1px),
              linear-gradient(90deg, rgba(99, 102, 241, 0.3) 1px, transparent 1px)
            `,
            backgroundSize: '60px 60px',
            maskImage: 'radial-gradient(ellipse 80% 50% at 50% 50%, black 40%, transparent 70%)',
            WebkitMaskImage: 'radial-gradient(ellipse 80% 50% at 50% 50%, black 40%, transparent 70%)'
          }} />
        </div>

        {/* Animated Code Symbols */}
        <motion.div
          animate={{
            y: [-30, 30, -30],
            rotate: [0, 10, 0],
            opacity: [0.15, 0.35, 0.15]
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute top-32 right-24 text-primary/30 text-[120px] font-bold select-none"
          style={{ textShadow: '0 0 30px rgba(99, 102, 241, 0.5)' }}
        >
          {'</>'}
        </motion.div>
        
        <motion.div
          animate={{
            y: [30, -30, 30],
            rotate: [0, -10, 0],
            opacity: [0.15, 0.35, 0.15]
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute bottom-40 left-24 text-secondary/30 text-[100px] font-bold select-none"
          style={{ textShadow: '0 0 30px rgba(236, 72, 153, 0.5)' }}
        >
          {'{}'}
        </motion.div>

        {/* Floating Particles */}
        {[...Array(15)].map((_, i) => (
          <motion.div
            key={`particle-${i}`}
            initial={{
              x: typeof window !== 'undefined' ? Math.random() * window.innerWidth : Math.random() * 1920,
              y: typeof window !== 'undefined' ? Math.random() * window.innerHeight : Math.random() * 1080,
              scale: 0
            }}
            animate={{
              y: [null, (typeof window !== 'undefined' ? Math.random() * window.innerHeight : Math.random() * 1080)],
              scale: [0, 1.5, 0],
              opacity: [0, 0.8, 0]
            }}
            transition={{
              duration: Math.random() * 5 + 5,
              repeat: Infinity,
              delay: Math.random() * 5,
              ease: "easeInOut"
            }}
            className="absolute w-3 h-3 bg-primary rounded-full"
            style={{ boxShadow: '0 0 10px rgba(99, 102, 241, 0.8)' }}
          />
        ))}

        {/* Animated Lines */}
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={`line-${i}`}
            initial={{
              x: -200,
              y: (i + 1) * 100
            }}
            animate={{
              x: typeof window !== 'undefined' ? window.innerWidth + 200 : 2000,
              opacity: [0, 0.6, 0]
            }}
            transition={{
              duration: Math.random() * 8 + 8,
              repeat: Infinity,
              delay: Math.random() * 5,
              ease: "linear"
            }}
            className="absolute w-40 h-[2px] bg-gradient-to-r from-transparent via-primary to-transparent"
          />
        ))}

        {/* Rotating Ring */}
        <motion.div
          animate={{
            rotate: 360,
            scale: [1, 1.1, 1]
          }}
          transition={{
            rotate: { duration: 25, repeat: Infinity, ease: "linear" },
            scale: { duration: 8, repeat: Infinity, ease: "easeInOut" }
          }}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] border-2 border-primary/10 rounded-full"
        />
        <motion.div
          animate={{
            rotate: -360,
            scale: [1, 1.15, 1]
          }}
          transition={{
            rotate: { duration: 30, repeat: Infinity, ease: "linear" },
            scale: { duration: 10, repeat: Infinity, ease: "easeInOut" }
          }}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[1000px] border-2 border-secondary/10 rounded-full"
        />
      </div>

      <div className="max-w-7xl mx-auto w-full relative z-10">
        <div className="grid md:grid-cols-2 gap-8 md:gap-12 lg:gap-16 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="text-left px-2"
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="mb-6"
            >
              <span className="status-badge">
                <span>{t('hero.greeting')}</span>
              </span>
            </motion.div>
            
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-4 md:mb-6 leading-tight"
              style={{ fontFamily: 'Poppins, sans-serif' }}
            >
              {t('hero.name').split(' ').slice(0, 2).join(' ')}
              <br />
              <span className="gradient-text-pro">{t('hero.name').split(' ').slice(2).join(' ')}</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-xl sm:text-2xl md:text-3xl mb-4 md:mb-6"
              style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 600 }}
            >
              <span className="gradient-text-pro">
                {t('hero.title')}
              </span>
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="text-gray-300 text-base sm:text-lg mb-6 md:mb-8 max-w-xl leading-relaxed"
              style={{ fontFamily: 'Inter, sans-serif' }}
            >
              {t('hero.description')}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="flex flex-col sm:flex-row flex-wrap gap-3 sm:gap-4 mb-6 md:mb-8"
            >
              <a
                href="#contact"
                className="btn-pro btn-pro-primary"
              >
                <span className="flex items-center gap-2">
                  <span>{t('Let\'s Talk')}</span>
                  <span className="group-hover:translate-x-1 transition-transform">→</span>
                </span>
              </a>
              <a
                href="/MuhammadMuzamilFaryad.pdf"
                download
                className="btn-pro btn-pro-secondary flex items-center gap-2 group"
              >
                <FaFileDownload className="group-hover:rotate-12 transition-transform" />
                <span>{t('hero.downloadCV')}</span>
              </a>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7 }}
              className="flex gap-3 sm:gap-4 justify-center sm:justify-start"
            >
              <a
                href={whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="glass-pro p-4 rounded-xl hover:bg-green-500/10 transition-all group relative border border-green-500/20 hover:border-green-500/40"
                data-tooltip="WhatsApp"
              >
                <FaWhatsapp size={24} className="text-green-400 group-hover:scale-110 transition-transform" />
              </a>
              <a
                href="https://github.com/muzamilfaryad"
                target="_blank"
                rel="noopener noreferrer"
                className="glass-pro p-4 rounded-xl hover:bg-white/5 transition-all group relative border border-white/10 hover:border-white/30"
                data-tooltip="GitHub"
              >
                <FaGithub size={24} className="text-gray-300 group-hover:scale-110 transition-transform" />
              </a>
              <a
                href="https://linkedin.com/in/muzamilfaryad"
                target="_blank"
                rel="noopener noreferrer"
                className="glass-pro p-4 rounded-xl hover:bg-blue-500/10 transition-all group relative border border-blue-500/20 hover:border-blue-500/40"
                data-tooltip="LinkedIn"
              >
                <FaLinkedin size={24} className="text-blue-400 group-hover:scale-110 transition-transform" />
              </a>
            </motion.div>
          </motion.div>

          {/* Right Content - Image */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="flex justify-center mt-8 md:mt-0"
          >
            <div className="relative">
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                className="absolute inset-0 rounded-full bg-gradient-to-r from-primary to-secondary opacity-20 blur-3xl"
              />
              <div className="relative w-64 h-64 sm:w-72 sm:h-72 md:w-80 md:h-80 lg:w-96 lg:h-96 rounded-full overflow-hidden gradient-border pulse-glow">
                <div className="absolute inset-2 rounded-full overflow-hidden">
                  <Image
                    src="/opentowork.png"
                    alt="Muhammad Muzamil Faryad"
                    fill
                    style={{ objectFit: 'cover' }}
                    priority
                  />
                </div>
                <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-primary/20 via-transparent to-secondary/20 pointer-events-none"></div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
