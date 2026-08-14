"use client";

import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Monitor, 
  Tablet, 
  Smartphone, 
  RefreshCw, 
  ExternalLink, 
  Lock, 
  Copy, 
  Check, 
  Maximize2, 
  Minimize2, 
  Play, 
  AlertCircle, 
  ShieldCheck,
  ChevronLeft,
  ChevronRight,
  Sparkles
} from "lucide-react";

export type WebViewMode = "desktop" | "tablet" | "mobile";

interface WebDeviceFrameProps {
  title: string;
  url: string;
  posterImage?: string;
  tech?: string[];
  description?: string;
  onOpenExternal?: () => void;
}

export function WebDeviceFrame({
  title,
  url,
  posterImage,
  tech = [],
  description,
  onOpenExternal,
}: WebDeviceFrameProps) {
  const [viewMode, setViewMode] = useState<WebViewMode>("desktop");
  const [isSandboxActive, setIsSandboxActive] = useState<boolean>(false);
  const [isLoadingIframe, setIsLoadingIframe] = useState<boolean>(true);
  const [hasCopiedUrl, setHasCopiedUrl] = useState<boolean>(false);
  const [iframeKey, setIframeKey] = useState<number>(0);
  const [isCspBlocked, setIsCspBlocked] = useState<boolean>(false);
  const [scaleFactor, setScaleFactor] = useState<number>(1);
  const containerRef = useRef<HTMLDivElement>(null);

  // Compute responsive CSS scale factor for desktop/tablet previews inside modal
  useEffect(() => {
    const calculateScale = () => {
      if (!containerRef.current) return;
      const containerWidth = containerRef.current.clientWidth;

      if (viewMode === "desktop") {
        // Target virtual resolution: 1280px
        const targetWidth = 1280;
        if (containerWidth < targetWidth) {
          const calculated = Math.max(0.45, Math.min(1, (containerWidth - 32) / targetWidth));
          setScaleFactor(calculated);
        } else {
          setScaleFactor(1);
        }
      } else if (viewMode === "tablet") {
        // Target virtual resolution: 768px
        const targetWidth = 768;
        if (containerWidth < targetWidth) {
          const calculated = Math.max(0.55, Math.min(1, (containerWidth - 32) / targetWidth));
          setScaleFactor(calculated);
        } else {
          setScaleFactor(1);
        }
      } else {
        // Mobile 390px
        setScaleFactor(1);
      }
    };

    calculateScale();
    window.addEventListener("resize", calculateScale);
    return () => window.removeEventListener("resize", calculateScale);
  }, [viewMode, isSandboxActive]);

  const handleCopyUrl = () => {
    if (!url) return;
    navigator.clipboard.writeText(url);
    setHasCopiedUrl(true);
    setTimeout(() => setHasCopiedUrl(false), 2000);
  };

  const handleReload = () => {
    setIsLoadingIframe(true);
    setIsCspBlocked(false);
    setIframeKey((prev) => prev + 1);
  };

  // Dimensions based on mode
  const getDimensions = () => {
    switch (viewMode) {
      case "desktop":
        return { width: 1280, height: 740, label: "Desktop (1280 × 740)" };
      case "tablet":
        return { width: 768, height: 860, label: "iPad Pro (768 × 860)" };
      case "mobile":
        return { width: 390, height: 720, label: "Mobile (390 × 720)" };
    }
  };

  const currentDim = getDimensions();

  return (
    <div ref={containerRef} className="flex flex-col items-center justify-center w-full select-none">
      {/* Top Viewport Switcher Toolbar */}
      <div className="flex flex-wrap items-center justify-between w-full max-w-5xl gap-3 mb-4 px-3 py-2 rounded-2xl bg-black/60 border border-white/15 backdrop-blur-xl shadow-xl text-xs font-mono">
        {/* Device Switcher Pills */}
        <div className="flex items-center bg-white/10 rounded-xl p-0.5">
          <button
            onClick={() => setViewMode("desktop")}
            className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg transition-all text-[11px] ${
              viewMode === "desktop" ? "bg-emerald-400 text-black font-semibold shadow" : "text-white/70 hover:text-white"
            }`}
          >
            <Monitor className="w-3.5 h-3.5" />
            <span>Desktop</span>
          </button>
          <button
            onClick={() => setViewMode("tablet")}
            className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg transition-all text-[11px] ${
              viewMode === "tablet" ? "bg-emerald-400 text-black font-semibold shadow" : "text-white/70 hover:text-white"
            }`}
          >
            <Tablet className="w-3.5 h-3.5" />
            <span>Tablet</span>
          </button>
          <button
            onClick={() => setViewMode("mobile")}
            className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg transition-all text-[11px] ${
              viewMode === "mobile" ? "bg-emerald-400 text-black font-semibold shadow" : "text-white/70 hover:text-white"
            }`}
          >
            <Smartphone className="w-3.5 h-3.5" />
            <span>Mobile</span>
          </button>
        </div>

        {/* Viewport Meta Details */}
        <div className="hidden sm:flex items-center gap-2 text-white/50 text-[11px]">
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
          <span>{currentDim.label}</span>
          {scaleFactor < 1 && (
            <span className="rounded bg-white/10 px-1.5 py-0.5 text-[10px] text-white/80 font-mono">
              {Math.round(scaleFactor * 100)}% fit
            </span>
          )}
        </div>

        {/* Action Controls */}
        <div className="flex items-center gap-2">
          {isSandboxActive && (
            <button
              onClick={handleReload}
              className="p-1.5 rounded-lg bg-white/5 hover:bg-white/15 text-white/80 transition-colors"
              title="Reload sandbox"
            >
              <RefreshCw className={`w-3.5 h-3.5 ${isLoadingIframe ? "animate-spin text-emerald-400" : ""}`} />
            </button>
          )}

          {url && (
            <a
              href={url}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1 px-3 py-1.5 rounded-lg bg-emerald-400 text-black font-semibold hover:bg-emerald-300 transition-colors text-[11px] shadow-sm"
            >
              <ExternalLink className="w-3 h-3" />
              <span>Open Tab</span>
            </a>
          )}
        </div>
      </div>

      {/* Outer Browser Window Chrome */}
      <div 
        className="w-full flex justify-center items-start overflow-hidden py-1"
        style={{
          minHeight: viewMode === "desktop" ? `${Math.min(740, Math.round(740 * scaleFactor) + 60)}px` : undefined
        }}
      >
        <div
          className="transition-all duration-300 flex flex-col rounded-2xl bg-[#14151a] border border-white/20 shadow-[0_20px_60px_-15px_rgba(0,0,0,0.8)] overflow-hidden"
          style={{
            width: `${currentDim.width}px`,
            maxWidth: "100%",
            transform: scaleFactor < 1 ? `scale(${scaleFactor})` : "none",
            transformOrigin: "top center",
          }}
        >
          {/* Browser Header Bar */}
          <div className="flex items-center justify-between px-4 py-2.5 bg-[#1a1b22] border-b border-white/10 select-none">
            {/* Traffic Light Window Buttons */}
            <div className="flex items-center gap-1.5">
              <div className="w-3 h-3 rounded-full bg-[#ff5f56] border border-[#e0443e]/40 shadow-xs" />
              <div className="w-3 h-3 rounded-full bg-[#ffbd2e] border border-[#dea123]/40 shadow-xs" />
              <div className="w-3 h-3 rounded-full bg-[#27c93f] border border-[#1aab29]/40 shadow-xs" />

              <div className="hidden sm:flex items-center gap-1 ml-3 text-white/30">
                <ChevronLeft className="w-3.5 h-3.5" />
                <ChevronRight className="w-3.5 h-3.5" />
              </div>
            </div>

            {/* Simulated SSL Address Bar */}
            <div className="flex items-center justify-between max-w-md w-full mx-2 sm:mx-6 px-3 py-1 rounded-full bg-black/60 border border-white/15 text-[11px] font-mono text-white/70">
              <div className="flex items-center gap-1.5 truncate">
                <Lock className="w-3 h-3 text-emerald-400 flex-shrink-0" />
                <span className="truncate text-white/80">{url || "https://preview.internal"}</span>
              </div>
              <button
                onClick={handleCopyUrl}
                className="ml-2 text-white/40 hover:text-white transition-colors flex-shrink-0"
                title="Copy Address"
              >
                {hasCopiedUrl ? <Check className="w-3 h-3 text-emerald-400" /> : <Copy className="w-3 h-3" />}
              </button>
            </div>

            {/* Shield & Status */}
            <div className="flex items-center gap-2">
              <span className="hidden md:inline-flex items-center gap-1 px-2 py-0.5 rounded bg-emerald-500/10 border border-emerald-500/30 text-[10px] font-mono text-emerald-400">
                <ShieldCheck className="w-3 h-3" /> Sandboxed
              </span>
            </div>
          </div>

          {/* Viewport Canvas Surface */}
          <div
            className="relative bg-[#0b0c10] overflow-hidden"
            style={{
              height: `${currentDim.height}px`,
              width: "100%",
            }}
          >
            {/* Facade Poster Pattern (When not launched) */}
            {!isSandboxActive ? (
              <div className="relative w-full h-full group">
                {/* Poster Image */}
                <img
                  src={posterImage || "https://images.unsplash.com/photo-1511632765486-a01980e01a18?q=80&w=1200&auto=format&fit=crop"}
                  alt={title}
                  className="w-full h-full object-cover object-top opacity-60 group-hover:opacity-75 transition-opacity duration-500"
                  onError={(e) => {
                    (e.target as HTMLImageElement).onerror = null;
                    (e.target as HTMLImageElement).src =
                      "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?q=80&w=1200&auto=format&fit=crop";
                  }}
                />

                {/* Dark Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-black/30 flex flex-col items-center justify-center p-6 text-center">
                  <motion.div
                    initial={{ scale: 0.9, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    className="max-w-md flex flex-col items-center gap-4"
                  >
                    <div className="flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/15 border border-emerald-500/30 text-emerald-400 font-mono text-xs">
                      <Sparkles className="w-3.5 h-3.5" />
                      <span>Interactive Web Sandbox</span>
                    </div>

                    <h3 className="text-2xl sm:text-3xl font-medium text-white tracking-tight">{title}</h3>
                    {description && (
                      <p className="text-xs sm:text-sm text-white/70 font-light line-clamp-2 leading-relaxed">
                        {description}
                      </p>
                    )}

                    {tech.length > 0 && (
                      <div className="flex flex-wrap justify-center gap-1.5">
                        {tech.slice(0, 5).map((t) => (
                          <span key={t} className="rounded bg-white/10 px-2 py-0.5 text-[10px] font-mono text-white/80">
                            {t}
                          </span>
                        ))}
                      </div>
                    )}

                    <button
                      onClick={() => setIsSandboxActive(true)}
                      className="group/btn mt-3 inline-flex items-center gap-2.5 rounded-full bg-emerald-400 px-6 py-3 text-xs sm:text-sm font-semibold text-black hover:bg-emerald-300 transition-all shadow-[0_0_30px_rgba(52,211,153,0.3)] hover:scale-105"
                    >
                      <Play className="w-4 h-4 fill-black" />
                      <span>Launch Live Sandbox</span>
                    </button>
                  </motion.div>
                </div>
              </div>
            ) : (
              /* Active Sandboxed Iframe with Skeleton Loader */
              <div className="relative w-full h-full bg-[#0a0a0e]">
                {isLoadingIframe && (
                  <div className="absolute inset-0 z-20 flex flex-col items-center justify-center bg-[#0d0e14] text-white/70 gap-3">
                    <RefreshCw className="w-8 h-8 animate-spin text-emerald-400" />
                    <div className="text-xs font-mono">Initializing sandboxed environment...</div>
                    <div className="text-[10px] text-white/40 max-w-xs text-center font-mono">
                      Establishing secure frame with {viewMode} viewport simulation
                    </div>
                  </div>
                )}

                <iframe
                  key={iframeKey}
                  src={url}
                  title={title}
                  onLoad={() => setIsLoadingIframe(false)}
                  onError={() => setIsCspBlocked(true)}
                  className="w-full h-full border-0 bg-white"
                  sandbox="allow-scripts allow-same-origin allow-forms allow-popups"
                />

                {/* Graceful Fallback if CSP prevents embed */}
                {isCspBlocked && (
                  <div className="absolute inset-0 z-30 flex flex-col items-center justify-center bg-black/90 p-6 text-center text-white">
                    <AlertCircle className="w-10 h-10 text-amber-400 mb-3" />
                    <h4 className="text-base font-medium">Embedding Restricted by Host</h4>
                    <p className="text-xs text-white/60 max-w-sm mt-1 mb-4">
                      This project's deployment policies restrict external iframe rendering. You can open the live application directly:
                    </p>
                    <a
                      href={url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-emerald-400 text-black text-xs font-semibold hover:bg-emerald-300 transition-colors"
                    >
                      <ExternalLink className="w-4 h-4" />
                      Open Live Site in New Tab
                    </a>
                  </div>
                )}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
