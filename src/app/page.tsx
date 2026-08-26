"use client"

import React from "react"
import Link from "next/link"
import { motion, useScroll, useTransform } from "framer-motion"
import { Permanent_Marker } from "next/font/google"
import {
  Lock,
  ChevronDown,
  CheckCircle2,
  MessageCircle,
  Star,
  Zap,
  Clock,
  Users,
  Lightbulb,
  Code,
  BookOpen,
  Rocket,
  Gift,
  Award,
  GitBranch as Github,
} from "lucide-react"
import { WheelCarousel } from "@/components/ui/wheel-carousel"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

const markerFont = Permanent_Marker({ weight: '400', subsets: ['latin'] })

const organizers = [
  { label: "Tanmay", image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=800&q=80", imageAlt: "Tanmay" },
  { label: "Kartik Patel", image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&q=80", imageAlt: "Kartik" },
  { label: "Ayush Sharma", image: "https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?w=800&q=80", imageAlt: "Ayush" },
  { label: "Harsh", image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=800&q=80", imageAlt: "Harsh" },
  { label: "Swarnash", image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=800&q=80", imageAlt: "Swarnash" },
  { label: "Roshan", image: "https://api.dicebear.com/7.x/initials/svg?seed=Roshan&backgroundColor=c0392b", imageAlt: "Roshan" },
  { label: "Yuvraj", image: "https://api.dicebear.com/7.x/initials/svg?seed=Yuvraj&backgroundColor=7ce24a", imageAlt: "Yuvraj" },
]

const mentors = [
  { name: "Aniket Gabba", role: "Mentor", image: "https://api.dicebear.com/7.x/initials/svg?seed=Aniket+Gabba&backgroundColor=8b6340" },
  { name: "Anand", role: "Mentor", image: "https://api.dicebear.com/7.x/initials/svg?seed=Anand&backgroundColor=8b6340" },
]

const sponsors = [
  { src: "https://falling-sun.vercel.app/assets/llf-BrSOIe-2.jpg", alt: "LLF" },
  { src: "https://falling-sun.vercel.app/assets/Qualcomm-Logo-DvoLYaEA.png", alt: "Qualcomm" },
  { src: "https://falling-sun.vercel.app/assets/fueler-DuVLbv5p.jpg", alt: "Fueler" },
  { src: "https://falling-sun.vercel.app/assets/unstop-0kx1fwA9.png", alt: "Unstop" },
  { src: "https://cdn.simpleicons.org/github/3d1a00", alt: "GitHub" },
  { src: "https://falling-sun.vercel.app/assets/xyz-CkDqFRe3.webp", alt: ".xyz Domains" },
]

const heroStats = ["24 HOURS (12+12)", "100% FREE", "UNDER 18", "30 TEAMS MAX"]

const qualifySteps = [
  { icon: <Zap className="w-6 h-6" />, step: "01", title: "Register Your Team", desc: "Sign up solo or with up to 3 friends. Under-18 only — no exceptions." },
  { icon: <Clock className="w-6 h-6" />, step: "02", title: "Show Up & Check In", desc: "Arrive at 9:00 AM with your ID. Get your wristband and workstation." },
  { icon: <Star className="w-6 h-6" />, step: "03", title: "Attend the Workshop", desc: "Hit the morning bootcamp — Godot, GitHub, quick-start tips." },
  { icon: <Users className="w-6 h-6" />, step: "04", title: "Lock Your Idea", desc: "At 11:15, lock your track and commit. No pivoting after this." },
  { icon: <CheckCircle2 className="w-6 h-6" />, step: "05", title: "Build & Submit", desc: "24 hours. Build it, polish it, submit before 14:00 on Day 2. Hard cutoff." },
]

const processSteps = [
  { icon: <Lightbulb className="w-6 h-6" />, step: "01", title: "Choose", desc: "Choose a problem statement or bring a half-formed thought." },
  { icon: <Code className="w-6 h-6" />, step: "02", title: "Build", desc: "Full tech-stack freedom — web, mobile, CLI, hardware, whatever works." },
  { icon: <BookOpen className="w-6 h-6" />, step: "03", title: "Learn", desc: "Mentorship + workshops to help you learn and ship." },
  { icon: <Rocket className="w-6 h-6" />, step: "04", title: "Show", desc: "Demo + judging at the end — show what you built." },
]

const rewards = [
  { icon: <Gift className="w-7 h-7" />, title: "Swag", desc: "Merch kits for top teams." },
  { icon: <Award className="w-7 h-7" />, title: "Certs", desc: "Certificates for all participants." },
  { icon: <Users className="w-7 h-7" />, title: "Mentors", desc: "Networking + mentorship access." },
]

const rules = [
  "Open to students under 18 only (Ages 13 to 18).",
  "Team size: 1 to 4 members.",
  "All work must be original — no pre-built projects.",
  "AI Usage: Max 40% AI-assisted work per project. All project descriptions must be human-written.",
  "Must include a working demo at submission.",
  "Source code must be submitted on public GitHub (You retain 100% project ownership).",
  "Shh, don't fully vibe code — it deducts points.",
  "Strict zero-tolerance policy on alcohol, smoking, vapes, weapons, or illegal substances.",
  "Signed parent/guardian consent & waiver required prior to entry.",
]

function SectionTitle({ children, accent }: { children: React.ReactNode, accent?: boolean }) {
  return (
    <div className="mb-12">
      <h2 className={`text-4xl md:text-5xl font-black tracking-tight text-[#2c2016] leading-tight ${markerFont.className}`}>
        {children}
      </h2>
      {accent && <div className="mt-3 h-1.5 w-16 rounded-full bg-[#c0392b]" />}
    </div>
  )
}

export default function Home() {
  const { scrollY } = useScroll()
  const heroOpacity = useTransform(scrollY, [0, 400], [1, 0])
  const heroY = useTransform(scrollY, [0, 400], [0, -80])
  const posterScale = useTransform(scrollY, [0, 500], [1, 1.08])

  return (
    <main className="min-h-screen relative z-10" style={{ background: 'linear-gradient(160deg, #f7f1e3 0%, #ede4d0 40%, #e8dcc8 100%)' }}>

      {/* ── Sidebar widgets ── */}
      <div className="fixed right-5 top-1/2 -translate-y-1/2 z-50 flex flex-col gap-3">
        <div className="bg-[#ede4d0] border-2 border-[#2c2016]/30 p-3 rounded-xl flex flex-col items-center gap-2 shadow-[4px_4px_0_rgba(44,32,22,0.15)] hover:shadow-[6px_6px_0_rgba(44,32,22,0.2)] transition-shadow">
          <span className="text-[9px] font-bold text-[#8b6340] uppercase tracking-widest text-center">Register</span>
          <div className="w-10 h-10 bg-[#ddd0b8] rounded-full flex items-center justify-center border border-[#2c2016]/20">
            <Lock className="w-4 h-4 text-[#8b6340]" />
          </div>
          <span className="text-[9px] font-bold text-[#8b6340] uppercase">Locked</span>
        </div>
        <div className="bg-[#ede4d0] border-2 border-[#2c2016]/30 p-3 rounded-xl flex flex-col items-center gap-2 shadow-[4px_4px_0_rgba(44,32,22,0.15)] hover:shadow-[6px_6px_0_rgba(44,32,22,0.2)] transition-shadow">
          <span className="text-[9px] font-bold text-[#8b6340] uppercase tracking-widest text-center">Time Left</span>
          <div className="font-black text-lg text-[#2c2016]/40 tracking-tighter">--:--</div>
          <span className="text-[9px] font-bold text-[#8b6340] uppercase flex items-center gap-1"><Lock className="w-2.5 h-2.5" />TBD</span>
        </div>
      </div>

      {/* ── HERO ── */}
      <section className="relative h-screen w-full flex items-center justify-center overflow-hidden">
        {/* Background: poster image + video */}
        <motion.div className="absolute inset-0 z-0" style={{ scale: posterScale }}>
          <div className="absolute inset-0 bg-[url('/falling-sun-poster.png')] bg-cover bg-center opacity-30" />
          <div
            aria-hidden="true"
            className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[70vw] max-w-[700px] aspect-square rounded-full blur-[120px] opacity-25 pointer-events-none"
            style={{ background: 'radial-gradient(circle, #7ce24a 0%, transparent 70%)' }}
          />
          <video autoPlay muted loop playsInline className="w-full h-full object-cover opacity-20 mix-blend-multiply">
            <source src="/Animate_pixel_art_sunset_scene_202608251027_gwr_video_mvp.mp4" type="video/mp4" />
          </video>
          <div className="absolute inset-0 bg-gradient-to-b from-[#f2ede4]/10 via-transparent to-[#f2ede4]" />
        </motion.div>

        <motion.div style={{ opacity: heroOpacity, y: heroY }} className="relative z-10 flex flex-col items-center text-center px-4">

          {/* 3D pop title */}
          <div className="hero-title cursor-pointer mb-4">
            <div className="hero-title-inner">
              <h1 className={`flex flex-col md:flex-row items-center justify-center gap-4 md:gap-8 text-[4rem] md:text-[9rem] uppercase select-none ${markerFont.className}`}>
                <span className="bg-[#7ce24a] text-[#c0392b] px-6 py-1 md:px-10 md:py-2 border-[5px] md:border-[7px] border-[#2c2016] -rotate-3 shadow-[-5px_5px_0_#2c2016] rounded-sm inline-block">
                  FALLING
                </span>
                <span className="text-[#2c2016] rotate-2 drop-shadow-[4px_4px_0_rgba(44,32,22,0.3)]">
                  SUN
                </span>
              </h1>
            </div>
          </div>

          <p className="text-[#5a3e2b] font-mono tracking-[0.3em] uppercase text-sm md:text-base font-semibold bg-[#ede4d0]/70 px-6 py-2 rounded-full border border-[#2c2016]/20 backdrop-blur-sm">
            Under-18 · 24-Hour · Software Hackathon
          </p>

          <div className="flex flex-wrap items-center justify-center gap-2 mt-5 max-w-md">
            {heroStats.map((stat, i) => (
              <span key={i} className="text-[10px] md:text-xs font-black tracking-widest uppercase bg-[#2c2016] text-[#f2ede4] px-3 py-1.5 rounded-full">
                {stat}
              </span>
            ))}
          </div>

          <a
            href="#contact"
            className="mt-7 inline-flex items-center gap-2 bg-[#c0392b] text-[#f2ede4] font-black px-8 py-4 rounded-xl border-2 border-[#2c2016] hover:bg-[#a53125] hover:scale-105 transition-all shadow-[4px_4px_0_rgba(44,32,22,0.4)] uppercase tracking-wide text-sm"
          >
            Register Your Team <span aria-hidden="true">→</span>
          </a>
        </motion.div>

        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10 animate-bounce">
          <ChevronDown className="w-8 h-8 text-[#8b6340]" />
        </div>
      </section>

      {/* ── WHY FALLING SUN ── */}
      <section className="py-24 px-6 md:px-16 max-w-6xl mx-auto relative">
        <motion.div initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }} viewport={{ once: true }}>
          <SectionTitle accent>Why <span className="text-[#c0392b]">Falling Sun?</span></SectionTitle>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-start">
          {/* Text */}
          <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.7, delay: 0.1 }} viewport={{ once: true }} className="space-y-6">
            <p className="text-xl md:text-2xl text-[#2c2016] font-medium leading-relaxed">
              Because the best ideas {"don't"} show up on schedule — they show up at{" "}
              <span className="font-black text-[#c0392b]">2 AM</span>, three energy drinks in, when {"everyone's"} stopped overthinking and started building.
            </p>
            <p className="text-lg text-[#5a3e2b] leading-relaxed border-l-4 border-[#c0392b] pl-5 italic">
              The sun falling {"isn't"} an ending.{" "}
              <span className="font-bold not-italic text-[#c0392b]">{"It's"} when the real work starts.</span>
            </p>
            <p className="text-base text-[#7a5c3e] leading-relaxed bg-[#ede4d0]/80 p-5 rounded-2xl border border-[#2c2016]/10">
              FallingSun is a 24-hour software hackathon for students under 18 who{"'"}d rather build than just talk about building. Over 24 hours, teams turn raw ideas into real, working projects — backed by mentors, proper infrastructure, and a room full of people who actually want to be there at 3 AM debugging.
            </p>
          </motion.div>

          {/* Comic panels stacked */}
          <div className="flex flex-col gap-6">
            <motion.div
              initial={{ opacity: 0, rotate: -3, y: 20 }}
              whileInView={{ opacity: 1, rotate: -2, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="comic-panel rounded-xl overflow-hidden border-4 border-[#2c2016] shadow-[6px_6px_0_#2c2016] -rotate-2"
            >
              <img src="/comic-idea.png" alt="Hour 1: The Idea Phase" className="w-full h-auto" />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, rotate: 3, y: 20 }}
              whileInView={{ opacity: 1, rotate: 2, y: 0 }}
              transition={{ duration: 0.6, delay: 0.35 }}
              viewport={{ once: true }}
              className="comic-panel rounded-xl overflow-hidden border-4 border-[#2c2016] shadow-[6px_6px_0_#2c2016] rotate-2"
            >
              <img src="/comic-stack.png" alt="Hour 6: Stack & Initial Setup" className="w-full h-auto" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── TAGLINE BAND ── */}
      <section className="py-20 bg-[#2c2016] relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[url('/falling-sun-poster.png')] bg-cover bg-center mix-blend-screen" />
        <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
          <h3 className={`text-5xl md:text-7xl font-black text-[#f2ede4] tracking-tight leading-tight mb-4 ${markerFont.className}`}>
            The sun falls.{" "}
            <span className="text-[#7ce24a]">Something rises.</span>
          </h3>
          <p className="text-[#c8b99a] text-lg max-w-2xl mx-auto leading-relaxed">
            A 24-hour hackathon for students under 18 — built on the belief that the most remarkable things aren{"'"}t made in daylight hours.
          </p>
        </div>
      </section>

      {/* ── HOW IT WORKS ── */}
      <section className="py-24 px-6 md:px-16 max-w-6xl mx-auto">
        <motion.div initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }} viewport={{ once: true }}>
          <SectionTitle accent>How It <span className="text-[#c0392b]">Works</span></SectionTitle>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {processSteps.map((s, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              viewport={{ once: true }}
              className="bg-[#ede4d0]/70 border border-[#2c2016]/15 rounded-xl p-6 flex flex-col gap-3"
            >
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-[#2c2016] text-[#f2ede4] rounded-lg flex items-center justify-center font-black text-sm shrink-0">
                  {s.step}
                </div>
                <span className="text-[#c0392b]">{s.icon}</span>
              </div>
              <h4 className="font-black text-[#2c2016] text-lg">{s.title}</h4>
              <p className="text-[#7a5c3e] text-sm leading-relaxed">{s.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ── HOW TO QUALIFY ── */}
      <section className="py-24 px-6 md:px-16 max-w-6xl mx-auto">
        <motion.div initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }} viewport={{ once: true }}>
          <SectionTitle accent>How to <span className="text-[#c0392b]">Qualify</span></SectionTitle>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-start">
          {/* Steps */}
          <div className="space-y-4">
            {qualifySteps.map((s, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                viewport={{ once: true }}
                className="qualify-step flex items-start gap-4 bg-[#ede4d0]/70 border border-[#2c2016]/15 rounded-xl p-5 cursor-default"
              >
                <div className="w-12 h-12 bg-[#2c2016] text-[#f2ede4] rounded-lg flex items-center justify-center shrink-0 font-black text-lg">
                  {s.step}
                </div>
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <span className="text-[#c0392b]">{s.icon}</span>
                    <h4 className="font-black text-[#2c2016] text-lg">{s.title}</h4>
                  </div>
                  <p className="text-[#7a5c3e] text-sm leading-relaxed">{s.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Comic panels */}
          <div className="flex flex-col gap-6">
            <motion.div
              initial={{ opacity: 0, rotate: 2, y: 20 }}
              whileInView={{ opacity: 1, rotate: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="comic-panel rounded-xl overflow-hidden border-4 border-[#2c2016] shadow-[6px_6px_0_#2c2016] rotate-1"
            >
              <img src="/comic-stack.png" alt="Stack & Setup" className="w-full h-auto" />
            </motion.div>
            <div className="bg-[#2c2016] text-[#f2ede4] rounded-2xl p-6 border-4 border-[#2c2016] shadow-[6px_6px_0_#c0392b] card-3d">
              <p className="text-sm font-bold text-[#7ce24a] uppercase tracking-widest mb-3">Beginner Friendly</p>
              <p className="text-lg font-medium leading-relaxed">
                We are <span className="font-black text-[#7ce24a]">100% beginner friendly!</span> Follow along with our guides and ask the community for help.
              </p>
              <div className="mt-4 flex gap-3">
                <Link href="#" className="inline-flex items-center gap-2 bg-[#7ce24a] text-[#2c2016] font-black px-4 py-2 rounded-lg text-sm hover:bg-[#6dd43d] transition-colors">
                  <MessageCircle className="w-4 h-4" /> Join WhatsApp
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── REWARDS ── */}
      <section className="py-24 px-6 md:px-16 max-w-5xl mx-auto">
        <motion.div initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }} viewport={{ once: true }}>
          <SectionTitle accent>Good work <span className="text-[#c0392b]">glows.</span></SectionTitle>
        </motion.div>
        <p className="text-[#7a5c3e] text-lg -mt-8 mb-10 max-w-xl">Swag, certificates, mentorship, and more — all the reasons to finish the thing.</p>

        <div className="grid sm:grid-cols-3 gap-6">
          {rewards.map((r, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              viewport={{ once: true }}
              className="bg-[#ede4d0]/70 border-2 border-[#2c2016]/15 rounded-2xl p-8 flex flex-col items-center text-center gap-3 hover:border-[#c0392b]/40 transition-colors"
            >
              <div className="w-14 h-14 rounded-full bg-[#2c2016] text-[#7ce24a] flex items-center justify-center">
                {r.icon}
              </div>
              <h4 className={`text-xl font-black text-[#2c2016] ${markerFont.className}`}>{r.title}</h4>
              <p className="text-sm text-[#7a5c3e] leading-relaxed">{r.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ── SPONSORS ── */}
      <section className="py-16 bg-[#ede4d0] border-y-2 border-[#2c2016]/10">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <p className="text-xs font-black text-[#8b6340] uppercase tracking-[0.4em] mb-2">Powered By & Supported By</p>
          <h3 className={`text-2xl font-black text-[#2c2016] mb-3 ${markerFont.className}`}>Powered by the community.</h3>
          <p className="text-sm text-[#7a5c3e] max-w-xl mx-auto mb-10">Sponsors and partners help us keep this event free and open to every student who wants to build.</p>
          <div className="flex flex-wrap items-center justify-center gap-10 md:gap-16">
            {sponsors.map((s, i) => (
              <motion.div key={i} whileHover={{ scale: 1.15, rotate: -3 }} transition={{ type: 'spring', stiffness: 300 }}>
                <img src={s.src} alt={s.alt} className="h-8 w-auto grayscale hover:grayscale-0 transition-all" />
              </motion.div>
            ))}
          </div>
          <div className="mt-10">
            <a href="#contact" className="inline-flex items-center gap-2 bg-[#2c2016] text-[#f2ede4] font-bold px-6 py-3 rounded-xl border-2 border-[#2c2016] hover:bg-[#c0392b] hover:border-[#c0392b] transition-colors shadow-[4px_4px_0_rgba(44,32,22,0.3)]">
              Contact Us to Sponsor →
            </a>
          </div>
        </div>
      </section>

      {/* ── SCHEDULE ── */}
      <section className="py-24 px-6 max-w-5xl mx-auto">
        <motion.div initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }} viewport={{ once: true }}>
          <SectionTitle accent>The <span className="text-[#c0392b]">24-Hour</span> Sprint</SectionTitle>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-10">
          {/* Day 1 */}
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} viewport={{ once: true }}
            className="card-3d bg-[#ede4d0] border-2 border-[#2c2016]/20 rounded-2xl p-7 shadow-[6px_6px_0_rgba(44,32,22,0.12)]">
            <h3 className={`text-2xl font-black mb-7 flex items-center gap-3 text-[#2c2016] ${markerFont.className}`}>
              <span className="w-9 h-9 rounded-full bg-[#c0392b] text-white flex items-center justify-center text-base font-black">1</span>
              Day One
            </h3>
            <div className="space-y-5">
              {[
                { t: "09:00", a: "Participant Check-in", d: "ID verification · Registration", tag: "ADMIN" },
                { t: "09:30", a: "Opening Ceremony + Rules", d: "Welcome · Rules · Judging", tag: "SYSTEM" },
                { t: "10:00", a: "Workshops / Bootcamp", d: "Godot · GitHub · Quick tips", tag: "LEARN" },
                { t: "11:15", a: "Idea Lock", d: "Choose track · Finalize idea", tag: "BUILD" },
                { t: "12:00", a: "Build Sprint", d: "Start building · Prototype", tag: "BUILD" },
                { t: "13:00", a: "Lunch Break", d: "Recharge & reset", tag: "PAUSE" },
                { t: "13:45", a: "Build Sprint", d: "Code · Design · Test", tag: "BUILD" },
                { t: "16:30", a: "Fun Activity", d: "Quick games · Team bonding", tag: "FUN" },
                { t: "17:00", a: "Mentor Check-in", d: "Progress check · Feedback", tag: "CHECK" },
                { t: "18:00", a: "Build Sprint", d: "Improve · Polish · Test", tag: "BUILD" },
                { t: "19:30", a: "Day 1 Wrap-up", d: "Updates · Tomorrow's plan", tag: "ADMIN" },
                { t: "20:00", a: "Day 1 Ends", d: "Rest up. Tomorrow you ship.", tag: "END" },
              ].map((item, i) => (
                <div key={i} className="flex gap-4 items-start group">
                  <span className="font-mono text-[#c0392b] font-bold text-sm w-12 shrink-0 pt-0.5">{item.t}</span>
                  <div className="flex-1 min-w-0">
                    <div className="flex flex-wrap items-center gap-2">
                      <p className="font-bold text-[#2c2016] group-hover:text-[#c0392b] transition-colors">{item.a}</p>
                      <span className="text-[9px] font-black tracking-widest uppercase text-[#8b6340] bg-[#2c2016]/5 border border-[#2c2016]/15 rounded-full px-2 py-0.5 shrink-0">{item.tag}</span>
                    </div>
                    <p className="text-xs text-[#8b6340]">{item.d}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Day 2 */}
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.15 }} viewport={{ once: true }}
            className="card-3d bg-[#ede4d0] border-2 border-[#2c2016]/20 rounded-2xl p-7 shadow-[6px_6px_0_rgba(44,32,22,0.12)]">
            <h3 className={`text-2xl font-black mb-7 flex items-center gap-3 text-[#2c2016] ${markerFont.className}`}>
              <span className="w-9 h-9 rounded-full bg-[#7ce24a] border-2 border-[#2c2016] text-[#2c2016] flex items-center justify-center text-base font-black">2</span>
              Day Two
            </h3>
            <div className="space-y-5">
              {[
                { t: "08:00", a: "Resume Builds", d: "Back to building", tag: "START", hot: false },
                { t: "09:00", a: "Final Development", d: "Final sprint · Testing · Polish", tag: "BUILD", hot: false },
                { t: "11:00", a: "Submission Opens", d: "Upload project & required files", tag: "SYSTEM", hot: false },
                { t: "12:30", a: "Lunch + Demo Prep", d: "Eat · Prepare your presentation", tag: "PAUSE", hot: false },
                { t: "14:00", a: "FINAL SUBMISSION DEADLINE", d: "Hard cutoff — no late submissions", tag: "DEADLINE", hot: true },
                { t: "14:00", a: "Presentations & Demos", d: "2–3 minutes per team", tag: "SYSTEM", hot: false },
                { t: "16:30", a: "Project Showcase", d: "Explore builds · Meet teams", tag: "FUN", hot: false },
                { t: "17:30", a: "Student Voting", d: "Fair community voting", tag: "VOTE", hot: false },
                { t: "18:00", a: "Results + Closing", d: "Winners · Special mentions", tag: "ADMIN", hot: false },
                { t: "19:00", a: "Closing Ceremony", d: "Awards · Photos · Finale", tag: "CLOSE", hot: false },
              ].map((item, i) => (
                <div key={i} className={`flex gap-4 items-start group ${item.hot ? 'bg-[#c0392b]/10 -mx-3 px-3 py-2 rounded-lg border border-[#c0392b]/30' : ''}`}>
                  <span className={`font-mono font-bold text-sm w-12 shrink-0 pt-0.5 ${item.hot ? 'text-[#c0392b] font-black' : 'text-[#c0392b]'}`}>{item.t}</span>
                  <div className="flex-1 min-w-0">
                    <div className="flex flex-wrap items-center gap-2">
                      <p className={`font-bold ${item.hot ? 'text-[#c0392b]' : 'text-[#2c2016] group-hover:text-[#c0392b]'} transition-colors`}>{item.a}</p>
                      <span className={`text-[9px] font-black tracking-widest uppercase rounded-full px-2 py-0.5 shrink-0 border ${item.hot ? 'text-[#c0392b] border-[#c0392b]/40 bg-[#c0392b]/10' : 'text-[#8b6340] border-[#2c2016]/15 bg-[#2c2016]/5'}`}>{item.tag}</span>
                    </div>
                    <p className="text-xs text-[#8b6340]">{item.d}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── ORGANIZERS ── */}
      <section className="py-20 bg-[#2c2016] overflow-hidden">
        <div className="text-center mb-12 px-6">
          <p className="text-xs font-black text-[#7ce24a] uppercase tracking-[0.4em] mb-2">Meet The Builders</p>
          <h2 className={`text-4xl md:text-5xl font-black text-[#f2ede4] ${markerFont.className}`}>
            Friendly eyes. <span className="text-[#7ce24a]">Big questions.</span>
          </h2>
          <p className="text-[#c8b99a] mt-3">The people making FallingSun happen.</p>
        </div>
        <div className="w-full h-[580px]">
          <WheelCarousel
            items={organizers}
            mode="dark"
            photoSide="right"
            photoAspect="1/1"
            photoWidth={32}
            contentWidth={1000}
            gap={40}
            radius={280}
            spacing={18}
            visibleItems={4}
            background="transparent"
            textColor="rgba(242,237,228,0.3)"
            selectedColor="#7ce24a"
            markerColor="#c0392b"
          />
        </div>

        <div className="max-w-3xl mx-auto mt-2 px-6">
          <p className="text-center text-xs font-black text-[#7ce24a]/70 uppercase tracking-[0.3em] mb-6">Mentors</p>
          <div className="flex flex-wrap justify-center gap-6">
            {mentors.map((m, i) => (
              <div key={i} className="flex items-center gap-3 bg-[#1a120b]/60 border border-[#f2ede4]/10 rounded-full pr-5 pl-2 py-2">
                <img src={m.image} alt={m.name} className="w-10 h-10 rounded-full object-cover" />
                <div className="text-left">
                  <p className="text-sm font-bold text-[#f2ede4]">{m.name}</p>
                  <p className="text-[10px] text-[#7ce24a] uppercase tracking-widest font-bold">{m.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── RULES ── */}
      <section id="rules" className="py-24 px-6 max-w-4xl mx-auto">
        <motion.div initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }} viewport={{ once: true }}>
          <SectionTitle accent>Play <span className="text-[#c0392b]">fair.</span></SectionTitle>
        </motion.div>
        <p className="text-[#7a5c3e] text-lg -mt-8 mb-10">Keep it fun, keep it original, keep it safe.</p>

        <ol className="grid sm:grid-cols-2 gap-4 list-none">
          {rules.map((r, i) => (
            <motion.li
              key={i}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: i * 0.05 }}
              viewport={{ once: true }}
              className="flex gap-3 items-start bg-[#ede4d0]/70 border border-[#2c2016]/15 rounded-xl p-4"
            >
              <span className="font-mono font-black text-[#c0392b] shrink-0 pt-0.5">{String(i + 1).padStart(2, "0")}</span>
              <span className="text-sm text-[#5a3e2b] leading-relaxed">{r}</span>
            </motion.li>
          ))}
        </ol>
      </section>

      {/* ── FAQ ── */}
      <section id="faq" className="py-24 px-6 max-w-3xl mx-auto">
        <motion.div initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }} viewport={{ once: true }}>
          <SectionTitle accent>FAQ</SectionTitle>
        </motion.div>
        <Accordion type="single" collapsible className="w-full space-y-3">
          {[
            { q: "Who can participate?", a: "Any student under the age of 18 with a passion for building. Whether you're a seasoned coder or just starting out — you're welcome here." },
            { q: "Code of Conduct", a: "Be respectful. Harassment of any kind will not be tolerated. Help each other, share knowledge, and build great things together." },
            { q: "What if I don't have a team?", a: "Don't worry! We'll have team-building sessions at the start so you can find other awesome builders to work with." },
            { q: "What should I bring?", a: "Laptop, charger, student ID, and your energy! We'll provide food, internet, and a workspace." },
            { q: "Is it free?", a: "Yes! Falling Sun is completely free to participate in. We handle the infrastructure so you focus on building." },
          ].map((item, i) => (
            <AccordionItem key={i} value={`item-${i}`} className="bg-[#ede4d0]/80 border-2 border-[#2c2016]/15 rounded-xl px-5 data-[state=open]:border-[#c0392b]/40 data-[state=open]:bg-[#ede4d0] transition-colors">
              <AccordionTrigger className="text-[#2c2016] font-bold text-base hover:text-[#c0392b] hover:no-underline">{item.q}</AccordionTrigger>
              <AccordionContent className="text-[#7a5c3e] leading-relaxed">{item.a}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </section>

      {/* ── CTA FOOTER ── */}
      <footer id="contact" className="py-24 px-6 bg-[#2c2016] relative overflow-hidden">
        <div className="absolute inset-0 opacity-5 bg-[url('/falling-sun-poster.png')] bg-cover bg-center" />
        <div className="max-w-4xl mx-auto text-center relative z-10 flex flex-col items-center">
          <p className="text-xs font-black text-[#7ce24a] uppercase tracking-[0.4em] mb-4">The Clock Is Ticking</p>
          <h2 className={`text-5xl md:text-7xl font-black text-[#f2ede4] mb-3 tracking-tight ${markerFont.className}`}>
            We Are Ready.
          </h2>
          <h2 className={`text-5xl md:text-7xl font-black text-[#c0392b] mb-8 tracking-tight ${markerFont.className}`}>
            Are You?
          </h2>
          <p className="text-xl text-[#c8b99a] mb-10 max-w-lg">Contact us for any kind of problem, question, or sponsorship opportunity.</p>
          <div className="flex flex-wrap justify-center gap-4">
            <a href="https://wa.me/" target="_blank" rel="noopener noreferrer"
              className="inline-flex items-center gap-3 bg-[#7ce24a] text-[#2c2016] font-black px-8 py-4 rounded-xl border-2 border-[#2c2016] hover:bg-[#6dd43d] transition-all hover:scale-105 shadow-[4px_4px_0_rgba(44,32,22,0.4)]">
              <MessageCircle className="w-5 h-5" /> Join WhatsApp Community
            </a>
            <a href="mailto:hello@fallingsun.dev"
              className="inline-flex items-center gap-3 bg-transparent text-[#f2ede4] font-black px-8 py-4 rounded-xl border-2 border-[#f2ede4]/30 hover:border-[#f2ede4] transition-all hover:scale-105">
              Email Us →
            </a>
          </div>

          <div className="mt-14 pt-8 border-t border-[#f2ede4]/10 w-full flex flex-col items-center gap-5">
            <p className={`text-lg text-[#f2ede4] ${markerFont.className}`}>
              FALLINGSUN — Build something worth showing.
            </p>
            <div className="flex flex-wrap justify-center gap-x-6 gap-y-3 text-xs font-bold uppercase tracking-widest text-[#c8b99a]">
              <a href="#contact" className="hover:text-[#7ce24a] transition-colors">Registration</a>
              <a href="#" className="inline-flex items-center gap-1.5 hover:text-[#7ce24a] transition-colors">
                <Github className="w-3.5 h-3.5" /> GitHub Repo
              </a>
              <a href="#faq" className="hover:text-[#7ce24a] transition-colors">Code of Conduct</a>
              <a href="#" className="hover:text-[#7ce24a] transition-colors">Guardian Consent Form</a>
              <a href="https://wa.me/" target="_blank" rel="noopener noreferrer" className="hover:text-[#7ce24a] transition-colors">Organiser Contact</a>
            </div>
          </div>
        </div>
      </footer>
    </main>
  )
}