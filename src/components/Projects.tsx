import { ExternalLink, Github } from 'lucide-react';

import AcpImg from '/src/assets/acp.jpg'
import dashboardImg from '/src/assets/dashboard.png'
import YapImg from '/src/assets/yap.png'
import ScaleScopeImg from '/src/assets/scaleScope.png'
import GithubImg from '/src/assets/github.jpg'

export default function Projects() {
  const projects = [
    {
      title: 'AI Based SaaS Product Building',
      description: 'Developing an AI-powered SaaS platform to support students and startup founders with interview prep, mentorship, investments, and team collaboration. Leading full-stack development and AI automation to create a central hub connecting learners, founders, mentors, and investors.',
      image: ScaleScopeImg,
      tags: ['React JS', 'Tailwind CSS', 'Node JS', 'Node JS', 'Lanchain', 'Twilio', 'N8N', 'Make.com', 'Zapier', 'Supabase', 'Postman'],
      github: 'https://github.com/Anuskhalil/scaleScope',
      // demo: 'https://example.com',
    },
    {
      title: 'Arts Council Krachi',
      description: 'Working alongside Ahad Khan on the ongoing development of the Arts Council Karachi website, focusing on performance, responsiveness, and seamless user experience.',
      image: AcpImg,
      tags: ['React JS', 'Tailwind CSS', 'Node JS', 'Supabase'],
      github: 'https://github.com/AhadKhan316/acpkhi-1',
      demo: 'https://acpkhi.com',
    },
    {
      title: 'Session Gallery Dashboard',
      description: 'Developed a fully functional dashboard to manage and update the ACP website’s session gallery with real-time control and scalability.',
      image: dashboardImg,
      tags: ['React JS', 'Tailwind CSS', 'Node JS', 'Express JS'],
      github: 'https://github.com/Anuskhalil/dashboardToManageGallerySessionsProfile',
      // demo: 'https://example.com',
    },
    {
      title: 'Youth Ambassador Programme Website',
      description: 'Built a modern and responsive website for the Youth Ambassador Programme, focusing on clean UI and seamless user experience. Developed with React and Tailwind to ensure fast performance and easy scalability. Working on it with new changes with it',
      image: YapImg,
      tags: ['React JS', 'Tailwind CSS'],
      github: 'https://github.com/Anuskhalil/yapWebApp',
      demo: 'https://yap-web-app-dusky.vercel.app/',
    },
    {
      title: 'WGMIT Website Contribution',  
      description: 'Contributed to the WGMIT website as an open-source collaborator, enhancing UI elements and improving overall user experience. Worked across HTML, CSS, and JavaScript to refine functionality and design consistency.',
      image: 'https://images.pexels.com/photos/8386434/pexels-photo-8386434.jpeg?auto=compress&cs=tinysrgb&w=800',
      tags: ['HTML', 'CSS', 'javaScript'],
      github: 'https://github.com/Anuskhalil/WGMIT-Website-Contribution',
      demo: 'https://mlsa-wgmit.github.io/WGMIT-Website/',
    },
    {
      title: 'GitHub Profile',
      description: 'You Can get all the web and AI chatbot project code',
      image: GithubImg,
      tags: [],
      github: 'https://github.com/Anuskhalil',
      demo: 'https://github.com/Anuskhalil',
    },

  ];

  return (
    <section id="projects" className="py-24 bg-slate-950 relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_50%,rgba(16,185,129,0.05),transparent_50%)]"></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold text-white mb-4">
            Here's What I've Been Building
          </h2>
          <div className="h-1 w-20 bg-gradient-to-r from-cyan-500 to-emerald-500 mx-auto mb-6"></div>
          <p className="text-xl text-slate-400 max-w-2xl mx-auto">
            A collection of Web and AI-powered projects
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group bg-slate-900 rounded-xl overflow-hidden border border-slate-800 hover:border-cyan-500 transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl hover:shadow-cyan-500/20"
            >
              <div className="relative overflow-hidden h-48">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900 to-transparent opacity-60"></div>
              </div>

              <div className="p-6">
                <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-cyan-400 transition-colors duration-300">
                  {project.title}
                </h3>
                <p className="text-slate-400 mb-4 leading-relaxed">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tags.map((tag) => (
                    <span key={tag} className="px-3 py-1 bg-slate-800 text-cyan-400 text-xs rounded-full border border-slate-700">
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="flex gap-4">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-slate-400 hover:text-white transition-colors duration-300"
                  >
                    <Github size={20} />
                    <span className="text-sm">Code</span>
                  </a>
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-slate-400 hover:text-cyan-400 transition-colors duration-300"
                  >
                    <ExternalLink size={20} />
                    <span className="text-sm">Live Demo</span>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
