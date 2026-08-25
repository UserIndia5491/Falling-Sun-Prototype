"use client"

import React, { useState } from "react"
import { motion } from "framer-motion"

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

  return (
    <div className="relative w-full h-full flex flex-col items-center justify-center overflow-hidden px-6">
      <div className="flex gap-6 overflow-x-auto snap-x snap-mandatory scrollbar-none py-8 w-full max-w-5xl mx-auto justify-start md:justify-center"
           style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}>
        {items.map((item, i) => {
          const isSelected = i === selected
          return (
            <motion.div
              key={i}
              onClick={() => setSelected(i)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
              className={`snap-center shrink-0 cursor-pointer flex flex-col items-center gap-4 p-4 rounded-2xl border-2 transition-all ${
                isSelected
                  ? "bg-[#1a120b] border-[#7ce24a] shadow-[0_0_20px_rgba(124,226,74,0.3)]"
                  : "bg-[#1a120b]/60 border-[#f2ede4]/10 hover:border-[#f2ede4]/20"
              }`}
              style={{ minWidth: 180 }}
            >
              <div
                className={`w-32 h-32 rounded-full overflow-hidden border-4 shrink-0 ${
                  isSelected ? "border-[#7ce24a]" : "border-[#f2ede4]/20"
                }`}
              >
                <img
                  src={item.image}
                  alt={item.imageAlt || item.label}
                  className="w-full h-full object-cover"
                />
              </div>
              <span
                className="font-black text-sm tracking-wide text-center"
                style={{ color: isSelected ? selectedColor : textColor }}
              >
                {item.label}
              </span>
              {isSelected && (
                <div className="w-2 h-2 rounded-full bg-[#7ce24a] animate-pulse" />
              )}
            </motion.div>
          )
        })}
      </div>

      <div className="flex gap-2 mt-6">
        {items.map((_, i) => (
          <button
            key={i}
            onClick={() => setSelected(i)}
            className={`w-2 h-2 rounded-full transition-all ${
              i === selected ? "bg-[#7ce24a] w-6" : "bg-[#f2ede4]/20 hover:bg-[#f2ede4]/40"
            }`}
            aria-label={`Go to slide ${i + 1}`}
          />
        ))}
      </div>

      <p className="text-[#c8b99a]/60 text-xs mt-4 font-mono">
        {selected + 1} / {items.length} — {items[selected]?.label}
      </p>
    </div>
  )
}
