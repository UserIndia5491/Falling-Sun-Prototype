"use client"

import React from "react"
import Link from "next/link"
import { motion, useScroll, useTransform } from "framer-motion"
import { Fredoka, DM_Sans } from "next/font/google"
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

const fredoka = Fredoka({ subsets: ['latin'], weight: ['400','500','600','700'] })
const dmSans = DM_Sans({ subsets: ['latin'], weight: ['400','500','700'] })

const organizers = [
 { label: "Tanmay", image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=800&q=80", imageAlt: "Tanmay" },
 { label: "Kartik Patel", image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&q=80", imageAlt: "Kartik" },
 { label: "Ayush Sharma", image: "https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?w=800&q=80", imageAlt: "Ayush" },
 { label: "Harsh", image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=800&q=80", imageAlt: "Harsh" },
 { label: "Swaransh", image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=800&q=80", imageAlt: "Swaransh" },
 { label: "Roshan", image: "https://api.dicebear.com/7.x/initials/svg?seed=Roshan&backgroundColor=c0392b", imageAlt: "Roshan" },
 { label: "Yuvraj", image: "https://api.dicebear.com/7.x/initials/svg?seed=Yuvraj&backgroundColor=7ce24a", imageAlt: "Yuvraj" },
]

const mentors = [
 { name: "Aniket Gabba", role: "Mentor", image: "https://api.dicebear.com/7.x/initials/svg?seed=Aniket+Gabba&backgroundColor=8b6340" },
 { name: "Anand", role: "Mentor", image: "https://api.dicebear.com/7.x/initials/svg?seed=Anand&backgroundColor=8b6340" },
]

const sponsorsRevealed = false

const heroStats = ["24 HOURS (12+12)", "100% FREE", "UNDER 18"]

const qualifySteps = [
 { icon: <Zap className="w-6 h-6" />, step: "01", title: "Assemble Your Crew", desc: "Lock in solo or squad up to 4. Under-18 only — no gatekeeping, just pure builder energy." },
 { icon: <Clock className="w-6 h-6" />, step: "02", title: "Storm the Gates", desc: "Be there 9AM sharp with ID. Snag your wristband, claim your battlestation — vibe check passed." },
 { icon: <Star className="w-6 h-6" />, step: "03", title: "Power-Up Workshop", desc: "60-min speedrun: Godot, GitHub, ship-hacks. Go from 'idk' to 'I built that' before lunch." },
 { icon: <Users className="w-6 h-6" />, step: "04", title: "Lock & Load", desc: "11:15 AM — idea LOCKED. Commit your track. No pivots, no second-guessing. This is your lane." },
 { icon: <CheckCircle2 className="w-6 h-6" />, step: "05", title: "Build Like Hell", desc: "24 hours. Pure flow state. Push, polish, ship before 2PM Day 2 — clock hits zero, repo freezes." },
]

const processSteps = [
 { icon: <Lightbulb className="w-6 h-6" />, step: "01", title: "Spark", desc: "Snag a wild prompt or bring that half-baked note-app idea. If it excites you, it counts." },
 { icon: <Code className="w-6 h-6" />, step: "02", title: "Ship", desc: "No stack jail — web, mobile, CLI, hardware, AI. If it runs, it roars. Ship fast, fix faster." },
 { icon: <BookOpen className="w-6 h-6" />, step: "03", title: "Level Up", desc: "Mentors on tap + crash-courses that turn bugs into breakthroughs while you build." },
 { icon: <Rocket className="w-6 h-6" />, step: "04", title: "Flex", desc: "Own the stage. 3 minutes to demo, dazzle, and make the room remember your name." },
]

const rewards = [
 { icon: <Gift className="w-7 h-7" />, title: "Drip Drop", desc: "Limited-run merch that hits different — wear the proof you shipped at sunset." },
 { icon: <Award className="w-7 h-7" />, title: "Certified Legend", desc: "Share-worthy certs + LinkedIn flex your future self will thank you for." },
 { icon: <Users className="w-7 h-7" />, title: "Plug-In", desc: "DM-access to founders & mentors — the network that actually replies." },
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


const codeOfConduct = [
  {
    n: "01",
    title: "Who This Is For",
    body: "Falling Sun is a 24-hour, on-site software hackathon for students under 18. By registering, you\u0027re agreeing to this Code of Conduct and to go along with the calls we make as organizers — we\u0027ll always try to be fair about it. Getting a spot at Falling Sun is a privilege, not a guarantee — so if someone\u0027s conduct crosses a line, we reserve the right to pull them (or their team) from the event at any point."
  },
  {
    n: "02",
    title: "Who Can Join",
    body: "Age: 13 to 18 years \u2022 Team size: up to 4 members. Give us real info when you register — fake details can get you disqualified."
  },
  {
    n: "03",
    title: "How the Event Works",
    body: "Falling Sun runs as a single 24-hour, on-site hackathon. You check in, get the theme, and start building right there. Mentorship, workshops, food, and hacking all happen through the 24 hours. Submissions close, then it\u0027s live demos + judging. We\u0027re planning for up to 30 teams to start, with room to grow depending on sponsors and space. Selection: Before final confirmation for the offline round, we\u0027ll take a look at teams\u0027 GitHub / past project work — just to get a sense of where you\u0027re coming from as builders. This isn\u0027t about gatekeeping, it\u0027s about making sure the event is a good fit both ways."
  },
  {
    n: "04",
    title: "The Basics",
    body: "Be a decent human. Treat everyone with respect — teammates, other teams, mentors, judges, volunteers, everyone. Bring good energy and sportsmanship, win or lose. Follow calls made by organizers, volunteers, judges, and venue staff. Respect differences — age, gender, language, religion, background, all of it. Hard no: harassment, bullying, discrimination, threats, verbal or physical abuse, sexual harassment, offensive jokes, sabotaging another team\u0027s work, impersonation, leaking someone\u0027s private info, spamming/trolling, or messing with results. Break these and you\u0027re looking at a warning, disqualification, getting asked to leave, or a ban from future events."
  },
  {
    n: "05",
    title: "What Organizers Can Do",
    body: "We try to be fair and reasonable, but we do reserve the right to: Give warnings, reject a registration, disqualify a person or team, remove someone from Discord, WhatsApp, or the venue itself, tweak the schedule or process if something needs to change. Once we\u0027ve reviewed something and made a call, that call is final."
  },
  {
    n: "06",
    title: "Your Project & Submissions",
    body: "Build original stuff, hit your deadlines, and play fair. Your project can be made public for transparency — that doesn\u0027t mean you lose ownership of it. It\u0027s still yours. Copying another team\u0027s project, using stolen code, using copyrighted material illegally, gaming the judging, or harassing judges/organizers = instant disqualification."
  },
  {
    n: "07",
    title: "AI Usage Policy",
    body: "Yes, you can use AI tools — ChatGPT, Claude, Gemini, Cursor, GitHub Copilot, whatever helps you build. We\u0027re not anti-AI. Max 40% AI-assisted work is permitted per project. The rest should genuinely be you and your team. Any write-up / description you submit about your project needs to be written by you — not AI. Leaning too hard on AI-generated code can cost you on judging, even within the limit. Judges and organizers will use their own judgment here — if a project feels like it has little real human thinking behind it, that\u0027ll reflect in the score. We care about real building, real learning, and real creativity — that\u0027s the whole point of Falling Sun."
  },
  {
    n: "08",
    title: "Judging",
    body: "You\u0027ll demo your project live. Judging looks at technical depth, originality, execution, and how well you turned your idea into something real and working. Scoring is a mix of the official judging panel and independent review from organizers, with community input where relevant. We keep exact scoring weightage private — just to keep things fair and avoid gaming the system. Judging decisions are final."
  },
  {
    n: "09",
    title: "Dress Code",
    body: "There isn\u0027t one. Wear whatever you\u0027re comfortable building in — just keep it appropriate, nothing hateful or offensive, and nothing that could disturb or endanger anyone else."
  },
  {
    n: "10",
    title: "Photos & Videos",
    body: "By showing up, you\u0027re okay with us taking photos, videos, and interviews during the event, and using that footage on social media, the website, and other promo stuff. No payment involved for that. Got privacy concerns? Just flag it to us before the event and we\u0027ll sort it."
  },
  {
    n: "11",
    title: "At the Venue",
    body: "Respect the space, follow safety instructions, keep it clean, and be cool with staff and volunteers. Only registered participants and approved folks get in. We may do basic bag checks / security checks — cooperating keeps things smooth for everyone. Damage the venue, and you\u0027re responsible for it (and probably asked to leave)."
  },
  {
    n: "12",
    title: "Parent/Guardian Consent",
    body: "Since you\u0027re attending in person and you\u0027re under 18, you\u0027ll need a signed parent/guardian consent + liability waiver — we\u0027ll send this to confirmed teams ahead of time. No form, no entry. If you\u0027re under 18, a parent or guardian needs to sign off."
  },
  {
    n: "13",
    title: "Zero Tolerance — Substances & Dangerous Items",
    body: "Falling Sun is a space for people 18 and under, so this one\u0027s non-negotiable, no exceptions — even for anyone on the edge of 18: Alcohol, cigarettes, vapes, tobacco, gutka/pan masala, nicotine products, any illegal or recreational drugs, weapons, firearms, explosives, firecrackers, dangerous chemicals — none of it comes inside the venue. Doesn\u0027t matter if it\u0027s legal for adults elsewhere — not here. If someone\u0027s found carrying, using, sharing, or promoting any of this, they\u0027re getting removed immediately, disqualified, and if needed, we\u0027ll loop in venue authorities or the police."
  },
  {
    n: "14",
    title: "Staying Safe",
    body: "No fights, no reckless behavior, no damaging property, no putting others at risk, no bringing hazardous stuff, no messing with emergency procedures. If anyone\u0027s safety is on the line, we\u0027ll step in immediately."
  },
  {
    n: "15",
    title: "Emergency Info",
    body: "For safety, we\u0027ll need a parent/guardian name and an emergency contact number from every participant, plus anything else we ask for at registration."
  },
  {
    n: "16",
    title: "Playing Fair",
    body: "No plagiarism, stolen code, bought projects, recycled old projects without telling us, fake demos, cooked-up results, edited screenshots, lying about your work, undisclosed help from outside the team, gaming scores, fake identities, or trying to influence judges/organizers unfairly. Any of this = instant disqualification."
  },
  {
    n: "17",
    title: "Cybersecurity",
    body: "Don\u0027t use malware, phishing, credential theft, unauthorized access, DDoS attacks, or attack anyone\u0027s infrastructure — participants, judges, organizers, or venue systems included. This can get you disqualified immediately and possibly reported."
  },
  {
    n: "18",
    title: "Where This Applies",
    body: "Be cool on Discord, WhatsApp, email, social media, and in person. Stuff that happens outside the venue but is tied to the event still counts if it crosses a line here."
  },
  {
    n: "19",
    title: "Who Owns Your Project",
    body: "You do. 100%. By taking part, you\u0027re just giving Falling Sun permission to show off, archive, and promote your project for event/promo purposes — that\u0027s it. Ownership stays with you."
  },
  {
    n: "20",
    title: "Team Drama",
    body: "If your team has internal disagreements about prizes, ownership, or who-did-what, that\u0027s between you and your teammates — we\u0027re not the referee for that one."
  },
  {
    n: "21",
    title: "Prizes",
    body: "We reserve the right to tweak prize structures or sponsor perks if circumstances change."
  },
  {
    n: "22",
    title: "No Fees",
    body: "Falling Sun is free to join — no registration fee, so no refund policy needed either."
  },
  {
    n: "23",
    title: "Getting There",
    body: "You\u0027re responsible for your own travel, food outside the venue, and any other personal costs unless we say otherwise. We\u0027re not covering travel or stay."
  },
  {
    n: "24",
    title: "If Tech Breaks",
    body: "We\u0027re not liable for internet outages, power cuts, or software hiccups beyond our control. Bring a power bank or hotspot as backup if you can — just in case."
  },
  {
    n: "25",
    title: "If Things Go Sideways (Force Majeure)",
    body: "If something genuinely outside our control comes up — natural disasters, government restrictions, venue issues, whatever — we may need to postpone, change, or cancel the event."
  },
  {
    n: "26",
    title: "Liability",
    body: "You\u0027re attending at your own risk. We\u0027re not responsible for lost belongings, device damage, or injuries from negligence or things outside our reasonable control. Any medical or transport needs are on you/your guardians, except where the law says otherwise."
  },
  {
    n: "27",
    title: "Jurisdiction",
    body: "Any disputes about Falling Sun fall under the courts of Delhi NCR, India."
  },
  {
    n: "28",
    title: "Updates",
    body: "We might update these rules as needed — the latest version is always the one that applies."
  },
  {
    n: "29",
    title: "Final Word",
    body: "We (organizers) get to interpret these rules, sort out disputes, look into any issues, and remove anyone if needed, at any point during the event. Once we\u0027ve made a call, that\u0027s final. By registering for Falling Sun, you\u0027re saying you\u0027ve read this and you\u0027re in. \u2600 Build. Ship. Rise. — responsibly."
  },
]

function SectionTitle({ children, accent }: { children: React.ReactNode, accent?: boolean }) {
 return (
 <div className="mb-12 group">
 <h2 className={`text-4xl md:text-5xl font-black tracking-tight text-[#2c2016] leading-tight ${fredoka.className}`}>
 {children}
 </h2>
 {accent && <div className="mt-3 h-1.5 w-16 rounded-full bg-[#c0392b] group-hover:w-28 transition-all duration-500 ease-[cubic-bezier(0.34,1.56,0.64,1)] shadow-[0_0_10px_rgba(192,57,43,0.4)]" />}
 </div>
 )
}

export default function Home() {
 const { scrollY } = useScroll()
 const heroOpacity = useTransform(scrollY, [0, 400], [1, 0])
 const heroY = useTransform(scrollY, [0, 400], [0, -80])
 const posterScale = useTransform(scrollY, [0, 500], [1, 1.08])

  return (
  <main className={`min-h-screen relative z-10 ${dmSans.className}`} style={{ background: 'linear-gradient(160deg, #f7f1e3 0%, #ede4d0 40%, #e8dcc8 100%)' }}>

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
 {/* Background: full-screen mp4 video */}
 <motion.div className="absolute inset-0 z-0" style={{ scale: posterScale }}>
 <video autoPlay muted loop playsInline className="w-full h-full object-cover">
 <source src="/Animate_pixel_art_sunset_scene_202608251027_gwr_video_mvp.mp4" type="video/mp4" />
 </video>
 <div
 aria-hidden="true"
 className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[70vw] max-w-[700px] aspect-square rounded-full blur-[100px] opacity-20 pointer-events-none"
 style={{ background: 'radial-gradient(circle, #7ce24a 0%, transparent 70%)' }}
 />
 {/* Soft overlay for text readability */}
 <div className="absolute inset-0 bg-gradient-to-b from-[#f2ede4]/30 via-[#f2ede4]/40 to-[#f2ede4]" />
 <div className="absolute inset-0 bg-[#f2ede4]/10" />
 </motion.div>

 <motion.div style={{ opacity: heroOpacity, y: heroY }} className="relative z-10 flex flex-col items-center text-center px-4">

 {/* 3D pop title */}
 <div className="hero-title cursor-pointer mb-4">
 <div className="hero-title-inner">
 <h1 className={`flex flex-col md:flex-row items-center justify-center gap-4 md:gap-8 text-[4rem] md:text-[9rem] uppercase select-none ${fredoka.className}`}>
 <span className="bg-[#7ce24a] text-[#c0392b] px-6 py-1 md:px-10 md:py-2 border-[5px] md:border-[7px] border-[#2c2016] -rotate-3 shadow-[-5px_5px_0_#2c2016] rounded-sm inline-block relative overflow-hidden badge-shine">
 FALLING
 </span>
 <span className="text-[#2c2016] rotate-2 drop-shadow-[4px_4px_0_rgba(44,32,22,0.3)]">
 SUN
 </span>
 </h1>
 </div>
 </div>

 <p className="text-[#5a3e2b] font-mono tracking-[0.3em] uppercase text-sm md:text-base font-semibold bg-[#ede4d0]/70 px-6 py-2 rounded-full border border-[#2c2016]/20 backdrop-blur-sm">
 Under-18 · 24-Hour · <span className="text-[#c0392b] font-black">Ship-Or-Die</span> Hackathon
 </p>

 <div className="flex flex-wrap items-center justify-center gap-2 mt-5 max-w-md">
 {heroStats.map((stat, i) => (
 <span key={i} className="text-[10px] md:text-xs font-black tracking-widest uppercase bg-[#2c2016] text-[#f2ede4] px-3 py-1.5 rounded-full badge-shine relative overflow-hidden">
 {stat}
 </span>
 ))}
 </div>

 <a
 href="#contact"
 className="mt-7 inline-flex items-center gap-2 bg-[#c0392b] text-[#f2ede4] font-black px-8 py-4 rounded-xl border-2 border-[#2c2016] hover:bg-[#a53125] hover:scale-105 transition-all shadow-[4px_4px_0_rgba(44,32,22,0.4)] uppercase tracking-wide text-sm group badge-shine relative overflow-hidden"
 >
 <span className="relative z-10 flex items-center gap-2">Ignite Your Team <span aria-hidden="true" className="group-hover:translate-x-1 transition-transform">→</span></span>
 </a>
          <p className={`mt-3 text-[11px] font-mono text-[#8b6340] tracking-widest uppercase opacity-70 ${dmSans.className}`}>Limited spots · first-come, first-ship ✦</p>
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
 Because legendary ideas {"don't"} RSVP — they <span className=" font-black">crash in at <span className=" text-[#c0392b]">2 AM</span></span>, wired on caffeine & chaos, when you finally stop overthinking and <span className="underline-scribble font-black text-[#c0392b]">start shipping.</span>
 </p>
 <p className="text-lg text-[#5a3e2b] leading-relaxed border-l-4 border-[#c0392b] pl-5 italic bg-gradient-to-r from-[#ede4d0]/60 to-transparent py-2 pr-3 rounded-r-xl">
 The sun dipping {"isn't"} the finish line.{" "}
 <span className="font-black not-italic text-[#c0392b]">{"It's"} the ignition.</span>{" "}
 That amber hour when daydreamers clock out and builders light up.
 </p>
 <p className="text-base text-[#5a3e2b] leading-relaxed bg-[#ede4d0]/80 p-5 rounded-2xl border border-[#2c2016]/10 shadow-[4px_4px_0_rgba(44,32,22,0.06)]">
 <span className="font-black text-[#2c2016]">FallingSun</span> is a <span className="bg-[#7ce24a] text-[#2c2016] px-1.5 py-0.5 rounded font-black text-sm">24-hour pressure-cooker</span> for under-18s who'd rather <span className="">ship than yap</span>. Turn raw sparks into working products — backed by pro mentors, battle-tested infra, and a room buzzing at 3 AM like a rave for debuggers.
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
 <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#7ce24a]/5 to-transparent" />
 <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
 <h3 className={`text-5xl md:text-7xl font-black tracking-tight leading-tight mb-4 ${fredoka.className}`}>
 <span className="text-[#f2ede4]">The sun falls.</span>{" "}
 <span className="text-[#c0392b]">Something rises.</span>
 </h3>
 <p className="text-[#c8b99a] text-lg max-w-2xl mx-auto leading-relaxed">
 A 24-hour <span className="text-[#7ce24a] font-black">ship-or-die</span> sprint for teens who build at night and <span className="underline-scribble text-[#f2ede4] font-bold">flex by sunrise</span> — because the best demos are born after dark.
 </p>
 <div className="mt-6 flex flex-wrap justify-center gap-2 text-[10px] font-mono tracking-widest uppercase">
 <span className="px-3 py-1 rounded-full bg-[#7ce24a] text-[#2c2016] font-black">Build After Dark</span>
 <span className="px-3 py-1 rounded-full border border-[#f2ede4]/20 text-[#f2ede4]/70">Ship Before Sunrise</span>
 </div>
 </div>
 </section>

 {/* ── HOW IT WORKS ── */}
 <section className="py-24 px-6 md:px-16 max-w-6xl mx-auto">
 <motion.div initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }} viewport={{ once: true }}>
 <SectionTitle accent>How It <span className="text-[#c0392b]">Works</span></SectionTitle>
 </motion.div>
 <p className="text-[#7a5c3e] -mt-8 mb-10 max-w-xl">Four moves. Zero fluff. From spark to stage — <span className="font-black text-[#2c2016]">here's the playbook.</span></p>

 <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
 {processSteps.map((s, i) => (
 <motion.div
 key={i}
 initial={{ opacity: 0, y: 20 }}
 whileInView={{ opacity: 1, y: 0 }}
 transition={{ duration: 0.5, delay: i * 0.1 }}
 viewport={{ once: true }}
 className="bg-[#ede4d0]/70 border border-[#2c2016]/15 rounded-xl p-6 flex flex-col gap-3 hover:bg-[#ede4d0] hover:border-[#c0392b]/30 hover:shadow-[4px_4px_0_rgba(44,32,22,0.1)] transition-all group"
 >
 <div className="flex items-center gap-3">
 <div className="w-10 h-10 bg-[#2c2016] text-[#f2ede4] rounded-lg flex items-center justify-center font-black text-sm shrink-0 group-hover:bg-[#c0392b] transition-colors">
 {s.step}
 </div>
 <span className="text-[#c0392b] group-hover:scale-110 transition-transform">{s.icon}</span>
 </div>
 <h4 className="font-black text-[#2c2016] text-lg animated-underline self-start">{s.title}</h4>
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
 <p className="text-[#7a5c3e] -mt-8 mb-8 max-w-xl">No essays. No grades. Just <span className="font-black text-[#c0392b]">show up, lock in, ship hard.</span></p>

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
 className="qualify-step flex items-start gap-4 bg-[#ede4d0]/70 border border-[#2c2016]/15 rounded-xl p-5 cursor-default group"
 >
 <div className="w-12 h-12 bg-[#2c2016] text-[#f2ede4] rounded-lg flex items-center justify-center shrink-0 font-black text-lg group-hover:bg-[#c0392b] transition-colors">
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
 <div className="bg-[#2c2016] text-[#f2ede4] rounded-2xl p-6 border-4 border-[#2c2016] shadow-[6px_6px_0_#c0392b] card-3d relative overflow-hidden">
 <div className="absolute top-0 right-0 w-20 h-20 bg-[#7ce24a]/10 rounded-full blur-2xl" />
 <p className="text-sm font-black text-[#7ce24a] uppercase tracking-widest mb-3 flex items-center gap-2">✦ Beginner Friendly ✦</p>
 <p className="text-lg font-medium leading-relaxed relative">
 We are <span className="font-black text-[#7ce24a]">100% beginner proof!</span> No gatekeeping — just guides, mentors, and a community that <span className="underline-scribble">has your back</span> at 2 AM.
 </p>
 <div className="mt-4 flex gap-3">
 <Link href="#" className="inline-flex items-center gap-2 bg-[#7ce24a] text-[#2c2016] font-black px-4 py-2 rounded-lg text-sm hover:bg-[#6dd43d] transition-colors shadow-[3px_3px_0_rgba(0,0,0,0.2)]">
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
 <p className="text-[#7a5c3e] text-lg -mt-8 mb-10 max-w-xl">Not just applause — <span className="font-black text-[#2c2016] bg-[#7ce24a]/30 px-1.5 rounded">drip, proof, and plug-ins</span> that outlast the demo.</p>

 <div className="grid sm:grid-cols-3 gap-6">
 {rewards.map((r, i) => (
 <motion.div
 key={i}
 initial={{ opacity: 0, y: 20 }}
 whileInView={{ opacity: 1, y: 0 }}
 transition={{ duration: 0.5, delay: i * 0.1 }}
 viewport={{ once: true }}
 className="bg-[#ede4d0]/70 border-2 border-[#2c2016]/15 rounded-2xl p-8 flex flex-col items-center text-center gap-3 hover:border-[#c0392b]/40 hover:bg-[#ede4d0] hover:shadow-[4px_4px_0_rgba(44,32,22,0.08)] transition-all group"
 >
 <div className="w-14 h-14 rounded-full bg-[#2c2016] text-[#7ce24a] flex items-center justify-center group-hover:scale-110 group-hover:bg-[#c0392b] group-hover:text-[#f2ede4] transition-all">
 {r.icon}
 </div>
 <h4 className={`text-xl font-black text-[#2c2016] ${fredoka.className}`}>{r.title}</h4>
 <p className="text-sm text-[#7a5c3e] leading-relaxed">{r.desc}</p>
 </motion.div>
 ))}
 </div>
 </section>

 {/* ── SPONSORS ── */}
      <section className="py-20 md:py-28 bg-[#ede4d0] border-y-2 border-[#2c2016]/10">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <p className="text-xs font-black text-[#8b6340] uppercase tracking-[0.4em] mb-3">Powered By & Supported By</p>
          <h3 className={`text-3xl md:text-4xl font-black text-[#2c2016] mb-4 ${fredoka.className}`}>Fuel the fall. <span className="text-[#c0392b]">Power the rise.</span></h3>
          <p className="text-sm md:text-base text-[#7a5c3e] max-w-2xl mx-auto mb-12">Our sponsors kill the paywall — <span className="font-black text-[#2c2016]">100% free</span> for every teen who wants to build. No tickets, just talent.</p>
          <div className="inline-flex flex-col items-center gap-4 bg-white border-2 border-dashed border-[#2c2016]/20 rounded-2xl px-10 py-12 shadow-[6px_6px_0_rgba(44,32,22,0.08)] max-w-xl mx-auto">
            <div className="w-16 h-16 rounded-2xl bg-[#2c2016] flex items-center justify-center">
              <span className="text-2xl">✦</span>
            </div>
            <h4 className={`text-2xl md:text-3xl font-black text-[#2c2016] tracking-tight ${fredoka.className}`}>Sponsors to be revealed</h4>
            <p className={`text-sm text-[#7a5c3e] leading-relaxed ${dmSans.className}`}>We&apos;re locking in partners who believe in teen builders. Stay tuned — big names dropping soon.</p>
            <p className="text-[10px] font-black tracking-[0.3em] uppercase text-[#8b6340] mt-2">Powered by Unstop — more to come</p>
          </div>
          <div className="mt-12">
            <a href="#contact" className="inline-flex items-center gap-2 bg-[#2c2016] text-[#f2ede4] font-bold px-8 py-4 rounded-xl border-2 border-[#2c2016] hover:bg-[#c0392b] hover:border-[#c0392b] transition-colors shadow-[4px_4px_0_rgba(44,32,22,0.3)] group text-sm">
              Back the Builders <span className="group-hover:translate-x-1 transition-transform">→</span>
            </a>
          </div>
        </div>
      </section>

 {/* ── SCHEDULE ── */}
 <section className="py-24 px-6 max-w-5xl mx-auto">
 <motion.div initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }} viewport={{ once: true }}>
 <SectionTitle accent>The <span className="text-[#c0392b]">24-Hour</span> Sprint</SectionTitle>
 </motion.div>
 <p className="text-[#7a5c3e] -mt-8 mb-10 max-w-xl">Two days. One ship window. <span className="font-black text-[#c0392b]">Every minute counts.</span></p>

 <div className="grid md:grid-cols-2 gap-10">
 {/* Day 1 */}
 <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} viewport={{ once: true }}
 className="card-3d bg-[#ede4d0] border-2 border-[#2c2016]/20 rounded-2xl p-7 shadow-[6px_6px_0_rgba(44,32,22,0.12)]">
 <h3 className={`text-2xl font-black mb-7 flex items-center gap-3 text-[#2c2016] ${fredoka.className}`}>
 <span className="w-9 h-9 rounded-full bg-[#c0392b] text-white flex items-center justify-center text-base font-black">1</span>
 Day One — <span className="text-[#c0392b]">Ignite</span>
 </h3>
 <div className="space-y-5">
 {[
 { t: "09:00", a: "Participant Check-in", d: "ID verification · Registration · Claim your corner", tag: "ADMIN" },
 { t: "09:30", a: "Opening Ceremony + Rules", d: "Welcome · Rules · Judging tea ☕", tag: "SYSTEM" },
 { t: "10:00", a: "Workshops / Bootcamp", d: "Godot · GitHub · Ship-hack speedruns", tag: "LEARN" },
 { t: "11:15", a: "Idea Lock 🔒", d: "Choose track · Finalize idea — no backsies", tag: "BUILD" },
 { t: "12:00", a: "Build Sprint", d: "Prototype mode: ON. Go wild.", tag: "BUILD" },
 { t: "13:00", a: "Lunch Break", d: "Refuel. Touch grass. Plot comeback.", tag: "PAUSE" },
 { t: "13:45", a: "Build Sprint", d: "Code · Design · Break · Fix · Repeat", tag: "BUILD" },
 { t: "16:30", a: "Fun Activity", d: "Quick games · Energy spike · Memes IRL", tag: "FUN" },
 { t: "17:00", a: "Mentor Check-in", d: "Feedback that actually helps you ship", tag: "CHECK" },
 { t: "18:00", a: "Build Sprint", d: "The golden hour — polish till it shines", tag: "BUILD" },
 { t: "19:30", a: "Day 1 Wrap-up", d: "Standup · Plan the night strike", tag: "ADMIN" },
 { t: "20:00", a: "Day 1 Ends", d: "Rest. Recharge. Tomorrow you ship. 🌙", tag: "END" },
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
 <h3 className={`text-2xl font-black mb-7 flex items-center gap-3 text-[#2c2016] ${fredoka.className}`}>
 <span className="w-9 h-9 rounded-full bg-[#7ce24a] border-2 border-[#2c2016] text-[#2c2016] flex items-center justify-center text-base font-black">2</span>
 Day Two — <span className="text-[#c0392b]">Ship</span>
 </h3>
 <div className="space-y-5">
 {[
 { t: "08:00", a: "Resume Builds", d: "Coffee. Code. Conquer.", tag: "START", hot: false },
 { t: "09:00", a: "Final Development", d: "Kill bugs · Add shine · Test like mad", tag: "BUILD", hot: false },
 { t: "11:00", a: "Submission Opens", d: "Upload build + docs + demo link", tag: "SYSTEM", hot: false },
 { t: "12:30", a: "Lunch + Demo Prep", d: "Eat · Breathe · Rehearse your flex", tag: "PAUSE", hot: false },
 { t: "14:00", a: "FINAL SUBMISSION DEADLINE", d: "Hard cutoff — no late merges, no mercy ⏰", tag: "DEADLINE", hot: true },
 { t: "14:00", a: "Presentations & Demos", d: "3 min to own the room — make it count", tag: "SYSTEM", hot: false },
 { t: "16:30", a: "Project Showcase", d: "Wander. Play. Steal ideas (with love).", tag: "FUN", hot: false },
 { t: "17:30", a: "Student Voting", d: "Peer power — vote for what moved you", tag: "VOTE", hot: false },
 { t: "18:00", a: "Results + Closing", d: "Winners, shouts & standing ovations", tag: "ADMIN", hot: false },
 { t: "19:00", a: "Closing Ceremony", d: "Awards · Photos · The afterglow ✨", tag: "CLOSE", hot: false },
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
 <p className="text-xs font-black text-[#7ce24a] uppercase tracking-[0.4em] mb-2">Meet The Builders ✦</p>
 <h2 className={`text-4xl md:text-5xl font-black text-[#f2ede4] ${fredoka.className}`}>
 Friendly eyes. <span className="text-[#7ce24a]">Savage talent.</span>
 </h2>
 <p className="text-[#c8b99a] mt-3">The crew turning moonlight into <span className="text-[#7ce24a] font-bold">momentum.</span> <span className="hidden sm:inline text-[#f2ede4]/50">← drag to meet all →</span></p>
 </div>
 <div className="w-full h-[520px]">
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
 <p className="text-center text-xs font-black text-[#7ce24a]/70 uppercase tracking-[0.3em] mb-6">Mentors — Your Secret Weapons</p>
 <div className="flex flex-wrap justify-center gap-6">
 {mentors.map((m, i) => (
 <div key={i} className="flex items-center gap-3 bg-[#1a120b]/60 border border-[#f2ede4]/10 rounded-full pr-5 pl-2 py-2 hover:border-[#7ce24a]/40 hover:bg-[#1a120b] transition-colors">
 <img src={m.image} alt={m.name} className="w-10 h-10 rounded-full object-cover" />
 <div className="text-left">
 <p className="text-sm font-bold text-[#f2ede4]">{m.name}</p>
 <p className="text-[10px] text-[#7ce24a] uppercase tracking-widest font-bold">{m.role} ✦ Ready to help</p>
 </div>
 </div>
 ))}
 </div>
 </div>
 </section>

 {/* ── RULES ── */}
 <section id="rules" className="py-24 px-6 max-w-4xl mx-auto">
 <motion.div initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }} viewport={{ once: true }}>
 <SectionTitle accent>Play <span className="text-[#c0392b]">fair.</span> Ship <span className="text-[#7ce24a]">proud.</span></SectionTitle>
 </motion.div>
 <p className="text-[#7a5c3e] text-lg -mt-8 mb-10">Keep it real, keep it original, <span className="font-black text-[#2c2016]">keep the vibe clean.</span></p>

 <ol className="grid sm:grid-cols-2 gap-4 list-none">
 {rules.map((r, i) => (
 <motion.li
 key={i}
 initial={{ opacity: 0, y: 10 }}
 whileInView={{ opacity: 1, y: 0 }}
 transition={{ duration: 0.4, delay: i * 0.05 }}
 viewport={{ once: true }}
 className="flex gap-3 items-start bg-[#ede4d0]/70 border border-[#2c2016]/15 rounded-xl p-4 hover:bg-[#ede4d0] hover:border-[#c0392b]/20 hover:shadow-[3px_3px_0_rgba(44,32,22,0.08)] transition-all"
 >
 <span className="font-mono font-black text-[#c0392b] shrink-0 pt-0.5 bg-[#c0392b]/10 w-7 h-7 flex items-center justify-center rounded-lg text-xs">{String(i + 1).padStart(2, "0")}</span>
 <span className="text-sm text-[#5a3e2b] leading-relaxed">{r}</span>
 </motion.li>
 ))}
 </ol>
 </section>

 {/* ── FAQ ── */}
 <section id="faq" className="py-24 px-6 max-w-3xl mx-auto">
 <motion.div initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }} viewport={{ once: true }}>
 <SectionTitle accent>Got <span className="text-[#c0392b]">Questions?</span></SectionTitle>
 </motion.div>
 <p className="text-[#7a5c3e] -mt-8 mb-8">We’ve got answers — no boring legalese, just straight talk.</p>
 <Accordion type="single" collapsible className="w-full space-y-3">
 {[
 { q: "Who can actually pull up?", a: "Any student under 18 who’s down to build. First-timer or serial shipper — if you’ve got curiosity and a laptop, you’re in. Under-18 only, strictly 13-18." },
 { q: "What’s the vibe? Code of Conduct?", a: "Respect is non-negotiable. No harassment, no gatekeeping, no jerks. Lift each other up, share the sauce, and make something unforgettable — together." },
 { q: "No team? No problem?", a: "Absolutely not! We run live team-match at kickoff. Walk in solo, walk out with a crew. Some of the best builds started with a shy “wanna team?”" },
 { q: "What do I actually need to bring?", a: "Laptop + charger + student ID + that weird idea you’ve been saving. We’ve got WiFi, food, power, and mentors for the rest. Sleep optional." },
 { q: "Real talk — is it actually free?", a: "100% free. Zero catch. No ticket, no hidden fees. We handle food & infra so you can focus on flexing your build. Just bring parent consent." },
 ].map((item, i) => (
 <AccordionItem key={i} value={`item-${i}`} className="bg-[#ede4d0]/80 border-2 border-[#2c2016]/15 rounded-xl px-5 data-[state=open]:border-[#c0392b]/40 data-[state=open]:bg-[#ede4d0] transition-colors">
 <AccordionTrigger className="text-[#2c2016] font-bold text-base hover:text-[#c0392b] hover:no-underline">{item.q}</AccordionTrigger>
 <AccordionContent className="text-[#7a5c3e] leading-relaxed">{item.a}</AccordionContent>
 </AccordionItem>
 ))}
 </Accordion>
 </section>

 
      {/* ── CODE OF CONDUCT ── */}
      <section id="code-of-conduct" className="py-24 px-6 bg-[#ede4d0] border-y-2 border-[#2c2016]/10">
        <div className="max-w-4xl mx-auto">
          <motion.div initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }} viewport={{ once: true }} className="text-center mb-10">
            <p className="text-xs font-black tracking-[0.4em] uppercase text-[#c0392b] mb-3">Code of Conduct · Last Updated: 2026</p>
            <h2 className={`text-4xl md:text-5xl font-black tracking-tight text-[#2c2016] leading-tight ${fredoka.className}`}>
              Code of Conduct
            </h2>
            <div className="mt-3 h-1.5 w-16 rounded-full bg-[#c0392b] mx-auto" />
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} viewport={{ once: true }} className="bg-[#2c2016] text-[#f2ede4] rounded-2xl p-6 md:p-8 mb-10 border-2 border-[#2c2016] shadow-[6px_6px_0_rgba(44,32,22,0.15)] relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-[#c0392b]/10 rounded-full blur-3xl pointer-events-none" />
            <p className={`text-base md:text-lg leading-relaxed ${dmSans.className}`}>
              <span className="font-black text-white">Okay real talk for a sec.</span> <br /><br />
              Falling Sun is chaotic on purpose — crazy builds, late nights, zero boring vibes. But &quot;chaotic&quot; is the energy, not the environment. Everything on the ground — safety, fairness, judging, food, Wi-Fi, all of it — is fully managed by us so you can just focus on shipping something insane. <br /><br />
              So before the sun falls, give this a read. It&apos;s not scary, it&apos;s just what keeps this thing actually good instead of just another group chat with a prize pool.
            </p>
          </motion.div>

          <Accordion type="single" collapsible className="w-full space-y-3">
            {codeOfConduct.map((item, i) => (
              <AccordionItem key={i} value={`coc-${i}`} className="bg-white border-2 border-[#2c2016]/10 rounded-xl px-5 data-[state=open]:border-[#c0392b]/30 data-[state=open]:bg-[#fffef8] transition-colors shadow-[3px_3px_0_rgba(44,32,22,0.06)] data-[state=open]:shadow-[4px_4px_0_rgba(44,32,22,0.10)]">
                <AccordionTrigger className={`text-[#2c2016] font-bold text-base hover:text-[#c0392b] hover:no-underline py-4 text-left ${dmSans.className}`}>
                  <span className="flex items-center gap-3">
                    <span className="w-8 h-8 rounded-lg bg-[#2c2016] text-[#f2ede4] flex items-center justify-center text-xs font-black shrink-0 group-data-[state=open]:bg-[#c0392b] transition-colors">{item.n}</span>
                    <span className={`${fredoka.className} font-bold`}>{item.title}</span>
                  </span>
                </AccordionTrigger>
                <AccordionContent className={`text-[#5a3e2b] leading-relaxed text-sm pb-4 ${dmSans.className}`}>
                  {item.body}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>

          <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ delay: 0.3 }} viewport={{ once: true }} className="mt-10 text-center">
            <div className={`inline-flex items-center gap-2 bg-[#2c2016] text-[#f2ede4] px-6 py-3 rounded-full border-2 border-[#2c2016] shadow-[3px_3px_0_rgba(44,32,22,0.2)] ${fredoka.className}`}>
              <span>☀</span> By registering for Falling Sun, you&apos;re saying you&apos;ve read this and you&apos;re in. <span>☀</span>
            </div>
            <p className={`mt-3 text-xs font-bold tracking-widest uppercase text-[#8b6340] ${dmSans.className}`}>Build. Ship. Rise. — responsibly.</p>
          </motion.div>
        </div>
      </section>

      {/* ── CTA FOOTER ── */}
 <footer id="contact" className="py-24 px-6 bg-[#2c2016] relative overflow-hidden">
 <div className="absolute inset-0 opacity-5 bg-[url('/falling-sun-poster.png')] bg-cover bg-center" />
 <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-[#7ce24a]/5 rounded-full blur-[100px] pointer-events-none" />
 <div className="max-w-4xl mx-auto text-center relative z-10 flex flex-col items-center">
 <p className="text-xs font-black text-[#7ce24a] uppercase tracking-[0.4em] mb-4 animate-pulse">The Horizon Is Burning ✦</p>
 <h2 className={`text-5xl md:text-7xl font-black text-[#f2ede4] mb-3 tracking-tight ${fredoka.className}`}>
 We Are <span className="text-[#7ce24a]">Ready.</span>
 </h2>
 <h2 className={`text-5xl md:text-7xl font-black text-[#c0392b] mb-8 tracking-tight ${fredoka.className}`}>
 Are You?
 </h2>
 <p className="text-xl text-[#c8b99a] mb-10 max-w-lg">Stuck? Hyped? Wanna <span className="text-[#7ce24a] font-bold">sponsor the chaos</span>? Hit us — we reply faster than your build compiles.</p>
 <div className="flex flex-wrap justify-center gap-4">
 <a href="https://wa.me/" target="_blank" rel="noopener noreferrer"
 className="inline-flex items-center gap-3 bg-[#7ce24a] text-[#2c2016] font-black px-8 py-4 rounded-xl border-2 border-[#2c2016] hover:bg-[#6dd43d] transition-all hover:scale-105 shadow-[4px_4px_0_rgba(44,32,22,0.4)] group badge-shine relative overflow-hidden">
 <span className="relative z-10 flex items-center gap-3"><MessageCircle className="w-5 h-5" /> Join WhatsApp Community</span>
 </a>
 <a href="mailto:hello@fallingsun.dev"
 className="inline-flex items-center gap-3 bg-transparent text-[#f2ede4] font-black px-8 py-4 rounded-xl border-2 border-[#f2ede4]/30 hover:border-[#f2ede4] hover:bg-[#f2ede4]/10 transition-all hover:scale-105">
 Email Us <span className="group-hover:translate-x-1 transition-transform">→</span>
 </a>
 </div>

 <div className="mt-14 pt-8 border-t border-[#f2ede4]/10 w-full flex flex-col items-center gap-5">
 <p className={`text-lg text-[#f2ede4] ${fredoka.className}`}>
 FALLINGSUN — <span className="text-[#7ce24a]">Build after dark.</span> Flex by sunrise.
 </p>
 <div className="flex flex-wrap justify-center gap-x-6 gap-y-3 text-xs font-bold uppercase tracking-widest text-[#c8b99a]">
 <a href="#contact" className="hover:text-[#7ce24a] transition-colors">Registration</a>
 <a href="#" className="inline-flex items-center gap-1.5 hover:text-[#7ce24a] transition-colors">
 <Github className="w-3.5 h-3.5" /> GitHub Repo
 </a>
  <a href="#code-of-conduct" className="hover:text-[#7ce24a] transition-colors">Code of Conduct</a>
 <a href="#" className="hover:text-[#7ce24a] transition-colors">Guardian Consent Form</a>
 <a href="https://wa.me/" target="_blank" rel="noopener noreferrer" className="hover:text-[#7ce24a] transition-colors">Organiser Contact</a>
 </div>
 </div>
 </div>
 </footer>
 </main>
 )
}
