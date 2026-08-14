"use client";

import React, { useState } from "react";

// --- Project Data derived from Ahmed Gamal's Resume & Portfolio ---
export interface ProjectAccordionItemData {
  id: string | number;
  title: string;
  subtitle: string;
  category: string;
  tech: string[];
  description: string;
  imageUrl: string;
  badge: string;
  projectUrl?: string;
  liveUrl?: string;
}

export const defaultProjectsAccordionItems: ProjectAccordionItemData[] = [
  {
    id: 1,
    title: "Hush",
    subtitle: "Cross-Platform E2EE Chat App",
    category: "Mobile",
    tech: ["Flutter", "Dart", "Supabase", "Libsodium", "Riverpod", "XChaCha20-Poly1305"],
    description: "Cross-platform end-to-end encrypted (E2EE) messaging app built with Flutter & Supabase. Features zero-knowledge architecture, libsodium cryptography, X25519 forward secrecy, and anonymous session mode without account creation.",
    badge: "Flutter + Supabase",
    imageUrl: "/images/hush-cover.jpg",
    projectUrl: "https://github.com/AhmedGamalFarouk/hush",
  },
  {
    id: 2,
    title: "Circle",
    subtitle: "Social Circles & Event Management Portal",
    category: "Web",
    tech: ["React 19", "Vite", "Tailwind CSS v4", "Firebase", "Redux Toolkit", "Cloudinary", "Stripe", "i18next"],
    description: "Web portal for Circle, reducing friction in planning group activities. Features interactive Leaflet map circle discovery, real-time Firebase group messaging, FullCalendar event schedulers, Cloudinary media galleries, RTL Arabic support, and Stripe subscriptions.",
    badge: "React 19 + Firebase",
    imageUrl: "https://images.unsplash.com/photo-1511632765486-a01980e01a18?q=80&w=1200&auto=format&fit=crop",
    projectUrl: "https://github.com/AhmedGamalFarouk/Circle",
    liveUrl: "https://circle-seven-tau.vercel.app",
  },
  {
    id: 3,
    title: "Circle Mobile",
    subtitle: "Cross-Platform Event Planning Mobile App",
    category: "Mobile",
    tech: ["React Native", "Firebase", "Realtime DB", "Tailwind"],
    description: "Cross-platform mobile event planning app designed to combat social drift by reducing friction in group activities. Supports channel-based messaging, real-time activity updates, and Firebase auth.",
    badge: "React Native",
    imageUrl: "https://images.unsplash.com/photo-1522542550221-31fd19575a2d?q=80&w=1200&auto=format&fit=crop",
    projectUrl: "https://github.com/AhmedGamalFarouk/Circle-mobile",
  },
  {
    id: 4,
    title: "Cinema Flux",
    subtitle: "Futuristic Movie & Media Explorer",
    category: "Web",
    tech: ["React", "Redux Toolkit", "Vite", "Bootstrap 5", "REST API"],
    description: "A sleek, dark futuristic movie discovery web application built with React and Redux Toolkit for complex state management, featuring dynamic filters, movie search, and detailed media previews.",
    badge: "React + Redux",
    imageUrl: "https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?q=80&w=1200&auto=format&fit=crop",
    projectUrl: "https://github.com/AhmedGamalFarouk/cinema-flux",
    liveUrl: "https://ahmedgamalfarouk.github.io/cinema-flux/",
  },
  {
    id: 5,
    title: "Eshtry Menny",
    subtitle: "E-Commerce Mobile Application",
    category: "Mobile",
    tech: ["Flutter", "Dart", "SQLite", "Bloc", "REST API"],
    description: "A feature-rich shopping & e-commerce app built with Flutter. Features local SQLite database persistence, robust BLoC pattern state management, user authentication, cart system, and product management.",
    badge: "Flutter + BLoC",
    imageUrl: "https://images.unsplash.com/photo-1472851294608-062f824d29cc?q=80&w=1200&auto=format&fit=crop",
    projectUrl: "https://github.com/AhmedGamalFarouk/Eshtry-menny",
  },
  {
    id: 6,
    title: "Project ECHO",
    subtitle: "The Social Network That Forgets",
    category: "Web",
    tech: ["Next.js 15", "React 19", "Tailwind CSS v4", "Convex", "Clerk Auth", "Mapbox GL JS"],
    description: "An ephemeral, pseudonymous social platform where users log mood responses to a daily global prompt. Public posts vanish automatically after a rolling 24-hour window, while a real-time Mapbox GL JS pulse map visualizes the world's emotional state by city.",
    badge: "Next.js + Convex",
    imageUrl: "/images/echo-cover.jpg",
    projectUrl: "https://github.com/AhmedGamalFarouk/project-echo",
  },
  {
    id: 7,
    title: "Game Studio",
    subtitle: "Next.js Game Collection & Wishlist Portal",
    category: "Web",
    tech: ["Next.js", "React", "JavaScript", "Tailwind CSS", "REST API"],
    description: "A Next.js web application designed to showcase a curated collection of games, manage user wishlists, explore game categories, and provide detailed game information with custom API integration.",
    badge: "Next.js + React",
    imageUrl: "/images/game-studio-cover.jpg",
    projectUrl: "https://github.com/AhmedGamalFarouk/game-studio",
  },
];

interface AccordionItemProps {
  item: ProjectAccordionItemData;
  isActive: boolean;
  onMouseEnter: () => void;
  onClick?: () => void;
}

