"use client";

import React, { useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  X, 
  ExternalLink, 
  Github, 
  Smartphone, 
  Code2
} from "lucide-react";
import { MobileDeviceFrame } from "@/components/ui/device-frame-mobile";

export interface PreviewProjectData {
  id: string;
  title: string;
  subtitle: string;
  tech: string[];
  description: string;
  category: "Mobile" | "Web" | "Full-Stack";
  badge: string;
  projectUrl: string;
  liveUrl?: string;
  imageUrl?: string;
}

interface ProjectPreviewModalProps {
  project: PreviewProjectData | null;
  onClose: () => void;
}

export function ProjectPreviewModal({ project, onClose }: ProjectPreviewModalProps) {
  // Handle ESC key to close modal
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onClose();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [onClose]);

  if (!project) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
        className="fixed inset-0 z-50 flex items-center justify-center bg-black/85 backdrop-blur-xl p-2 sm:p-4 md:p-6 overflow-y-auto"
      >
        <motion.div
          initial={{ scale: 0.95, opacity: 0, y: 20 }}
          animate={{ scale: 1, opacity: 1, y: 0 }}
          exit={{ scale: 0.95, opacity: 0, y: 20 }}
          transition={{ type: "spring", damping: 26, stiffness: 300 }}
          onClick={(e) => e.stopPropagation()}
          className="relative w-full max-w-5xl max-h-[94vh] rounded-3xl border border-white/20 bg-[#0f1015]/95 shadow-[0_25px_80px_-15px_rgba(0,0,0,0.9)] flex flex-col overflow-hidden text-[#E1E0CC]"
        >
          {/* Header Bar */}
          <div className="flex flex-wrap items-center justify-between gap-3 px-5 py-4 border-b border-white/10 bg-black/40 backdrop-blur-md">
            {/* Left Info */}
            <div className="flex items-center gap-3">
              <span className="rounded-full border border-emerald-500/30 bg-emerald-500/10 px-3 py-0.5 text-xs font-mono text-emerald-400">
                {project.badge}
              </span>
              <div>
                <h3 className="text-lg sm:text-xl font-medium text-white flex items-center gap-2">
                  <span>{project.title}</span>
                  <span className="hidden sm:inline-block text-xs font-normal text-white/50 font-mono">• {project.subtitle}</span>
                </h3>
              </div>
            </div>

            {/* Right Controls */}
            <div className="flex items-center gap-3">
              <div className="hidden sm:flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-mono">
                <Smartphone className="w-3.5 h-3.5" />
                <span>Live Mobile App Runtime</span>
              </div>

              {/* Close Button */}
              <button
                onClick={onClose}
                className="rounded-full bg-white/10 p-2 text-white/70 hover:bg-white/20 hover:text-white transition-colors"
                title="Close (Esc)"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Modal Main Content Area */}
          <div className="flex-1 overflow-y-auto p-4 sm:p-6 lg:p-8 scrollbar-thin scrollbar-thumb-white/20">
            {/* Live Mobile Device Frame */}
            <MobileDeviceFrame
              title={project.title}
              projectId={project.id}
              projectCategory={project.category}
              url={project.liveUrl || (project.id === "hush" ? "/demos/hush/" : project.id === "eshtry" ? "/demos/eshtry/" : "/demos/echo-mobile/")}
              posterImage={project.imageUrl}
              onOpenExternal={() => {
                const target = project.liveUrl || (project.id === "hush" ? "/demos/hush/" : project.id === "eshtry" ? "/demos/eshtry/" : "/demos/echo-mobile/");
                window.open(target, "_blank");
              }}
            />

            {/* Bottom Meta & Architecture Overview Card */}
            <div className="mt-8 rounded-2xl border border-white/10 bg-white/[0.03] p-5 sm:p-6 backdrop-blur-sm">
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-4 border-b border-white/10">
                <div>
                  <h4 className="text-sm font-mono uppercase tracking-wider text-emerald-400 flex items-center gap-1.5">
                    <Code2 className="w-4 h-4" />
                    Architecture & Tech Details
                  </h4>
                  <p className="text-xs sm:text-sm text-white/80 font-light mt-1 max-w-3xl leading-relaxed">
                    {project.description}
                  </p>
                </div>

                {/* Direct Action Links */}
                <div className="flex items-center gap-2 flex-shrink-0">
                  <a
                    href={project.liveUrl || (project.id === "hush" ? "/demos/hush/" : project.id === "eshtry" ? "/demos/eshtry/" : "/demos/echo-mobile/")}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 rounded-full bg-emerald-400 px-4 py-2 text-xs font-semibold text-black hover:bg-emerald-300 transition-colors shadow-lg shadow-emerald-500/20"
                  >
                    <ExternalLink className="w-3.5 h-3.5" />
                    Open App Tab
                  </a>

                  <a
                    href={project.projectUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 rounded-full bg-[#E1E0CC] px-4 py-2 text-xs font-semibold text-black hover:bg-white transition-colors"
                  >
                    <Github className="w-3.5 h-3.5" />
                    GitHub Repo
                  </a>
                </div>
              </div>

              {/* Tech Badges List */}
              <div className="pt-4 flex flex-wrap items-center gap-2">
                <span className="text-[11px] font-mono text-white/50 mr-1">Stack:</span>
                {project.tech.map((t) => (
                  <span
                    key={t}
                    className="rounded-lg border border-white/10 bg-white/5 px-2.5 py-1 text-xs font-mono text-white/90"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}
