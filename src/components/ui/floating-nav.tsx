"use client";

import { useEffect, useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Sparkles, 
  FolderGit2, 
  Code2, 
  Briefcase, 
  GraduationCap, 
  Mail,
  LucideIcon 
} from "lucide-react";

export interface NavItem {
  id: string;
  label: string;
  href: string;
  icon: LucideIcon;
}

export const navItems: NavItem[] = [
  { id: "hero", label: "About", href: "#hero", icon: Sparkles },
  { id: "projects", label: "Projects", href: "#projects", icon: FolderGit2 },
  { id: "skills", label: "Skills", href: "#skills", icon: Code2 },
  { id: "experience", label: "Experience", href: "#experience", icon: Briefcase },
  { id: "certificates", label: "Certificates", href: "#certificates", icon: GraduationCap },
  { id: "contact", label: "Contact", href: "#contact", icon: Mail },
];

export function FloatingNav() {
  const [activeSection, setActiveSection] = useState<string>(() => {
    if (typeof window !== "undefined") {
      const hash = window.location.hash.replace("#", "");
      if (hash && navItems.some((item) => item.id === hash)) {
        return hash;
      }
    }
    return "hero";
  });
  const [hoveredSection, setHoveredSection] = useState<string | null>(null);
  const isClickScrolling = useRef(false);
  const scrollTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  // Set up intersection observer to detect active section on scroll
  useEffect(() => {
    const handleIntersection = (entries: IntersectionObserverEntry[]) => {
      if (isClickScrolling.current) return;

      const visibleEntries = entries.filter((entry) => entry.isIntersecting);
      if (visibleEntries.length > 0) {
        visibleEntries.sort((a, b) => b.intersectionRatio - a.intersectionRatio);
        const targetId = visibleEntries[0].target.id;
        if (targetId) {
          setActiveSection(targetId);
        }
      }
    };

    const observer = new IntersectionObserver(handleIntersection, {
      root: null,
      rootMargin: "-20% 0px -40% 0px",
      threshold: [0.1, 0.25, 0.5, 0.75],
    });

    navItems.forEach((item) => {
      const element = document.getElementById(item.id);
      if (element) {
        observer.observe(element);
      }
    });

    const handleHashChange = () => {
      const hash = window.location.hash.replace("#", "");
      if (hash && navItems.some((item) => item.id === hash)) {
        setActiveSection(hash);
      }
    };

    window.addEventListener("hashchange", handleHashChange);

    return () => {
      observer.disconnect();
      window.removeEventListener("hashchange", handleHashChange);
      if (scrollTimeoutRef.current) {
        clearTimeout(scrollTimeoutRef.current);
      }
    };
  }, []);

  const handleNavClick = (id: string) => {
    setActiveSection(id);
    isClickScrolling.current = true;
    
    if (scrollTimeoutRef.current) {
      clearTimeout(scrollTimeoutRef.current);
    }

    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }

    scrollTimeoutRef.current = setTimeout(() => {
      isClickScrolling.current = false;
    }, 800);
  };

  return (
    <header className="fixed left-1/2 top-3 sm:top-5 z-50 -translate-x-1/2 w-full max-w-fit px-2 pointer-events-none">
      <nav
        role="navigation"
        aria-label="Main Navigation"
        className="pointer-events-auto flex items-center justify-center gap-1 sm:gap-1.5 rounded-full border border-white/15 bg-black/85 p-1.5 backdrop-blur-xl shadow-[0_10px_35px_rgba(0,0,0,0.6)] ring-1 ring-white/10"
      >
        {navItems.map((item) => {
          const Icon = item.icon;
          const isActive = activeSection === item.id;
          const isHovered = hoveredSection === item.id;
          const isExpanded = isActive || isHovered;

          return (
            <a
              key={item.id}
              href={item.href}
              onClick={(e) => {
                e.preventDefault();
                handleNavClick(item.id);
              }}
              onMouseEnter={() => setHoveredSection(item.id)}
              onMouseLeave={() => setHoveredSection(null)}
              onFocus={() => setHoveredSection(item.id)}
              onBlur={() => setHoveredSection(null)}
              aria-current={isActive ? "page" : undefined}
              aria-label={item.label}
              className={`
                group relative flex items-center justify-center rounded-full transition-all duration-300 outline-none
                ${
                  isActive
                    ? "bg-[#E1E0CC] text-black shadow-[0_0_20px_rgba(225,224,204,0.35)]"
                    : "text-[#E1E0CC]/70 hover:text-white hover:bg-white/10 focus-visible:ring-2 focus-visible:ring-emerald-400"
                }
                ${isExpanded ? "px-2.5 py-1.5 sm:px-4 sm:py-2" : "h-8 w-8 xs:h-9 xs:w-9 sm:h-10 sm:w-10"}
              `}
            >
              <div className="flex items-center gap-1.5 sm:gap-2">
                <Icon
                  className={`
                    transition-transform duration-300 shrink-0
                    ${isExpanded ? "h-3.5 w-3.5 sm:h-4 sm:w-4 scale-105" : "h-3.5 w-3.5 sm:h-4.5 sm:w-4.5"}
                    ${isActive ? "text-black" : "text-[#E1E0CC]/80 group-hover:text-white"}
                  `}
                />
                
                {/* Expanding Label */}
                <AnimatePresence initial={false}>
                  {isExpanded && (
                    <motion.span
                      initial={{ width: 0, opacity: 0 }}
                      animate={{ width: "auto", opacity: 1 }}
                      exit={{ width: 0, opacity: 0 }}
                      transition={{ type: "spring", stiffness: 450, damping: 30 }}
                      className="overflow-hidden whitespace-nowrap text-[10px] xs:text-[11px] sm:text-xs font-semibold tracking-wide uppercase"
                    >
                      {item.label}
                    </motion.span>
                  )}
                </AnimatePresence>
              </div>

              {/* Animated active background */}
              {isActive && (
                <motion.span
                  layoutId="activeNavPill"
                  className="absolute inset-0 -z-10 rounded-full bg-[#E1E0CC]"
                  transition={{ type: "spring", stiffness: 380, damping: 30 }}
                />
              )}
            </a>
          );
        })}
      </nav>
    </header>
  );
}
