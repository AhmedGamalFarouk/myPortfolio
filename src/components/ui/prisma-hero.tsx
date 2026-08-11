"use client";

import { motion, useInView, AnimatePresence } from "framer-motion";
import { ArrowRight, Code2, Sparkles, X, ExternalLink, Github, Mail, Phone, MapPin, GraduationCap, Award, Layers } from "lucide-react";
import { useRef, useState } from "react";
import { LandingAccordionItem, defaultProjectsAccordionItems } from "@/components/ui/interactive-image-accordion";

/* ---------------- WordsPullUp ---------------- */
interface WordsPullUpProps {
  text: string;
  className?: string;
  showAsterisk?: boolean;
  style?: React.CSSProperties;
}

export const WordsPullUp = ({
  text,
  className = "",
  showAsterisk = false,
  style,
}: WordsPullUpProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true });
  const words = text.split(" ");

  return (
    <div ref={ref} className={`inline-flex flex-wrap ${className}`} style={style}>
      {words.map((word, i) => {
        const isLast = i === words.length - 1;
        return (
          <motion.span
            key={i}
            initial={{ y: 20, opacity: 0 }}
            animate={isInView ? { y: 0, opacity: 1 } : {}}
            transition={{ duration: 0.6, delay: i * 0.08, ease: [0.16, 1, 0.3, 1] }}
            className="inline-block relative"
            style={{ marginRight: isLast ? 0 : "0.25em" }}
          >
            {word}
            {showAsterisk && isLast && (
              <span className="absolute top-[0.65em] -right-[0.3em] text-[0.31em]">
                *
              </span>
            )}
          </motion.span>
        );
      })}
    </div>
  );
};

/* ---------------- Data Definitions ---------------- */
interface Project {
  id: string;
  title: string;
  subtitle: string;
  tech: string[];
  description: string;
  category: "Mobile" | "Web" | "Full-Stack";
  badge: string;
  gradient: string;
  projectUrl: string;
}

