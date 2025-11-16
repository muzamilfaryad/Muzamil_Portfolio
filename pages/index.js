import Head from 'next/head';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import About from '../components/About';
import Skills from '../components/Skills';
import SkillsVisualization from '../components/SkillsVisualization';
import Projects from '../components/Projects';
import TrustIndicators from '../components/TrustIndicators';
import LiveMetrics from '../components/LiveMetrics';
import CodePlayground from '../components/CodePlayground';
import Portfolio3D from '../components/Portfolio3D';
import Contact from '../components/Contact';
import Footer from '../components/Footer';
import PDFDownload from '../components/PDFDownload';

export default function Home() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": "Muhammad Muzamil Faryad",
    "url": "https://your-domain.com",
    "image": "https://your-domain.com/opentowork.png",
    "sameAs": [
      "https://github.com/muzamilfaryad",
      "https://linkedin.com/in/muzamilfaryad",
      "https://wa.me/message/RVOEO7OMWGBZA1"
    ],
    "jobTitle": "MERN Stack Developer",
    "worksFor": {
      "@type": "Organization",
      "name": "Freelance"
    },
    "description": "Expert MERN Stack Developer with 10+ years of experience specializing in MongoDB, Express.js, React, Next.js, and Node.js",
    "knowsAbout": [
      "MongoDB",
      "Express.js",
      "React.js",
      "Next.js",
      "Node.js",
      "JavaScript",
      "Full Stack Development",
      "Web Development",
      "Database Design",
      "API Development"
    ],
    "email": "muzamilfaryad77@gmail.com",
    "address": {
      "@type": "PostalAddress",
      "addressCountry": "Pakistan"
    }
  };

  return (
    <>
      <Head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      </Head>
      <div className="animated-bg min-h-screen">
        <Navbar />
        <main>
          <Hero />
          <TrustIndicators />
          <About />
          <Skills />
          <SkillsVisualization />
          <LiveMetrics />
          <Projects />
          <Portfolio3D />
          <CodePlayground />
          <div className="py-12 flex justify-center">
            <PDFDownload />
          </div>
          <Contact />
        </main>
        <Footer />
      </div>
    </>
  );
}
