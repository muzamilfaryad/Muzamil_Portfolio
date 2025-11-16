import { motion } from 'framer-motion';
import { FaDownload, FaFileCode } from 'react-icons/fa';

export default function PDFDownload() {
  const generatePDF = async () => {
    try {
      // Create a new window with portfolio content
      const printWindow = window.open('', '_blank');
      
      const htmlContent = `
        <!DOCTYPE html>
        <html>
        <head>
          <meta charset="UTF-8">
          <title>Muhammad Muzamil Faryad - Portfolio</title>
          <style>
            * { margin: 0; padding: 0; box-sizing: border-box; }
            body {
              font-family: 'Arial', sans-serif;
              line-height: 1.6;
              color: #333;
              padding: 40px;
              background: white;
            }
            .header {
              text-align: center;
              border-bottom: 3px solid #6366f1;
              padding-bottom: 20px;
              margin-bottom: 30px;
            }
            h1 { color: #6366f1; font-size: 32px; margin-bottom: 10px; }
            h2 { color: #6366f1; font-size: 24px; margin: 30px 0 15px 0; border-bottom: 2px solid #e5e7eb; padding-bottom: 5px; }
            h3 { color: #4b5563; font-size: 18px; margin: 20px 0 10px 0; }
            .subtitle { color: #6b7280; font-size: 18px; }
            .contact-info { display: flex; justify-content: center; gap: 20px; margin-top: 10px; flex-wrap: wrap; }
            .contact-info span { color: #6b7280; font-size: 14px; }
            .section { margin: 25px 0; }
            .skills-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 15px; }
            .skill-item { background: #f3f4f6; padding: 10px; border-radius: 8px; border-left: 3px solid #6366f1; }
            .project-item { background: #f9fafb; padding: 15px; margin: 15px 0; border-radius: 8px; border-left: 4px solid #ec4899; }
            .project-title { color: #1f2937; font-weight: bold; font-size: 16px; margin-bottom: 8px; }
            .project-desc { color: #4b5563; font-size: 14px; margin-bottom: 8px; }
            .tags { display: flex; gap: 8px; flex-wrap: wrap; margin-top: 8px; }
            .tag { background: #e0e7ff; color: #4f46e5; padding: 4px 10px; border-radius: 12px; font-size: 12px; }
            .stats-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 20px; text-align: center; }
            .stat-item { background: #f3f4f6; padding: 20px; border-radius: 8px; }
            .stat-number { font-size: 28px; font-weight: bold; color: #6366f1; }
            .stat-label { color: #6b7280; font-size: 14px; margin-top: 5px; }
            ul { margin-left: 20px; margin-top: 10px; }
            li { margin: 8px 0; color: #4b5563; }
            @media print {
              body { padding: 20px; }
              .no-print { display: none; }
            }
          </style>
        </head>
        <body>
          <div class="header">
            <h1>Muhammad Muzamil Faryad</h1>
            <p class="subtitle">MERN Stack Developer | 10+ Years Experience</p>
            <div class="contact-info">
              <span>📧 muzamilfaryad@example.com</span>
              <span>📱 +92 XXX XXXXXXX</span>
              <span>🌐 github.com/muzamilfaryad</span>
              <span>💼 linkedin.com/in/muzamilfaryad</span>
            </div>
          </div>

          <div class="section">
            <h2>Professional Summary</h2>
            <p>Highly skilled MERN Stack Developer with over 10 years of experience in designing, developing, and maintaining modern web applications. Proven expertise in MongoDB, Express.js, React.js (Next.js), and Node.js. Strong track record of delivering scalable, performant, and user-friendly solutions that drive business growth.</p>
          </div>

          <div class="section">
            <h2>Key Statistics</h2>
            <div class="stats-grid">
              <div class="stat-item">
                <div class="stat-number">10+</div>
                <div class="stat-label">Years Experience</div>
              </div>
              <div class="stat-item">
                <div class="stat-number">150+</div>
                <div class="stat-label">Projects Delivered</div>
              </div>
              <div class="stat-item">
                <div class="stat-number">98%</div>
                <div class="stat-label">Client Satisfaction</div>
              </div>
            </div>
          </div>

          <div class="section">
            <h2>Technical Skills</h2>
            <div class="skills-grid">
              <div class="skill-item"><strong>Frontend:</strong> React.js, Next.js, TypeScript, Redux, Tailwind CSS</div>
              <div class="skill-item"><strong>Backend:</strong> Node.js, Express.js, RESTful APIs, GraphQL</div>
              <div class="skill-item"><strong>Database:</strong> MongoDB, PostgreSQL, MySQL, Redis</div>
              <div class="skill-item"><strong>Cloud:</strong> AWS, Azure, Google Cloud, Docker, Kubernetes</div>
              <div class="skill-item"><strong>Tools:</strong> Git, GitHub, VS Code, Webpack, Jest</div>
              <div class="skill-item"><strong>Others:</strong> Agile, CI/CD, Microservices, WebSockets</div>
            </div>
          </div>

          <div class="section">
            <h2>Featured Projects</h2>
            
            <div class="project-item">
              <div class="project-title">E-Commerce Platform</div>
              <div class="project-desc">A full-featured e-commerce platform with real-time inventory management, payment gateway integration (Stripe), shopping cart, user authentication, and admin dashboard.</div>
              <div class="tags">
                <span class="tag">Next.js</span>
                <span class="tag">MongoDB</span>
                <span class="tag">Stripe</span>
                <span class="tag">Node.js</span>
              </div>
            </div>

            <div class="project-item">
              <div class="project-title">Social Media Analytics Dashboard</div>
              <div class="project-desc">Advanced analytics platform for social media management with real-time data visualization, engagement metrics, and multi-platform integration.</div>
              <div class="tags">
                <span class="tag">React</span>
                <span class="tag">Express.js</span>
                <span class="tag">MongoDB</span>
                <span class="tag">Chart.js</span>
              </div>
            </div>

            <div class="project-item">
              <div class="project-title">Healthcare Management System</div>
              <div class="project-desc">Comprehensive hospital management system with patient records, appointment scheduling, and telemedicine capabilities. HIPAA compliant.</div>
              <div class="tags">
                <span class="tag">Next.js</span>
                <span class="tag">PostgreSQL</span>
                <span class="tag">Socket.io</span>
                <span class="tag">AWS</span>
              </div>
            </div>

            <div class="project-item">
              <div class="project-title">Real Estate Marketplace</div>
              <div class="project-desc">Property listing platform with advanced search filters, virtual tours, mortgage calculator, and real-time chat functionality.</div>
              <div class="tags">
                <span class="tag">Next.js</span>
                <span class="tag">MongoDB</span>
                <span class="tag">Google Maps</span>
                <span class="tag">WebRTC</span>
              </div>
            </div>

            <div class="project-item">
              <div class="project-title">Project Management Tool</div>
              <div class="project-desc">Collaborative platform with Kanban boards, Gantt charts, time tracking, and team collaboration features with Slack and GitHub integrations.</div>
              <div class="tags">
                <span class="tag">React</span>
                <span class="tag">Express.js</span>
                <span class="tag">MongoDB</span>
                <span class="tag">Redux</span>
              </div>
            </div>
          </div>

          <div class="section">
            <h2>Core Competencies</h2>
            <ul>
              <li>Full-stack web application development</li>
              <li>RESTful API design and implementation</li>
              <li>Database architecture and optimization</li>
              <li>Cloud infrastructure and deployment</li>
              <li>Responsive and mobile-first design</li>
              <li>Performance optimization and scalability</li>
              <li>Security best practices and implementation</li>
              <li>Agile methodology and team collaboration</li>
              <li>Code review and mentoring</li>
              <li>Technical documentation</li>
            </ul>
          </div>

          <div class="section">
            <h2>Certifications & Awards</h2>
            <ul>
              <li>AWS Certified Solutions Architect</li>
              <li>MongoDB Certified Developer</li>
              <li>React Advanced Certification</li>
              <li>Node.js Professional Certification</li>
              <li>Top 5% Developer on GitHub</li>
            </ul>
          </div>

          <div class="section no-print" style="text-align: center; margin-top: 40px; padding-top: 20px; border-top: 2px solid #e5e7eb;">
            <button onclick="window.print()" style="background: #6366f1; color: white; padding: 12px 30px; border: none; border-radius: 8px; font-size: 16px; cursor: pointer;">
              Print / Save as PDF
            </button>
            <p style="margin-top: 15px; color: #6b7280; font-size: 14px;">Use your browser's print function (Ctrl+P / Cmd+P) to save as PDF</p>
          </div>
        </body>
        </html>
      `;
      
      printWindow.document.write(htmlContent);
      printWindow.document.close();
      
    } catch (error) {
      console.error('Error generating PDF:', error);
      alert('Error generating PDF. Please try again.');
    }
  };

  return (
    <motion.button
      onClick={generatePDF}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className="flex items-center gap-3 glass hover:bg-primary/20 text-white px-6 py-3 rounded-full font-semibold transition-all hover-glow"
    >
      <FaDownload size={18} />
      <span>Download Portfolio PDF</span>
    </motion.button>
  );
}
