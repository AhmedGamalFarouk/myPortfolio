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
    subtitle: "Encrypted Messaging & Privacy App",
    category: "Mobile",
    tech: ["Flutter", "Dart", "Cryptography", "Firebase", "WebSockets"],
    description: "A secure, privacy-focused messaging application featuring end-to-end encryption, ephemeral message self-destruction, anonymous authentication, and zero-knowledge data architecture.",
    badge: "Flutter App",
    imageUrl: "https://images.unsplash.com/photo-1555774698-0b77e0d5fac6?q=80&w=1200&auto=format&fit=crop",
    projectUrl: "https://github.com/AhmedGamalFarouk?tab=repositories",
  },
  {
    id: 2,
    title: "Project Echo",
    subtitle: "Real-Time Voice & Audio Collaboration",
    category: "Mobile",
    tech: ["React Native", "WebRTC", "TypeScript", "Node.js"],
    description: "Low-latency voice communication and audio streaming platform built for remote teams and gamers, featuring spatial audio rendering, noise cancellation, and room-based channels.",
    badge: "React Native",
    imageUrl: "https://images.unsplash.com/photo-1590650153855-d9e808231d41?q=80&w=1200&auto=format&fit=crop",
    projectUrl: "https://github.com/AhmedGamalFarouk?tab=repositories",
  },
  {
    id: 3,
    title: "Game Studio",
    subtitle: "Interactive Game Showcase & Portal",
    category: "Web",
    tech: ["React", "Three.js", "WebGL", "Tailwind CSS", "Vite"],
    description: "An immersive 3D game studio landing portal featuring interactive 3D model viewports, game telemetry dashboards, trailer showcases, and real-time player statistics.",
    badge: "React + 3D",
    imageUrl: "https://images.unsplash.com/photo-1511512578047-dfb367046420?q=80&w=1200&auto=format&fit=crop",
    projectUrl: "https://github.com/AhmedGamalFarouk?tab=repositories",
  },
  {
    id: 4,
    title: "Eshtry Menny",
    subtitle: "E-Commerce Mobile Application",
    category: "Mobile",
    tech: ["Flutter", "Dart", "SQLite", "Bloc", "REST API"],
    description: "A feature-rich shopping & e-commerce app built with Flutter. Features local SQLite database persistence, robust BLoC pattern state management, user authentication, cart system, and product management.",
    badge: "Flutter App",
    imageUrl: "https://images.unsplash.com/photo-1472851294608-062f824d29cc?q=80&w=1200&auto=format&fit=crop",
    projectUrl: "https://github.com/AhmedGamalFarouk?tab=repositories",
  },
  {
    id: 2,
    title: "Circle Mobile",
    subtitle: "Event Planning & Group Chat",
    category: "Mobile",
    tech: ["React Native", "Firebase", "Realtime DB", "Tailwind"],
    description: "Cross-platform mobile event planning app designed to combat social drift by reducing friction in group activities. Supports channel-based messaging, real-time activity updates, and Firebase auth.",
    badge: "React Native",
    imageUrl: "https://images.unsplash.com/photo-1511632765486-a01980e01a18?q=80&w=1200&auto=format&fit=crop",
  },
  {
    id: 3,
    title: "Cinema Flux",
    subtitle: "Futuristic Cinematic Movie Explorer",
    category: "Web",
    tech: ["React", "Redux Toolkit", "Vite", "Tailwind CSS"],
    description: "A sleek, dark futuristic movie discovery web application powered by Redux Toolkit for complex state management, featuring dynamic filters, search, and detailed media previews.",
    badge: "React + Vite",
    imageUrl: "https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?q=80&w=1200&auto=format&fit=crop",
  },
  {
    id: 4,
    title: "Social Media Platform",
    subtitle: "Full-Featured Community App",
    category: "Mobile",
    tech: ["Flutter", "Firebase Auth", "Firestore", "Cloud Storage"],
    description: "Complete social platform with custom user profile management, interactive post creation, real-time likes/comments system, and secure Firebase Cloud Storage for high-resolution media.",
    badge: "Flutter + Firebase",
    imageUrl: "https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?q=80&w=1200&auto=format&fit=crop",
  },
  {
    id: 5,
    title: "Movie Land",
    subtitle: "Mobile Movie Explorer",
    category: "Mobile",
    tech: ["React Native", "REST API", "AsyncStorage"],
    description: "Mobile movie explorer app with live REST API integration, smooth category filtering, local favorites persistence, and fluid gesture navigation.",
    badge: "React Native",
    imageUrl: "https://images.unsplash.com/photo-1536440136628-849c177e76a1?q=80&w=1200&auto=format&fit=crop",
  },
  {
    id: 6,
    title: "Orderly",
    subtitle: "Group Order Management Platform",
    category: "Web",
    tech: ["React", "Firebase Firestore", "Tailwind CSS"],
    description: "Streamlines and manages shared group orders seamlessly with real-time Firebase Firestore synchronization, status tracking, and split-payment management UI.",
    badge: "React + Firebase",
    imageUrl: "https://images.unsplash.com/photo-1556742049-0a670c480728?q=80&w=1200&auto=format&fit=crop",
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
