import Head from 'next/head';
import dynamic from 'next/dynamic';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import About from '../components/About';
import Skills from '../components/Skills';

// Dynamically import heavy components with loading
const SkillsVisualization = dynamic(() => import('../components/SkillsVisualization'), {
  loading: () => <div className="py-20 text-center">Loading skills...</div>
});
const Projects = dynamic(() => import('../components/Projects'), {
  loading: () => <div className="py-20 text-center">Loading projects...</div>
});
const Portfolio3D = dynamic(() => import('../components/Portfolio3D'), {
  loading: () => <div className="py-20 text-center">Loading 3D showcase...</div>
});
const CodePlayground = dynamic(() => import('../components/CodePlayground'), {
  loading: () => <div className="py-20 text-center">Loading code playground...</div>
});
const Contact = dynamic(() => import('../components/Contact'), {
  loading: () => <div className="py-20 text-center">Loading contact...</div>
});
const Footer = dynamic(() => import('../components/Footer'), {
  loading: () => <div className="py-20 text-center">Loading footer...</div>
});
const PDFDownload = dynamic(() => import('../components/PDFDownload'), {
  loading: () => <div className="py-20 text-center">Loading download...</div>
});

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
    "description": "Expert MERN Stack Developer with 6 months of experience specializing in MongoDB, Express.js, React, Next.js, and Node.js",
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
          <About />
          <Skills />
          <SkillsVisualization />
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
