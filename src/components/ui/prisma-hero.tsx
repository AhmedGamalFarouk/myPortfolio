"use client";

import { motion, useInView, AnimatePresence } from "framer-motion";
import { 
  ArrowRight, 
  Code2, 
  X, 
  ExternalLink, 
  Github, 
  Linkedin, 
  Mail, 
  Phone, 
  MapPin, 
  GraduationCap, 
  Award, 
  Database, 
  Wrench, 
  Smartphone 
} from "lucide-react";
import { useRef, useState } from "react";
import { LandingAccordionItem } from "@/components/ui/interactive-image-accordion";
import { FloatingNav } from "@/components/ui/floating-nav";

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
  liveUrl?: string;
  imageUrl?: string;
}

const projects: Project[] = [
  {
    id: "hush",
    title: "Hush",
    subtitle: "Cross-Platform E2EE Chat App",
    tech: ["Flutter", "Dart", "Supabase", "Libsodium", "Riverpod", "XChaCha20-Poly1305"],
    description: "Cross-platform end-to-end encrypted (E2EE) messaging app built with Flutter & Supabase. Features zero-knowledge architecture, libsodium cryptography, X25519 forward secrecy, and anonymous session mode without account creation.",
    category: "Mobile",
    badge: "Flutter + Supabase",
    gradient: "from-emerald-500/20 via-teal-500/10 to-transparent",
    projectUrl: "https://github.com/AhmedGamalFarouk/hush",
  },
  {
    id: "circle-web",
    title: "Circle",
    subtitle: "Social Circles & Event Management Portal",
    tech: ["React 19", "Vite", "Tailwind CSS v4", "Firebase", "Redux Toolkit", "Cloudinary", "Stripe", "i18next"],
    description: "Web portal for Circle, reducing friction in planning group activities. Features interactive Leaflet map circle discovery, real-time Firebase group messaging, FullCalendar event schedulers, Cloudinary media galleries, RTL Arabic support, and Stripe subscriptions.",
    category: "Web",
    badge: "React 19 + Firebase",
    gradient: "from-blue-500/20 via-indigo-500/10 to-transparent",
    projectUrl: "https://github.com/AhmedGamalFarouk/Circle",
    liveUrl: "https://circle-seven-tau.vercel.app",
  },
  {
    id: "circle-mobile",
    title: "Circle Mobile",
    subtitle: "Cross-Platform Event Planning Mobile App",
    tech: ["React Native", "Firebase", "Realtime DB", "Tailwind"],
    description: "Cross-platform mobile event planning app designed to combat social drift by reducing friction in group activities. Supports channel-based messaging, real-time activity updates, and Firebase auth.",
    category: "Mobile",
    badge: "React Native",
    gradient: "from-purple-500/20 via-pink-500/10 to-transparent",
    projectUrl: "https://github.com/AhmedGamalFarouk/Circle-mobile",
  },
  {
    id: "cinema-flux",
    title: "Cinema Flux",
    subtitle: "Futuristic Movie & Media Explorer",
    tech: ["React", "Redux Toolkit", "Vite", "Bootstrap 5", "REST API"],
    description: "A sleek, dark futuristic movie discovery web application built with React and Redux Toolkit for complex state management, featuring dynamic filters, movie search, and detailed media previews.",
    category: "Web",
    badge: "React + Redux",
    gradient: "from-emerald-500/20 via-teal-500/10 to-transparent",
    projectUrl: "https://github.com/AhmedGamalFarouk/cinema-flux",
    liveUrl: "https://ahmedgamalfarouk.github.io/cinema-flux/",
  },
  {
    id: "eshtry",
    title: "Eshtry Menny",
    subtitle: "E-Commerce Mobile Application",
    tech: ["Flutter", "Dart", "SQLite", "Bloc", "REST API"],
    description: "A feature-rich shopping & e-commerce app built with Flutter. Features local SQLite database persistence, robust BLoC pattern state management, user authentication, cart system, and product management.",
    category: "Mobile",
    badge: "Flutter + BLoC",
    gradient: "from-amber-500/20 via-rose-500/10 to-transparent",
    projectUrl: "https://github.com/AhmedGamalFarouk/Eshtry-menny",
  },
  {
    id: "project-echo",
    title: "Project ECHO",
    subtitle: "The Social Network That Forgets",
    tech: ["Next.js 15", "React 19", "Tailwind CSS v4", "Convex", "Clerk Auth", "Mapbox GL JS"],
    description: "An ephemeral, pseudonymous social platform where users log mood responses to a daily global prompt. Public posts vanish automatically after a rolling 24-hour window, while a real-time Mapbox GL JS pulse map visualizes the world's emotional state by city.",
    category: "Web",
    badge: "Next.js + Convex",
    gradient: "from-cyan-500/20 via-blue-500/10 to-transparent",
    projectUrl: "https://github.com/AhmedGamalFarouk/project-echo",
  },
  {
    id: "orderly",
    title: "Orderly",
    subtitle: "Real-Time Group Food Ordering Platform",
    tech: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Real-Time Sync", "Vercel"],
    description: "Real-time web application that eliminates the chaos of group food orders. Lets hosts create a shared ordering space in seconds, gives teammates a live menu with personal selections, and automatically consolidates items for the kitchen with built-in bill and fee splitting.",
    category: "Web",
    badge: "Next.js + Real-Time",
    gradient: "from-orange-500/20 via-amber-500/10 to-transparent",
    projectUrl: "https://github.com/AhmedGamalFarouk/orderly",
    liveUrl: "https://orderly-eosin.vercel.app",
    imageUrl: "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?q=80&w=1200&auto=format&fit=crop",
  },
  {
    id: "game-studio",
    title: "Game Studio",
    subtitle: "Next.js Game Collection & Wishlist Portal",
    tech: ["Next.js", "React", "JavaScript", "Tailwind CSS", "REST API"],
    description: "A Next.js web application designed to showcase a curated collection of games, manage user wishlists, explore game categories, and provide detailed game information with custom API integration.",
    category: "Web",
    badge: "Next.js + React",
    gradient: "from-purple-500/20 via-violet-500/10 to-transparent",
    projectUrl: "https://github.com/AhmedGamalFarouk/game-studio",
    imageUrl: "/images/game-studio-cover.jpg",
  },
];

