import { Briefcase, Calendar } from 'lucide-react';

export default function Experience() {
  const experiences = [
    {
      role: 'Frontend Developer',
      company: 'Arts Council Karachi',
      period: '2025 - Present',
      description: 'Leading frontend development for the Arts Council Karachi website and associated dashboards. Implemented responsive UI components, optimized performance, and enhanced user experience for thousands of users.',
      achievements: [
        'Developed and deployed responsive UI for multiple web pages with seamless user experience',
        'Optimized frontend performance, reducing load times by 35%',
        'Collaborated with backend team to integrate dashboards and dynamic content',
      ],
    },
    {
      role: 'AI SaaS Product Developer',
      company: 'Own Venture',
      period: '2025 - Present',
      description: 'Developing an AI-powered SaaS platform for students and startup founders, handling end-to-end full-stack development, AI automation, and real-time collaboration features.',
      achievements: [
        'Implemented AI-guided recommendation and mentorship features, increasing user engagement by 45%',
        'Built scalable real-time data pipelines handling 1M+ events/day',
        'Optimized frontend and backend performance, reducing page load times by 70%',
      ],
    },
    {
      role: 'AI Chatbot Service Provider',
      company: 'Own Venture',
      period: '2024 - 2025',
      description: 'Developed and deployed AI chatbots and automation solutions for businesses, focusing on natural language understanding, generative AI, and workflow optimization.',
      achievements: [
        'Delivered AI chatbots that improved client response efficiency by 40%',
        'Built custom NLP pipelines and automation workflows for diverse business needs',
        'Integrated AI solutions with client platforms, enhancing user engagement and satisfaction',
      ],
    },
    {
      role: 'Website Developer',
      company: 'Code Solution',
      period: '2023 - 2024',
      description: 'Developed and maintained responsive websites using HTML, CSS, Bootstrap and JavaScript, delivering seamless user experiences and collaborating on cross-functional projects.',
      achievements: [
        'Built 10+ interactive web pages impacting thousands of users',
        'Implemented responsive designs and optimized front-end performance',
        'Enhanced site functionality with clean, maintainable JavaScript code',
      ],
    }

  ];

  return (
    <section id="experience" className="py-24 bg-slate-950 relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(16,185,129,0.03),transparent_70%)]"></div>

      <div className="max-w-5xl mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold text-white mb-4">
            Experienced
          </h2>
          <div className="h-1 w-20 bg-gradient-to-r from-cyan-500 to-emerald-500 mx-auto mb-6"></div>
          <p className="text-xl text-slate-400 max-w-2xl mx-auto">
            My journey in tech and AI development
          </p>
        </div>

        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-cyan-500 via-emerald-500 to-cyan-500"></div>

          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <div
                key={index}
                className={`relative flex flex-col md:flex-row gap-8 ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                  }`}
              >
                {/* Timeline Dot */}
                <div className="absolute left-0 md:left-1/2 -translate-x-1/2 w-4 h-4 bg-gradient-to-br from-cyan-500 to-emerald-500 rounded-full border-4 border-slate-950 z-10"></div>

                {/* Content Card */}
                <div className={`md:w-1/2 ${index % 2 === 0 ? 'md:pr-12 md:text-right' : 'md:pl-12'} ml-8 md:ml-0`}>
                  <div className="group bg-slate-900 p-6 rounded-xl border border-slate-800 hover:border-cyan-500 transition-all duration-300 hover:shadow-lg hover:shadow-cyan-500/20">
                    <div className={`flex items-center gap-2 text-slate-400 mb-2 ${index % 2 === 0 ? 'md:justify-end' : ''}`}>
                      <Calendar size={16} />
                      <span className="text-sm">{exp.period}</span>
                    </div>

                    <h3 className="text-2xl font-bold text-white mb-1 group-hover:text-cyan-400 transition-colors duration-300">
                      {exp.role}
                    </h3>

                    <div className={`flex items-center gap-2 text-emerald-400 mb-4 ${index % 2 === 0 ? 'md:justify-end' : ''}`}>
                      <Briefcase size={18} />
                      <span className="font-semibold">{exp.company}</span>
                    </div>

                    <p className="text-slate-300 leading-relaxed mb-4">
                      {exp.description}
                    </p>

                    <ul className={`space-y-2 ${index % 2 === 0 ? 'md:text-right' : ''}`}>
                      {exp.achievements.map((achievement, i) => (
                        <li key={i} className="text-slate-400 text-sm flex items-start gap-2">
                          <span className={`${index % 2 === 0 ? 'md:order-2' : ''} text-cyan-400 mt-1 flex-shrink-0`}>•</span>
                          <span>{achievement}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Spacer for alternating layout */}
                <div className="hidden md:block md:w-1/2"></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
