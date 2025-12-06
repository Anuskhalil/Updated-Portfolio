import { Brain, Code } from 'lucide-react';

export default function About() {
  const highlights = [
    {
      icon: Code,
      title: 'Full-Stack Development',
      description: 'Expertly building scalable and high-performance applications using React, Node.js, and Express.js from concept to deployment.',
    },
    {
      icon: Brain,
      title: 'AI Agents & Automation',
      description: 'Designing intelligent AI Agents, LLM-powered chatbots, and automation workflows that streamline operations and enhance engagement.',
    },
    // {
    //   icon: Zap,
    //   title: 'Rapid Execution',
    //   description: 'From prototype to production, I deliver efficient, high-speed development cycles without compromising on quality or innovation.',
    // },
    // {
    //   icon: Rocket,
    //   title: 'Innovation-Driven Approach',
    //   description: 'I continuously explore the latest in AI, automation, and full-stack technologies to keep your products ahead of the curve.',
    // },

  ];

  return (
    <section id="about" className="py-24 bg-slate-900 relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(6,182,212,0.05),transparent_50%)]"></div>

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <div className="grid gap-16 items-center">
          {/* Profile Side */}
          <div className="space-y-6">
            <h2 className="text-5xl font-bold text-white mb-4">
              About Me
            </h2>
            <div className="h-1 w-20 bg-gradient-to-r from-cyan-500 to-emerald-500 mb-8"></div>

            <p className="text-lg text-slate-300 leading-relaxed">
              Enthusiastic Junior MERN Stack Developer with hands-on experience in ReactJS frontend development and Generative AI Chatbots.
            </p>

            <p className="text-lg text-slate-300 leading-relaxed">
              Currently working at the Arts Council of Pakistan, Karachi as a Junior Frontend Developer. Founder of Fewture.ai, an AI Automation Agency specializing in Chatbot Development using Dialogflow, Voiceflow, and Twilio.
            </p>

            <p className="text-lg text-slate-300 leading-relaxed">
              Pursuing a Bachelor’s degree in Computer Science, continuously enhancing technical skills while contributing to real-world projects.
            </p>

            <p className="text-lg text-slate-300 leading-relaxed">
              Passionate about building scalable, intelligent applications by combining AI and modern web technologies.
            </p>

            <div className="flex flex-wrap gap-3 pt-4">
              {['JavaScript', 'React/Vite.js', 'Tailwind CSS', 'Node.js', 'Express js', 'mySQL/MongoDb/Supabase', 'Git/Github', 'AWS', 'Openai', 'Dialogflow CX/ES', 'Voiceflow', 'Langchain', 'Make.com', 'N8N', 'Flowise', 'AI Automation',].map((tech) => (
                <span key={tech} className="px-4 py-2 bg-slate-800 text-cyan-400 rounded-full text-sm font-medium border border-slate-700 hover:border-cyan-500 transition-colors duration-300">
                  {tech}
                </span>
              ))}
            </div>
          </div>


          {/* Highlights Side */}
          <div className="grid grid-cols-1 sm:grid-cols-2 sm:grid-cols-2 gap-6">
            {highlights.map((item, index) => (
              <div
                key={index}
                className="group p-6 bg-slate-800/50 backdrop-blur-sm rounded-xl border border-slate-700 hover:border-cyan-500 transition-all duration-300 hover:-translate-y-2 hover:shadow-lg hover:shadow-cyan-500/20"
              >
                <div className="w-12 h-12 bg-gradient-to-br from-cyan-500 to-emerald-500 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                  <item.icon className="text-white" size={24} />
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">{item.title}</h3>
                <p className="text-slate-400 text-sm leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
