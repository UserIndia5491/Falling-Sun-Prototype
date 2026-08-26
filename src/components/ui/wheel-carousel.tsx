"use client"

import React, { useState, useRef, useEffect, useCallback } from "react"
import { motion } from "framer-motion"
import { ChevronLeft, ChevronRight } from "lucide-react"

type OrganizerItem = {
  label: string
  image: string
  imageAlt?: string
}

type WheelCarouselProps = {
  items: OrganizerItem[]
  mode?: "dark" | "light"
  photoSide?: "left" | "right"
  photoAspect?: string
  photoWidth?: number
  contentWidth?: number
  gap?: number
  radius?: number
  spacing?: number
  visibleItems?: number
  background?: string
  textColor?: string
  selectedColor?: string
  markerColor?: string
}

export function WheelCarousel({
  items,
  mode = "dark",
  textColor = "rgba(242,237,228,0.3)",
  selectedColor = "#7ce24a",
}: WheelCarouselProps) {
  const [selected, setSelected] = useState(0)
  const scrollRef = useRef<HTMLDivElement>(null)
  const [canScrollLeft, setCanScrollLeft] = useState(false)
  const [canScrollRight, setCanScrollRight] = useState(true)
  const isDragging = useRef(false)
  const startX = useRef(0)
  const scrollLeftStart = useRef(0)

  const updateScrollState = useCallback(() => {
    const el = scrollRef.current
    if (!el) return
    setCanScrollLeft(el.scrollLeft > 8)
    setCanScrollRight(el.scrollLeft + el.clientWidth < el.scrollWidth - 8)
  }, [])

  useEffect(() => {
    const el = scrollRef.current
    if (!el) return
    updateScrollState()
    el.addEventListener("scroll", updateScrollState, { passive: true })
    const ro = new ResizeObserver(updateScrollState)
    ro.observe(el)
    window.addEventListener("resize", updateScrollState)
    return () => {
      el.removeEventListener("scroll", updateScrollState)
      ro.disconnect()
      window.removeEventListener("resize", updateScrollState)
    }
  }, [updateScrollState])

  // scroll selected item into view
  useEffect(() => {
    const el = scrollRef.current
    if (!el) return
    const child = el.children[selected] as HTMLElement | undefined
    if (child) {
      child.scrollIntoView({ behavior: "smooth", inline: "center", block: "nearest" })
    }
  }, [selected])

  // wheel -> horizontal scroll
  const onWheel = useCallback((e: React.WheelEvent) => {
    const el = scrollRef.current
    if (!el) return
    // If user is doing vertical scroll, translate to horizontal when carousel is hovered
    // Only hijack if there's horizontal overflow and deltaY dominates
    if (Math.abs(e.deltaY) > Math.abs(e.deltaX)) {
      const atLeft = el.scrollLeft <= 0 && e.deltaY < 0
      const atRight = el.scrollLeft + el.clientWidth >= el.scrollWidth - 1 && e.deltaY > 0
      if (!atLeft && !atRight) {
        e.preventDefault()
        el.scrollLeft += e.deltaY
      }
    }
  }, [])

  // drag to scroll
  const onMouseDown = (e: React.MouseEvent) => {
    const el = scrollRef.current
    if (!el) return
    isDragging.current = true
    el.classList.add("cursor-grabbing")
    el.classList.remove("cursor-grab")
    startX.current = e.pageX - el.offsetLeft
    scrollLeftStart.current = el.scrollLeft
  }
  const onMouseLeave = () => {
    isDragging.current = false
    const el = scrollRef.current
    if (el) {
      el.classList.remove("cursor-grabbing")
      el.classList.add("cursor-grab")
    }
  }
  const onMouseUp = () => {
    isDragging.current = false
    const el = scrollRef.current
    if (el) {
      el.classList.remove("cursor-grabbing")
      el.classList.add("cursor-grab")
    }
  }
  const onMouseMove = (e: React.MouseEvent) => {
    if (!isDragging.current) return
    e.preventDefault()
    const el = scrollRef.current
    if (!el) return
    const x = e.pageX - el.offsetLeft
    const walk = (x - startX.current) * 1.5
    el.scrollLeft = scrollLeftStart.current - walk
  }

  const scrollBy = (dir: number) => {
    const el = scrollRef.current
    if (!el) return
    el.scrollBy({ left: dir, behavior: "smooth" })
  }

  return (
    <div className="relative w-full h-full flex flex-col items-center justify-center px-6">
      {/* scroll fade edges */}
      <div className="relative w-full max-w-5xl mx-auto">
        {canScrollLeft && (
          <div className="pointer-events-none absolute left-0 top-0 bottom-0 w-10 bg-gradient-to-r from-[#2c2016] to-transparent z-10 rounded-l-xl" />
        )}
        {canScrollRight && (
          <div className="pointer-events-none absolute right-0 top-0 bottom-0 w-10 bg-gradient-to-l from-[#2c2016] to-transparent z-10 rounded-r-xl" />
        )}

        {/* arrow buttons - desktop */}
        {canScrollLeft && (
          <button
            onClick={() => scrollBy(-320)}
            aria-label="Scroll left"
            className="hidden md:flex absolute left-1 top-1/2 -translate-y-1/2 z-20 w-9 h-9 rounded-full bg-[#f2ede4] border-2 border-[#2c2016] items-center justify-center shadow-[3px_3px_0_rgba(44,32,22,0.4)] hover:scale-110 hover:bg-[#7ce24a] transition-all"
          >
            <ChevronLeft className="w-4 h-4 text-[#2c2016]" />
          </button>
        )}
        {canScrollRight && (
          <button
            onClick={() => scrollBy(320)}
            aria-label="Scroll right"
            className="hidden md:flex absolute right-1 top-1/2 -translate-y-1/2 z-20 w-9 h-9 rounded-full bg-[#f2ede4] border-2 border-[#2c2016] items-center justify-center shadow-[3px_3px_0_rgba(44,32,22,0.4)] hover:scale-110 hover:bg-[#7ce24a] transition-all"
          >
            <ChevronRight className="w-4 h-4 text-[#2c2016]" />
          </button>
        )}

        <div
          ref={scrollRef}
          onWheel={onWheel}
          onMouseDown={onMouseDown}
          onMouseLeave={onMouseLeave}
          onMouseUp={onMouseUp}
          onMouseMove={onMouseMove}
          className="flex gap-6 overflow-x-auto overflow-y-hidden snap-x snap-mandatory py-8 w-full cursor-grab select-none scrollbar-hide"
          style={{
            scrollbarWidth: "none",
            msOverflowStyle: "none",
            WebkitOverflowScrolling: "touch",
            scrollBehavior: "smooth",
          }}
        >
          {items.map((item, i) => {
            const isSelected = i === selected
            return (
              <motion.div
                key={i}
                onClick={() => setSelected(i)}
                whileHover={{ scale: 1.05, y: -4 }}
                whileTap={{ scale: 0.98 }}
                className={`snap-center shrink-0 cursor-pointer flex flex-col items-center gap-3 p-4 rounded-2xl border-2 transition-all ${
                  isSelected
                    ? "bg-[#1a120b] border-[#7ce24a] shadow-[0_0_22px_rgba(124,226,74,0.35)]"
                    : "bg-[#1a120b]/60 border-[#f2ede4]/10 hover:border-[#f2ede4]/25 hover:bg-[#1a120b]/80"
                }`}
                style={{ minWidth: 176 }}
              >
                <div
                  className={`w-[132px] h-[132px] rounded-full overflow-hidden border-4 shrink-0 transition-colors ${
                    isSelected ? "border-[#7ce24a]" : "border-[#f2ede4]/20"
                  }`}
                >
                  <img
                    src={item.image}
                    alt={item.imageAlt || item.label}
                    className="w-full h-full object-cover pointer-events-none"
                    draggable={false}
                  />
                </div>
                <span
                  className="font-black text-[13px] tracking-wide text-center leading-tight"
                  style={{ color: isSelected ? selectedColor : textColor }}
                >
                  {item.label}
                </span>
                {isSelected && (
                  <div className="w-2 h-2 rounded-full bg-[#7ce24a] animate-pulse shadow-[0_0_8px_rgba(124,226,74,0.8)]" />
                )}
              </motion.div>
            )
          })}
        </div>
      </div>

      <div className="flex gap-2 mt-5">
        {items.map((_, i) => (
          <button
            key={i}
            onClick={() => setSelected(i)}
            className={`h-2 rounded-full transition-all duration-300 ${
              i === selected ? "bg-[#7ce24a] w-7 shadow-[0_0_8px_rgba(124,226,74,0.6)]" : "bg-[#f2ede4]/20 hover:bg-[#f2ede4]/40 w-2"
            }`}
            aria-label={`Go to ${items[i].label}`}
          />
        ))}
      </div>

      <p className="text-[#c8b99a]/50 text-[11px] mt-3 font-mono tracking-widest uppercase flex items-center gap-2">
        <span className="hidden sm:inline opacity-60">Drag • Scroll • Click</span>
        <span className="opacity-80">{selected + 1} / {items.length} — {items[selected]?.label}</span>
      </p>
    </div>
  )
}
