export default function Home() {
  const services = [
    ["🚀", "Web Development", "Modern business websites and web apps."],
    ["📱", "App Development", "Android, Flutter and mobile-first solutions."],
    ["🏢", "ERP Software", "College ERP, fees, library and admin systems."],
    ["🤖", "AI Solutions", "AI tools, automation and smart applications."],
    ["☁️", "Cloud Deployment", "Vercel, Render, MongoDB and hosting setup."],
    ["🎓", "Internships", "Project-based IT internship programs."],
  ];

  const projects = [
    "College ERP System",
    "KrushiMitra AI",
    "Turf Booking Platform",
    "Placement Portal",
    "Library Management System",
    "Fee Payment Software",
  ];

  return (
    <main className="min-h-screen overflow-hidden bg-[#020617] text-white">
      <nav className="fixed top-0 z-50 w-full border-b border-white/10 bg-[#020617]/80 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          <div>
            <h1 className="text-2xl font-black tracking-tight">
              Rudraksh<span className="text-cyan-400"> Infotech</span>
            </h1>
            <p className="text-xs text-slate-400">Software House • IT Company</p>
          </div>

          <div className="hidden gap-8 text-sm text-slate-300 md:flex">
            <a href="#services" className="hover:text-cyan-400">Services</a>
            <a href="#internship" className="hover:text-cyan-400">Internships</a>
            <a href="#projects" className="hover:text-cyan-400">Projects</a>
            <a href="#contact" className="hover:text-cyan-400">Contact</a>
          </div>

          <a
            href="#contact"
            className="rounded-full bg-gradient-to-r from-cyan-400 to-blue-500 px-5 py-2 text-sm font-bold text-black shadow-lg shadow-cyan-500/30"
          >
            Start Project
          </a>
        </div>
      </nav>

      <section className="relative min-h-screen px-6 pt-32">
        <div className="absolute left-[-120px] top-20 h-96 w-96 rounded-full bg-cyan-500/20 blur-3xl"></div>
        <div className="absolute right-[-120px] top-40 h-96 w-96 rounded-full bg-purple-600/20 blur-3xl"></div>

        <div className="mx-auto grid max-w-7xl items-center gap-12 md:grid-cols-2">
          <div>
            <div className="mb-6 inline-flex rounded-full border border-cyan-400/30 bg-cyan-400/10 px-4 py-2 text-sm text-cyan-300">
              Launching Digital Products & IT Careers
            </div>

            <h2 className="mb-6 text-5xl font-black leading-tight md:text-7xl">
              Empowering Businesses With
              <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                {" "}Modern Software
              </span>
            </h2>

            <p className="mb-8 max-w-xl text-lg leading-8 text-slate-300">
              Rudraksh Infotech builds websites, mobile apps, ERP systems,
              AI-powered tools and provides industry-ready internship programs
              with real project experience.
            </p>

            <div className="flex flex-wrap gap-4">
              <a
                href="#internship"
                className="rounded-2xl bg-cyan-400 px-8 py-4 font-bold text-black shadow-xl shadow-cyan-500/30 hover:bg-cyan-300"
              >
                Apply Internship
              </a>
              <a
                href="#services"
                className="rounded-2xl border border-white/20 px-8 py-4 font-bold hover:border-cyan-400 hover:text-cyan-400"
              >
                Explore Services
              </a>
            </div>

            <div className="mt-12 grid grid-cols-3 gap-4">
              {[
                ["50+", "Projects"],
                ["500+", "Students"],
                ["10+", "Tech Stack"],
              ].map(([num, text]) => (
                <div key={text} className="rounded-2xl border border-white/10 bg-white/5 p-4">
                  <h3 className="text-3xl font-black text-cyan-400">{num}</h3>
                  <p className="text-sm text-slate-400">{text}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="relative">
            <div className="rounded-[2rem] border border-white/10 bg-white/5 p-6 shadow-2xl backdrop-blur-xl">
              <div className="rounded-[1.5rem] bg-gradient-to-br from-cyan-500/20 via-blue-500/10 to-purple-600/20 p-8">
                <p className="mb-4 text-sm text-cyan-300">Company Dashboard</p>
                <h3 className="mb-8 text-3xl font-black">Rudraksh Infotech</h3>

                <div className="space-y-4">
                  {[
                    "Website Development Active",
                    "Internship Applications Open",
                    "ERP Project In Progress",
                    "Cloud Deployment Ready",
                  ].map((item) => (
                    <div key={item} className="flex items-center justify-between rounded-2xl bg-black/30 p-4">
                      <span>{item}</span>
                      <span className="rounded-full bg-green-400/20 px-3 py-1 text-xs text-green-300">
                        Live
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="absolute -bottom-6 -left-6 rounded-2xl border border-white/10 bg-[#0f172a] p-5 shadow-xl">
              <p className="text-sm text-slate-400">Trusted For</p>
              <h4 className="text-xl font-bold text-cyan-400">Real Projects</h4>
            </div>
          </div>
        </div>
      </section>

      <section id="services" className="px-6 py-24">
        <div className="mx-auto max-w-7xl">
          <div className="mb-14 text-center">
            <p className="mb-3 text-cyan-400">What We Do</p>
            <h2 className="text-4xl font-black md:text-5xl">Premium IT Services</h2>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            {services.map(([icon, title, desc]) => (
              <div
                key={title}
                className="group rounded-3xl border border-white/10 bg-white/[0.04] p-7 transition hover:-translate-y-2 hover:border-cyan-400/70 hover:bg-cyan-400/10"
              >
                <div className="mb-5 text-4xl">{icon}</div>
                <h3 className="mb-3 text-2xl font-bold">{title}</h3>
                <p className="text-slate-400">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="internship" className="bg-white/[0.03] px-6 py-24">
        <div className="mx-auto max-w-7xl">
          <div className="mb-14 text-center">
            <p className="mb-3 text-cyan-400">Internship Programs</p>
            <h2 className="text-4xl font-black md:text-5xl">
              Learn. Build. Get Certified.
            </h2>
          </div>

          <div className="grid gap-6 md:grid-cols-4">
            {["Web Development", "Python", "Flutter", "AI/ML", "PHP MySQL", "JavaScript", "UI/UX", "Cloud Basics"].map(
              (item) => (
                <div key={item} className="rounded-3xl border border-white/10 bg-[#0f172a] p-6">
                  <h3 className="mb-3 text-xl font-bold text-cyan-300">{item}</h3>
                  <p className="mb-5 text-sm text-slate-400">
                    Practical tasks, live project and certificate.
                  </p>
                  <button className="rounded-xl bg-white px-5 py-2 text-sm font-bold text-black">
                    Apply Now
                  </button>
                </div>
              )
            )}
          </div>
        </div>
      </section>

      <section id="projects" className="px-6 py-24">
        <div className="mx-auto max-w-7xl">
          <div className="mb-14 text-center">
            <p className="mb-3 text-cyan-400">Portfolio</p>
            <h2 className="text-4xl font-black md:text-5xl">Featured Projects</h2>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            {projects.map((project) => (
              <div key={project} className="rounded-3xl border border-white/10 bg-gradient-to-br from-white/10 to-white/[0.03] p-7">
                <div className="mb-6 h-40 rounded-2xl bg-gradient-to-br from-cyan-400/20 to-purple-500/20"></div>
                <h3 className="text-2xl font-bold">{project}</h3>
                <p className="mt-3 text-slate-400">
                  Professional software solution built with modern technologies.
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-6 py-24">
        <div className="mx-auto max-w-7xl rounded-[2rem] bg-gradient-to-r from-cyan-400 to-blue-600 p-10 text-black md:p-16">
          <div className="grid items-center gap-8 md:grid-cols-2">
            <div>
              <h2 className="text-4xl font-black md:text-5xl">
                Ready to Launch Your Digital Product?
              </h2>
              <p className="mt-4 text-black/70">
                Start your business website, software, mobile app or internship journey with Rudraksh Infotech.
              </p>
            </div>
            <div className="md:text-right">
              <a href="#contact" className="inline-block rounded-2xl bg-black px-8 py-4 font-bold text-white">
                Contact Now
              </a>
            </div>
          </div>
        </div>
      </section>

      <section id="contact" className="px-6 py-24">
        <div className="mx-auto grid max-w-7xl gap-10 md:grid-cols-2">
          <div>
            <p className="mb-3 text-cyan-400">Contact</p>
            <h2 className="mb-6 text-4xl font-black">Let’s Work Together</h2>
            <p className="mb-8 text-slate-400">
              Send your project or internship enquiry. Our team will contact you soon.
            </p>

            <div className="space-y-4 text-slate-300">
              <p>📧 info@rudrakshinfotech.in</p>
              <p>🎓 internship@rudrakshinfotech.in</p>
              <p>📞 +91 7887627842</p>
              <p>📍 Maharashtra, India</p>
            </div>
          </div>

          <form className="rounded-[2rem] border border-white/10 bg-white/[0.04] p-8">
            <input className="mb-4 w-full rounded-2xl border border-white/10 bg-black/30 px-5 py-4 outline-none focus:border-cyan-400" placeholder="Full Name" />
            <input className="mb-4 w-full rounded-2xl border border-white/10 bg-black/30 px-5 py-4 outline-none focus:border-cyan-400" placeholder="Email Address" />
            <input className="mb-4 w-full rounded-2xl border border-white/10 bg-black/30 px-5 py-4 outline-none focus:border-cyan-400" placeholder="Phone Number" />
            <input className="mb-4 w-full rounded-2xl border border-white/10 bg-black/30 px-5 py-4 outline-none focus:border-cyan-400" placeholder="Service / Internship Domain" />
            <textarea className="mb-4 w-full rounded-2xl border border-white/10 bg-black/30 px-5 py-4 outline-none focus:border-cyan-400" rows="5" placeholder="Message"></textarea>

            <button type="button" className="w-full rounded-2xl bg-cyan-400 py-4 font-black text-black hover:bg-cyan-300">
              Submit Enquiry
            </button>
          </form>
        </div>
      </section>

      <footer className="border-t border-white/10 px-6 py-8 text-center text-slate-500">
        © 2026 Rudraksh Infotech. All Rights Reserved. | Software House & IT Solutions
      </footer>
    </main>
  );
}