const projects: Project[] = [
  {
    id: "hush",
    title: "Hush",
    subtitle: "Encrypted Messaging & Privacy App",
    tech: ["Flutter", "Dart", "Cryptography", "Firebase", "WebSockets"],
    description: "A secure, privacy-focused messaging application featuring end-to-end encryption, ephemeral message self-destruction, anonymous authentication, and zero-knowledge data architecture.",
    category: "Mobile",
    badge: "Flutter App",
    gradient: "from-emerald-500/20 via-teal-500/10 to-transparent",
    projectUrl: "https://github.com/AhmedGamalFarouk?tab=repositories",
  },
  {
    id: "project-echo",
    title: "Project Echo",
    subtitle: "Real-Time Voice & Audio Collaboration",
    tech: ["React Native", "WebRTC", "TypeScript", "Node.js", "Socket.io"],
    description: "Low-latency voice communication and audio streaming platform built for remote teams and gamers, featuring spatial audio rendering, noise cancellation, and room-based channels.",
    category: "Mobile",
    badge: "React Native",
    gradient: "from-blue-500/20 via-cyan-500/10 to-transparent",
    projectUrl: "https://github.com/AhmedGamalFarouk?tab=repositories",
  },
  {
    id: "game-studio",
    title: "Game Studio",
    subtitle: "Interactive Game Showcase & Portal",
    tech: ["React", "Three.js", "WebGL", "Tailwind CSS", "Vite"],
    description: "An immersive 3D game studio landing portal featuring interactive 3D model viewports, game telemetry dashboards, trailer showcases, and real-time player statistics.",
    category: "Web",
    badge: "React + 3D",
    gradient: "from-purple-500/20 via-indigo-500/10 to-transparent",
    projectUrl: "https://github.com/AhmedGamalFarouk?tab=repositories",
  },
  {
    id: "eshtry",
    title: "Eshtry Menny",
    subtitle: "E-Commerce Mobile Application",
    tech: ["Flutter", "Dart", "SQLite", "Bloc", "REST API"],
    description: "A feature-rich shopping & e-commerce app built with Flutter. Features local SQLite database persistence, robust BLoC pattern state management, user authentication, cart system, and product management.",
    category: "Mobile",
    badge: "Flutter App",
    gradient: "from-amber-500/20 via-rose-500/10 to-transparent",
    projectUrl: "https://github.com/AhmedGamalFarouk?tab=repositories",
  },
  {
    id: "circle-mobile",
    title: "Circle Mobile",
    subtitle: "Event Planning & Group Chat",
    tech: ["React Native", "Firebase", "Realtime DB", "Tailwind"],
    description: "Cross-platform mobile event planning app designed to combat social drift by reducing friction in group activities. Supports channel-based messaging, real-time activity updates, and Firebase auth.",
    category: "Mobile",
    badge: "React Native",
    gradient: "from-blue-500/20 via-indigo-500/10 to-transparent",
    projectUrl: "https://github.com/AhmedGamalFarouk?tab=repositories",
  },
  {
    id: "cinema-flux",
    title: "Cinema Flux",
    subtitle: "Futuristic Cinematic Movie Explorer",
    tech: ["React", "Redux Toolkit", "Vite", "Tailwind CSS"],
    description: "A sleek, dark futuristic movie discovery web application powered by Redux Toolkit for complex state management, featuring dynamic filters, search, and detailed media previews.",
    category: "Web",
    badge: "React + Vite",
    gradient: "from-emerald-500/20 via-teal-500/10 to-transparent",
    projectUrl: "https://github.com/AhmedGamalFarouk?tab=repositories",
  },
  {
    id: "social-app",
    title: "Social Media Platform",
    subtitle: "Full-Featured Community App",
    tech: ["Flutter", "Firebase Auth", "Firestore", "Cloud Storage"],
    description: "Complete social platform with custom user profile management, interactive post creation, real-time likes/comments system, and secure Firebase Cloud Storage for high-resolution media.",
    category: "Mobile",
    badge: "Flutter + Firebase",
    gradient: "from-purple-500/20 via-pink-500/10 to-transparent",
    projectUrl: "https://github.com/AhmedGamalFarouk?tab=repositories",
  },
  {
    id: "movieland",
    title: "Movie Land",
    subtitle: "Mobile Movie Explorer",
    tech: ["React Native", "REST API", "Category Filter", "AsyncStorage"],
    description: "Mobile movie explorer app with live REST API integration, smooth category filtering, local favorites persistence, and fluid gesture navigation.",
    category: "Mobile",
    badge: "React Native",
    gradient: "from-cyan-500/20 via-blue-500/10 to-transparent",
    projectUrl: "https://github.com/AhmedGamalFarouk?tab=repositories",
  },
  {
    id: "orderly",
    title: "Orderly",
    subtitle: "Group Order Management Platform",
    tech: ["React", "Firebase Firestore", "Tailwind CSS"],
    description: "Streamlines and manages shared group orders seamlessly with real-time Firebase Firestore synchronization, status tracking, and split-payment management UI.",
    category: "Web",
    badge: "React + Firebase",
    gradient: "from-orange-500/20 via-amber-500/10 to-transparent",
    projectUrl: "https://github.com/AhmedGamalFarouk?tab=repositories",
  },
];

const skillsList = [
  { category: "Mobile", items: ["Flutter", "Dart", "React Native", "Android Studio"] },
  { category: "Front-End", items: ["React", "TypeScript", "JavaScript", "Angular", "Tailwind CSS", "Redux Toolkit", "HTML5/CSS3"] },
  { category: "Backend & DB", items: ["Firebase", "Firestore", "SQLite", "REST APIs", "SQL"] },
  { category: "Tools & Workflow", items: ["Git", "GitHub", "CI/CD", "Cursor", "VS Code", "Figma", "Agile/Scrum"] },
];

const navItems = [
  { label: "About", href: "#hero" },
  { label: "Projects", href: "#projects" },
  { label: "Skills", href: "#skills" },
  { label: "Experience", href: "#experience" },
  { label: "Contact", href: "#contact" },
];

