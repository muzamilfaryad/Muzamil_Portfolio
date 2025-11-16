import { useState, useEffect } from 'react';
import { FaBars, FaTimes, FaSun, FaMoon, FaClock, FaEye, FaGlobe } from 'react-icons/fa';
import { useTheme } from '../contexts/ThemeContext';
import { useLanguage } from '../contexts/LanguageContext';
import Image from 'next/image';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [currentTime, setCurrentTime] = useState('');
  const [visitorCount, setVisitorCount] = useState(0);
  const [showLangMenu, setShowLangMenu] = useState(false);
  const { theme, toggleTheme } = useTheme();
  const { language, changeLanguage, t } = useLanguage();

  const languages = [
    { code: 'en', name: 'English', flag: '🇬🇧' },
    { code: 'ar', name: 'العربية', flag: '🇸🇦' },
    { code: 'ur', name: 'اردو', flag: '🇵🇰' }
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Update time every second
  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      const timeString = now.toLocaleTimeString('en-US', { 
        hour: '2-digit', 
        minute: '2-digit',
        second: '2-digit',
        hour12: true 
      });
      setCurrentTime(timeString);
    };
    
    updateTime();
    const timer = setInterval(updateTime, 1000);
    return () => clearInterval(timer);
  }, []);

  // Fetch visitor count
  useEffect(() => {
    const fetchVisitorCount = async () => {
      try {
        const response = await fetch('/api/visitor');
        const data = await response.json();
        if (data.success) {
          setVisitorCount(data.count);
        }
      } catch (error) {
        console.error('Error fetching visitor count:', error);
      }
    };
    
    fetchVisitorCount();
  }, []);

  const menuItems = [
    { name: t('nav.home'), href: '#home' },
    { name: t('nav.about'), href: '#about' },
    { name: t('nav.skills'), href: '#skills' },
    { name: t('nav.projects'), href: '#projects' },
    { name: t('nav.contact'), href: '#contact' },
  ];

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrolled ? 'glass-pro shadow-2xl shadow-primary/10 border-b border-white/10' : 'bg-transparent'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex-shrink-0">
            <a href="#home" className="flex items-center gap-3 hover:scale-105 transition-transform group">
              <div className="relative w-12 h-12 rounded-full overflow-hidden border-2 border-primary/50 group-hover:border-primary transition-colors">
                <Image
                  src="/logo.png"
                  alt="MMF Logo"
                  fill
                  style={{ objectFit: 'cover' }}
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-secondary/20"></div>
              </div>
              <div className="flex flex-col">
                <span className="text-xl font-bold gradient-text-pro" style={{ fontFamily: 'Poppins, sans-serif' }}>
                  MMF
                </span>
                <span className="text-xs text-gray-400" style={{ fontFamily: 'Inter, sans-serif' }}>
                  Portfolio
                </span>
              </div>
              <span className="relative ml-1">
                <span className="absolute -top-1 -right-1 w-2 h-2 bg-green-500 rounded-full animate-ping"></span>
                <span className="absolute -top-1 -right-1 w-2 h-2 bg-green-500 rounded-full"></span>
              </span>
            </a>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-4">
            <div className="flex items-baseline space-x-8">
              {menuItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="relative text-gray-300 hover:text-white transition-colors duration-300 px-3 py-2 text-sm font-semibold group"
                  style={{ fontFamily: 'Inter, sans-serif' }}
                >
                  {item.name}
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-primary to-secondary group-hover:w-full transition-all duration-300"></span>
                </a>
              ))}
            </div>
            
            {/* Time Display */}
            <div className="flex items-center gap-2 glass-pro px-4 py-2 rounded-xl hover:scale-105 transition-transform border border-white/10">
              <FaClock className="text-primary animate-pulse" size={16} />
              <span className="text-sm font-medium text-gray-300" style={{ fontFamily: 'Inter, sans-serif' }}>{currentTime}</span>
            </div>

            {/* Visitor Count */}
            <div className="flex items-center gap-2 glass-pro px-4 py-2 rounded-xl hover:scale-105 transition-transform group border border-white/10">
              <FaEye className="text-secondary group-hover:scale-110 transition-transform" size={16} />
              <span className="text-sm font-medium gradient-text-pro" style={{ fontFamily: 'Inter, sans-serif' }}>{visitorCount.toLocaleString()}</span>
            </div>

            {/* Language Selector */}
            <div className="relative">
              <button
                onClick={() => setShowLangMenu(!showLangMenu)}
                className="glass-pro p-3 rounded-xl hover:bg-primary/10 transition-all border border-white/10 hover:border-primary/30 flex items-center gap-2"
                aria-label="Change language"
              >
                <FaGlobe size={20} className="text-primary" />
              </button>
              
              {showLangMenu && (
                <div className="absolute right-0 mt-2 glass-pro rounded-xl overflow-hidden shadow-lg min-w-[160px] z-50 border border-white/10">
                  {languages.map(lang => (
                    <button
                      key={lang.code}
                      onClick={() => {
                        changeLanguage(lang.code);
                        setShowLangMenu(false);
                      }}
                      className={`w-full px-4 py-3 text-left hover:bg-primary/20 transition-colors flex items-center gap-3 ${
                        language === lang.code ? 'bg-primary/10 text-primary' : 'text-gray-300'
                      }`}
                      style={{ fontFamily: 'Inter, sans-serif' }}
                    >
                      <span className="text-2xl">{lang.flag}</span>
                      <span className="font-medium">{lang.name}</span>
                    </button>
                  ))}
                </div>
              )}
            </div>

            <button
              onClick={toggleTheme}
              className="glass p-3 rounded-full hover:bg-primary/20 transition-all hover-glow"
              aria-label="Toggle theme"
            >
              {theme === 'dark' ? <FaSun size={20} className="text-yellow-400" /> : <FaMoon size={20} className="text-primary" />}
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center gap-2">
            {/* Mobile Language Selector */}
            <div className="relative">
              <button
                onClick={() => setShowLangMenu(!showLangMenu)}
                className="glass-pro p-2 rounded-lg hover:bg-primary/10 transition-all border border-white/10"
                aria-label="Change language"
              >
                <FaGlobe size={18} className="text-primary" />
              </button>
            </div>
            
            <button
              onClick={toggleTheme}
              className="glass-pro p-2 rounded-lg hover:bg-primary/10 transition-all border border-white/10"
              aria-label="Toggle theme"
            >
              {theme === 'dark' ? <FaSun size={18} className="text-yellow-400" /> : <FaMoon size={18} className="text-primary" />}
            </button>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="glass-pro p-2 rounded-lg hover:bg-primary/10 transition-all border border-white/10"
            >
              {isOpen ? <FaTimes size={24} className="text-primary" /> : <FaBars size={24} className="text-gray-300" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden glass-pro border-t border-white/10">
          <div className="px-4 pt-4 pb-4 space-y-2">
            {/* Mobile Time and Visitors */}
            <div className="flex items-center justify-center gap-4 px-3 py-3 mb-3">
              <div className="flex items-center gap-2 glass-pro px-3 py-2 rounded-lg border border-white/10">
                <FaClock className="text-primary" size={14} />
                <span className="text-xs font-medium text-gray-300" style={{ fontFamily: 'Inter, sans-serif' }}>{currentTime}</span>
              </div>
              <div className="flex items-center gap-2 glass-pro px-3 py-2 rounded-lg border border-white/10">
                <FaEye className="text-secondary" size={14} />
                <span className="text-xs font-medium text-gray-300" style={{ fontFamily: 'Inter, sans-serif' }}>{visitorCount.toLocaleString()}</span>
              </div>
            </div>
            
            {menuItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-gray-300 hover:text-white hover:bg-primary/10 block px-4 py-3 rounded-lg text-base font-semibold transition-all"
                style={{ fontFamily: 'Inter, sans-serif' }}
                onClick={() => setIsOpen(false)}
              >
                {item.name}
              </a>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}
