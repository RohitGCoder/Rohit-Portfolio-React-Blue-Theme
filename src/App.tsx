/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, ReactNode } from 'react';
import { 
  Linkedin,
  Instagram,
  Twitter,
  ArrowRight, 
  ExternalLink,
  Code2,
  Cpu,
  Database,
  Zap,
  Globe,
  Mail,
  User,
  Briefcase,
  ChevronDown
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

type Screen = 'HOME' | 'ABOUT' | 'PROJECTS' | 'CONTACT';

export default function App() {
  const [activeScreen, setActiveScreen] = useState<Screen>('HOME');

  return (
    <div className="min-h-screen bg-surface-container-lowest text-on-surface font-sans relative selection:bg-primary selection:text-white">
      {/* Top Navigation */}
      <nav className={`fixed top-0 w-full z-50 transition-all duration-500 ${activeScreen === 'HOME' ? 'bg-transparent' : 'bg-white/80 backdrop-blur-xl border-b border-outline-variant/10'} flex justify-between items-center px-6 md:px-12 h-20`}>
        <div className="flex items-center gap-3 group cursor-pointer" onClick={() => setActiveScreen('HOME')}>
          <div className={`w-10 h-10 flex items-center justify-center font-bold text-xl rounded-full transition-all duration-500 ${activeScreen === 'HOME' ? 'bg-white text-primary' : 'bg-primary text-white'}`}>K</div>
          <div className={`font-headline font-bold tracking-tighter text-lg transition-colors duration-500 ${activeScreen === 'HOME' ? 'text-white' : 'text-on-surface'}`}>KELVIN IGWESHI</div>
        </div>
        
        <div className="hidden md:flex items-center gap-8">
          {(['HOME', 'ABOUT', 'PROJECTS', 'CONTACT'] as Screen[]).map((screen) => (
            <button
              key={screen}
              onClick={() => setActiveScreen(screen)}
              className={`font-medium text-sm transition-all duration-300 relative py-1 ${
                activeScreen === screen 
                  ? (activeScreen === 'HOME' ? 'text-white' : 'text-primary') 
                  : (activeScreen === 'HOME' ? 'text-white/60 hover:text-white' : 'text-on-surface-variant hover:text-primary')
              }`}
            >
              {screen.charAt(0) + screen.slice(1).toLowerCase()}
              {activeScreen === screen && (
                <motion.div 
                  layoutId="nav-underline"
                  className={`absolute -bottom-1 left-0 w-full h-[2px] ${activeScreen === 'HOME' ? 'bg-white' : 'bg-primary'}`}
                />
              )}
            </button>
          ))}
        </div>
      </nav>

      {/* Main Content */}
      <main className="min-h-screen relative z-10">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeScreen}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
          >
            {activeScreen === 'HOME' && <Hero onNavigate={setActiveScreen} />}
            {activeScreen === 'ABOUT' && <About />}
            {activeScreen === 'PROJECTS' && <Projects onNavigate={setActiveScreen} />}
            {activeScreen === 'CONTACT' && <Contact />}
          </motion.div>
        </AnimatePresence>
      </main>

      {/* Footer */}
      <footer className="bg-surface-container-low py-16 px-6 md:px-12 border-t border-outline-variant/10">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12 items-start">
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-primary text-white flex items-center justify-center font-bold rounded-full">K</div>
              <span className="font-headline font-bold tracking-tighter text-xl">KELVIN IGWESHI</span>
            </div>
            <p className="text-on-surface-variant text-sm max-w-xs leading-relaxed">
              Crafting digital experiences that balance aesthetics with functionality. Based in Lagos, working worldwide.
            </p>
          </div>
          
          <div className="grid grid-cols-2 gap-8">
            <div className="space-y-4">
              <h4 className="font-headline font-bold text-xs uppercase tracking-widest text-primary">Navigation</h4>
              <ul className="space-y-2 text-sm text-on-surface-variant">
                <li><button onClick={() => setActiveScreen('HOME')} className="hover:text-primary transition-colors">Home</button></li>
                <li><button onClick={() => setActiveScreen('ABOUT')} className="hover:text-primary transition-colors">About</button></li>
                <li><button onClick={() => setActiveScreen('PROJECTS')} className="hover:text-primary transition-colors">Projects</button></li>
                <li><button onClick={() => setActiveScreen('CONTACT')} className="hover:text-primary transition-colors">Contact</button></li>
              </ul>
            </div>
            <div className="space-y-4">
              <h4 className="font-headline font-bold text-xs uppercase tracking-widest text-primary">Social</h4>
              <ul className="space-y-2 text-sm text-on-surface-variant">
                <li><a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">LinkedIn</a></li>
                <li><a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">Instagram</a></li>
                <li><a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">Twitter</a></li>
                <li><a href="https://github.com" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">GitHub</a></li>
              </ul>
            </div>
          </div>

          <div className="space-y-4">
            <h4 className="font-headline font-bold text-xs uppercase tracking-widest text-primary">Newsletter</h4>
            <p className="text-sm text-on-surface-variant">Get the latest updates on my work and thoughts.</p>
            <div className="flex gap-2">
              <input type="email" placeholder="Email address" className="bg-white border border-outline-variant/30 rounded-lg px-4 py-2 text-sm w-full focus:outline-none focus:border-primary transition-colors" />
              <button className="bg-primary text-white p-2 rounded-lg hover:bg-primary-container transition-colors">
                <ArrowRight size={18} />
              </button>
            </div>
          </div>
        </div>
        
        <div className="max-w-7xl mx-auto mt-16 pt-8 border-t border-outline-variant/10 flex flex-col md:flex-row justify-between items-center gap-4 text-on-surface-variant text-xs">
          <p>© {new Date().getFullYear()} Kelvin Igweshi. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-primary transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-primary transition-colors">Terms of Service</a>
          </div>
        </div>
      </footer>
    </div>
  );
}

