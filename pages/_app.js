import Head from 'next/head';
import '../styles/globals.css';
import { ThemeProvider } from '../contexts/ThemeContext';
import { LanguageProvider } from '../contexts/LanguageContext';

export default function App({ Component, pageProps }) {
  return (
    <ThemeProvider>
      <LanguageProvider>
      <Head>
        {/* Primary Meta Tags */}
        <title>Muhammad Muzamil Faryad - MERN Stack Developer | Full Stack Web Developer</title>
        <meta name="title" content="Muhammad Muzamil Faryad - MERN Stack Developer | Full Stack Web Developer" />
        <meta name="description" content="Expert MERN Stack Developer with 6 months experience. Specializing in MongoDB, Express.js, React, Next.js, Node.js. 150+ projects delivered. Available for hire." />
        <meta name="keywords" content="MERN Stack Developer, Full Stack Developer, React Developer, Next.js Developer, Node.js Developer, MongoDB Expert, JavaScript Developer, Web Developer, Muzamil Faryad, Pakistan Developer, Freelance Developer" />
        <meta name="author" content="Muhammad Muzamil Faryad" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="robots" content="index, follow" />
        <meta name="language" content="English" />
        <meta name="revisit-after" content="7 days" />
        <link rel="canonical" href="https://your-domain.com" />
        
        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://your-domain.com" />
        <meta property="og:title" content="Muhammad Muzamil Faryad - MERN Stack Developer" />
        <meta property="og:description" content="Expert MERN Stack Developer with 6 months experience. Specializing in MongoDB, Express.js, React, Next.js, Node.js. 150+ projects delivered." />
        <meta property="og:image" content="https://your-domain.com/opentowork.png" />
        <meta property="og:site_name" content="Muhammad Muzamil Faryad Portfolio" />
        
        {/* Twitter */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://your-domain.com" />
        <meta property="twitter:title" content="Muhammad Muzamil Faryad - MERN Stack Developer" />
        <meta property="twitter:description" content="Expert MERN Stack Developer with 6 months experience. Specializing in MongoDB, Express.js, React, Next.js, Node.js." />
        <meta property="twitter:image" content="https://your-domain.com/opentowork.png" />
        
        {/* Additional SEO */}
        <meta name="theme-color" content="#0ea5e9" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/opentowork.png" />
      </Head>
        <Component {...pageProps} />
      </LanguageProvider>
    </ThemeProvider>
  );
}
