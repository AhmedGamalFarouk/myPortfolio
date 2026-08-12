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
    tech: ["React", "Redux Toolkit", "Vite", "CSS3", "REST API"],
    description: "A sleek, dark futuristic movie discovery web application powered by Redux Toolkit for complex state management, featuring dynamic filters, search, and detailed media previews.",
    badge: "React + Redux",
    imageUrl: "https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?q=80&w=1200&auto=format&fit=crop",
    projectUrl: "https://github.com/AhmedGamalFarouk/cinema-flux",
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
    title: "Flutter Social Media App",
    subtitle: "Full Community & Media Platform",
    category: "Mobile",
    tech: ["Flutter", "Dart", "Firebase Auth", "Firestore", "Cloud Storage"],
    description: "Complete mobile social platform with custom user profile management, interactive post creation, real-time likes/comments system, and secure Firebase Cloud Storage for media.",
    badge: "Flutter + Firebase",
    imageUrl: "https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?q=80&w=1200&auto=format&fit=crop",
    projectUrl: "https://github.com/AhmedGamalFarouk/Flutter-Social-Media-App",
  },
  {
    id: 7,
    title: "React Native Movies App",
    subtitle: "Mobile Movie Explorer & Filtering",
    category: "Mobile",
    tech: ["React Native", "JavaScript", "REST API", "AsyncStorage"],
    description: "Mobile movie explorer app with live REST API integration, smooth category filtering, local favorites persistence with AsyncStorage, and fluid gesture navigation.",
    badge: "React Native",
    imageUrl: "https://images.unsplash.com/photo-1536440136628-849c177e76a1?q=80&w=1200&auto=format&fit=crop",
    projectUrl: "https://github.com/AhmedGamalFarouk/React-Natve-Movies-App",
  },
  {
    id: 8,
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
    id: 9,
    title: "Game Studio",
    subtitle: "Interactive 3D Game Showcase & Portal",
    category: "Web",
    tech: ["React", "Three.js", "WebGL", "Tailwind CSS", "Vite"],
    description: "An immersive 3D game studio landing portal featuring interactive 3D model viewports, game telemetry dashboards, trailer showcases, and real-time player statistics.",
    badge: "React + Three.js",
    imageUrl: "https://images.unsplash.com/photo-1511512578047-dfb367046420?q=80&w=1200&auto=format&fit=crop",
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
        relative h-[480px] rounded-2xl overflow-hidden cursor-pointer
        transition-all duration-700 ease-in-out border border-white/10 group
        ${isActive ? 'w-[320px] sm:w-[380px] md:w-[420px] shadow-2xl border-emerald-500/40 ring-1 ring-emerald-500/30' : 'w-[70px] sm:w-[80px] opacity-75 hover:opacity-100'}
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
      <div className={`absolute inset-0 transition-opacity duration-500 ${isActive ? 'bg-gradient-to-t from-black via-black/50 to-black/30' : 'bg-black/65'}`} />

      {/* Badge Top Left when active */}
      {isActive && (
        <div className="absolute top-5 left-5 z-10">
          <span className="rounded-full border border-emerald-500/30 bg-black/70 px-3 py-1 text-xs font-mono text-emerald-400 backdrop-blur-md">
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
              ? 'bottom-6 left-6 right-6 translate-y-0 opacity-100 rotate-0'
              : 'bottom-20 left-1/2 -translate-x-1/2 rotate-90 whitespace-nowrap opacity-90'
          }
        `}
      >
        {isActive ? (
          <div>
            <span className="text-xs font-mono tracking-widest text-emerald-400 uppercase">{item.subtitle}</span>
            <h3 className="text-2xl sm:text-3xl font-medium text-[#E1E0CC] mt-0.5">{item.title}</h3>
            <p className="mt-2 text-xs sm:text-sm text-white/80 font-light line-clamp-2 leading-relaxed">
              {item.description}
            </p>
            <div className="mt-4 flex flex-wrap gap-1.5 pt-3 border-t border-white/15">
              {item.tech.slice(0, 4).map((t) => (
                <span key={t} className="rounded bg-white/10 px-2 py-0.5 text-[10px] font-mono text-white/80">
                  {t}
                </span>
              ))}
            </div>
          </div>
        ) : (
          <span className="text-base sm:text-lg font-semibold tracking-wide text-[#E1E0CC]">
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

  const handleItemHover = (index: number) => {
    setActiveIndex(index);
  };

  return (
    <div className="w-full">
      <div className="flex flex-row items-center justify-center gap-3 sm:gap-4 overflow-x-auto py-6 px-2 scrollbar-none">
        {items.map((item, index) => (
          <AccordionItem
            key={item.id}
            item={item}
            isActive={index === safeActiveIndex}
            onMouseEnter={() => handleItemHover(index)}
            onClick={() => onSelectProject?.(item)}
          />
        ))}
      </div>
    </div>
  );
}
