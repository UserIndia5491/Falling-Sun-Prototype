"use client"

import Link from "next/link"
import { Lock, MessageCircle } from "lucide-react"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

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

export default function CodeOfConductPage() {
  return (
    <main className="brutalist-page min-h-screen">
      <header className="site-header">
        <Link href="/" className="brand-mark" aria-label="Falling Sun home"><span>F</span><span>/</span><span>S</span></Link>
        <nav className="hidden items-center gap-7 font-mono text-[10px] font-bold uppercase tracking-[0.18em] md:flex">
          <Link href="/#about">About</Link><Link href="/#schedule">Schedule</Link><Link href="/#rules">Rules</Link><Link href="/code-of-conduct">Code of Conduct</Link>
        </nav>
        <div className="header-lock"><Lock className="h-3.5 w-3.5" /> CODE OF CONDUCT</div>
      </header>

      <section className="section conduct-section" style={{ paddingTop: 60 }}>
        <div className="page-width">
          <Link href="/" className="inline-flex items-center gap-2 border-2 border-[#171717] bg-[#f5f1e8] px-4 py-2 font-mono text-[11px] font-bold tracking-[0.14em] hover:bg-[#f4d900] transition-colors">← BACK TO HOME</Link>
          <div className="mt-8">
            <SectionTitle index="10">Code of<br /><span className="red-text">conduct.</span></SectionTitle>
          </div>
          <div className="conduct-lede">
            <p><strong>Okay real talk for a sec.</strong></p>
            <p>Falling Sun is chaotic on purpose — crazy builds, late nights, zero boring vibes. But &quot;chaotic&quot; is the energy, not the environment. Everything on the ground — safety, fairness, judging, food, Wi-Fi, all of it — is fully managed by us so you can focus on shipping something insane.</p>
            <p className="mt-4 font-mono text-xs font-bold tracking-[0.14em] text-[#d90429]">30 RULES • SCROLL TO EXPAND • EVEN & COMPLETE</p>
          </div>
          <Accordion type="single" collapsible className="faq-list conduct-list">
            {codeOfConduct.map(item => (
              <AccordionItem key={item.n} value={`coc-${item.n}`} className="faq-item">
                <AccordionTrigger><span className="conduct-number">{item.n}</span>{item.title}</AccordionTrigger>
                <AccordionContent>{item.body}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
          <p className="conduct-footer">Build. Ship. Rise. — responsibly. ☀️</p>
          <div className="mt-10 flex flex-wrap gap-4">
            <Link href="/" className="brutal-button red">BACK TO HOMEPAGE <span>↗</span></Link>
            <Link href="/#faq" className="brutal-button yellow">QUESTIONS? DECODED ↓</Link>
          </div>
        </div>
      </section>

      <footer id="contact" className="site-footer"><div className="footer-ticker"><div>BUILD AFTER DARK ✳ SHIP BEFORE SUNRISE ✳ BUILD AFTER DARK ✳ SHIP BEFORE SUNRISE ✳ BUILD AFTER DARK ✳ SHIP BEFORE SUNRISE ✳</div></div><div className="page-width"><div className="footer-grid"><div className="footer-brand"><Link href="/" className="footer-logo">F/S<span>.</span></Link><p>Build after dark.<br />Flex by sunrise.</p><div className="footer-socials"><Link href="mailto:fallingsun.delhi@gmail.com" className="footer-pill">EMAIL ↗</Link><a href="https://wa.me/" target="_blank" rel="noopener noreferrer" className="footer-pill yellow"><MessageCircle className="inline h-3 w-3" /> WHATSAPP</a></div></div><div className="footer-nav-col"><p className="footer-col-title">EXPLORE // 2026</p><nav className="footer-links"><Link href="/#about">About</Link><Link href="/#schedule">Schedule</Link><Link href="/#rules">Rules</Link><Link href="/code-of-conduct">Code of Conduct</Link><Link href="/#faq">FAQ</Link></nav></div><div className="footer-meta-col"><div className="footer-meta-card"><span>LOCATION</span><strong>DELHI NCR, INDIA</strong></div><div className="footer-meta-card red"><span>EDITION</span><strong>FALLINGSUN / 2026</strong></div><div className="footer-cta-card"><p>24H • UNDER 18 • FREE TO JOIN</p><span>NO GATEKEEPING →</span></div></div></div><div className="footer-bottom"><span>© 2026 Falling Sun — Built by students, for students.</span><span className="footer-bottom-accent">DELHI NCR ✳ 30 TEAMS ✳ 100% FREE</span></div></div></footer>
    </main>
  )
}
