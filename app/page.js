import React from 'react';

export default function Portfolio() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-300 font-sans selection:bg-emerald-500/30 selection:text-emerald-200">
      
      {/* NAVIGATION / HERO */}
      <header className="relative overflow-hidden border-b border-slate-800/50 bg-slate-950/50 backdrop-blur-xl">
        <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/10 via-transparent to-transparent opacity-50" />
        <div className="max-w-5xl mx-auto px-6 py-24 relative z-10">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
            <div className="max-w-2xl">
              <p className="text-emerald-400 font-mono text-sm tracking-wider mb-3">Hi, my name is</p>
              <h1 className="text-5xl md:text-7xl font-bold text-slate-100 tracking-tight mb-4">
                Tushar Kumar.
              </h1>
              <h2 className="text-3xl md:text-4xl font-semibold text-slate-400 mb-6">
                I build scalable full-stack systems.
              </h2>
              <p className="text-lg text-slate-400 mb-8 leading-relaxed">
                Currently pursuing my B.Tech in CSE at <span className="text-emerald-400">Delhi Technological University (DTU)</span>. 
                Specializing in React, Next.js, and high-performance backend architectures. Active problem solver on LeetCode with 370+ problems solved.
              </p>
              
              <div className="flex flex-wrap items-center gap-6">
                <a href="mailto:tusharkr7362@gmail.com" className="flex items-center gap-2 px-6 py-3 bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-semibold rounded-lg transition-colors">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path></svg>
                  Get In Touch
                </a>
                <div className="flex gap-4">
                  {/* LinkedIn */}
                  <a href="https://linkedin.com/in/tusharkr7" target="_blank" rel="noreferrer" className="text-slate-400 hover:text-emerald-400 transition-colors">
                    <svg className="w-7 h-7" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
                  </a>
                  {/* GitHub */}
                  <a href="https://github.com/tusharkr7" target="_blank" rel="noreferrer" className="text-slate-400 hover:text-emerald-400 transition-colors">
                    <svg className="w-7 h-7" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
                  </a>
                  {/* LeetCode */}
                  <a href="https://leetcode.com/u/tusharkr7/" target="_blank" rel="noreferrer" className="text-slate-400 hover:text-emerald-400 transition-colors">
                     <svg className="w-7 h-7" viewBox="0 0 24 24" fill="currentColor"><path d="M13.483 0a1.374 1.374 0 0 0-.961.438L7.116 6.226l-3.854 4.126a5.266 5.266 0 0 0-1.209 2.104 5.35 5.35 0 0 0-.125.513 5.527 5.527 0 0 0 .062 2.362 5.83 5.83 0 0 0 .349 1.017 5.939 5.939 0 0 0 1.271 1.541l5.967 5.68c.813.819 1.936 1.275 3.092 1.275h.001a4.288 4.288 0 0 0 3.092-1.275l2.756-2.92a1.374 1.374 0 0 0-.963-2.348h-5.021l-.147.005a1.374 1.374 0 0 1-1.227-1.374v-.002a1.374 1.374 0 0 1 1.374-1.374h5.405l2.455-2.602a1.374 1.374 0 0 0 .041-1.892L14.444.438A1.374 1.374 0 0 0 13.483 0zm0 2.748l5.513 5.842-1.025 1.086h-4.488a4.124 4.124 0 0 0-4.121 4.122v.002a4.124 4.124 0 0 0 4.121 4.122h2.518l-1.018 1.077a1.538 1.538 0 0 1-1.096.452h-.001a1.538 1.538 0 0 1-1.096-.452l-5.967-5.68a3.189 3.189 0 0 1-.683-.827 3.082 3.082 0 0 1-.187-.546 2.777 2.777 0 0 1-.031-1.187 2.6 2.6 0 0 1 .063-.257 2.516 2.516 0 0 1 .577-1.004l3.854-4.126 5.064-5.421a1.374 1.374 0 0 1 .054-.042z"/></svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>

      <main className="max-w-5xl mx-auto px-6 py-20 space-y-32">
        
        {/* EXPERIENCE TIMELINE */}
        <section>
          <div className="flex items-center gap-4 mb-12">
            <h2 className="text-3xl font-bold text-slate-100">Experience</h2>
            <div className="h-px bg-slate-800 flex-grow rounded"></div>
          </div>
          
          <div className="space-y-12 border-l border-slate-800 ml-3">
            
            {/* RayGlides */}
            <div className="relative pl-8">
              <div className="absolute w-3 h-3 bg-emerald-500 rounded-full -left-[6.5px] top-1.5 ring-4 ring-slate-950"></div>
              <div className="flex flex-col md:flex-row md:items-center justify-between mb-2 gap-2">
                <h3 className="text-xl font-semibold text-slate-100">Full-Stack & DevOps Intern</h3>
                <span className="text-emerald-400 font-mono text-sm">Apr '26 – Present</span>
              </div>
              <h4 className="text-lg text-slate-400 mb-4 font-medium">RayGlides (DTU-IIF)</h4>
              <ul className="space-y-3 text-slate-400">
                <li className="flex gap-3"><span className="text-emerald-500">▹</span> Proposed and implemented a modular Next.js App Router codebase, managed Git branching for the intern team, and automated zero-downtime CI/CD pipelines on Vercel.</li>
                <li className="flex gap-3"><span className="text-emerald-500">▹</span> Leveraged the Next.js after() API to offload database writes and email dispatches to non-blocking background processes, reducing client API latency to near-zero.</li>
                <li className="flex gap-3"><span className="text-emerald-500">▹</span> Engineered a dynamic PDF ROI report utility using PDFKit and byte buffers to bypass serverless read-only constraints, dispatching reports via Nodemailer.</li>
              </ul>
              <div className="flex flex-wrap gap-2 mt-5">
                {['Next.js', 'Node.js', 'Vercel', 'Firebase Admin', 'Tailwind v4'].map(tech => (
                  <span key={tech} className="px-3 py-1 bg-slate-900 text-emerald-400/80 text-xs font-mono rounded-full border border-slate-800">{tech}</span>
                ))}
              </div>
            </div>

            {/* Freelance */}
            <div className="relative pl-8">
              <div className="absolute w-3 h-3 bg-slate-700 rounded-full -left-[6.5px] top-1.5 ring-4 ring-slate-950"></div>
              <div className="flex flex-col md:flex-row md:items-center justify-between mb-2 gap-2">
                <h3 className="text-xl font-semibold text-slate-100">Freelance Full-Stack Developer</h3>
                <span className="text-slate-500 font-mono text-sm">Jan '26 – Apr '26</span>
              </div>
              <h4 className="text-lg text-slate-400 mb-4 font-medium">Enterprise E-Commerce Platform</h4>
              <ul className="space-y-3 text-slate-400">
                <li className="flex gap-3"><span className="text-emerald-500">▹</span> Architected a comprehensive e-commerce admin platform with a high-performance affiliate coupon engine, reducing database read costs via optimized Firestore lookups.</li>
                <li className="flex gap-3"><span className="text-emerald-500">▹</span> Developed a full-stack tracking portal for a monthly subscription plan, implementing real-time dynamic balance calculations and detailed payment ledgers.</li>
                <li className="flex gap-3"><span className="text-emerald-500">▹</span> Integrated Razorpay APIs with secure server-side calculations for real-time metal rates, handling online payments, webhook verification, and automated refunds.</li>
              </ul>
              <div className="flex flex-wrap gap-2 mt-5">
                {['React', 'TypeScript', 'Node.js', 'Firebase', 'Razorpay API'].map(tech => (
                  <span key={tech} className="px-3 py-1 bg-slate-900 text-emerald-400/80 text-xs font-mono rounded-full border border-slate-800">{tech}</span>
                ))}
              </div>
            </div>

          </div>
        </section>

        {/* PROJECTS */}
        <section>
          <div className="flex items-center gap-4 mb-12">
            <div className="h-px bg-slate-800 flex-grow rounded"></div>
            <h2 className="text-3xl font-bold text-slate-100">Key Projects</h2>
            <div className="h-px bg-slate-800 flex-grow rounded"></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            
            {/* Project 1 */}
            <div className="group relative bg-slate-900/50 rounded-xl p-8 border border-slate-800 hover:border-emerald-500/50 transition-all duration-300 hover:-translate-y-1">
              <div className="flex justify-between items-center mb-6">
                <svg className="w-10 h-10 text-emerald-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1"></path></svg>
              </div>
              <h3 className="text-2xl font-bold text-slate-200 mb-3 group-hover:text-emerald-400 transition-colors">URL Shortener</h3>
              <p className="text-slate-400 text-sm mb-6 leading-relaxed">
                Engineered a scalable URL shortening service focused on high-concurrency hash generation. Configured Nginx as a reverse proxy with strict rate-limiting to mitigate DDoS risks and ensure system stability.
              </p>
              <div className="flex flex-wrap gap-3 font-mono text-xs text-slate-500">
                <span>MongoDB</span><span>Redis</span><span>Nginx</span><span>Node.js</span>
              </div>
            </div>

            {/* Project 2 */}
            <div className="group relative bg-slate-900/50 rounded-xl p-8 border border-slate-800 hover:border-emerald-500/50 transition-all duration-300 hover:-translate-y-1">
              <div className="flex justify-between items-center mb-6">
                <svg className="w-10 h-10 text-emerald-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path></svg>
              </div>
              <h3 className="text-2xl font-bold text-slate-200 mb-3 group-hover:text-emerald-400 transition-colors">INCOIS Dashboard (SIH)</h3>
              <p className="text-slate-400 text-sm mb-6 leading-relaxed">
                Engineered a real-time monitoring dashboard to visualize complex oceanic data streams for maritime authorities. Integrated an ML model to generate reports based on social media trends.
              </p>
              <div className="flex flex-wrap gap-3 font-mono text-xs text-slate-500">
                <span>React</span><span>Data Viz</span><span>ML Integration</span>
              </div>
            </div>

            {/* Project 3 */}
            <div className="group relative bg-slate-900/50 rounded-xl p-8 border border-slate-800 hover:border-emerald-500/50 transition-all duration-300 hover:-translate-y-1">
              <div className="flex justify-between items-center mb-6">
                <svg className="w-10 h-10 text-emerald-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"></path></svg>
              </div>
              <h3 className="text-2xl font-bold text-slate-200 mb-3 group-hover:text-emerald-400 transition-colors">IndiaInnovate Platform</h3>
              <p className="text-slate-400 text-sm mb-6 leading-relaxed">
                Developed a comprehensive backend and web dashboard to manage initiative operations. Integrated RESTful API endpoints for seamless frontend-to-database communication.
              </p>
              <div className="flex flex-wrap gap-3 font-mono text-xs text-slate-500">
                <span>React</span><span>Node.js</span><span>Express</span><span>Full-Stack</span>
              </div>
            </div>

            {/* Project 4 */}
            <div className="group relative bg-slate-900/50 rounded-xl p-8 border border-slate-800 hover:border-emerald-500/50 transition-all duration-300 hover:-translate-y-1">
              <div className="flex justify-between items-center mb-6">
                <svg className="w-10 h-10 text-emerald-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z"></path></svg>
              </div>
              <h3 className="text-2xl font-bold text-slate-200 mb-3 group-hover:text-emerald-400 transition-colors">MacroZone App</h3>
              <p className="text-slate-400 text-sm mb-6 leading-relaxed">
                Built a cross-platform mobile application for health and nutrition tracking. Implemented real-time data logging and visual progress charts to enhance user engagement.
              </p>
              <div className="flex flex-wrap gap-3 font-mono text-xs text-slate-500">
                <span>React Native</span><span>Expo</span><span>State Management</span>
              </div>
            </div>

          </div>
        </section>

        {/* SKILLS & ACHIEVEMENTS */}
        <section className="grid grid-cols-1 md:grid-cols-2 gap-12">
          
          {/* Skills Area */}
          <div>
            <h2 className="text-2xl font-bold text-slate-100 mb-6">Technical Skills</h2>
            <div className="space-y-6">
              <div>
                <h3 className="text-emerald-400 font-mono text-sm mb-3">Languages & Core</h3>
                <div className="flex flex-wrap gap-2">
                  {['C++', 'TypeScript', 'JavaScript', 'System Design', 'DSA', 'OOP'].map(s => (
                    <span key={s} className="px-3 py-1 bg-slate-800 text-slate-300 rounded-md text-sm">{s}</span>
                  ))}
                </div>
              </div>
              <div>
                <h3 className="text-emerald-400 font-mono text-sm mb-3">Frontend</h3>
                <div className="flex flex-wrap gap-2">
                  {['React.js', 'Next.js', 'React Native', 'Tailwind CSS', 'Redux/State'].map(s => (
                    <span key={s} className="px-3 py-1 bg-slate-800 text-slate-300 rounded-md text-sm">{s}</span>
                  ))}
                </div>
              </div>
              <div>
                <h3 className="text-emerald-400 font-mono text-sm mb-3">Backend & DBs</h3>
                <div className="flex flex-wrap gap-2">
                  {['Node.js', 'Express', 'MongoDB', 'Redis', 'Firebase', 'MySQL'].map(s => (
                    <span key={s} className="px-3 py-1 bg-slate-800 text-slate-300 rounded-md text-sm">{s}</span>
                  ))}
                </div>
              </div>
              <div>
                <h3 className="text-emerald-400 font-mono text-sm mb-3">DevOps & Tools</h3>
                <div className="flex flex-wrap gap-2">
                  {['Docker', 'Nginx', 'Vercel', 'Git', 'GitHub', 'Postman'].map(s => (
                    <span key={s} className="px-3 py-1 bg-slate-800 text-slate-300 rounded-md text-sm">{s}</span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Achievements Area */}
          <div>
            <h2 className="text-2xl font-bold text-slate-100 mb-6">Achievements</h2>
            <ul className="space-y-6 text-slate-400">
              <li className="flex gap-4">
                <svg className="w-6 h-6 text-emerald-500 shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"></path></svg>
                <div>
                  <h4 className="text-slate-200 font-semibold mb-1">Finalist, India Innovate Hackathon</h4>
                  <p className="text-sm leading-relaxed">Recognized for developing a comprehensive full-stack web dashboard and backend system, standing out among competing teams for technical execution.</p>
                </div>
              </li>
              <li className="flex gap-4">
                <svg className="w-6 h-6 text-emerald-500 shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"></path></svg>
                <div>
                  <h4 className="text-slate-200 font-semibold mb-1">Participant, Smart India Hackathon (SIH)</h4>
                  <p className="text-sm leading-relaxed">Engineered a real-time INCOIS dashboard for complex oceanic data visualization to solve government-level problem statements.</p>
                </div>
              </li>
              <li className="flex gap-4">
                <svg className="w-6 h-6 text-emerald-500 shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"></path></svg>
                <div>
                  <h4 className="text-slate-200 font-semibold mb-1">Competitive Programming</h4>
                  <p className="text-sm leading-relaxed">Active algorithmic problem solver, consistently refining data structure optimization. Solved 370+ problems on LeetCode.</p>
                </div>
              </li>
            </ul>
          </div>
        </section>

      </main>

      <footer className="border-t border-slate-800/50 bg-slate-950/50 mt-12 py-8 text-center">
        <p className="text-slate-500 text-sm font-mono">
          Designed & Built by Tushar Kumar
        </p>
      </footer>
    </div>
  );
}