function SocialIcon({ icon }: { icon: ReactNode }) {
  return (
    <a href="#" className="w-10 h-10 rounded-full border border-outline-variant/30 flex items-center justify-center text-on-surface-variant hover:text-primary hover:border-primary transition-all">
      {icon}
    </a>
  );
}

function Hero({ onNavigate }: { onNavigate: (s: Screen) => void }) {
  return (
    <div className="hero-gradient min-h-screen flex items-center overflow-hidden relative">
      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-2 h-full">
        {/* Left Side: Content */}
        <div className="flex flex-col justify-center px-8 md:px-16 py-32 lg:py-0 space-y-10 text-white z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-6"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-white/10 backdrop-blur-md rounded-full border border-white/10 text-xs font-bold tracking-widest uppercase">
              <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></span>
              Available for new projects
            </div>
            <h1 className="text-6xl md:text-8xl font-headline font-bold leading-[0.9] tracking-tighter">
              DESIGN <br /> 
              <span className="text-white/40">THAT</span> <br />
              WORKS.
            </h1>
            <p className="text-lg md:text-xl text-white/70 max-w-md font-light leading-relaxed">
              I'm Kelvin Igweshi, a UX Designer and Web Developer focused on building high-performance digital products that users love.
            </p>
            
            <div className="flex flex-wrap gap-4 pt-4">
              <button 
                onClick={() => onNavigate('PROJECTS')}
                className="bg-white text-primary font-bold px-8 py-4 rounded-full flex items-center gap-2 hover:scale-105 transition-all active:scale-95 shadow-2xl"
              >
                View Projects
                <ArrowRight size={18} />
              </button>
              <button 
                onClick={() => onNavigate('CONTACT')}
                className="bg-white/10 backdrop-blur-md text-white border border-white/20 font-bold px-8 py-4 rounded-full hover:bg-white/20 transition-all active:scale-95"
              >
                Let's Talk
              </button>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
            className="flex gap-6 pt-4"
          >
            <a href="#" className="text-white/40 hover:text-white transition-colors"><Linkedin size={24} /></a>
            <a href="#" className="text-white/40 hover:text-white transition-colors"><Instagram size={24} /></a>
            <a href="#" className="text-white/40 hover:text-white transition-colors"><Twitter size={24} /></a>
          </motion.div>
        </div>

        {/* Right Side: Visual */}
        <div className="relative hidden lg:flex items-center justify-center bg-white/5">
          <motion.div 
            className="relative w-[80%] aspect-square"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.2, ease: "easeOut" }}
          >
            {/* Abstract Shapes */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-primary-container/30 rounded-full blur-3xl animate-pulse"></div>
            <div className="absolute bottom-0 left-0 w-80 h-80 bg-tertiary/20 rounded-full blur-3xl"></div>
            
            <div className="relative z-10 w-full h-full flex items-center justify-center">
              <div className="relative w-full h-full rounded-3xl overflow-hidden border border-white/10 shadow-2xl">
                <img 
                  alt="Kelvin Igweshi" 
                  className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-1000" 
                  src="https://picsum.photos/seed/kelvin/1000/1000"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/60 to-transparent opacity-60"></div>
                <div className="absolute bottom-8 left-8 text-white">
                  <div className="text-xs font-bold uppercase tracking-widest opacity-70 mb-1">Based in</div>
                  <div className="text-2xl font-headline font-bold">Lagos, Nigeria</div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
      
      {/* Background Rail Text */}
      <div className="absolute right-4 top-1/2 -translate-y-1/2 hidden xl:block">
        <div className="writing-mode-vertical rotate-180 text-[10px] uppercase tracking-[0.5em] text-white/20 font-bold">
          SCROLL TO EXPLORE • KELVIN IGWESHI • PORTFOLIO 2026
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div 
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/40"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <div className="w-[1px] h-12 bg-gradient-to-b from-white/40 to-transparent"></div>
        <span className="text-[8px] uppercase tracking-widest font-bold">Scroll</span>
      </motion.div>
    </div>
  );
}

function About() {
  const skills = [
    { name: 'UI/UX Design', icon: <Zap size={20} />, desc: 'User-centric design focused on conversion and accessibility.' },
    { name: 'Web Development', icon: <Code2 size={20} />, desc: 'Clean, maintainable code using React, Next.js, and TypeScript.' },
    { name: 'Brand Identity', icon: <Globe size={20} />, desc: 'Crafting unique visual languages for modern digital brands.' },
    { name: 'Product Strategy', icon: <Briefcase size={20} />, desc: 'Bridging the gap between business goals and user needs.' },
  ];

  return (
    <div className="py-32 px-6 md:px-12 max-w-7xl mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-start">
        <div className="space-y-10 sticky top-32">
          <div className="space-y-4">
            <div className="inline-block px-3 py-1 bg-primary/10 text-primary font-bold text-xs rounded-full tracking-widest uppercase">ABOUT ME</div>
            <h2 className="text-5xl md:text-6xl font-headline font-bold tracking-tighter leading-none">
              I BUILD <br />
              <span className="text-primary">DIGITAL</span> <br />
              PRODUCTS.
            </h2>
          </div>
          
          <p className="text-on-surface-variant text-xl leading-relaxed font-light">
            With a background in both design and engineering, I bring a unique perspective to every project. I don't just make things look good; I make them work for your business and your users.
          </p>

          <div className="grid grid-cols-2 gap-12 pt-4">
            <div className="space-y-1">
              <div className="text-5xl font-headline font-bold text-primary">05+</div>
              <div className="text-[10px] text-on-surface-variant uppercase font-bold tracking-widest">Years Experience</div>
            </div>
            <div className="space-y-1">
              <div className="text-5xl font-headline font-bold text-primary">42</div>
              <div className="text-[10px] text-on-surface-variant uppercase font-bold tracking-widest">Projects Shipped</div>
            </div>
          </div>

          <div className="pt-6">
            <button className="group flex items-center gap-3 font-bold text-primary hover:gap-5 transition-all">
              Download Resume
              <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>
        
        <div className="space-y-16">
          <div className="space-y-8">
            <h3 className="text-2xl font-headline font-bold border-b border-outline-variant/20 pb-4">Core Expertise</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {skills.map((skill, i) => (
                <div key={i} className="p-8 bg-surface-container-low rounded-3xl border border-outline-variant/10 hover:border-primary/20 transition-all group">
                  <div className="w-12 h-12 bg-white shadow-sm text-primary rounded-2xl flex items-center justify-center mb-6 group-hover:bg-primary group-hover:text-white transition-all">
                    {skill.icon}
                  </div>
                  <h4 className="text-lg font-bold mb-2">{skill.name}</h4>
                  <p className="text-on-surface-variant text-sm leading-relaxed">{skill.desc}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="space-y-8">
            <h3 className="text-2xl font-headline font-bold border-b border-outline-variant/20 pb-4">My Process</h3>
            <div className="space-y-6">
              {[
                { step: '01', title: 'Discovery', desc: 'Understanding your goals, audience, and market landscape.' },
                { step: '02', title: 'Strategy', desc: 'Defining the roadmap and core user experience principles.' },
                { step: '03', title: 'Design', desc: 'Iterative prototyping and high-fidelity visual design.' },
                { step: '04', title: 'Development', desc: 'Building with clean code and performance in mind.' }
              ].map((item, i) => (
                <div key={i} className="flex gap-6 items-start">
                  <div className="text-primary font-headline font-bold text-xl opacity-40">{item.step}</div>
                  <div className="space-y-1">
                    <h4 className="font-bold text-lg">{item.title}</h4>
                    <p className="text-on-surface-variant text-sm">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Contact() {
  return (
    <div className="py-32 px-6 md:px-12 max-w-7xl mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-24">
        <div className="space-y-10">
          <div className="space-y-4">
            <div className="inline-block px-3 py-1 bg-primary/10 text-primary font-bold text-xs rounded-full tracking-widest uppercase">GET IN TOUCH</div>
            <h2 className="text-5xl md:text-7xl font-headline font-bold tracking-tighter leading-none">
              LET'S START <br />
              SOMETHING <br />
              <span className="text-primary">NEW.</span>
            </h2>
          </div>
          
          <p className="text-on-surface-variant text-xl leading-relaxed font-light max-w-md">
            Have a project in mind? Or just want to say hi? I'm always open to discussing new opportunities and creative ideas.
          </p>

          <div className="space-y-6 pt-6">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-surface-container-high rounded-full flex items-center justify-center text-primary">
                <Mail size={20} />
              </div>
              <div>
                <div className="text-xs font-bold uppercase tracking-widest text-on-surface-variant">Email Me</div>
                <div className="text-lg font-bold">hello@kelvin.design</div>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-surface-container-high rounded-full flex items-center justify-center text-primary">
                <Globe size={20} />
              </div>
              <div>
                <div className="text-xs font-bold uppercase tracking-widest text-on-surface-variant">Location</div>
                <div className="text-lg font-bold">Lagos, Nigeria (GMT+1)</div>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-surface-container-low p-8 md:p-12 rounded-[2rem] border border-outline-variant/10 shadow-sm">
          <form className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-xs font-bold uppercase tracking-widest text-on-surface-variant">Name</label>
                <input type="text" placeholder="John Doe" className="w-full bg-white border border-outline-variant/20 rounded-xl px-4 py-3 focus:outline-none focus:border-primary transition-colors" />
              </div>
              <div className="space-y-2">
                <label className="text-xs font-bold uppercase tracking-widest text-on-surface-variant">Email</label>
                <input type="email" placeholder="john@example.com" className="w-full bg-white border border-outline-variant/20 rounded-xl px-4 py-3 focus:outline-none focus:border-primary transition-colors" />
              </div>
            </div>
            <div className="space-y-2">
              <label className="text-xs font-bold uppercase tracking-widest text-on-surface-variant">Subject</label>
              <select className="w-full bg-white border border-outline-variant/20 rounded-xl px-4 py-3 focus:outline-none focus:border-primary transition-colors appearance-none">
                <option>Project Inquiry</option>
                <option>Collaboration</option>
                <option>General Question</option>
                <option>Just saying hi</option>
              </select>
            </div>
            <div className="space-y-2">
              <label className="text-xs font-bold uppercase tracking-widest text-on-surface-variant">Message</label>
              <textarea rows={5} placeholder="Tell me about your project..." className="w-full bg-white border border-outline-variant/20 rounded-xl px-4 py-3 focus:outline-none focus:border-primary transition-colors resize-none"></textarea>
            </div>
            <button className="w-full bg-primary text-white font-bold py-4 rounded-xl hover:bg-primary-container transition-all shadow-lg active:scale-[0.98]">
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

function Projects({ onNavigate }: { onNavigate: (s: Screen) => void }) {
  const projects = [
    {
      title: 'Vanguard OS',
      category: 'PRODUCT DESIGN',
      year: '2025',
      desc: 'A high-end technical portfolio and command center for systems architects.',
      img: 'https://picsum.photos/seed/vanguard/1200/800',
      tags: ['React', 'Motion', 'Tailwind']
    },
    {
      title: 'EcoSphere',
      category: 'WEB DEVELOPMENT',
      year: '2024',
      desc: 'A sustainable e-commerce platform with carbon footprint tracking.',
      img: 'https://picsum.photos/seed/eco/1200/800',
      tags: ['Next.js', 'PostgreSQL', 'Stripe']
    },
    {
      title: 'HealthSync',
      category: 'UI/UX DESIGN',
      year: '2024',
      desc: 'Mobile application designed to track daily activities and nutritional intake.',
      img: 'https://picsum.photos/seed/healthsync/1200/800',
      tags: ['Figma', 'Mobile', 'UX']
    },
    {
      title: 'DataFlow',
      category: 'FULL STACK',
      year: '2023',
      desc: 'Real-time analytics dashboard for marketing automation tools.',
      img: 'https://picsum.photos/seed/dataflow/1200/800',
      tags: ['D3.js', 'Node.js', 'Redis']
    }
  ];

  return (
    <div className="py-32 px-6 md:px-12 max-w-7xl mx-auto">
      <div className="flex flex-col md:flex-row justify-between items-end mb-24 gap-8">
        <div className="space-y-4">
          <div className="inline-block px-3 py-1 bg-primary/10 text-primary font-bold text-xs rounded-full tracking-widest uppercase">SELECTED WORK</div>
          <h2 className="text-5xl md:text-7xl font-headline font-bold tracking-tighter leading-none">
            CRAFTED <br />
            WITH <span className="text-primary">PURPOSE.</span>
          </h2>
        </div>
        <p className="text-on-surface-variant max-w-md text-xl font-light leading-relaxed">
          A selection of my recent work across various industries and technologies. Each project is a unique solution to a specific problem.
        </p>
      </div>

      <div className="space-y-32">
        {projects.map((p, i) => (
          <motion.div 
            key={i} 
            className={`flex flex-col ${i % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-12 lg:gap-24 items-center group`}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
          >
            <div className="w-full lg:w-3/5 relative overflow-hidden rounded-[2.5rem] shadow-2xl">
              <img 
                src={p.img} 
                alt={p.title} 
                className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-primary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            </div>
            
            <div className="w-full lg:w-2/5 space-y-6">
              <div className="flex justify-between items-center border-b border-outline-variant/20 pb-4">
                <span className="text-primary font-bold text-xs tracking-widest uppercase">{p.category}</span>
                <span className="text-on-surface-variant font-mono text-xs">{p.year}</span>
              </div>
              <h3 className="text-4xl md:text-5xl font-headline font-bold tracking-tight group-hover:text-primary transition-colors">{p.title}</h3>
              <p className="text-on-surface-variant text-lg leading-relaxed font-light">{p.desc}</p>
              <div className="flex flex-wrap gap-2 pt-2">
                {p.tags.map(tag => (
                  <span key={tag} className="text-[10px] font-bold px-3 py-1 bg-surface-container-high rounded-full text-on-surface-variant border border-outline-variant/10">{tag}</span>
                ))}
              </div>
              <div className="pt-6">
                <button className="flex items-center gap-2 font-bold text-primary hover:gap-4 transition-all group/btn">
                  View Case Study
                  <ArrowRight size={18} className="group-hover/btn:translate-x-1 transition-transform" />
                </button>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
      
      {/* Testimonial Section */}
      <div className="mt-48 py-24 bg-primary rounded-[3rem] text-white px-8 md:px-16 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-white/10 rounded-full blur-3xl -mr-48 -mt-48"></div>
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-white/5 rounded-full blur-3xl -ml-32 -mb-32"></div>
        
        <div className="max-w-4xl mx-auto text-center space-y-10 relative z-10">
          <div className="flex justify-center gap-1 text-white/40">
            {[1, 2, 3, 4, 5].map(i => <Zap key={i} size={20} fill="currentColor" />)}
          </div>
          <blockquote className="text-3xl md:text-5xl font-headline font-bold tracking-tight leading-tight italic">
            "Kelvin is a rare talent who understands both the 'why' and the 'how'. His ability to translate complex requirements into elegant, user-friendly designs is unmatched."
          </blockquote>
          <div className="space-y-1">
            <div className="text-xl font-bold">Sarah Jenkins</div>
            <div className="text-sm text-white/60 uppercase tracking-widest">CEO, TechFlow Solutions</div>
          </div>
        </div>
      </div>

      <div className="mt-32 text-center space-y-6">
        <h3 className="text-2xl font-headline font-bold">Ready to start your next project?</h3>
        <button 
          onClick={() => onNavigate('CONTACT')}
          className="px-12 py-5 bg-primary text-white font-bold rounded-full hover:bg-primary-container transition-all shadow-xl active:scale-95"
        >
          Get in Touch
        </button>
      </div>
    </div>
  );
}