// --- Accordion Item Component ---
const AccordionItem: React.FC<AccordionItemProps> = ({ item, isActive, onMouseEnter, onClick }) => {
  return (
    <div
      className={`
        relative h-[380px] xs:h-[420px] sm:h-[480px] rounded-2xl overflow-hidden cursor-pointer
        transition-all duration-700 ease-in-out border border-white/10 group flex-shrink-0
        ${isActive ? 'w-[280px] xs:w-[320px] sm:w-[380px] md:w-[420px] shadow-2xl border-emerald-500/40 ring-1 ring-emerald-500/30' : 'w-[52px] xs:w-[60px] sm:w-[80px] opacity-75 hover:opacity-100'}
      `}
      onMouseEnter={onMouseEnter}
      onClick={onClick}
    >
      {/* Background Image */}
      <img
        src={item.imageUrl}
        alt={item.title}
        className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
        onError={(e) => {
          (e.target as HTMLImageElement).onerror = null;
          (e.target as HTMLImageElement).src =
            'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?q=80&w=1200&auto=format&fit=crop';
        }}
      />
      
      {/* Gradient & Dark overlay for readability */}
      <div className={`absolute inset-0 transition-opacity duration-500 ${isActive ? 'bg-gradient-to-t from-black via-black/60 to-black/30' : 'bg-black/65'}`} />

      {/* Badge Top Left when active */}
      {isActive && (
        <div className="absolute top-3 left-3 sm:top-5 sm:left-5 z-10">
          <span className="rounded-full border border-emerald-500/30 bg-black/70 px-2.5 py-0.5 sm:px-3 sm:py-1 text-[10px] sm:text-xs font-mono text-emerald-400 backdrop-blur-md">
            {item.badge}
          </span>
        </div>
      )}

      {/* Caption & Project Details Text */}
      <div
        className={`
          absolute transition-all duration-500 ease-in-out z-10 text-white
          ${
            isActive
              ? 'bottom-4 left-4 right-4 sm:bottom-6 sm:left-6 sm:right-6 translate-y-0 opacity-100 rotate-0'
              : 'bottom-16 sm:bottom-20 left-1/2 -translate-x-1/2 rotate-90 whitespace-nowrap opacity-90'
          }
        `}
      >
        {isActive ? (
          <div>
            <span className="text-[10px] sm:text-xs font-mono tracking-widest text-emerald-400 uppercase">{item.subtitle}</span>
            <h3 className="text-xl sm:text-2xl md:text-3xl font-medium text-[#E1E0CC] mt-0.5">{item.title}</h3>
            <p className="mt-1 sm:mt-2 text-xs sm:text-sm text-white/80 font-light line-clamp-2 leading-relaxed">
              {item.description}
            </p>
            <div className="mt-2 sm:mt-4 flex flex-wrap items-center justify-between gap-2 pt-2 sm:pt-3 border-t border-white/15">
              <div className="flex flex-wrap gap-1 sm:gap-1.5">
                {item.tech.slice(0, 4).map((t) => (
                  <span key={t} className="rounded bg-white/10 px-1.5 py-0.5 text-[9px] sm:text-[10px] font-mono text-white/80">
                    {t}
                  </span>
                ))}
              </div>

              {/* Action Buttons */}
              <div className="flex items-center gap-2">
                {item.category === "Web" ? (
                  <a
                    href={item.liveUrl || item.projectUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={(e) => e.stopPropagation()}
                    className="inline-flex items-center gap-1.5 rounded-full bg-emerald-400 px-3.5 py-1 text-[10px] sm:text-xs font-semibold text-black hover:bg-emerald-300 transition-all shadow-md shadow-emerald-500/20"
                  >
                    <span>Open Live Site</span>
                    <span className="font-sans">↗</span>
                  </a>
                ) : (
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      onClick?.();
                    }}
                    className="inline-flex items-center gap-1.5 rounded-full bg-emerald-400 px-3.5 py-1 text-[10px] sm:text-xs font-semibold text-black hover:bg-emerald-300 transition-all shadow-md shadow-emerald-500/20"
                  >
                    <span>Interactive App</span>
                  </button>
                )}

                <a
                  href={item.projectUrl || "https://github.com/AhmedGamalFarouk"}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={(e) => e.stopPropagation()}
                  className="inline-flex items-center gap-1 rounded-full bg-white/15 px-2.5 py-1 text-[10px] sm:text-xs font-medium text-white hover:bg-white/25 transition-colors"
                >
                  GitHub ↗
                </a>
              </div>
            </div>
          </div>
        ) : (
          <span className="text-xs sm:text-base md:text-lg font-semibold tracking-wide text-[#E1E0CC]">
            {item.title}
          </span>
        )}
      </div>
    </div>
  );
};

interface LandingAccordionProps {
  items?: ProjectAccordionItemData[];
  onSelectProject?: (project: ProjectAccordionItemData) => void;
}

// --- Main Interactive Accordion Component ---
export function LandingAccordionItem({ items = defaultProjectsAccordionItems, onSelectProject }: LandingAccordionProps) {
  const [activeIndex, setActiveIndex] = useState<number>(0);

  // Clamp activeIndex when items array length changes due to filtering
  const safeActiveIndex = activeIndex >= items.length ? Math.max(0, items.length - 1) : activeIndex;

  const handleItemSelect = (index: number, item: ProjectAccordionItemData) => {
    if (activeIndex === index) {
      onSelectProject?.(item);
    } else {
      setActiveIndex(index);
    }
  };

  return (
    <div className="w-full">
      <div className="flex flex-row items-center justify-start md:justify-center gap-2 sm:gap-3 md:gap-4 overflow-x-auto py-6 px-2 sm:px-4 scrollbar-thin scrollbar-thumb-white/20">
        {items.map((item, index) => (
          <AccordionItem
            key={item.id}
            item={item}
            isActive={index === safeActiveIndex}
            onMouseEnter={() => setActiveIndex(index)}
            onClick={() => handleItemSelect(index, item)}
          />
        ))}
      </div>
    </div>
  );
}
