import { createContext, useContext, useState, useEffect } from 'react';

const LanguageContext = createContext();

export const translations = {
  en: {
    // Navigation
    nav: {
      home: 'Home',
      about: 'About',
      skills: 'Skills',
      projects: 'Projects',
      contact: 'Contact'
    },
    // Hero Section
    hero: {
      greeting: "Hello, I'm",
      name: 'Muhammad Muzamil Faryad',
      title: 'MERN Stack Developer',
      description: 'With 6 months of experience crafting robust and scalable web applications. Specialized in MongoDB, Express.js, React.js (Next.js), and Node.js.',
      contactMe: 'Contact Me',
      downloadCV: 'Download CV'
    },
    // About Section
    about: {
      title: 'About',
      me: 'Me',
      description1: "I'm a passionate MERN Stack Developer with 6 months of experience building modern web applications. I specialize in creating scalable, performant, and user-friendly solutions that drive business growth.",
      description2: 'My expertise spans the entire development lifecycle, from initial concept and design to deployment and maintenance. I believe in writing clean, maintainable code and following best practices.',
      yearsExperience: 'Months Experience',
      projectsCompleted: 'Projects Completed',
      happyClients: 'Happy Clients'
    },
    // Skills Section
    skills: {
      title: 'Technical',
      subtitle: 'Skills',
      description: 'Comprehensive expertise across the modern web development stack'
    },
    // Projects Section
    projects: {
      title: 'Featured',
      subtitle: 'Projects',
      description: 'Showcasing excellence in full-stack development with industry-leading solutions',
      searchPlaceholder: 'Search projects, technologies, or keywords...',
      filterBy: 'Filter by:',
      showing: 'Showing',
      of: 'of',
      projectsText: 'projects',
      code: 'Code',
      liveDemo: 'Live Demo',
      viewMore: 'View More Projects'
    },
    // Contact Section
    contact: {
      title: 'Get In',
      subtitle: 'Touch',
      description: "Let's discuss your next project",
      name: 'Your Name',
      email: 'Your Email',
      message: 'Your Message',
      send: 'Send Message',
      sending: 'Sending...',
      success: 'Message sent successfully!',
      error: 'Failed to send message. Please try again.'
    },
    // Trust Indicators
    trust: {
      title: 'Trust',
      subtitle: 'Indicators',
      description: 'Proven track record of excellence and client satisfaction',
      yearsExp: 'Months Experience',
      yearsExpDesc: '6 months of excellence in MERN stack',
      projectsDelivered: 'Projects Delivered',
      projectsDeliveredDesc: 'Successfully completed projects',
      clientSat: 'Client Satisfaction',
      clientSatDesc: 'Based on client feedback',
      avgRating: 'Average Rating',
      avgRatingDesc: 'From verified clients',
      awards: 'Awards & Certifications',
      awardsDesc: 'Industry recognized achievements',
      codeQuality: 'Code Quality Score',
      codeQualityDesc: 'Maintained across all projects',
      qualityBadges: 'Quality Badges'
    },
    // Live Metrics
    metrics: {
      title: 'Live',
      subtitle: 'Metrics',
      description: 'Real-time development statistics and activity',
      activeHours: 'Active Hours',
      online: 'Online',
      offline: 'Offline',
      linesOfCode: 'Lines of Code',
      activeProjects: 'Active Projects',
      commitsToday: 'Commits Today',
      dayStreak: 'Day Streak',
      techUsage: 'Technology Usage',
      githubContributions: 'GitHub Contributions',
      viewProfile: 'View Profile',
      less: 'Less',
      more: 'More'
    }
  },
  ar: {
    // Navigation
    nav: {
      home: 'الرئيسية',
      about: 'عني',
      skills: 'المهارات',
      projects: 'المشاريع',
      contact: 'اتصل'
    },
    // Hero Section
    hero: {
      greeting: 'مرحباً، أنا',
      name: 'محمد مزمل فرياد',
      title: 'مطور MERN Stack',
      description: 'مع 10 سنوات من الخبرة في بناء تطبيقات ويب قوية وقابلة للتطوير. متخصص في MongoDB و Express.js و React.js (Next.js) و Node.js.',
      contactMe: 'اتصل بي',
      downloadCV: 'تحميل السيرة الذاتية'
    },
    // About Section
    about: {
      title: 'عن',
      me: 'نفسي',
      description1: 'أنا مطور MERN Stack شغوف بـ 6 أشهر من الخبرة في بناء تطبيقات الويب الحديثة. أتخصص في إنشاء حلول قابلة للتطوير وعالية الأداء وسهلة الاستخدام تدفع نمو الأعمال.',
      description2: 'تمتد خبرتي عبر دورة التطوير الكاملة، من المفهوم والتصميم الأولي إلى النشر والصيانة. أؤمن بكتابة كود نظيف وقابل للصيانة واتباع أفضل الممارسات.',
      yearsExperience: 'أشهر الخبرة',
      projectsCompleted: 'المشاريع المكتملة',
      happyClients: 'عملاء سعداء'
    },
    // Skills Section
    skills: {
      title: 'المهارات',
      subtitle: 'التقنية',
      description: 'خبرة شاملة عبر مجموعة تطوير الويب الحديثة'
    },
    // Projects Section
    projects: {
      title: 'المشاريع',
      subtitle: 'المميزة',
      description: 'عرض التميز في تطوير Full-stack مع حلول رائدة في الصناعة',
      searchPlaceholder: 'البحث عن المشاريع أو التقنيات أو الكلمات الرئيسية...',
      filterBy: 'تصفية حسب:',
      showing: 'عرض',
      of: 'من',
      projectsText: 'مشاريع',
      code: 'الكود',
      liveDemo: 'عرض مباشر',
      viewMore: 'عرض المزيد من المشاريع'
    },
    // Contact Section
    contact: {
      title: 'تواصل',
      subtitle: 'معي',
      description: 'دعنا نناقش مشروعك القادم',
      name: 'اسمك',
      email: 'بريدك الإلكتروني',
      message: 'رسالتك',
      send: 'إرسال الرسالة',
      sending: 'جاري الإرسال...',
      success: 'تم إرسال الرسالة بنجاح!',
      error: 'فشل إرسال الرسالة. يرجى المحاولة مرة أخرى.'
    },
    // Trust Indicators
    trust: {
      title: 'مؤشرات',
      subtitle: 'الثقة',
      description: 'سجل حافل من التميز ورضا العملاء',
      yearsExp: 'أشهر الخبرة',
      yearsExpDesc: '6 أشهر من التميز في MERN stack',
      projectsDelivered: 'المشاريع المنجزة',
      projectsDeliveredDesc: 'مشاريع مكتملة بنجاح',
      clientSat: 'رضا العملاء',
      clientSatDesc: 'بناءً على تعليقات العملاء',
      avgRating: 'متوسط التقييم',
      avgRatingDesc: 'من العملاء المعتمدين',
      awards: 'الجوائز والشهادات',
      awardsDesc: 'إنجازات معترف بها في الصناعة',
      codeQuality: 'درجة جودة الكود',
      codeQualityDesc: 'محافظ عليها عبر جميع المشاريع',
      qualityBadges: 'شارات الجودة'
    },
    // Live Metrics
    metrics: {
      title: 'المقاييس',
      subtitle: 'المباشرة',
      description: 'إحصائيات ونشاط التطوير في الوقت الفعلي',
      activeHours: 'ساعات النشاط',
      online: 'متصل',
      offline: 'غير متصل',
      linesOfCode: 'أسطر الكود',
      activeProjects: 'المشاريع النشطة',
      commitsToday: 'الالتزامات اليوم',
      dayStreak: 'سلسلة الأيام',
      techUsage: 'استخدام التكنولوجيا',
      githubContributions: 'مساهمات GitHub',
      viewProfile: 'عرض الملف الشخصي',
      less: 'أقل',
      more: 'أكثر'
    }
  },
  ur: {
    // Navigation
    nav: {
      home: 'ہوم',
      about: 'میرے بارے میں',
      skills: 'مہارتیں',
      projects: 'منصوبے',
      contact: 'رابطہ'
    },
    // Hero Section
    hero: {
      greeting: 'ہیلو، میں ہوں',
      name: 'محمد مزمل فریاد',
      title: 'MERN Stack ڈویلپر',
      description: '10 سال کے تجربے کے ساتھ مضبوط اور قابل توسیع ویب ایپلیکیشنز بنانے میں مہارت۔ MongoDB، Express.js، React.js (Next.js)، اور Node.js میں ماہر۔',
      contactMe: 'مجھ سے رابطہ کریں',
      downloadCV: 'سی وی ڈاؤن لوڈ کریں'
    },
    // About Section
    about: {
      title: 'میرے',
      me: 'بارے میں',
      description1: 'میں 6 ماہ تجربے کے ساتھ ایک پرجوش MERN Stack ڈویلپر ہوں۔ میں جدید ویب ایپلیکیشنز بنانے میں مہارت رکھتا ہوں۔',
      description2: 'میری مہارت پوری ترقیاتی سائیکل میں پھیلی ہوئی ہے، ابتدائی تصور اور ڈیزائن سے لے کر تعیناتی اور دیکھ بھال تک۔',
      yearsExperience: 'ماہ تجربہ',
      projectsCompleted: 'مکمل شدہ منصوبے',
      happyClients: 'خوش کلائنٹس'
    },
    // Skills Section
    skills: {
      title: 'تکنیکی',
      subtitle: 'مہارتیں',
      description: 'جدید ویب ڈویلپمنٹ اسٹیک میں جامع مہارت'
    },
    // Projects Section
    projects: {
      title: 'نمایاں',
      subtitle: 'منصوبے',
      description: 'صنعت کی معروف حل کے ساتھ فل اسٹیک ڈویلپمنٹ میں فضیلت کا مظاہرہ',
      searchPlaceholder: 'منصوبے، ٹیکنالوجیز، یا مطلوبہ الفاظ تلاش کریں...',
      filterBy: 'فلٹر کریں:',
      showing: 'دکھا رہے ہیں',
      of: 'میں سے',
      projectsText: 'منصوبے',
      code: 'کوڈ',
      liveDemo: 'لائیو ڈیمو',
      viewMore: 'مزید منصوبے دیکھیں'
    },
    // Contact Section
    contact: {
      title: 'رابطہ',
      subtitle: 'کریں',
      description: 'آئیے اپنے اگلے منصوبے پر بات کریں',
      name: 'آپ کا نام',
      email: 'آپ کا ای میل',
      message: 'آپ کا پیغام',
      send: 'پیغام بھیجیں',
      sending: 'بھیج رہے ہیں...',
      success: 'پیغام کامیابی سے بھیج دیا گیا!',
      error: 'پیغام بھیجنے میں ناکامی۔ دوبارہ کوشش کریں۔'
    },
    // Trust Indicators
    trust: {
      title: 'اعتماد کے',
      subtitle: 'اشارے',
      description: 'فضیلت اور کلائنٹ کی اطمینان کا ثابت شدہ ریکارڈ',
      yearsExp: 'ماہ تجربہ',
      yearsExpDesc: 'MERN stack میں 6 ماہ فضیلت',
      projectsDelivered: 'فراہم کردہ منصوبے',
      projectsDeliveredDesc: 'کامیابی سے مکمل شدہ منصوبے',
      clientSat: 'کلائنٹ کی اطمینان',
      clientSatDesc: 'کلائنٹ کی رائے کی بنیاد پر',
      avgRating: 'اوسط درجہ بندی',
      avgRatingDesc: 'تصدیق شدہ کلائنٹس سے',
      awards: 'ایوارڈز اور سرٹیفکیٹس',
      awardsDesc: 'صنعت میں تسلیم شدہ کامیابیاں',
      codeQuality: 'کوڈ کوالٹی سکور',
      codeQualityDesc: 'تمام منصوبوں میں برقرار',
      qualityBadges: 'معیار کے بیجز'
    },
    // Live Metrics
    metrics: {
      title: 'لائیو',
      subtitle: 'میٹرکس',
      description: 'حقیقی وقت میں ترقیاتی اعداد و شمار اور سرگرمی',
      activeHours: 'فعال گھنٹے',
      online: 'آن لائن',
      offline: 'آف لائن',
      linesOfCode: 'کوڈ کی لائنیں',
      activeProjects: 'فعال منصوبے',
      commitsToday: 'آج کی کمٹس',
      dayStreak: 'دن کی لکیر',
      techUsage: 'ٹیکنالوجی کا استعمال',
      githubContributions: 'GitHub تعاون',
      viewProfile: 'پروفائل دیکھیں',
      less: 'کم',
      more: 'زیادہ'
    }
  }
};

export function LanguageProvider({ children }) {
  const [language, setLanguage] = useState('en');

  useEffect(() => {
    const savedLanguage = localStorage.getItem('portfolio-language');
    if (savedLanguage && translations[savedLanguage]) {
      setLanguage(savedLanguage);
    }
  }, []);

  const changeLanguage = (lang) => {
    if (translations[lang]) {
      setLanguage(lang);
      localStorage.setItem('portfolio-language', lang);
      
      // Update HTML dir and lang attributes
      document.documentElement.dir = lang === 'ar' || lang === 'ur' ? 'rtl' : 'ltr';
      document.documentElement.lang = lang;
    }
  };

  const t = (key) => {
    const keys = key.split('.');
    let value = translations[language];
    
    for (const k of keys) {
      value = value?.[k];
    }
    
    return value || key;
  };

  return (
    <LanguageContext.Provider value={{ language, changeLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}
