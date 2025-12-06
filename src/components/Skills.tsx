// export default function Skills() {
//   const skillCategories = [
//     {
//       category: 'AI & Machine Learning',
//       skills: [
//         { name: 'PyTorch', level: 95 },
//         { name: 'TensorFlow', level: 90 },
//         { name: 'Transformers/LLMs', level: 92 },
//         { name: 'Computer Vision', level: 88 },
//         { name: 'NLP', level: 90 },
//       ],
//     },
//     {
//       category: 'Backend Development',
//       skills: [
//         { name: 'Python/FastAPI', level: 95 },
//         { name: 'Node.js/Express', level: 90 },
//         { name: 'PostgreSQL', level: 85 },
//         { name: 'Redis', level: 80 },
//         { name: 'GraphQL', level: 82 },
//       ],
//     },
//     {
//       category: 'Frontend Development',
//       skills: [
//         { name: 'React/Next.js', level: 92 },
//         { name: 'TypeScript', level: 90 },
//         { name: 'Tailwind CSS', level: 95 },
//         { name: 'State Management', level: 88 },
//         { name: 'WebSocket/Real-time', level: 85 },
//       ],
//     },
//     {
//       category: 'DevOps & Cloud',
//       skills: [
//         { name: 'Docker/Kubernetes', level: 85 },
//         { name: 'AWS/GCP', level: 82 },
//         { name: 'CI/CD', level: 88 },
//         { name: 'Monitoring', level: 80 },
//         { name: 'Terraform', level: 75 },
//       ],
//     },
//   ];

//   return (
//     <section id="skills" className="py-24 bg-slate-900 relative overflow-hidden">
//       <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(6,182,212,0.03),transparent_70%)]"></div>

//       <div className="max-w-6xl mx-auto px-6 relative z-10">
//         <div className="text-center mb-16">
//           <h2 className="text-5xl font-bold text-white mb-4">
//             Skills & Expertise
//           </h2>
//           <div className="h-1 w-20 bg-gradient-to-r from-cyan-500 to-emerald-500 mx-auto mb-6"></div>
//           <p className="text-xl text-slate-400 max-w-2xl mx-auto">
//             Technologies I work with to bring ideas to life
//           </p>
//         </div>

//         <div className="grid md:grid-cols-2 gap-12">
//           {skillCategories.map((category, catIndex) => (
//             <div key={catIndex} className="space-y-6">
//               <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
//                 <span className="w-2 h-8 bg-gradient-to-b from-cyan-500 to-emerald-500 rounded-full"></span>
//                 {category.category}
//               </h3>

//               <div className="space-y-5">
//                 {category.skills.map((skill, skillIndex) => (
//                   <div key={skillIndex} className="group">
//                     <div className="flex justify-between items-center mb-2">
//                       <span className="text-slate-300 font-medium group-hover:text-cyan-400 transition-colors duration-300">
//                         {skill.name}
//                       </span>
//                       <span className="text-slate-400 text-sm">{skill.level}%</span>
//                     </div>
//                     <div className="h-2 bg-slate-800 rounded-full overflow-hidden">
//                       <div
//                         className="h-full bg-gradient-to-r from-cyan-500 to-emerald-500 rounded-full transition-all duration-1000 ease-out"
//                         style={{ width: `${skill.level}%` }}
//                       ></div>
//                     </div>
//                   </div>
//                 ))}
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }
