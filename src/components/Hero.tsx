import { ArrowDown, Github, Linkedin, Mail } from 'lucide-react';
import { useEffect, useState } from 'react';

export default function Hero() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950">
      {/* Animated Grid Background */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b_1px,transparent_1px),linear-gradient(to_bottom,#1e293b_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_0%,#000_70%,transparent_110%)] opacity-30"></div>

      {/* Floating Orbs */}
      <div className="absolute top-20 left-20 w-72 h-72 bg-cyan-500/20 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-20 right-20 w-96 h-96 bg-emerald-500/20 rounded-full blur-3xl animate-pulse delay-700"></div>

      <div className={`relative z-10 text-center px-6 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
        <h1 className="text-6xl md:text-8xl font-bold text-white mb-6">
          Hey, I'm <span className="bg-gradient-to-r from-cyan-400 via-emerald-400 to-cyan-400 bg-clip-text text-transparent animate-gradient bg-[length:200%_auto]">Anus Khalil</span>
        </h1>

        <p className="text-2xl md:text-3xl text-slate-300 mb-4">
          Jr Full-Stack & Gen AI Developer
        </p>

        <p className="text-lg md:text-xl text-slate-400 max-w-2xl mx-auto mb-12">
          I build production-ready Websites and AI Chatbots that actually make sense. From Web Apps, LLMs to AI systems.
        </p>

        <div className="flex gap-6 justify-center mb-16">
          <a href="#contact" className="group px-8 py-4 bg-gradient-to-r from-cyan-500 to-emerald-500 text-white rounded-lg font-semibold hover:shadow-lg hover:shadow-cyan-500/50 transition-all duration-300 hover:-translate-y-1">
            Let's Work Together
            <span className="inline-block ml-2 group-hover:translate-x-1 transition-transform">→</span>
          </a>
          <a href="https://www.linkedin.com/in/anus-khalil-48a397250/" target='_blank' className="px-8 py-4 border-2 border-slate-700 text-white rounded-lg font-semibold hover:border-cyan-500 hover:bg-slate-900/50 transition-all duration-300 hover:-translate-y-1">
            View My Profile
          </a>
        </div>

        <div className="flex gap-6 justify-center">
          <a href="https://github.com/Anuskhalil" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-cyan-400 transition-colors duration-300 hover:scale-110 transform">
            <Github size={28} />
          </a>
          <a href="https://www.linkedin.com/in/anus-khalil-48a397250/" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-cyan-400 transition-colors duration-300 hover:scale-110 transform">
            <Linkedin size={28} />
          </a>
          <a href="mailto:anuskhalil77@gmail.com" className="text-slate-400 hover:text-cyan-400 transition-colors duration-300 hover:scale-110 transform">
            <Mail size={28} />
          </a>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
        <ArrowDown className="text-slate-400" size={32} />
      </div>
    </section>
  );
}
