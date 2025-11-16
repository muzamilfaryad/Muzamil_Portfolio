import { motion } from 'framer-motion';
import { useState } from 'react';
import { FaPlay, FaCode, FaHtml5, FaCss3Alt, FaJs } from 'react-icons/fa';

export default function CodePlayground() {
  const [html, setHtml] = useState(`<div class="container">
  <h1>Hello World!</h1>
  <p>Edit the code and see live results.</p>
  <button id="btn">Click Me</button>
</div>`);

  const [css, setCSS] = useState(`body {
  font-family: 'Arial', sans-serif;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  margin: 0;
}

.container {
  background: white;
  padding: 40px;
  border-radius: 20px;
  box-shadow: 0 20px 60px rgba(0,0,0,0.3);
  text-align: center;
}

h1 {
  color: #667eea;
  margin-bottom: 20px;
}

button {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  border: none;
  padding: 12px 30px;
  border-radius: 25px;
  font-size: 16px;
  cursor: pointer;
  margin-top: 20px;
  transition: transform 0.3s;
}

button:hover {
  transform: scale(1.1);
}`);

  const [js, setJS] = useState(`document.getElementById('btn').addEventListener('click', () => {
  alert('You clicked the button! 🎉');
  document.querySelector('h1').style.color = '#764ba2';
});`);

  const [activeTab, setActiveTab] = useState('html');
  const [output, setOutput] = useState('');

  const runCode = () => {
    const iframe = document.createElement('iframe');
    iframe.style.display = 'none';
    document.body.appendChild(iframe);

    const iframeDoc = iframe.contentDocument || iframe.contentWindow.document;
    const code = `
      <!DOCTYPE html>
      <html>
        <head>
          <style>${css}</style>
        </head>
        <body>
          ${html}
          <script>${js}</script>
        </body>
      </html>
    `;

    setOutput(code);
    document.body.removeChild(iframe);
  };

  const tabs = [
    { id: 'html', name: 'HTML', icon: FaHtml5, color: 'text-orange-500' },
    { id: 'css', name: 'CSS', icon: FaCss3Alt, color: 'text-blue-500' },
    { id: 'js', name: 'JavaScript', icon: FaJs, color: 'text-yellow-500' }
  ];

  const getCode = () => {
    switch (activeTab) {
      case 'html': return html;
      case 'css': return css;
      case 'js': return js;
      default: return '';
    }
  };

  const setCode = (value) => {
    switch (activeTab) {
      case 'html': setHtml(value); break;
      case 'css': setCSS(value); break;
      case 'js': setJS(value); break;
    }
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
            Code <span className="gradient-text">Playground</span>
          </h2>
          <p className="text-gray-400 text-lg">Try out live code examples and see real-time results</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="glass rounded-2xl overflow-hidden"
        >
          {/* Tabs */}
          <div className="flex items-center gap-2 border-b border-gray-700 p-4">
            {tabs.map(tab => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-all ${
                  activeTab === tab.id
                    ? 'bg-primary text-white'
                    : 'hover:bg-gray-700 text-gray-400'
                }`}
              >
                <tab.icon className={activeTab === tab.id ? 'text-white' : tab.color} />
                <span>{tab.name}</span>
              </button>
            ))}
            
            <button
              onClick={runCode}
              className="ml-auto flex items-center gap-2 bg-green-600 hover:bg-green-700 text-white px-6 py-2 rounded-lg transition-all"
            >
              <FaPlay size={14} />
              <span>Run Code</span>
            </button>
          </div>

          <div className="grid lg:grid-cols-2 gap-4 p-4">
            {/* Code Editor */}
            <div className="bg-darker rounded-xl overflow-hidden">
              <div className="bg-gray-800 px-4 py-2 text-gray-300 text-sm font-semibold flex items-center gap-2">
                <FaCode />
                <span>Editor</span>
              </div>
              <textarea
                value={getCode()}
                onChange={(e) => setCode(e.target.value)}
                className="w-full h-96 bg-darker text-gray-100 p-4 font-mono text-sm focus:outline-none resize-none"
                spellCheck={false}
                placeholder="Write your code here..."
              />
            </div>

            {/* Output Preview */}
            <div className="bg-darker rounded-xl overflow-hidden">
              <div className="bg-gray-800 px-4 py-2 text-gray-300 text-sm font-semibold">
                Preview
              </div>
              {output ? (
                <iframe
                  srcDoc={output}
                  title="output"
                  className="w-full h-96 bg-white"
                  sandbox="allow-scripts"
                />
              ) : (
                <div className="w-full h-96 flex items-center justify-center text-gray-500">
                  <div className="text-center">
                    <FaPlay size={48} className="mx-auto mb-4 opacity-20" />
                    <p>Click "Run Code" to see the output</p>
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Code Examples */}
          <div className="p-4 border-t border-gray-700">
            <h3 className="text-lg font-semibold mb-3 text-white">Try These Examples:</h3>
            <div className="flex flex-wrap gap-2">
              <button
                onClick={() => {
                  setHtml('<h1>React Component</h1><div id="root"></div>');
                  setCSS('body { background: #282c34; color: white; font-family: Arial; padding: 20px; }');
                  setJS('// Try different examples here\nconsole.log("Hello from Code Playground!");');
                  setActiveTab('html');
                }}
                className="glass px-4 py-2 rounded-lg text-sm hover:bg-primary/20 transition-colors"
              >
                Basic Layout
              </button>
              <button
                onClick={() => {
                  setHtml('<button id="colorBtn">Change Colors</button><div id="box" style="width:100px;height:100px;margin-top:20px;background:blue;"></div>');
                  setCSS('body { display: flex; flex-direction: column; align-items: center; padding: 50px; }');
                  setJS('document.getElementById("colorBtn").onclick = () => { document.getElementById("box").style.background = "#" + Math.floor(Math.random()*16777215).toString(16); }');
                  setActiveTab('html');
                }}
                className="glass px-4 py-2 rounded-lg text-sm hover:bg-primary/20 transition-colors"
              >
                Interactive Animation
              </button>
              <button
                onClick={() => {
                  setHtml('<div class="card"><h2>Gradient Card</h2><p>Hover over me!</p></div>');
                  setCSS('.card { background: linear-gradient(135deg, #667eea, #764ba2); color: white; padding: 40px; border-radius: 20px; transition: transform 0.3s; cursor: pointer; } .card:hover { transform: scale(1.05); }');
                  setJS('// Beautiful gradient card effect');
                  setActiveTab('css');
                }}
                className="glass px-4 py-2 rounded-lg text-sm hover:bg-primary/20 transition-colors"
              >
                Gradient Card
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