const skillsList = [
  { 
    category: "Mobile", 
    icon: Smartphone,
    items: ["Flutter", "Dart", "React Native", "Android Studio"] 
  },
  { 
    category: "Front-End", 
    icon: Code2,
    items: ["React", "TypeScript", "JavaScript", "Angular", "Tailwind CSS", "Redux Toolkit", "HTML5/CSS3"] 
  },
  { 
    category: "Backend & DB", 
    icon: Database,
    items: ["Firebase", "Firestore", "SQLite", "REST APIs", "SQL"] 
  },
  { 
    category: "Tools & Workflow", 
    icon: Wrench,
    items: ["Git", "GitHub", "CI/CD", "Cursor", "VS Code", "Figma", "Agile/Scrum"] 
  },
];

const certificatesList = [
  {
    title: "Software Development Specialist",
    issuer: "Information Technology Institute (ITI)",
    field: "Front-End & Cross-Platform Development",
    iconColor: "text-emerald-400 border-emerald-500/20 bg-emerald-500/10",
  },
  {
    title: "Flutter Development",
    issuer: "Orange Digital Center",
    field: "Cross-Platform Mobile Apps",
    iconColor: "text-orange-400 border-orange-500/20 bg-orange-500/10",
  },
  {
    title: "Network Security Fundamentals",
    issuer: "Microsoft",
    field: "Cybersecurity & Security Basics",
    iconColor: "text-blue-400 border-blue-500/20 bg-blue-500/10",
  },
  {
    title: "UX Design Specialization",
    issuer: "Udacity",
    field: "User Experience & UI Principles",
    iconColor: "text-cyan-400 border-cyan-500/20 bg-cyan-500/10",
  },
  {
    title: "Java Development",
    issuer: "ITI (Maharatech)",
    field: "OOP & Java Programming",
    iconColor: "text-amber-400 border-amber-500/20 bg-amber-500/10",
  },
  {
    title: "Android App Development",
    issuer: "YAT Learning Centers",
    field: "Native Mobile App Architecture",
    iconColor: "text-purple-400 border-purple-500/20 bg-purple-500/10",
  },
];

/* ---------------- Hero & Portfolio Component ---------------- */
const PrismaHero = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [activeFilter, setActiveFilter] = useState<"All" | "Mobile" | "Web">("All");

  const filteredProjects = activeFilter === "All" 
    ? projects 
    : projects.filter(p => p.category === activeFilter);

  return (
    <div className="w-full bg-[#0a0a0c] text-[#E1E0CC] selection:bg-[#E1E0CC] selection:text-black overflow-x-hidden">
      {/* Dynamic Expanding Floating Navigation */}
      <FloatingNav />

      {/* ---------------- HERO SECTION ---------------- */}
      <section 
        id="hero" 
        className="relative min-h-[100dvh] h-[100dvh] w-full p-2 sm:p-4 md:p-6 flex flex-col justify-end"
      >
        <div className="relative h-full w-full overflow-hidden rounded-2xl md:rounded-[2rem] flex flex-col justify-end">
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
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/70 via-black/40 to-black/95" />

          {/* Status Badge Top Right */}
          <div className="absolute right-3 top-16 sm:right-6 sm:top-6 z-10 flex items-center gap-2 rounded-full border border-white/15 bg-black/60 px-3 py-1 sm:px-4 sm:py-1.5 backdrop-blur-md">
            <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
            <span className="text-[11px] sm:text-xs font-mono tracking-wide text-white/85">Open to Work</span>
          </div>

          {/* Hero Main Content */}
          <div className="relative z-10 w-full px-3 pb-4 xs:pb-6 sm:px-6 md:px-10">
            <div className="grid grid-cols-12 items-end gap-3 sm:gap-6">
              <div className="col-span-12 lg:col-span-8">
                {/* Developer intro tag */}
                <motion.div
                  initial={{ y: 15, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  className="mb-1.5 sm:mb-2 flex items-center gap-2 text-[11px] sm:text-xs md:text-sm font-mono tracking-wider sm:tracking-widest uppercase text-emerald-400"
                >
                  <Code2 className="h-3.5 w-3.5 sm:h-4 sm:w-4" />
                  Front-End & Mobile Engineer
                </motion.div>

                {/* Giant Typography Header with Balanced Responsive Clamp */}
                <h1
                  className="font-medium leading-[0.84] tracking-[-0.06em] text-[15vw] sm:text-[14vw] md:text-[12vw] lg:text-[10vw] xl:text-[9.5vw] select-none"
                  style={{ color: "#E1E0CC" }}
                >
                  <WordsPullUp text="Ahmed" />
                  <br />
                  <WordsPullUp text="Gamal" />
                </h1>
              </div>

              {/* Description & Action CTA */}
              <div className="col-span-12 flex flex-col gap-3 sm:gap-4 pb-1 sm:pb-2 lg:col-span-4 lg:pb-6">
                <motion.p
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.8, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
                  className="text-xs xs:text-sm md:text-base font-light text-balance"
                  style={{ lineHeight: 1.45, color: "rgba(225, 224, 204, 0.82)" }}
                >
                  Crafting high-performance cross-platform mobile apps & sleek front-end web experiences with Flutter, React Native, React, & TypeScript.
                </motion.p>

                <div className="flex flex-row items-center gap-2.5 sm:gap-3 pt-1">
                  <motion.a
                    href="#projects"
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.8, delay: 0.7, ease: [0.16, 1, 0.3, 1] }}
                    className="group inline-flex items-center gap-2 rounded-full bg-[#E1E0CC] py-1 pl-4 pr-1 text-xs sm:text-sm font-semibold text-black transition-all hover:gap-3 cursor-pointer shadow-lg active:scale-95"
                  >
                    <span>View Work</span>
                    <span className="flex h-8 w-8 sm:h-9 sm:w-9 items-center justify-center rounded-full bg-black transition-transform group-hover:scale-110">
                      <ArrowRight className="h-3.5 w-3.5 sm:h-4 sm:w-4" style={{ color: "#E1E0CC" }} />
                    </span>
                  </motion.a>

                  <motion.a
                    href="#contact"
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.8, delay: 0.8, ease: [0.16, 1, 0.3, 1] }}
                    className="inline-flex h-10 sm:h-11 items-center justify-center rounded-full border border-white/20 px-4 sm:px-5 text-xs sm:text-sm font-medium transition-colors hover:bg-white/10 active:scale-95"
                  >
                    Contact
                  </motion.a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ---------------- PROJECTS SECTION ---------------- */}
      <section id="projects" className="mx-auto max-w-7xl px-3 sm:px-6 lg:px-8 py-16 sm:py-24">
        <div className="mb-6 sm:mb-8 flex flex-col items-start justify-between gap-4 sm:gap-6 md:flex-row md:items-end">
          <div>
            <span className="font-mono text-xs uppercase tracking-widest text-emerald-400">
              Selected Works
            </span>
            <h2 className="mt-1.5 text-2xl sm:text-4xl md:text-5xl font-medium tracking-tight text-[#E1E0CC]">
              Featured Projects
            </h2>
          </div>

          {/* Filter Pills */}
          <div className="flex items-center gap-1.5 rounded-full border border-white/10 bg-white/5 p-1 backdrop-blur-md">
            {(["All", "Mobile", "Web"] as const).map((filter) => (
              <button
                key={filter}
                onClick={() => setActiveFilter(filter)}
                className={`rounded-full px-3.5 py-1 sm:px-5 sm:py-1.5 text-[11px] sm:text-xs font-medium transition-all cursor-pointer ${
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

        {/* Interactive Image Accordion Component */}
        <div className="rounded-2xl sm:rounded-3xl border border-white/10 bg-black/40 p-2 sm:p-6 backdrop-blur-md shadow-2xl overflow-hidden">
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
              liveUrl: project.liveUrl,
              imageUrl: project.imageUrl || [
                "/images/hush-cover.jpg",
                "https://images.unsplash.com/photo-1511632765486-a01980e01a18?q=80&w=1200&auto=format&fit=crop",
                "https://images.unsplash.com/photo-1522542550221-31fd19575a2d?q=80&w=1200&auto=format&fit=crop",
                "https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?q=80&w=1200&auto=format&fit=crop",
                "https://images.unsplash.com/photo-1472851294608-062f824d29cc?q=80&w=1200&auto=format&fit=crop",
                "https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?q=80&w=1200&auto=format&fit=crop",
                "https://images.unsplash.com/photo-1536440136628-849c177e76a1?q=80&w=1200&auto=format&fit=crop",
                "/images/echo-cover.jpg",
                "https://images.unsplash.com/photo-1511512578047-dfb367046420?q=80&w=1200&auto=format&fit=crop",
              ][idx % 9]
            }))}
            onSelectProject={(project) => setSelectedProject({
              id: String(project.id),
              title: project.title,
              subtitle: project.subtitle,
              tech: project.tech,
              description: project.description,
              category: project.category as "Mobile" | "Web" | "Full-Stack",
              badge: project.badge,
              projectUrl: project.projectUrl || "https://github.com/AhmedGamalFarouk?tab=repositories",
              liveUrl: project.liveUrl,
              gradient: "from-emerald-500/20 via-teal-500/10 to-transparent"
            })}
          />
        </div>
      </section>

      {/* ---------------- SKILLS SECTION ---------------- */}
      <section id="skills" className="border-t border-white/10 bg-black/40 py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-3 sm:px-6 lg:px-8">
          <div className="mb-10 sm:mb-12 text-center">
            <span className="font-mono text-xs uppercase tracking-widest text-emerald-400">
              Technical Expertise
            </span>
            <h2 className="mt-1.5 text-2xl sm:text-4xl md:text-5xl font-medium tracking-tight text-[#E1E0CC]">
              Skills & Tech Stack
            </h2>
          </div>

          <div className="grid grid-cols-1 gap-4 sm:gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {skillsList.map((skillGroup, idx) => {
              const GroupIcon = skillGroup.icon;
              return (
                <motion.div
                  key={skillGroup.category}
                  initial={{ y: 20, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.08 }}
                  className="rounded-2xl border border-white/10 bg-white/[0.03] p-5 sm:p-6 backdrop-blur-sm"
                >
                  <div className="flex items-center gap-2 font-mono text-xs sm:text-sm uppercase tracking-wider text-emerald-400 mb-3.5 pb-2 border-b border-white/10">
                    <GroupIcon className="h-4 w-4" />
                    {skillGroup.category}
                  </div>

                  <div className="flex flex-wrap gap-1.5 sm:gap-2">
                    {skillGroup.items.map((skill) => (
                      <span
                        key={skill}
                        className="rounded-lg border border-white/10 bg-white/5 px-2.5 py-1 text-[11px] sm:text-xs font-medium text-white/90 hover:border-emerald-500/50 hover:bg-emerald-500/10 transition-colors"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ---------------- EXPERIENCE & EDUCATION ---------------- */}
      <section id="experience" className="mx-auto max-w-7xl px-3 sm:px-6 lg:px-8 py-16 sm:py-24">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Experience */}
          <div>
            <div className="flex items-center gap-2 font-mono text-xs uppercase tracking-widest text-emerald-400 mb-1.5">
              <Award className="h-4 w-4" />
              Career Journey
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-medium tracking-tight text-[#E1E0CC] mb-6 sm:mb-8">
              Work Experience
            </h2>

            <div className="space-y-6 sm:space-y-8 border-l border-white/15 pl-4 sm:pl-6 ml-2 sm:ml-4">
              <div className="relative">
                <span className="absolute -left-[23px] sm:-left-[31px] top-1.5 h-3 w-3 rounded-full bg-emerald-400 border-4 border-[#0a0a0c]" />
                <span className="text-[11px] sm:text-xs font-mono text-white/50">01/2026 – Present</span>
                <h3 className="text-lg sm:text-xl font-medium text-white mt-0.5">Front-End Developer</h3>
                <p className="text-xs sm:text-sm text-emerald-400 font-mono">DoMS</p>
                <p className="mt-1.5 text-xs sm:text-sm text-white/70 font-light leading-relaxed">
                  Building & maintaining high-performance Angular web applications with reactive data patterns, modern UI/UX components, and modular front-end architecture.
                </p>
              </div>

              <div className="relative">
                <span className="absolute -left-[23px] sm:-left-[31px] top-1.5 h-3 w-3 rounded-full bg-white/40 border-4 border-[#0a0a0c]" />
                <span className="text-[11px] sm:text-xs font-mono text-white/50">03/2025 – 08/2025</span>
                <h3 className="text-lg sm:text-xl font-medium text-white mt-0.5">Front-End & Mobile Specialist</h3>
                <p className="text-xs sm:text-sm text-emerald-400 font-mono">Information Technology Institute (ITI) – ICC</p>
                <p className="mt-1.5 text-xs sm:text-sm text-white/70 font-light leading-relaxed">
                  Intensive Code Camp specializing in Flutter, React Native, clean architecture, CI/CD pipelines, and Agile teamwork across mobile & web projects.
                </p>
              </div>
            </div>
          </div>

          {/* Education & Publications */}
          <div>
            <div className="flex items-center gap-2 font-mono text-xs uppercase tracking-widest text-emerald-400 mb-1.5">
              <GraduationCap className="h-4 w-4" />
              Academic Background
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-medium tracking-tight text-[#E1E0CC] mb-6 sm:mb-8">
              Education & Research
            </h2>

            <div className="space-y-4 sm:space-y-6">
              <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-5 sm:p-6">
                <span className="text-[11px] sm:text-xs font-mono text-white/50">09/2019 – 07/2023</span>
                <h3 className="text-lg sm:text-xl font-medium text-white mt-0.5">Bachelor of Computer Science</h3>
                <p className="text-xs sm:text-sm text-emerald-400 font-mono mt-0.5">Future Academy – Faculty of Computer Science</p>
                <div className="mt-2.5 inline-block rounded bg-emerald-500/10 px-2.5 py-1 text-[11px] sm:text-xs font-mono text-emerald-400 border border-emerald-500/20">
                  GPA: 3.26 / 4.0
                </div>
              </div>

              <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-5 sm:p-6">
                <span className="text-[10px] sm:text-xs font-mono tracking-wider uppercase text-amber-400">Springer Publication • 12/2024</span>
                <h3 className="text-base sm:text-lg font-medium text-white mt-0.5 leading-snug">
                  Systematic Literature Review of Optimization Algorithms for the University Course Timetabling Problem
                </h3>
                <p className="mt-1.5 text-[11px] sm:text-xs text-white/70 font-light leading-relaxed">
                  Published research summarizing findings on UCTP optimization problems in the computer science scientific community.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ---------------- CERTIFICATES SECTION ---------------- */}
      <section id="certificates" className="border-t border-white/10 bg-black/60 py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-3 sm:px-6 lg:px-8">
          <div className="mb-10 sm:mb-14 text-center">
            <span className="font-mono text-xs uppercase tracking-widest text-emerald-400 flex items-center justify-center gap-2">
              <Award className="h-4 w-4" />
              Verified Credentials
            </span>
            <h2 className="mt-1.5 text-2xl sm:text-4xl md:text-5xl font-medium tracking-tight text-[#E1E0CC]">
              Certificates & Specializations
            </h2>
            <p className="mt-2 sm:mt-3 text-xs sm:text-sm font-light text-white/60 max-w-xl mx-auto text-balance">
              Professional certifications and specialized training completed across mobile development, front-end engineering, UX, and cybersecurity.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-4 sm:gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {certificatesList.map((cert, idx) => (
              <motion.div
                key={cert.title}
                initial={{ y: 20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.06 }}
                className="group relative rounded-2xl border border-white/10 bg-white/[0.03] p-4 sm:p-6 transition-all duration-300 hover:border-emerald-500/40 hover:bg-white/[0.06] hover:shadow-xl"
              >
                <div className="flex items-start gap-3.5 sm:gap-4">
                  <div className={`flex h-10 w-10 sm:h-12 sm:w-12 shrink-0 items-center justify-center rounded-xl border ${cert.iconColor}`}>
                    <Award className="h-5 w-5 sm:h-6 sm:w-6" />
                  </div>
                  <div>
                    <span className="text-[10px] sm:text-[11px] font-mono uppercase tracking-wider text-emerald-400">
                      {cert.issuer}
                    </span>
                    <h3 className="mt-0.5 text-base sm:text-lg font-medium text-white group-hover:text-emerald-300 transition-colors leading-snug">
                      {cert.title}
                    </h3>
                    <p className="mt-1 text-[11px] sm:text-xs font-light text-white/60 leading-normal">
                      {cert.field}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ---------------- CONTACT FOOTER ---------------- */}
      <footer id="contact" className="border-t border-white/10 bg-black py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-3 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-10 lg:grid-cols-2 lg:gap-12">
            <div>
              <span className="font-mono text-xs uppercase tracking-widest text-emerald-400">
                Get In Touch
              </span>
              <h2 className="mt-1.5 text-3xl sm:text-5xl md:text-6xl font-medium tracking-tight text-[#E1E0CC]">
                Let’s Build Something Amazing.
              </h2>
              <p className="mt-3 text-xs sm:text-base font-light text-white/70 max-w-md text-balance">
                Available for full-time opportunities, freelance mobile & web development projects, and technical collaborations.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
              <a
                href="mailto:ahmedgamalfarouk0@gmail.com"
                className="group flex items-center gap-3.5 rounded-xl border border-white/10 bg-white/5 p-3.5 transition-colors hover:border-emerald-400/50 hover:bg-white/10 active:scale-[0.98]"
              >
                <div className="flex h-10 w-10 sm:h-11 sm:w-11 shrink-0 items-center justify-center rounded-lg bg-emerald-500/10 text-emerald-400">
                  <Mail className="h-5 w-5" />
                </div>
                <div className="min-w-0">
                  <div className="text-[10px] font-mono text-white/50 uppercase">Email</div>
                  <div className="text-xs sm:text-sm font-medium text-white group-hover:text-emerald-400 transition-colors truncate">
                    ahmedgamalfarouk0@gmail.com
                  </div>
                </div>
              </a>

              <a
                href="https://www.linkedin.com/in/ahmed-gamal-farouk"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-3.5 rounded-xl border border-white/10 bg-white/5 p-3.5 transition-colors hover:border-[#0A66C2]/50 hover:bg-white/10 active:scale-[0.98]"
              >
                <div className="flex h-10 w-10 sm:h-11 sm:w-11 shrink-0 items-center justify-center rounded-lg bg-[#0A66C2]/15 text-[#0A66C2] group-hover:bg-[#0A66C2] group-hover:text-white transition-colors">
                  <Linkedin className="h-5 w-5" />
                </div>
                <div className="min-w-0">
                  <div className="text-[10px] font-mono text-white/50 uppercase">LinkedIn</div>
                  <div className="text-xs sm:text-sm font-medium text-white group-hover:text-sky-400 transition-colors truncate">
                    ahmed-gamal-farouk
                  </div>
                </div>
              </a>

              <a
                href="https://github.com/AhmedGamalFarouk"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-3.5 rounded-xl border border-white/10 bg-white/5 p-3.5 transition-colors hover:border-white/40 hover:bg-white/10 active:scale-[0.98]"
              >
                <div className="flex h-10 w-10 sm:h-11 sm:w-11 shrink-0 items-center justify-center rounded-lg bg-white/10 text-white group-hover:bg-white group-hover:text-black transition-colors">
                  <Github className="h-5 w-5" />
                </div>
                <div className="min-w-0">
                  <div className="text-[10px] font-mono text-white/50 uppercase">GitHub</div>
                  <div className="text-xs sm:text-sm font-medium text-white group-hover:text-white transition-colors truncate">
                    AhmedGamalFarouk
                  </div>
                </div>
              </a>

              <a
                href="tel:+201023510831"
                className="group flex items-center gap-3.5 rounded-xl border border-white/10 bg-white/5 p-3.5 transition-colors hover:border-emerald-400/50 hover:bg-white/10 active:scale-[0.98]"
              >
                <div className="flex h-10 w-10 sm:h-11 sm:w-11 shrink-0 items-center justify-center rounded-lg bg-blue-500/10 text-blue-400">
                  <Phone className="h-5 w-5" />
                </div>
                <div className="min-w-0">
                  <div className="text-[10px] font-mono text-white/50 uppercase">WhatsApp / Call</div>
                  <div className="text-xs sm:text-sm font-medium text-white group-hover:text-blue-400 transition-colors truncate">
                    +20 102 351 0831
                  </div>
                </div>
              </a>

              <div className="sm:col-span-2 flex items-center gap-3.5 rounded-xl border border-white/10 bg-white/5 p-3.5">
                <div className="flex h-10 w-10 sm:h-11 sm:w-11 shrink-0 items-center justify-center rounded-lg bg-purple-500/10 text-purple-400">
                  <MapPin className="h-5 w-5" />
                </div>
                <div>
                  <div className="text-[10px] font-mono text-white/50 uppercase">Location</div>
                  <div className="text-xs sm:text-sm font-medium text-white">Cairo, Egypt • Remote / Relocation Ready</div>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-12 sm:mt-16 pt-6 sm:pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between text-[11px] sm:text-xs font-mono text-white/40 gap-2 text-center sm:text-left">
            <div>© {new Date().getFullYear()} Ahmed Gamal. All rights reserved.</div>
            <div>Built with Next.js, React, Tailwind CSS & Framer Motion</div>
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
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/85 p-3 sm:p-4 backdrop-blur-md"
          >
            <motion.div
              initial={{ scale: 0.92, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.92, y: 20 }}
              onClick={(e) => e.stopPropagation()}
              className="relative max-w-2xl w-full max-h-[90dvh] overflow-y-auto rounded-2xl sm:rounded-3xl border border-white/20 bg-[#121216] p-4 xs:p-6 sm:p-8 shadow-2xl scrollbar-thin scrollbar-thumb-white/20"
            >
              <button
                onClick={() => setSelectedProject(null)}
                aria-label="Close modal"
                className="absolute right-3 top-3 sm:right-4 sm:top-4 rounded-full bg-white/10 p-2 text-white/80 hover:bg-white/20 hover:text-white transition-colors cursor-pointer"
              >
                <X className="h-5 w-5" />
              </button>

              <span className="inline-block rounded-full border border-emerald-500/30 bg-emerald-500/10 px-3 py-1 text-[11px] sm:text-xs font-mono text-emerald-400">
                {selectedProject.badge}
              </span>

              <h3 className="mt-3 text-xl xs:text-2xl sm:text-3xl font-medium text-white leading-tight">
                {selectedProject.title}
              </h3>
              <p className="text-xs sm:text-sm font-mono text-white/50 mt-0.5">
                {selectedProject.subtitle}
              </p>

              <p className="mt-3 sm:mt-5 text-xs sm:text-sm text-white/80 font-light leading-relaxed">
                {selectedProject.description}
              </p>

              <div className="mt-4 sm:mt-6">
                <h4 className="text-[10px] sm:text-xs font-mono uppercase tracking-wider text-white/40 mb-2">Technologies Used</h4>
                <div className="flex flex-wrap gap-1.5 sm:gap-2">
                  {selectedProject.tech.map((t) => (
                    <span key={t} className="rounded-md bg-white/10 px-2 py-1 text-[10px] sm:text-xs font-mono text-white">
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              <div className="mt-6 sm:mt-8 flex flex-wrap items-center justify-between gap-3 pt-4 sm:pt-6 border-t border-white/10">
                <div className="flex flex-wrap items-center gap-2 sm:gap-3">
                  {selectedProject.liveUrl && (
                    <a
                      href={selectedProject.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 rounded-full bg-emerald-400 px-4 py-2 sm:px-5 sm:py-2.5 text-xs font-semibold text-black transition-all hover:bg-emerald-300 shadow-lg shadow-emerald-500/20 active:scale-95"
                    >
                      <ExternalLink className="h-3.5 w-3.5" />
                      Live Demo
                    </a>
                  )}

                  <a
                    href={selectedProject.projectUrl || "https://github.com/AhmedGamalFarouk?tab=repositories"}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 rounded-full bg-[#E1E0CC] px-4 py-2 sm:px-5 sm:py-2.5 text-xs font-semibold text-black transition-all hover:bg-white active:scale-95"
                  >
                    <Github className="h-3.5 w-3.5" />
                    Source Code
                  </a>
                </div>

                <button
                  onClick={() => setSelectedProject(null)}
                  className="rounded-full border border-white/20 px-4 py-2 text-xs font-medium text-white/80 hover:bg-white/10 transition-colors"
                >
                  Close
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* ---------------- STICKY FLOATING SOCIAL ICONS ---------------- */}
      <motion.aside
        aria-label="Social Profiles"
        initial={{ opacity: 0, scale: 0.8, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
        className="fixed bottom-4 right-3 sm:bottom-6 sm:right-6 z-40 flex flex-col items-center gap-2 rounded-full border border-white/15 bg-black/80 p-1.5 sm:p-2 backdrop-blur-xl shadow-[0_10px_35px_rgba(0,0,0,0.6)]"
      >
        <a
          href="https://github.com/AhmedGamalFarouk"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="GitHub Profile"
          className="group relative flex h-9 w-9 sm:h-11 sm:w-11 items-center justify-center rounded-full bg-white/5 text-[#E1E0CC]/80 transition-all duration-300 hover:bg-white hover:text-black hover:scale-110 focus:outline-none focus:ring-2 focus:ring-white/40"
        >
          <Github className="h-4 w-4 sm:h-5 sm:w-5 transition-transform group-hover:scale-105" />
          <span className="pointer-events-none absolute right-full mr-3 hidden rounded-lg border border-white/15 bg-black/90 px-2.5 py-1 text-xs font-mono tracking-wider text-white opacity-0 shadow-xl backdrop-blur-md transition-all duration-200 group-hover:opacity-100 group-hover:-translate-x-1 sm:block whitespace-nowrap">
            GitHub
          </span>
        </a>

        <a
          href="https://www.linkedin.com/in/ahmed-gamal-farouk"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="LinkedIn Profile"
          className="group relative flex h-9 w-9 sm:h-11 sm:w-11 items-center justify-center rounded-full bg-white/5 text-[#E1E0CC]/80 transition-all duration-300 hover:bg-[#0A66C2] hover:text-white hover:scale-110 focus:outline-none focus:ring-2 focus:ring-[#0A66C2]/60"
        >
          <Linkedin className="h-4 w-4 sm:h-5 sm:w-5 transition-transform group-hover:scale-105" />
          <span className="pointer-events-none absolute right-full mr-3 hidden rounded-lg border border-white/15 bg-black/90 px-2.5 py-1 text-xs font-mono tracking-wider text-white opacity-0 shadow-xl backdrop-blur-md transition-all duration-200 group-hover:opacity-100 group-hover:-translate-x-1 sm:block whitespace-nowrap">
            LinkedIn
          </span>
        </a>
      </motion.aside>
    </div>
  );
};

export { PrismaHero };
