"use client";

import { motion } from "framer-motion";
import ContactForm from "./ContactForm";

export default function Home() {
  const services = [
    ["🌐", "Website Development", "Modern business websites and web applications."],
    ["📱", "Mobile App Development", "Android, Flutter and cross-platform applications."],
    ["💻", "Software Development", "Custom software solutions for startups and businesses."],
    ["🏢", "ERP / CRM Solutions", "College ERP, CRM and business automation systems."],
    ["🤖", "AI & Automation Projects", "AI tools, automation and smart solutions."],
    ["☁️", "Cloud Deployment", "Vercel, Render, MongoDB and cloud hosting."],
    ["🎓", "Student Internship & Live Projects", "Industry-focused internship programs."],
    ["📘", "Final Year Project Guidance", "Project mentoring and implementation support."],
  ];

  const projects = [
    "College ERP System",
    "Turf Booking Website",
    "Hostel Room Booking Portal",
    "AI Resume Analyzer",
    "KrushiMitra AI",
    "Placement Development Club Website",
    "Business Portfolio Websites",
    "E-Commerce Platforms",
  ];

  const technologies = [
    "React",
    "Next.js",
    "Node.js",
    "MongoDB",
    "Flutter",
    "Python",
    "PHP",
    "MySQL",
    "AI/ML",
    "Vercel",
  ];

  const fadeUp = {
    hidden: { opacity: 0, y: 45 },
    visible: { opacity: 1, y: 0 },
  };

  const cardAnimation = {
    hidden: { opacity: 0, scale: 0.92 },
    visible: { opacity: 1, scale: 1 },
  };

  return (
    <main className="min-h-screen overflow-hidden bg-[#020617] text-white">
      <nav className="fixed top-0 z-50 w-full border-b border-white/10 bg-[#020617]/70 backdrop-blur-2xl">
        <div className="mx-auto flex w-full max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
          <div>
            <h1 className="text-xl font-black tracking-tight sm:text-2xl">
              Rudraksh<span className="text-cyan-400"> Infotech</span>
            </h1>
            <p className="text-xs text-slate-400">Software House • IT Company</p>
          </div>

          <div className="hidden gap-8 text-sm text-slate-300 md:flex">
            <a href="#services" className="hover:text-cyan-400">Services</a>
            <a href="#about" className="hover:text-cyan-400">About</a>
            <a href="#internship" className="hover:text-cyan-400">Internships</a>
            <a href="#projects" className="hover:text-cyan-400">Projects</a>
            <a href="#contact" className="hover:text-cyan-400">Contact</a>
          </div>

          <a
            href="/apply"
            className="hidden rounded-full bg-gradient-to-r from-cyan-400 to-blue-500 px-5 py-2 text-sm font-bold text-black shadow-lg shadow-cyan-400/30 hover:shadow-cyan-400/60 sm:inline-block"
          >
            Apply Now
          </a>

          <a href="/apply" className="rounded-full bg-cyan-400 px-4 py-2 text-xs font-bold text-black sm:hidden">
            Apply
          </a>
        </div>
      </nav>

      <section className="relative min-h-screen px-4 pt-32 sm:px-6 lg:px-8">
        <div className="absolute left-[-120px] top-20 h-72 w-72 rounded-full bg-cyan-500/20 blur-3xl sm:h-96 sm:w-96" />
        <div className="absolute right-[-120px] top-40 h-72 w-72 rounded-full bg-purple-600/20 blur-3xl sm:h-96 sm:w-96" />

        <motion.div
          animate={{ x: [0, 30, 0], y: [0, 35, 0] }}
          transition={{ duration: 8, repeat: Infinity }}
          className="absolute left-10 top-36 h-32 w-32 rounded-full bg-cyan-400/20 blur-3xl sm:left-24 sm:h-40 sm:w-40"
        />

        <motion.div
          animate={{ x: [0, -25, 0], y: [0, -30, 0] }}
          transition={{ duration: 10, repeat: Infinity }}
          className="absolute bottom-28 right-10 h-36 w-36 rounded-full bg-purple-500/20 blur-3xl sm:right-24 sm:h-48 sm:w-48"
        />

        <div className="mx-auto grid w-full max-w-7xl items-center gap-12 md:grid-cols-2">
          <div>
            <motion.div
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              transition={{ duration: 0.6 }}
              className="mb-6 inline-flex rounded-full border border-cyan-400/30 bg-cyan-400/10 px-4 py-2 text-xs text-cyan-300 sm:text-sm"
            >
              Building Smart Digital Solutions for the Future
            </motion.div>

            <motion.h2
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              transition={{ duration: 0.8, delay: 0.1 }}
              className="mb-6 text-4xl font-black leading-tight sm:text-5xl md:text-6xl lg:text-7xl"
            >
              Innovating Digital Solutions For
              <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent">
                {" "}Businesses & Students
              </span>
            </motion.h2>

            <motion.p
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              transition={{ duration: 0.9, delay: 0.25 }}
              className="mb-8 max-w-xl text-base leading-7 text-slate-300 sm:text-lg sm:leading-8"
            >
              We provide professional software development, website development,
              mobile app solutions, ERP systems, AI-based automation and
              industry-focused internship programs for students.
            </motion.p>

            <motion.div
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              transition={{ duration: 1, delay: 0.35 }}
              className="flex flex-col gap-4 sm:flex-row"
            >
              <a
                href="/apply"
                className="rounded-2xl bg-cyan-400 px-8 py-4 text-center font-bold text-black shadow-lg shadow-cyan-400/30 hover:bg-cyan-300 hover:shadow-cyan-400/60"
              >
                Apply Internship
              </a>
              <a
                href="#services"
                className="rounded-2xl border border-white/20 px-8 py-4 text-center font-bold hover:border-cyan-400 hover:text-cyan-400"
              >
                Explore Services
              </a>
            </motion.div>

            <div className="mt-12 grid grid-cols-1 gap-4 sm:grid-cols-3">
              {[
                ["100+", "Projects"],
                ["1000+", "Students"],
                ["15+", "Technologies"],
              ].map(([num, text]) => (
                <motion.div
                  key={text}
                  whileHover={{ scale: 1.08, y: -5 }}
                  className="rounded-2xl border border-white/10 bg-white/5 p-4 shadow-lg shadow-cyan-500/5"
                >
                  <h3 className="text-3xl font-black text-cyan-400">{num}</h3>
                  <p className="text-sm text-slate-400">{text}</p>
                </motion.div>
              ))}
            </div>
          </div>

          <motion.div
            variants={cardAnimation}
            initial="hidden"
            animate="visible"
            transition={{ duration: 0.8, delay: 0.3 }}
            whileHover={{ scale: 1.03, rotate: 1 }}
            className="rounded-[2rem] border border-white/10 bg-white/5 p-4 shadow-2xl shadow-cyan-500/10 backdrop-blur-xl sm:p-6"
          >
            <div className="rounded-[1.5rem] bg-gradient-to-br from-cyan-500/20 via-blue-500/10 to-purple-600/20 p-5 sm:p-8">
              <p className="mb-4 text-sm text-cyan-300">Company Dashboard</p>
              <h3 className="mb-8 text-2xl font-black sm:text-3xl">Rudraksh Infotech</h3>

              <div className="space-y-4">
                {[
                  "Website Development Active",
                  "Internship Applications Open",
                  "ERP / CRM Projects",
                  "Cloud Deployment Ready",
                ].map((item) => (
                  <motion.div
                    key={item}
                    whileHover={{ x: 8 }}
                    className="flex items-center justify-between gap-4 rounded-2xl bg-black/30 p-4 text-sm sm:text-base"
                  >
                    <span>{item}</span>
                    <span className="rounded-full bg-green-400/20 px-3 py-1 text-xs text-green-300">
                      Live
                    </span>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <section id="services" className="px-4 py-24 sm:px-6 lg:px-8">
        <div className="mx-auto w-full max-w-7xl">
          <div className="mb-14 text-center">
            <p className="mb-3 text-cyan-400">What We Do</p>
            <h2 className="text-3xl font-black sm:text-4xl md:text-5xl">Premium IT Services</h2>
          </div>

          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {services.map(([icon, title, desc]) => (
              <motion.div
                key={title}
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                whileHover={{ scale: 1.05, y: -10 }}
                className="transform-gpu rounded-3xl border border-white/10 bg-white/[0.04] p-7 shadow-xl shadow-cyan-500/5 hover:border-cyan-400/70 hover:bg-cyan-400/10"
              >
                <div className="mb-5 text-4xl">{icon}</div>
                <h3 className="mb-3 text-xl font-bold">{title}</h3>
                <p className="text-sm text-slate-400">{desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section id="about" className="bg-white/[0.03] px-4 py-24 sm:px-6 lg:px-8">
        <div className="mx-auto grid w-full max-w-7xl grid-cols-1 gap-12 md:grid-cols-2">
          <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}>
            <p className="mb-3 text-cyan-400">About Us</p>
            <h2 className="mb-6 text-3xl font-black sm:text-4xl">Who We Are</h2>
            <p className="leading-8 text-slate-300">
              Rudraksh Infotech is an IT services and training-based company focused on
              delivering modern digital solutions for businesses, startups, and students.
              We work on websites, mobile applications, ERP systems, automation tools,
              and student internship programs.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            {["Professional Team", "Live Projects", "Student Training", "Business Solutions"].map((item) => (
              <motion.div
                key={item}
                whileHover={{ scale: 1.05 }}
                className="rounded-2xl border border-white/10 bg-[#0f172a] p-6"
              >
                <h3 className="text-xl font-bold text-cyan-300">{item}</h3>
                <p className="mt-2 text-sm text-slate-400">Quality-focused IT solutions and practical learning.</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-4 py-24 sm:px-6 lg:px-8">
        <div className="mx-auto w-full max-w-7xl">
          <div className="mb-14 text-center">
            <p className="mb-3 text-cyan-400">Why Choose Us</p>
            <h2 className="text-3xl font-black sm:text-4xl md:text-5xl">Reliable IT Partner</h2>
          </div>

          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {[
              "Real Project Experience",
              "Industry-Focused Mentorship",
              "Internship Certificate",
              "Resume Support",
              "Interview Preparation",
              "Modern Technology Stack",
            ].map((item) => (
              <motion.div
                key={item}
                whileHover={{ scale: 1.04, y: -6 }}
                className="rounded-2xl border border-white/10 bg-white/[0.04] p-6"
              >
                <h3 className="text-xl font-bold text-cyan-300">✓ {item}</h3>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white/[0.03] px-4 py-24 sm:px-6 lg:px-8">
        <div className="mx-auto w-full max-w-7xl text-center">
          <p className="mb-3 text-cyan-400">Technologies</p>
          <h2 className="mb-12 text-3xl font-black sm:text-4xl md:text-5xl">Technologies We Use</h2>

          <div className="flex flex-wrap justify-center gap-4">
            {technologies.map((tech) => (
              <motion.span
                key={tech}
                whileHover={{ scale: 1.1, y: -4 }}
                className="rounded-full border border-white/10 bg-[#0f172a] px-5 py-3 text-sm text-slate-300 hover:border-cyan-400/60 hover:text-cyan-300 sm:px-6 sm:text-base"
              >
                {tech}
              </motion.span>
            ))}
          </div>
        </div>
      </section>

      <section id="internship" className="px-4 py-24 sm:px-6 lg:px-8">
        <div className="mx-auto w-full max-w-7xl">
          <div className="mb-14 text-center">
            <p className="mb-3 text-cyan-400">Internship Programs</p>
            <h2 className="text-3xl font-black sm:text-4xl md:text-5xl">Industrial Training & Internship Programs</h2>
            <p className="mx-auto mt-4 max-w-2xl text-slate-400">
              Practical internship programs for engineering and IT students with hands-on project experience.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {["Web Development", "Python Programming", "App Development", "AI & Machine Learning", "PHP & MySQL", "Full Stack Development", "UI/UX Design", "Cloud Basics"].map((item) => (
              <motion.div
                key={item}
                whileHover={{ scale: 1.05, y: -8 }}
                className="rounded-3xl border border-white/10 bg-[#0f172a] p-6 shadow-lg shadow-purple-500/5"
              >
                <h3 className="mb-3 text-xl font-bold text-cyan-300">{item}</h3>
                <p className="mb-5 text-sm text-slate-400">Live project work, mentorship and certificate.</p>
                <a href="/apply" className="inline-block rounded-xl bg-white px-5 py-2 text-sm font-bold text-black hover:bg-cyan-300">
                  Apply Now
                </a>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white/[0.03] px-4 py-24 sm:px-6 lg:px-8">
        <div className="mx-auto w-full max-w-7xl">
          <div className="mb-14 text-center">
            <p className="mb-3 text-cyan-400">Internship Benefits</p>
            <h2 className="text-3xl font-black sm:text-4xl md:text-5xl">What Students Get</h2>
          </div>

          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-5">
            {["Live Project Work", "Certificate", "Project Guidance", "Resume Support", "Interview Preparation"].map((item) => (
              <motion.div
                key={item}
                whileHover={{ scale: 1.06 }}
                className="rounded-2xl border border-white/10 bg-[#0f172a] p-6 text-center"
              >
                <h3 className="font-bold text-cyan-300">{item}</h3>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-4 py-24 sm:px-6 lg:px-8">
        <div className="mx-auto w-full max-w-7xl">
          <div className="mb-14 text-center">
            <p className="mb-3 text-cyan-400">Careers</p>
            <h2 className="text-3xl font-black sm:text-4xl md:text-5xl">Career Opportunities</h2>
          </div>

          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {["Web Developer Intern", "Python Intern", "Flutter Intern", "UI/UX Intern"].map((role) => (
              <motion.div
                key={role}
                whileHover={{ scale: 1.05, y: -8 }}
                className="rounded-3xl border border-white/10 bg-white/[0.04] p-6"
              >
                <h3 className="mb-4 text-xl font-bold">{role}</h3>
                <a href="/apply" className="inline-block rounded-xl bg-cyan-400 px-5 py-2 font-bold text-black">
                  Apply
                </a>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section id="projects" className="bg-white/[0.03] px-4 py-24 sm:px-6 lg:px-8">
        <div className="mx-auto w-full max-w-7xl">
          <div className="mb-14 text-center">
            <p className="mb-3 text-cyan-400">Portfolio</p>
            <h2 className="text-3xl font-black sm:text-4xl md:text-5xl">Our Project Areas</h2>
          </div>

          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {projects.map((project) => (
              <motion.div
                key={project}
                whileHover={{ scale: 1.05, rotateY: 5 }}
                className="rounded-3xl border border-white/10 bg-gradient-to-br from-white/10 to-white/[0.03] p-7"
              >
                <div className="mb-6 h-32 rounded-2xl bg-gradient-to-br from-cyan-400/20 to-purple-500/20" />
                <h3 className="text-xl font-bold">{project}</h3>
                <p className="mt-3 text-sm text-slate-400">Professional software solution built with modern technologies.</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-4 py-24 sm:px-6 lg:px-8">
        <motion.div
          whileHover={{ scale: 1.02 }}
          className="mx-auto w-full max-w-7xl rounded-[2rem] bg-gradient-to-r from-cyan-400 to-blue-600 p-8 text-black shadow-2xl shadow-cyan-500/20 sm:p-10 md:p-16"
        >
          <div className="grid grid-cols-1 items-center gap-8 md:grid-cols-2">
            <div>
              <h2 className="text-3xl font-black sm:text-4xl md:text-5xl">Ready to Launch Your Digital Product?</h2>
              <p className="mt-4 text-black/70">Start your website, software, mobile app or internship journey with Rudraksh Infotech.</p>
            </div>
            <div className="md:text-right">
              <a href="#contact" className="inline-block rounded-2xl bg-black px-8 py-4 font-bold text-white">Contact Now</a>
            </div>
          </div>
        </motion.div>
      </section>

      <section id="contact" className="px-4 py-24 sm:px-6 lg:px-8">
        <div className="mx-auto grid w-full max-w-7xl grid-cols-1 gap-10 lg:grid-cols-2">
          <div>
            <p className="mb-3 text-cyan-400">Contact</p>
            <h2 className="mb-6 text-3xl font-black sm:text-4xl">Let’s Work Together</h2>
            <p className="mb-8 text-slate-400">Send your project or internship enquiry. Our team will contact you soon.</p>

            <div className="space-y-4 text-slate-300">
              <p>📧 info@rudrakshinfotech.in</p>
              <p>🎓 internship@rudrakshinfotech.in</p>
              <p>📞 +91 7887627842</p>
              <p>📍 Kolhapur,Maharashtra, India</p>
            </div>
          </div>

          <ContactForm />
        </div>
      </section>

      <footer className="border-t border-white/10 px-4 py-8 text-center text-sm text-slate-500 sm:px-6">
        <p>© 2026 Rudraksh Infotech. All Rights Reserved. | Software House & IT Solutions</p>
        <p className="mt-2 text-cyan-400">Empowering Businesses and Students Through Technology.</p>
      </footer>
    </main>
  );
}