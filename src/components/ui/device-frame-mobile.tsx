"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { 
  Wifi, 
  Battery, 
  RotateCw, 
  ExternalLink, 
  RefreshCw, 
  Sparkles
} from "lucide-react";

export type MobileDeviceModel = "iphone16" | "pixel9";
export type MobileOrientation = "portrait" | "landscape";

interface MobileDeviceFrameProps {
  title: string;
  projectCategory?: string;
  url?: string;
  projectId?: string;
  posterImage?: string;
  onOpenExternal?: () => void;
}

export function MobileDeviceFrame({
  title,
  projectCategory = "Mobile",
  url = "/demos/hush/",
  projectId = "hush",
  posterImage,
  onOpenExternal,
}: MobileDeviceFrameProps) {
  const [deviceModel, setDeviceModel] = useState<MobileDeviceModel>("iphone16");
  const [orientation, setOrientation] = useState<MobileOrientation>("portrait");
  const [currentTime, setCurrentTime] = useState<string>("9:41");
  const [keyCounter, setKeyCounter] = useState<number>(0);
  const [touchPos, setTouchPos] = useState<{ x: number; y: number } | null>(null);
  const [iframeLoaded, setIframeLoaded] = useState<boolean>(false);

  // Update clock
  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      const hours = now.getHours().toString().padStart(2, "0");
      const minutes = now.getMinutes().toString().padStart(2, "0");
      setCurrentTime(`${hours}:${minutes}`);
    };
    updateTime();
    const interval = setInterval(updateTime, 15000);
    return () => clearInterval(interval);
  }, []);

  const handleTouchMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setTouchPos({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  const handleTouchLeave = () => {
    setTouchPos(null);
  };

  const isPortrait = orientation === "portrait";

  return (
    <div className="flex flex-col items-center justify-center w-full select-none">
      {/* Top Device Control Bar */}
      <div className="flex flex-wrap items-center justify-center gap-2 mb-4 p-1.5 rounded-full bg-black/60 border border-white/15 backdrop-blur-xl shadow-lg text-xs font-mono">
        {/* Device Switcher */}
        <div className="flex items-center bg-white/10 rounded-full p-0.5">
          <button
            onClick={() => setDeviceModel("iphone16")}
            className={`px-3 py-1 rounded-full transition-all text-[11px] ${
              deviceModel === "iphone16" ? "bg-emerald-500 text-black font-semibold shadow" : "text-white/70 hover:text-white"
            }`}
          >
            iPhone 16 Pro
          </button>
          <button
            onClick={() => setDeviceModel("pixel9")}
            className={`px-3 py-1 rounded-full transition-all text-[11px] ${
              deviceModel === "pixel9" ? "bg-emerald-500 text-black font-semibold shadow" : "text-white/70 hover:text-white"
            }`}
          >
            Pixel 9 Pro
          </button>
        </div>

        {/* Orientation Switcher */}
        <button
          onClick={() => setOrientation(isPortrait ? "landscape" : "portrait")}
          className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/5 hover:bg-white/15 text-white/80 transition-colors text-[11px]"
          title="Toggle Orientation"
        >
          <RotateCw className={`w-3.5 h-3.5 transition-transform duration-300 ${!isPortrait ? "rotate-90 text-emerald-400" : ""}`} />
          <span>{isPortrait ? "Portrait" : "Landscape"}</span>
        </button>

        {/* Reload / Reset */}
        <button
          onClick={() => {
            setKeyCounter((prev) => prev + 1);
            setIframeLoaded(false);
          }}
          className="p-1.5 rounded-full bg-white/5 hover:bg-white/15 text-white/80 transition-colors"
          title="Reload App"
        >
          <RefreshCw className={`w-3.5 h-3.5 ${!iframeLoaded ? "animate-spin text-emerald-400" : ""}`} />
        </button>

        {url && (
          <a
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1 px-3 py-1 rounded-full bg-emerald-400/20 hover:bg-emerald-400/30 text-emerald-400 border border-emerald-400/30 transition-colors text-[11px]"
          >
            <ExternalLink className="w-3 h-3" />
            <span>Full Window</span>
          </a>
        )}
      </div>

      {/* Outer Phone Shell Container */}
      <motion.div
        layout
        transition={{ type: "spring", stiffness: 260, damping: 25 }}
        className={`relative transition-all duration-500 ${
          isPortrait ? "w-[330px] xs:w-[360px] sm:w-[380px] h-[680px] sm:h-[730px]" : "w-[640px] sm:w-[700px] h-[350px] sm:h-[380px]"
        }`}
      >
        {/* Hardware Frame Bezels */}
        <div
          className={`relative w-full h-full p-3 rounded-[46px] sm:rounded-[52px] shadow-2xl transition-all duration-300 ${
            deviceModel === "iphone16"
              ? "bg-[#1e1e24] border-[5px] border-[#36363e] ring-1 ring-white/20 shadow-[0_25px_60px_-15px_rgba(0,0,0,0.8),inset_0_0_8px_rgba(255,255,255,0.12)]"
              : "bg-[#17181c] border-[5px] border-[#292c30] ring-1 ring-white/15 shadow-[0_25px_60px_-15px_rgba(0,0,0,0.8)]"
          }`}
        >
          {/* Subtle Titanium / Aluminum Side Antenna Bands */}
          <div className="absolute -left-[6px] top-24 w-[2px] h-10 bg-white/20 rounded-l" />
          <div className="absolute -left-[6px] top-38 w-[2px] h-12 bg-white/20 rounded-l" />
          <div className="absolute -right-[6px] top-32 w-[2px] h-14 bg-white/20 rounded-r" />

          {/* Inner Screen Surface */}
          <div
            onMouseMove={handleTouchMove}
            onMouseLeave={handleTouchLeave}
            className="relative w-full h-full bg-black rounded-[36px] sm:rounded-[42px] overflow-hidden flex flex-col border border-black cursor-crosshair"
          >
            {/* Touch Cursor Ring Emulation */}
            {touchPos && (
              <div
                className="pointer-events-none absolute z-50 w-6 h-6 rounded-full bg-white/25 border border-white/60 shadow-[0_0_10px_rgba(255,255,255,0.4)] -translate-x-1/2 -translate-y-1/2 transition-transform duration-75"
                style={{ left: touchPos.x, top: touchPos.y }}
              />
            )}

            {/* Top Hardware Cutout (Dynamic Island for iPhone / Camera Hole for Pixel) */}
            {isPortrait && (
              <div className="absolute top-0 left-0 right-0 z-40 pt-2.5 px-6 flex items-center justify-between pointer-events-none">
                {/* Time */}
                <span className="text-[11px] font-semibold text-white/90 tracking-tight font-sans pl-1">
                  {currentTime}
                </span>

                {/* Dynamic Island / Punch Hole */}
                {deviceModel === "iphone16" ? (
                  <motion.div
                    initial={{ scale: 0.95 }}
                    animate={{ scale: 1 }}
                    className="relative flex items-center justify-center gap-1.5 h-5.5 w-24 bg-black rounded-full border border-white/10 shadow-inner px-2"
                  >
                    <div className="w-2.5 h-2.5 rounded-full bg-[#0a0a14] border border-blue-900/40 flex items-center justify-center">
                      <div className="w-1 h-1 rounded-full bg-blue-500/50" />
                    </div>
                    <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                  </motion.div>
                ) : (
                  <div className="w-3.5 h-3.5 rounded-full bg-black border border-white/20 shadow-inner" />
                )}

                {/* Status Icons */}
                <div className="flex items-center gap-1.5 text-white/80 pr-1">
                  <span className="text-[9px] font-bold tracking-tighter text-white/70">5G</span>
                  <Wifi className="w-3 h-3 text-white/90" />
                  <Battery className="w-3.5 h-3.5 text-emerald-400 fill-emerald-400" />
                </div>
              </div>
            )}

            {/* Real Compiled Flutter / Mobile App Viewport */}
            <div className={`relative flex-1 w-full h-full ${isPortrait ? "pt-8 pb-4" : "p-1"} overflow-hidden bg-black`}>
              <div key={keyCounter} className="relative w-full h-full">
                {!iframeLoaded && (
                  <div className="absolute inset-0 z-20 flex flex-col items-center justify-center bg-[#0e0f14] text-white/80 gap-3 p-4 text-center">
                    <RefreshCw className="w-7 h-7 animate-spin text-emerald-400" />
                    <span className="text-xs font-mono font-medium">Booting Compiled App...</span>
                    <span className="text-[10px] font-mono text-white/40">Loading Flutter Web Engine & CanvasKit</span>
                  </div>
                )}
                
                <iframe
                  src={url}
                  title={title}
                  onLoad={() => setIframeLoaded(true)}
                  className="w-full h-full border-0 bg-black"
                  sandbox="allow-scripts allow-same-origin allow-forms allow-popups"
                />
              </div>
            </div>

            {/* Bottom iOS Home Indicator Bar */}
            {isPortrait && (
              <div className="absolute bottom-1.5 left-1/2 -translate-x-1/2 z-40 w-28 h-1 bg-white/60 hover:bg-white rounded-full transition-all cursor-pointer shadow-sm active:w-24 active:h-1.5" />
            )}
          </div>
        </div>
      </motion.div>
    </div>
  );
}