/* ---------------- Hero & Portfolio Component ---------------- */
const PrismaHero = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [activeFilter, setActiveFilter] = useState<"All" | "Mobile" | "Web">("All");

  const filteredProjects = activeFilter === "All" 
    ? projects 
    : projects.filter(p => p.category === activeFilter);

  return (
    <div className="w-full bg-[#0a0a0c] text-[#E1E0CC] selection:bg-[#E1E0CC] selection:text-black">
      {/* Sticky Fixed Navbar across all sections */}
      <nav className="fixed left-1/2 top-0 z-50 -translate-x-1/2">
        <div className="flex items-center gap-3 rounded-b-2xl bg-black/80 px-5 py-3 backdrop-blur-xl sm:gap-6 md:gap-10 md:rounded-b-3xl md:px-8 border border-t-0 border-white/15 shadow-2xl">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="text-[11px] font-medium tracking-wider uppercase transition-colors sm:text-xs md:text-sm text-[#E1E0CC]/70 hover:text-[#E1E0CC]"
            >
              {item.label}
            </a>
          ))}
        </div>
      </nav>

      {/* ---------------- HERO SECTION ---------------- */}
      <section id="hero" className="relative h-screen w-full p-2 sm:p-4 md:p-6">
        <div className="relative h-full w-full overflow-hidden rounded-2xl md:rounded-[2rem]">
          {/* Background video */}
          <video
            autoPlay
            loop
            muted
            playsInline
            className="absolute inset-0 h-full w-full object-cover"
            src="https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260405_170732_8a9ccda6-5cff-4628-b164-059c500a2b41.mp4"
          />

          {/* Noise overlay */}
          <div className="noise-overlay pointer-events-none absolute inset-0 opacity-[0.75] mix-blend-overlay" />

          {/* Dark gradient overlay */}
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/60 via-black/30 to-black/90" />

          {/* Role badge top right */}
          <div className="absolute right-6 top-6 z-10 hidden lg:flex items-center gap-2 rounded-full border border-white/15 bg-black/50 px-4 py-1.5 backdrop-blur-md">
            <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
            <span className="text-xs font-mono tracking-wide text-white/80">Cairo, Egypt • Open to Work</span>
          </div>

          {/* Hero Main Content */}
          <div className="absolute bottom-0 left-0 right-0 px-4 pb-6 sm:px-6 md:px-10">
            <div className="grid grid-cols-12 items-end gap-4">
              <div className="col-span-12 lg:col-span-8">
                {/* Developer intro tag */}
                <motion.div
                  initial={{ y: 15, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  className="mb-2 flex items-center gap-2 text-xs font-mono tracking-widest uppercase text-emerald-400/90 sm:text-sm"
                >
                  <Code2 className="h-4 w-4" />
                  Front-End & Mobile Engineer
                </motion.div>

                {/* Giant Typography Header */}
                <h1
                  className="font-medium leading-[0.82] tracking-[-0.07em] text-[18vw] sm:text-[16vw] md:text-[14vw] lg:text-[13vw] xl:text-[12vw]"
                  style={{ color: "#E1E0CC" }}
                >
                  <WordsPullUp text="Ahmed" showAsterisk />
                  <br />
                  <WordsPullUp text="Gamal" />
                </h1>
              </div>

              {/* Description & Action CTA */}
              <div className="col-span-12 flex flex-col gap-4 pb-2 lg:col-span-4 lg:pb-6">
                <motion.p
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.8, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
                  className="text-xs sm:text-sm md:text-base font-light"
                  style={{ lineHeight: 1.4, color: "rgba(225, 224, 204, 0.75)" }}
                >
                  Crafting high-performance cross-platform mobile apps & sleek front-end web experiences using Flutter, React Native, React, & TypeScript.
                </motion.p>

                <div className="flex items-center gap-3 pt-2">
                  <motion.a
                    href="#projects"
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.8, delay: 0.7, ease: [0.16, 1, 0.3, 1] }}
                    className="group inline-flex items-center gap-2 rounded-full bg-[#E1E0CC] py-1 pl-5 pr-1 text-sm font-semibold text-black transition-all hover:gap-3 sm:text-base cursor-pointer"
                  >
                    View Featured Work
                    <span className="flex h-9 w-9 items-center justify-center rounded-full bg-black transition-transform group-hover:scale-110 sm:h-10 sm:w-10">
                      <ArrowRight className="h-4 w-4" style={{ color: "#E1E0CC" }} />
                    </span>
                  </motion.a>

                  <motion.a
                    href="#contact"
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.8, delay: 0.8, ease: [0.16, 1, 0.3, 1] }}
                    className="inline-flex h-11 items-center justify-center rounded-full border border-white/20 px-5 text-sm font-medium transition-colors hover:bg-white/10"
                  >
                    Contact Me
                  </motion.a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ---------------- PROJECTS SECTION ---------------- */}
      <section id="projects" className="mx-auto max-w-7xl px-4 py-24 sm:px-6 lg:px-8">
        <div className="mb-8 flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
          <div>
            <span className="font-mono text-xs uppercase tracking-widest text-emerald-400">
              Selected Works
            </span>
            <h2 className="mt-2 text-3xl font-medium tracking-tight sm:text-5xl">
              Featured Projects Showcase
            </h2>
          </div>

          {/* Filter Pills */}
          <div className="flex items-center gap-2 rounded-full border border-white/10 bg-white/5 p-1 backdrop-blur-md">
            {(["All", "Mobile", "Web"] as const).map((filter) => (
              <button
                key={filter}
                onClick={() => setActiveFilter(filter)}
                className={`rounded-full px-5 py-1.5 text-xs font-medium transition-all ${
                  activeFilter === filter
                    ? "bg-[#E1E0CC] text-black shadow-lg"
                    : "text-white/70 hover:text-white"
                }`}
              >
                {filter}
              </button>
            ))}
          </div>
        </div>

        {/* Interactive Image Accordion Component replacing old project cards */}
        <div className="rounded-3xl border border-white/10 bg-black/40 p-4 sm:p-6 backdrop-blur-md shadow-2xl">
          <LandingAccordionItem 
            items={filteredProjects.map((project, idx) => ({
              id: project.id,
              title: project.title,
              subtitle: project.subtitle,
              category: project.category,
              tech: project.tech,
              description: project.description,
              badge: project.badge,
              projectUrl: project.projectUrl,
              imageUrl: [
                "https://images.unsplash.com/photo-1555774698-0b77e0d5fac6?q=80&w=1200&auto=format&fit=crop",
                "https://images.unsplash.com/photo-1590650153855-d9e808231d41?q=80&w=1200&auto=format&fit=crop",
                "https://images.unsplash.com/photo-1511512578047-dfb367046420?q=80&w=1200&auto=format&fit=crop",
                "https://images.unsplash.com/photo-1472851294608-062f824d29cc?q=80&w=1200&auto=format&fit=crop",
                "https://images.unsplash.com/photo-1511632765486-a01980e01a18?q=80&w=1200&auto=format&fit=crop",
                "https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?q=80&w=1200&auto=format&fit=crop",
                "https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?q=80&w=1200&auto=format&fit=crop",
                "https://images.unsplash.com/photo-1536440136628-849c177e76a1?q=80&w=1200&auto=format&fit=crop",
                "https://images.unsplash.com/photo-1556742049-0a670c480728?q=80&w=1200&auto=format&fit=crop",
              ][idx % 9]
            }))}
            onSelectProject={(project) => setSelectedProject({
              id: String(project.id),
              title: project.title,
              subtitle: project.subtitle,
              tech: project.tech,
              description: project.description,
              category: project.category as any,
              badge: project.badge,
              projectUrl: project.projectUrl || "https://github.com/AhmedGamalFarouk?tab=repositories",
              gradient: "from-emerald-500/20 via-teal-500/10 to-transparent"
            })}
          />
        </div>
      </section>

      {/* ---------------- SKILLS SECTION ---------------- */}
      <section id="skills" className="border-t border-white/10 bg-black/40 py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-12 text-center">
            <span className="font-mono text-xs uppercase tracking-widest text-emerald-400">
              Technical Expertise
            </span>
            <h2 className="mt-2 text-3xl font-medium tracking-tight sm:text-5xl">
              Skills & Tech Stack
            </h2>
          </div>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
            {skillsList.map((skillGroup, idx) => (
              <motion.div
                key={skillGroup.category}
                initial={{ y: 20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="rounded-2xl border border-white/10 bg-white/[0.03] p-6 backdrop-blur-sm"
              >
                <div className="flex items-center gap-2 font-mono text-sm uppercase tracking-wider text-emerald-400 mb-4 pb-2 border-b border-white/10">
                  <Layers className="h-4 w-4" />
                  {skillGroup.category}
                </div>

                <div className="flex flex-wrap gap-2">
                  {skillGroup.items.map((skill) => (
                    <span
                      key={skill}
                      className="rounded-lg border border-white/10 bg-white/5 px-3 py-1.5 text-xs font-medium text-white/90 hover:border-emerald-500/50 hover:bg-emerald-500/10 transition-colors"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ---------------- EXPERIENCE & EDUCATION ---------------- */}
      <section id="experience" className="mx-auto max-w-7xl px-4 py-24 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-16 lg:grid-cols-2">
          {/* Experience */}
          <div>
            <div className="flex items-center gap-2 font-mono text-xs uppercase tracking-widest text-emerald-400 mb-2">
              <Award className="h-4 w-4" />
              Career Journey
            </div>
            <h2 className="text-3xl font-medium tracking-tight sm:text-4xl mb-8">
              Work Experience
            </h2>

            <div className="space-y-8 border-l border-white/10 pl-6">
              <div className="relative">
                <span className="absolute -left-[31px] top-1.5 h-3 w-3 rounded-full bg-emerald-400 border-4 border-[#0a0a0c]" />
                <span className="text-xs font-mono text-white/50">01/2026 – Present</span>
                <h3 className="text-xl font-medium text-white mt-1">Front-End Developer</h3>
                <p className="text-sm text-emerald-400 font-mono">DoMS</p>
                <p className="mt-2 text-sm text-white/70 font-light leading-relaxed">
                  Building & maintaining high-performance Angular web applications with reactive data patterns, modern UI/UX components, and modular front-end architecture.
                </p>
              </div>

              <div className="relative">
                <span className="absolute -left-[31px] top-1.5 h-3 w-3 rounded-full bg-white/40 border-4 border-[#0a0a0c]" />
                <span className="text-xs font-mono text-white/50">03/2025 – 08/2025</span>
                <h3 className="text-xl font-medium text-white mt-1">Front-End & Mobile Specialist</h3>
                <p className="text-sm text-emerald-400 font-mono">Information Technology Institute (ITI) – ICC</p>
                <p className="mt-2 text-sm text-white/70 font-light leading-relaxed">
                  Intensive Code Camp specializing in Flutter, React Native, clean architecture, CI/CD pipelines, and Agile teamwork across mobile & web projects.
                </p>
              </div>
            </div>
          </div>

          {/* Education & Publications */}
          <div>
            <div className="flex items-center gap-2 font-mono text-xs uppercase tracking-widest text-emerald-400 mb-2">
              <GraduationCap className="h-4 w-4" />
              Academic Background
            </div>
            <h2 className="text-3xl font-medium tracking-tight sm:text-4xl mb-8">
              Education & Research
            </h2>

            <div className="space-y-8">
              <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-6">
                <span className="text-xs font-mono text-white/50">09/2019 – 07/2023</span>
                <h3 className="text-xl font-medium text-white mt-1">Bachelor of Computer Science</h3>
                <p className="text-sm text-emerald-400 font-mono mt-0.5">Future Academy – Faculty of Computer Science</p>
                <div className="mt-3 inline-block rounded bg-emerald-500/10 px-2.5 py-1 text-xs font-mono text-emerald-400 border border-emerald-500/20">
                  GPA: 3.26 / 4.0
                </div>
              </div>

              <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-6">
                <span className="text-xs font-mono tracking-wider uppercase text-amber-400">Springer Publication • 12/2024</span>
                <h3 className="text-lg font-medium text-white mt-1">
                  Systematic Literature Review of Optimization Algorithms for the University Course Timetabling Problem
                </h3>
                <p className="mt-2 text-xs text-white/70 font-light leading-relaxed">
                  Published research summarizing findings on UCTP optimization problems in the computer science scientific community.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ---------------- CONTACT FOOTER ---------------- */}
      <footer id="contact" className="border-t border-white/10 bg-black py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-2">
            <div>
              <span className="font-mono text-xs uppercase tracking-widest text-emerald-400">
                Get In Touch
              </span>
              <h2 className="mt-2 text-4xl font-medium tracking-tight sm:text-6xl text-[#E1E0CC]">
                Let’s Build Something Amazing.
              </h2>
              <p className="mt-4 text-base font-light text-white/70 max-w-md">
                Available for full-time opportunities, freelance mobile/web development projects, and innovative collaborations.
              </p>
            </div>

            <div className="flex flex-col justify-center space-y-4">
              <a
                href="mailto:ahmedgamalfarouk0@gmail.com"
                className="group flex items-center gap-4 rounded-xl border border-white/10 bg-white/5 p-4 transition-colors hover:border-emerald-400/50 hover:bg-white/10"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-emerald-500/10 text-emerald-400">
                  <Mail className="h-6 w-6" />
                </div>
                <div>
                  <div className="text-xs font-mono text-white/50 uppercase">Email</div>
                  <div className="text-base font-medium text-white group-hover:text-emerald-400 transition-colors">
                    ahmedgamalfarouk0@gmail.com
                  </div>
                </div>
              </a>

              <a
                href="tel:+201023510831"
                className="group flex items-center gap-4 rounded-xl border border-white/10 bg-white/5 p-4 transition-colors hover:border-emerald-400/50 hover:bg-white/10"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-blue-500/10 text-blue-400">
                  <Phone className="h-6 w-6" />
                </div>
                <div>
                  <div className="text-xs font-mono text-white/50 uppercase">Phone / WhatsApp</div>
                  <div className="text-base font-medium text-white group-hover:text-blue-400 transition-colors">
                    +20 102 351 0831
                  </div>
                </div>
              </a>

              <div className="flex items-center gap-4 rounded-xl border border-white/10 bg-white/5 p-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-purple-500/10 text-purple-400">
                  <MapPin className="h-6 w-6" />
                </div>
                <div>
                  <div className="text-xs font-mono text-white/50 uppercase">Location</div>
                  <div className="text-base font-medium text-white">Cairo, Egypt</div>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-16 pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between text-xs font-mono text-white/40">
            <div>© {new Date().getFullYear()} Ahmed Gamal. All rights reserved.</div>
            <div className="mt-2 sm:mt-0">Built with Next.js, React, Tailwind CSS & Framer Motion</div>
          </div>
        </div>
      </footer>

      {/* ---------------- PROJECT DETAILS MODAL ---------------- */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedProject(null)}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4 backdrop-blur-md"
          >
            <motion.div
              initial={{ scale: 0.95, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.95, y: 20 }}
              onClick={(e) => e.stopPropagation()}
              className="relative max-w-2xl w-full rounded-2xl border border-white/20 bg-[#121216] p-8 shadow-2xl"
            >
              <button
                onClick={() => setSelectedProject(null)}
                className="absolute right-4 top-4 rounded-full bg-white/10 p-2 text-white/70 hover:bg-white/20 hover:text-white"
              >
                <X className="h-5 w-5" />
              </button>

              <span className="rounded-full border border-emerald-500/30 bg-emerald-500/10 px-3 py-1 text-xs font-mono text-emerald-400">
                {selectedProject.badge}
              </span>

              <h3 className="mt-4 text-3xl font-medium text-white">{selectedProject.title}</h3>
              <p className="text-sm font-mono text-white/50">{selectedProject.subtitle}</p>

              <p className="mt-6 text-sm text-white/80 font-light leading-relaxed">
                {selectedProject.description}
              </p>

              <div className="mt-6">
                <h4 className="text-xs font-mono uppercase tracking-wider text-white/40 mb-2">Technologies Used</h4>
                <div className="flex flex-wrap gap-2">
                  {selectedProject.tech.map((t) => (
                    <span key={t} className="rounded-md bg-white/10 px-3 py-1 text-xs font-mono text-white">
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              <div className="mt-8 flex items-center justify-between gap-3 pt-6 border-t border-white/10">
                <a
                  href={selectedProject.projectUrl || "https://github.com/AhmedGamalFarouk?tab=repositories"}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-full bg-[#E1E0CC] px-5 py-2 text-xs font-semibold text-black transition-all hover:bg-white hover:gap-3"
                >
                  <Github className="h-4 w-4" />
                  View Repository
                  <ExternalLink className="h-3.5 w-3.5" />
                </a>

                <button
                  onClick={() => setSelectedProject(null)}
                  className="rounded-full border border-white/20 px-5 py-2 text-xs font-medium text-white/80 hover:bg-white/10"
                >
                  Close
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export { PrismaHero };

