import { FaHeart } from 'react-icons/fa';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="glass py-8 px-4 border-t border-primary/20">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="text-gray-400 text-sm">
            © {currentYear} Muhammad Muzamil Faryad. All rights reserved.
          </div>
          
          <div className="flex items-center gap-2 text-gray-400 text-sm">
            <span>Made with</span>
            <FaHeart className="text-red-500 animate-pulse" />
            <span>using Next.js</span>
          </div>

          <div className="text-gray-400 text-sm">
            MERN Stack Developer
          </div>
        </div>
      </div>
    </footer>
  );
}
