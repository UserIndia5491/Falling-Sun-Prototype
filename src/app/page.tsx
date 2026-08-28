"use client"

import React from "react"
import Link from "next/link"
import { motion, useScroll, useTransform } from "framer-motion"
import {
 Lock,
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
} from "lucide-react"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

const organizers = [
  { label: "Tanmay", image: "/IMG-20260826-WA0095.jpg", imageAlt: "Tanmay", role: "Organizer" },
  { label: "Kartik Patel", image: "/IMG-20260828-WA0062.jpg", imageAlt: "Kartik", role: "Organizer" },
  { label: "Ayush Sharma", image: "", imageAlt: "Ayush", role: "Organizer" },
]

const coOrganizers = [
  { label: "Harsh", image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=800&q=80", imageAlt: "Harsh", role: "Co-Organizer" },
  { label: "Swaransh", image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=800&q=80", imageAlt: "Swaransh", role: "Co-Organizer" },
  { label: "Roshan", image: "https://api.dicebear.com/7.x/initials/svg?seed=Roshan&backgroundColor=c0392b", imageAlt: "Roshan", role: "Co-Organizer" },
  { label: "Yuvraj", image: "https://api.dicebear.com/7.x/initials/svg?seed=Yuvraj&backgroundColor=7ce24a", imageAlt: "Yuvraj", role: "Co-Organizer" },
]

const mentors = [
 { name: "Aniket Gabba", role: "Mentor", image: "https://api.dicebear.com/7.x/initials/svg?seed=Aniket+Gabba&backgroundColor=8b6340" },
 { name: "Anand", role: "Mentor", image: "https://api.dicebear.com/7.x/initials/svg?seed=Anand&backgroundColor=8b6340" },
]

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
  {
    n: "30",
    title: "Need Help? Just Ask",
    body: "Got a doubt before, during, or after the hack? Hit us on the official WhatsApp Community or email fallingsun.delhi@gmail.com — we actually reply. If you\u0027re unsure whether something breaks a rule, ask early. We\u0027d rather clear it up than have to enforce it later. This is a builder-first space — help is part of the build."
  },
]

function SectionTitle({ index, children, light = false }: { index: string, children: React.ReactNode, light?: boolean }) {
  return (
    <div className="mb-10 flex items-start gap-4">
      <span className={`font-mono text-xs tracking-[0.2em] pt-2 ${light ? "text-[#f5f1e8]/50" : "text-[#d90429]"}`}>{index}</span>
      <div>
        <h2 className={`text-4xl md:text-6xl font-black tracking-[-0.06em] leading-[0.92] uppercase ${light ? "text-[#f5f1e8]" : "text-[#171717]"}`}>{children}</h2>
        <div className={`mt-5 h-2 w-20 ${light ? "bg-[#d90429]" : "bg-[#d90429]"}`} />
      </div>
    </div>
  )
}

function LockedPanel({ kind }: { kind: "sponsors" | "register" }) {
  const sponsors = kind === "sponsors"
  return (
    <div className="locked-panel relative overflow-hidden border-[3px] border-[#171717] bg-[#f5f1e8] p-7 md:p-10 shadow-[8px_8px_0_#171717]">
      <div className="chain chain-left" aria-hidden="true">⛓</div>
      <div className="chain chain-right" aria-hidden="true">⛓</div>
      <div className="relative z-10 flex flex-col items-center text-center">
        <div className="mb-5 flex h-16 w-16 items-center justify-center border-[3px] border-[#171717] bg-[#f4d900] shadow-[4px_4px_0_#d90429]">
          <Lock className="h-8 w-8 text-[#171717]" strokeWidth={2.5} />
        </div>
        <p className="font-mono text-[10px] font-bold tracking-[0.3em] text-[#d90429]">STATUS // LOCKED</p>
        <h3 className="mt-3 text-3xl font-black uppercase tracking-[-0.05em] text-[#171717] md:text-5xl">
          {sponsors ? "Sponsors" : "Registration"}
        </h3>
        <p className="mt-3 max-w-md font-mono text-sm leading-relaxed text-[#56524c]">
          {sponsors ? "Partners are being secured. The board stays sealed until the full roster is ready." : "The form is not open yet. Watch this space for the official registration drop."}
        </p>
        <span className="mt-7 border-2 border-[#171717] bg-[#d90429] px-4 py-2 font-mono text-xs font-bold tracking-[0.16em] text-[#f5f1e8]">TO BE REVEALED LATER</span>
      </div>
    </div>
  )
}

const schedule = [
  { day: "DAY 01", title: "IGNITE", items: [
    ["09:00", "Participant Check-in", "ID verification · Registration · Claim your corner", "ADMIN"],
    ["09:30", "Opening Ceremony + Rules", "Welcome · Rules · Judging tea", "SYSTEM"],
    ["10:00", "Workshops / Bootcamp", "Godot · GitHub · Ship-hack speedruns", "LEARN"],
    ["11:15", "Idea Lock", "Choose track · Finalize idea — no backsies", "BUILD"],
    ["12:00", "Build Sprint", "Prototype mode: ON. Go wild.", "BUILD"],
    ["13:00", "Lunch Break", "Refuel. Touch grass. Plot comeback.", "PAUSE"],
    ["13:45", "Build Sprint", "Code · Design · Break · Fix · Repeat", "BUILD"],
    ["16:30", "Fun Activity", "Quick games · Energy spike · Memes IRL", "FUN"],
    ["17:00", "Mentor Check-in", "Feedback that actually helps you ship", "CHECK"],
    ["18:00", "Build Sprint", "The golden hour — polish till it shines", "BUILD"],
    ["19:30", "Day 1 Wrap-up", "Standup · Plan the night strike", "ADMIN"],
    ["20:00", "Day 1 Ends", "Rest. Recharge. Tomorrow you ship.", "END"],
  ]},
  { day: "DAY 02", title: "SHIP", items: [
    ["08:00", "Resume Builds", "Coffee. Code. Conquer.", "START"],
    ["09:00", "Final Development", "Kill bugs · Add shine · Test like mad", "BUILD"],
    ["11:00", "Submission Opens", "Upload build + docs + demo link", "SYSTEM"],
    ["12:30", "Lunch + Demo Prep", "Eat · Breathe · Rehearse your flex", "PAUSE"],
    ["14:00", "FINAL SUBMISSION DEADLINE", "Hard cutoff — no late merges, no mercy", "DEADLINE"],
    ["14:00", "Presentations & Demos", "3 min to own the room — make it count", "SYSTEM"],
    ["16:30", "Project Showcase", "Wander. Play. Steal ideas (with love).", "FUN"],
    ["17:30", "Student Voting", "Peer power — vote for what moved you", "VOTE"],
    ["18:00", "Results + Closing", "Winners, shouts & standing ovations", "ADMIN"],
    ["19:00", "Closing Ceremony", "Awards · Photos · The afterglow", "CLOSE"],
  ]},
] as const

const faq = [
  ["Who can actually pull up?", "Any student under 18 who’s down to build. First-timer or serial shipper — if you’ve got curiosity and a laptop, you’re in. Under-18 only, strictly 13-18."],
  ["No team? No problem?", "Absolutely not! We run live team-match at kickoff. Walk in solo, walk out with a crew. Some of the best builds started with a shy “wanna team?”"],
  ["What do I actually need to bring?", "Laptop + charger + student ID + that weird idea you’ve been saving. We’ve got WiFi, food, power, and mentors for the rest. Sleep optional."],
  ["Real talk — is it actually free?", "100% free. Zero catch. No ticket, no hidden fees. We handle food & infra so you can focus on flexing your build. Just bring parent consent."],
  ["Where & when does it go down?", "Delhi NCR, India — 24 hours straight. Day 01 Ignite + Day 02 Ship. Check the 24-hour sprint schedule for exact timings."],
  ["What can I even build?", "Anything that runs. Web, app, game, AI, hardware, CLI — no stack jail. If it solves something and you can demo it live, it counts."],
  ["How are projects judged?", "Live demo, 3 mins to flex. We score technical depth, originality, execution & polish. Panel + organizer review — no gaming, just real building."],
  ["Food, Wi-Fi, mentors — sorted?", "All covered. Food, power, Wi-Fi, and mentors on loop. You bring the laptop and the spark — we keep you charged and unblocked."],
  ["I’m a total beginner — can I still ship?", "100%. Day 1 kicks with a 60-min bootcamp (Godot, GitHub, ship-hacks) + mentors on tap. First-timers ship every year."],
  ["Want to sponsor Falling Sun?", "We’d love to have you — hit SPONSOR US in the sponsors section or email ayushsharma130410@gmail.com. Your support keeps it 100% free for 30 teams building at sunset."],
] as const

export default function Home() {
  const { scrollY } = useScroll()
  const heroY = useTransform(scrollY, [0, 550], [0, -70])

  return (
    <main className="brutalist-page min-h-screen">
      <header className="site-header">
        <a href="#top" className="brand-mark" aria-label="Falling Sun home"><span>F</span><span>/</span><span>S</span></a>
        <nav className="hidden items-center gap-7 font-mono text-[10px] font-bold uppercase tracking-[0.18em] md:flex">
          <a href="#about">About</a><a href="#playbook">Playbook</a><a href="#schedule">Schedule</a><a href="#rules">Rules</a><Link href="/code-of-conduct">Conduct</Link>
        </nav>
        <div className="header-lock"><Lock className="h-3.5 w-3.5" /> REGISTER // LOCKED</div>
      </header>

      <section id="top" className="hero-section">
        <div className="hero-grid" aria-hidden="true" />
        <motion.div style={{ y: heroY }} className="hero-inner page-width">
          <div className="hero-kicker"><span>FALLINGSUN / 2026</span><span>DELHI NCR · INDIA</span></div>
          <div className="hero-layout">
            <div className="hero-copy">
              <p className="eyebrow">24 HOURS / UNDER 18 / FREE TO JOIN</p>
              <h1>FALLING<br /><em>SUN</em><b>.</b></h1>
              <p className="hero-deck">The sun falls. Something rises.</p>
              <p className="hero-body">A pressure-cooker for young builders who would rather ship than yap. Bring the spark. Leave with something real.</p>
              <div className="hero-actions"><a href="#about" className="brutal-button red">ENTER THE EVENT <span>↘</span></a><span className="mono-note">SCROLL TO DECODE ↓</span></div>
            </div>
            <div className="hero-visual">
              <div className="video-frame">
                <video autoPlay muted loop playsInline className="h-full w-full object-cover"><source src="/Animate_pixel_art_sunset_scene_202608251027_gwr_video_mvp.mp4" type="video/mp4" /></video>
                <div className="video-crosshair" aria-hidden="true">+</div>
              </div>
              <div className="visual-caption">BUILD AFTER DARK<br /><span>SHIP BEFORE SUNRISE</span></div>
            </div>
          </div>
          <div className="hero-facts">{heroStats.map((stat, i) => <div key={stat}><span>0{i + 1}</span>{stat}</div>)}</div>
        </motion.div>
      </section>

      <div className="ticker" aria-label="Event message"><div>THE SUN FALLS <span>✳</span> SOMETHING RISES <span>✳</span> THE SUN FALLS <span>✳</span> SOMETHING RISES <span>✳</span></div></div>

      <section id="about" className="section page-width">
        <SectionTitle index="01">Why <span className="red-text">Falling Sun?</span></SectionTitle>
        <div className="about-grid">
          <div className="about-lead"><p>Because legendary ideas don&apos;t RSVP. They crash in at <strong>2 AM</strong>, wired on caffeine and chaos, when you stop overthinking and start shipping.</p><div className="quote-mark">“</div></div>
          <div className="about-copy"><p>The sun dipping isn&apos;t the finish line. <strong>It&apos;s the ignition.</strong> That amber hour when daydreamers clock out and builders light up.</p><p>FallingSun is a <mark>24-hour pressure-cooker</mark> for under-18s who&apos;d rather ship than yap. Turn raw sparks into working products — backed by mentors, infrastructure, and a room buzzing at 3 AM like a rave for debuggers.</p></div>
        </div>
        <div className="image-strip"><figure><img src="/comic-idea.png" alt="Hour 1: the idea phase" /><figcaption>HOUR 01 / THE IDEA</figcaption></figure><figure><img src="/comic-stack.png" alt="Hour 6: stack and initial setup" /><figcaption>HOUR 06 / THE STACK</figcaption></figure><div className="poster-stamp">BUILD<br />SOMETHING<br /><span>REAL</span></div></div>
      </section>

      <section id="playbook" className="section dark-section">
        <div className="page-width"><SectionTitle index="02" light>From spark<br />to <span className="yellow-text">stage.</span></SectionTitle>
          <div className="process-grid">{processSteps.map((step, i) => <motion.article key={step.step} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.08 }} viewport={{ once: true }} className="process-card"><div className="process-number">{step.step}</div><div className="process-icon">{step.icon}</div><h3>{step.title}</h3><p>{step.desc}</p></motion.article>)}</div>
        </div>
      </section>

      <section className="section page-width qualify-section">
        <SectionTitle index="03">How to <span className="red-text">qualify.</span></SectionTitle>
        <div className="qualify-grid"><div className="qualify-list">{qualifySteps.map(step => <div key={step.step} className="qualify-row"><span className="qualify-num">{step.step}</span><div><h3>{step.title}</h3><p>{step.desc}</p></div></div>)}</div><div className="black-note"><p className="eyebrow yellow-text">NO GATEKEEPING / BEGINNER FRIENDLY</p><h3>Show up.<br />Lock in.<br /><span>Ship hard.</span></h3><p>Guides, mentors, and a community that has your back at 2 AM.</p><Link href="#contact" className="brutal-button yellow">JOIN THE COMMUNITY ↗</Link></div></div>
      </section>

      <section className="section rewards-section"><div className="page-width"><SectionTitle index="04">Good work <span className="red-text">glows.</span></SectionTitle><div className="rewards-grid">{rewards.map(reward => <article className="reward-card" key={reward.title}><div className="reward-icon">{reward.icon}</div><h3>{reward.title}</h3><p>{reward.desc}</p></article>)}</div></div></section>

      <section id="sponsors" className="section dark-section sponsor-section"><div className="page-width"><SectionTitle index="05" light>Back the<br /><span className="red-text">builders.</span></SectionTitle><p className="section-intro light-copy">Our sponsors kill the paywall — 100% free for every teen who wants to build. The board is sealed until the roster is ready.</p><LockedPanel kind="sponsors" /><div className="sponsor-cta"><p>Want your logo where 30 teams ship at sunset? Let&apos;s talk.</p><a href="mailto:ayushsharma130410@gmail.com?subject=Sponsor%20Falling%20Sun%202026%20%E2%80%94%20Partnership%20Inquiry&body=Hi%20Ayush%2C%0A%0AI%27m%20interested%20in%20sponsoring%20Falling%20Sun%202026.%20Please%20share%20the%20sponsorship%20deck%20and%20next%20steps.%0A%0AThanks!" className="brutal-button yellow sponsor-btn">SPONSOR US ↗</a><span className="sponsor-note">direct to ayushsharma130410@gmail.com</span></div></div></section>

      <section id="schedule" className="section page-width"><SectionTitle index="06">The 24-hour <span className="red-text">sprint.</span></SectionTitle><p className="section-intro">Two days. One ship window. Every minute counts.</p><div className="schedule-grid">{schedule.map((day) => <article className="schedule-card" key={day.day}><div className="schedule-heading"><span>{day.day}</span><h3>{day.title}</h3></div><div className="schedule-list">{day.items.map(([time, title, desc, tag]) => <div key={`${time}-${title}`} className={`schedule-row ${tag === "DEADLINE" ? "deadline" : ""}`}><span className="time">{time}</span><div><h4>{title}</h4><p>{desc}</p></div><span className="tag">{tag}</span></div>)}</div></article>)}</div></section>

      <section className="section people-section"><div className="page-width"><SectionTitle index="07" light>The crew<br /><span className="yellow-text">behind it.</span></SectionTitle><p className="crew-intro">7 humans, one sun. No corporate fluff — just builders who ship. Brutalist by design, brutal when we need to be.</p><div className="crew-subhead"><span>ORGANIZERS // 03</span><div className="crew-subhead-line" /></div><div className="crew-grid organizers-grid">{organizers.map((person, i) => <motion.article key={person.label} initial={{ opacity: 0, y: 14 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.06 }} viewport={{ once: true }} className="crew-card organizer"><div className="crew-photo"><img src={person.image} alt={person.imageAlt || person.label} /><span className="crew-photo-badge">ORG // 0{i + 1}</span><span className="crew-photo-index">{String(i + 1).padStart(2, "0")}</span></div><div className="crew-body"><h3>{person.label}</h3><p>{person.role} — Falling Sun</p><p className="crew-bio">Setting the vision, calling the shots, keeping the sun from falling too fast.</p></div></motion.article>)}</div><div className="crew-subhead co"><span>CO-ORGANIZERS // 04</span><div className="crew-subhead-line" /></div><div className="crew-grid co-grid">{coOrganizers.map((person, i) => <motion.article key={person.label} initial={{ opacity: 0, y: 14 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: (i+3) * 0.06 }} viewport={{ once: true }} className="crew-card co"><div className="crew-photo"><img src={person.image} alt={person.imageAlt || person.label} /><span className="crew-photo-badge co">CO-ORG // 0{i + 1}</span><span className="crew-photo-index co">{String(i + 4).padStart(2, "0")}</span></div><div className="crew-body"><h3>{person.label}</h3><p>{person.role} — Falling Sun</p><p className="crew-bio">On ground, in the trenches — ops, outreach & making the 24h run buttery.</p></div></motion.article>)}</div><div className="mentor-divider">MENTORS // ON-DECK <span>2</span></div><div className="mentor-grid-brutal">{mentors.map(mentor => <div key={mentor.name} className="mentor-card-brutal"><img src={mentor.image} alt={mentor.name} /><div><h3>{mentor.name}</h3><p>{mentor.role} / READY TO HELP</p><span className="mentor-tag">ASK ME ANYTHING →</span></div></div>)}</div></div></section>

      <section id="rules" className="section page-width rules-section"><SectionTitle index="08">Play fair.<br /><span className="red-text">Ship proud.</span></SectionTitle><p className="section-intro">Keep it real, keep it original, keep the vibe clean.</p><ol className="rules-grid">{rules.map((rule, i) => <li key={rule}><span>{String(i + 1).padStart(2, "0")}</span><p>{rule}</p></li>)}</ol></section>

      <section id="faq" className="section page-width faq-section"><SectionTitle index="09">Questions?<br /><span className="red-text">Decoded.</span></SectionTitle><Accordion type="single" collapsible className="faq-list faq-grid">{faq.map(([question, answer], i) => <AccordionItem key={question} value={`item-${i}`} className="faq-item"><AccordionTrigger>{question}</AccordionTrigger><AccordionContent>{answer}</AccordionContent></AccordionItem>)}</Accordion></section>

      <section id="code-of-conduct" className="section conduct-section"><div className="page-width"><SectionTitle index="10">Code of<br /><span className="red-text">conduct.</span></SectionTitle><div className="conduct-lede"><p><strong>Okay real talk for a sec.</strong></p><p>Falling Sun is chaotic on purpose — crazy builds, late nights, zero boring vibes. But &quot;chaotic&quot; is the energy, not the environment. Everything on the ground — safety, fairness, judging, food, Wi-Fi, all of it — is fully managed by us so you can focus on shipping something insane.</p></div><div className="conduct-teaser"><div className="conduct-teaser-card"><p className="eyebrow" style={{color: 'var(--red)', marginBottom: 12}}>30 RULES • EVEN & COMPLETE • SEPARATE PAGE</p><h3>Read the full<br />Code of Conduct</h3><p>From who can join to AI policy, safety, judging & zero-tolerance — everything lives on its own page now. Clean, searchable, and always up to date.</p><div className="conduct-teaser-stats"><span><strong>30</strong> clauses</span><span><strong>100%</strong> builder-first</span><span><strong>↗</strong> separate page</span></div><Link href="/code-of-conduct" className="brutal-button red">OPEN CODE OF CONDUCT <span>↗</span></Link></div><div className="conduct-teaser-preview" aria-hidden="true"><div className="conduct-preview-grid">{codeOfConduct.slice(0,6).map(item => <div key={item.n} className="conduct-preview-item"><span>{item.n}</span><p>{item.title}</p></div>)}<div className="conduct-preview-more">+24 more →</div></div><p className="conduct-footer" style={{marginLeft:0, marginTop:18}}>Build. Ship. Rise. — responsibly.</p></div></div></div></section>

      <section id="register" className="section register-section"><div className="page-width"><SectionTitle index="11">Your next move<br /><span className="red-text">is locked.</span></SectionTitle><div className="register-layout"><div><p className="register-copy">Registration is coming. Keep the signal on and be ready when the gate opens.</p><div className="register-meta"><span>AGE / 13–18</span><span>TEAM / 1–4</span><span>FEE / ₹0</span></div></div><LockedPanel kind="register" /></div></div></section>

      <footer id="contact" className="site-footer"><div className="footer-ticker"><div>BUILD AFTER DARK ✳ SHIP BEFORE SUNRISE ✳ BUILD AFTER DARK ✳ SHIP BEFORE SUNRISE ✳ BUILD AFTER DARK ✳ SHIP BEFORE SUNRISE ✳</div></div><div className="page-width"><div className="footer-grid"><div className="footer-brand"><Link href="#top" className="footer-logo">F/S<span>.</span></Link><p>Build after dark.<br />Flex by sunrise.</p><div className="footer-socials"><a href="mailto:fallingsun.delhi@gmail.com" className="footer-pill">EMAIL ↗</a><a href="https://wa.me/" target="_blank" rel="noopener noreferrer" className="footer-pill yellow"><MessageCircle className="inline h-3 w-3" /> WHATSAPP</a></div></div><div className="footer-nav-col"><p className="footer-col-title">EXPLORE // 2026</p><nav className="footer-links"><a href="#about">About</a><a href="#playbook">Playbook</a><a href="#schedule">Schedule</a><a href="#rules">Rules</a><Link href="/code-of-conduct">Code of Conduct</Link><a href="#faq">FAQ</a></nav></div><div className="footer-meta-col"><div className="footer-meta-card"><span>LOCATION</span><strong>DELHI NCR, INDIA</strong></div><div className="footer-meta-card red"><span>EDITION</span><strong>FALLINGSUN / 2026</strong></div><div className="footer-cta-card"><p>24H • UNDER 18 • FREE TO JOIN</p><span>NO GATEKEEPING →</span></div></div></div><div className="footer-bottom"><span>© 2026 Falling Sun — Built by students, for students.</span><span className="footer-bottom-accent">DELHI NCR ✳ 30 TEAMS ✳ 100% FREE</span></div></div></footer>
    </main>
  )
}
