"use client";

import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Wifi, 
  Battery, 
  RotateCw, 
  Smartphone, 
  ExternalLink, 
  RefreshCw, 
  ShieldCheck, 
  Send, 
  Lock, 
  ShoppingBag, 
  Search, 
  Heart, 
  MessageSquare, 
  Calendar, 
  Users, 
  CheckCircle2,
  Sparkles,
  ChevronRight
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
  url,
  projectId = "hush",
  posterImage,
  onOpenExternal,
}: MobileDeviceFrameProps) {
  const [deviceModel, setDeviceModel] = useState<MobileDeviceModel>("iphone16");
  const [orientation, setOrientation] = useState<MobileOrientation>("portrait");
  const [isInteractive, setIsInteractive] = useState<boolean>(false);
  const [currentTime, setCurrentTime] = useState<string>("9:41");
  const [keyCounter, setKeyCounter] = useState<number>(0);
  const [touchPos, setTouchPos] = useState<{ x: number; y: number; active: boolean } | null>(null);
  const [iframeLoaded, setIframeLoaded] = useState<boolean>(false);

  // Update clock every minute
  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      const hours = now.getHours().toString().padStart(2, "0");
      const minutes = now.getMinutes().toString().padStart(2, "0");
      setCurrentTime(`${hours}:${minutes}`);
    };
    updateTime();
    const interval = setInterval(updateTime, 10000);
    return () => clearInterval(interval);
  }, []);

  const handleTouchMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setTouchPos({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
      active: true,
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
          title="Reload Screen"
        >
          <RefreshCw className="w-3.5 h-3.5" />
        </button>

        {url && (
          <button
            onClick={onOpenExternal}
            className="flex items-center gap-1 px-3 py-1 rounded-full bg-emerald-400/20 hover:bg-emerald-400/30 text-emerald-400 border border-emerald-400/30 transition-colors text-[11px]"
          >
            <ExternalLink className="w-3 h-3" />
            <span>Open Direct</span>
          </button>
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

            {/* Screen Content Viewport */}
            <div className={`relative flex-1 w-full h-full ${isPortrait ? "pt-9 pb-5" : "p-2"} overflow-hidden bg-[#0d0e12]`}>
              {/* If a direct live responsive web URL is given and user enabled interaction */}
              {url && isInteractive ? (
                <div key={keyCounter} className="relative w-full h-full">
                  {!iframeLoaded && (
                    <div className="absolute inset-0 z-20 flex flex-col items-center justify-center bg-[#0e0f14] text-white/70 gap-2">
                      <RefreshCw className="w-6 h-6 animate-spin text-emerald-400" />
                      <span className="text-xs font-mono">Loading Web App Build...</span>
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
              ) : (
                /* Native Interactive Simulator Flows (Hush, Circle Mobile, Eshtry Menny) */
                <MobileAppSimulator
                  projectId={projectId}
                  title={title}
                  posterImage={posterImage}
                  isPortrait={isPortrait}
                  onLaunchWebBuild={() => setIsInteractive(true)}
                  hasLiveUrl={Boolean(url)}
                />
              )}
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

/* -------------------------------------------------------------
 * Interactive Built-in Mobile App Simulator
 * Replicates core native screen flows (Hush Chat, Circle, Eshtry)
 * with touchable navigation tabs, animations, and live micro-states
 * ------------------------------------------------------------- */
function MobileAppSimulator({
  projectId,
  title,
  posterImage,
  isPortrait,
  onLaunchWebBuild,
  hasLiveUrl,
}: {
  projectId: string;
  title: string;
  posterImage?: string;
  isPortrait: boolean;
  onLaunchWebBuild: () => void;
  hasLiveUrl: boolean;
}) {
  const [chatMessages, setChatMessages] = useState<Array<{ id: number; sender: "me" | "peer"; text: string; time: string }>>([
    { id: 1, sender: "peer", text: "Session established with X25519 ratchet.", time: "09:40" },
    { id: 2, sender: "me", text: "Zero metadata logged. Perfect forward secrecy active.", time: "09:41" },
  ]);
  const [inputMsg, setInputMsg] = useState("");
  const [cartCount, setCartCount] = useState<number>(2);

  const handleSendMessage = (e: React.FormEvent) => {
    e.preventDefault();
    if (!inputMsg.trim()) return;
    const newMsg = {
      id: Date.now(),
      sender: "me" as const,
      text: inputMsg,
      time: "Just now",
    };
    setChatMessages((prev) => [...prev, newMsg]);
    setInputMsg("");

    // Simulated reply
    setTimeout(() => {
      setChatMessages((prev) => [
        ...prev,
        {
          id: Date.now() + 1,
          sender: "peer",
          text: "🔒 Libsodium verified encrypted payload.",
          time: "Just now",
        },
      ]);
    }, 900);
  };

  // Case 1: Hush (E2EE Chat App Simulator)
  if (projectId.toLowerCase().includes("hush")) {
    return (
      <div className="flex flex-col h-full bg-[#0a0d14] text-white">
        {/* App Bar */}
        <div className="px-4 py-2.5 bg-[#101522] border-b border-white/10 flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <div className="w-7 h-7 rounded-full bg-emerald-500/20 border border-emerald-500/40 flex items-center justify-center text-emerald-400">
              <ShieldCheck className="w-3.5 h-3.5" />
            </div>
            <div>
              <div className="text-xs font-semibold flex items-center gap-1.5">
                <span>Echo Node #84</span>
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping" />
              </div>
              <div className="text-[10px] text-emerald-400/80 font-mono">E2EE • Libsodium v1.0.18</div>
            </div>
          </div>
          <div className="text-[10px] font-mono px-2 py-0.5 rounded bg-white/5 border border-white/10 text-white/60">
            Ephemeral
          </div>
        </div>

        {/* Chat Feed */}
        <div className="flex-1 p-3 overflow-y-auto space-y-2.5 font-sans text-xs scrollbar-none">
          <div className="text-center my-1.5">
            <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-emerald-950/80 border border-emerald-800/40 text-[9px] font-mono text-emerald-300">
              <Lock className="w-2.5 h-2.5" /> End-to-End Encrypted Session
            </span>
          </div>

          {chatMessages.map((msg) => (
            <motion.div
              key={msg.id}
              initial={{ opacity: 0, y: 8, scale: 0.96 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              className={`flex flex-col ${msg.sender === "me" ? "items-end" : "items-start"}`}
            >
              <div
                className={`max-w-[82%] rounded-2xl px-3 py-1.5 text-xs ${
                  msg.sender === "me"
                    ? "bg-emerald-500 text-black font-medium rounded-br-xs"
                    : "bg-[#182032] text-white/90 border border-white/10 rounded-bl-xs"
                }`}
              >
                {msg.text}
              </div>
              <span className="text-[9px] text-white/40 mt-0.5 px-1">{msg.time}</span>
            </motion.div>
          ))}
        </div>

        {/* Message Input Box */}
        <form onSubmit={handleSendMessage} className="p-2.5 bg-[#101522] border-t border-white/10 flex items-center gap-2">
          <input
            type="text"
            value={inputMsg}
            onChange={(e) => setInputMsg(e.target.value)}
            placeholder="Type encrypted message..."
            className="flex-1 bg-black/60 border border-white/15 rounded-full px-3 py-1.5 text-xs text-white placeholder:text-white/40 focus:outline-none focus:border-emerald-400"
          />
          <button
            type="submit"
            className="w-7 h-7 rounded-full bg-emerald-500 text-black flex items-center justify-center hover:bg-emerald-400 transition-colors shadow-md flex-shrink-0"
          >
            <Send className="w-3 h-3" />
          </button>
        </form>
      </div>
    );
  }

  // Case 2: Eshtry Menny (E-Commerce Store Simulator)
  if (projectId.toLowerCase().includes("eshtry")) {
    return (
      <div className="flex flex-col h-full bg-[#0e1117] text-white">
        {/* Header */}
        <div className="px-4 py-2.5 bg-[#161b26] border-b border-white/10 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <ShoppingBag className="w-4 h-4 text-amber-400" />
            <span className="text-xs font-bold tracking-tight">Eshtry Menny</span>
          </div>
          <div className="relative">
            <ShoppingBag className="w-4 h-4 text-white/70" />
            <span className="absolute -top-1.5 -right-2 bg-amber-500 text-black text-[9px] font-bold w-3.5 h-3.5 rounded-full flex items-center justify-center">
              {cartCount}
            </span>
          </div>
        </div>

        {/* Search */}
        <div className="p-2.5">
          <div className="flex items-center gap-2 bg-white/5 border border-white/10 rounded-xl px-3 py-1.5 text-xs text-white/60">
            <Search className="w-3.5 h-3.5" />
            <span>Search electronics, fashion...</span>
          </div>
        </div>

        {/* Product Cards Grid */}
        <div className="flex-1 px-2.5 overflow-y-auto space-y-2.5 scrollbar-none pb-2">
          <div className="rounded-xl bg-gradient-to-r from-amber-500/20 to-rose-500/20 border border-amber-500/30 p-2.5 flex items-center justify-between">
            <div>
              <div className="text-[10px] font-mono uppercase text-amber-400">Exclusive Drop</div>
              <div className="text-xs font-bold text-white mt-0.5">Flutter + BLoC Architecture</div>
            </div>
            <Sparkles className="w-4 h-4 text-amber-400 animate-spin" style={{ animationDuration: "6s" }} />
          </div>

          <div className="grid grid-cols-2 gap-2">
            {[
              { name: "Pro Audio Studio", price: "$189", tag: "Hot" },
              { name: "Minimalist Watch", price: "$240", tag: "New" },
              { name: "Ergo Keycap Set", price: "$85", tag: "Sale" },
              { name: "Smart Lamp Pro", price: "$110", tag: "Tech" },
            ].map((prod, idx) => (
              <div key={idx} className="rounded-xl border border-white/10 bg-white/5 p-2 flex flex-col justify-between">
                <div>
                  <div className="flex justify-between items-start">
                    <span className="text-[9px] font-mono px-1.5 py-0.2 rounded bg-amber-500/20 text-amber-300">
                      {prod.tag}
                    </span>
                    <Heart className="w-3 h-3 text-white/40 hover:text-rose-400 cursor-pointer" />
                  </div>
                  <div className="text-xs font-medium text-white/90 mt-1.5 line-clamp-1">{prod.name}</div>
                  <div className="text-xs font-bold text-amber-400 mt-0.5">{prod.price}</div>
                </div>
                <button
                  onClick={() => setCartCount((c) => c + 1)}
                  className="mt-2 w-full py-1 rounded-lg bg-white/10 hover:bg-amber-400 hover:text-black transition-colors text-[10px] font-semibold"
                >
                  + Add to Cart
                </button>
              </div>
            ))}
          </div>
        </div>

        {/* Tab Navigation */}
        <div className="px-6 py-2 bg-[#161b26] border-t border-white/10 flex justify-between text-white/60 text-[10px]">
          <span className="text-amber-400 font-medium">Home</span>
          <span>Categories</span>
          <span>Wishlist</span>
          <span>Profile</span>
        </div>
      </div>
    );
  }

  // Case 3: Circle Mobile or Default Interactive Showcase
  return (
    <div className="flex flex-col h-full bg-[#0a0c10] text-white">
      {/* App Bar */}
      <div className="px-4 py-2.5 bg-[#121620] border-b border-white/10 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="w-6 h-6 rounded-lg bg-purple-500/20 border border-purple-500/40 flex items-center justify-center text-purple-400 text-[11px] font-bold">
            C
          </div>
          <span className="text-xs font-bold tracking-tight">{title}</span>
        </div>
        <span className="text-[9px] font-mono px-2 py-0.5 rounded-full bg-purple-500/20 text-purple-300">
          React Native
        </span>
      </div>

      {/* Main Feed */}
      <div className="flex-1 p-3 overflow-y-auto space-y-2.5 scrollbar-none">
        <div className="rounded-xl border border-white/10 bg-white/5 p-3">
          <div className="flex items-center gap-2 text-[10px] text-purple-400 font-mono">
            <Users className="w-3 h-3" />
            <span>Social Circle Activity</span>
          </div>
          <div className="text-xs font-medium text-white/90 mt-1">Weekend Hackathon Meetup</div>
          <div className="text-[11px] text-white/60 mt-1">14 members attending • Leaflet Geo-pin active</div>
        </div>

        <div className="rounded-xl border border-white/10 bg-white/5 p-3">
          <div className="flex items-center gap-2 text-[10px] text-emerald-400 font-mono">
            <Calendar className="w-3 h-3" />
            <span>Scheduled Event</span>
          </div>
          <div className="text-xs font-medium text-white/90 mt-1">Cairo Tech Circle Gathering</div>
          <div className="text-[11px] text-white/60 mt-1">Tomorrow at 7:00 PM • Firebase Sync</div>
        </div>

        {hasLiveUrl && (
          <div className="p-3 rounded-xl bg-gradient-to-r from-purple-500/20 to-pink-500/20 border border-purple-500/30 text-center">
            <div className="text-xs font-medium text-white">Live Web Version Available</div>
            <button
              onClick={onLaunchWebBuild}
              className="mt-2 inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-purple-500 text-white text-xs font-semibold hover:bg-purple-400 transition-colors shadow-lg"
            >
              <Sparkles className="w-3 h-3" /> Launch Interactive Web Mode
            </button>
          </div>
        )}
      </div>

      {/* Mobile Tab Bar */}
      <div className="px-6 py-2 bg-[#121620] border-t border-white/10 flex justify-between text-white/60 text-[10px]">
        <div className="flex flex-col items-center text-purple-400">
          <Users className="w-3.5 h-3.5" />
          <span className="text-[9px] mt-0.5">Circles</span>
        </div>
        <div className="flex flex-col items-center">
          <Calendar className="w-3.5 h-3.5" />
          <span className="text-[9px] mt-0.5">Events</span>
        </div>
        <div className="flex flex-col items-center">
          <MessageSquare className="w-3.5 h-3.5" />
          <span className="text-[9px] mt-0.5">Chat</span>
        </div>
      </div>
    </div>
  );
}
