"use client"

import Image from "next/image"
import Link from "next/link"
import { motion, useReducedMotion } from "framer-motion"
import { ArrowUpRight } from "lucide-react"
import { brandAssets } from "@/lib/brand-assets"

export function HeroSection() {
  const reduceMotion = useReducedMotion()

  return (
    <section
      id="top"
      aria-labelledby="hero-title"
      className="relative isolate flex min-h-[480px] items-center overflow-hidden bg-forest sm:min-h-[540px] lg:min-h-[640px] xl:min-h-[720px]"
    >
      <Image
        src={brandAssets.hero}
        alt=""
        fill
        priority
        sizes="100vw"
        className="object-cover object-[68%_55%] sm:object-[58%_55%] lg:object-[50%_55%]"
      />

      {/* Directional forest-green gradient: strongest behind text, fading across middle */}
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-gradient-to-r from-forest/85 via-forest/25 to-transparent"
      />
      {/* Strengthened local gradient behind copy on mobile */}
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-gradient-to-r from-forest/90 via-forest/55 to-forest/25 lg:hidden"
      />

      <div className="relative z-10 mx-auto w-full max-w-[75rem] px-5 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-24">
        <motion.div
          initial={reduceMotion ? false : { opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: reduceMotion ? 0 : 0.4, ease: [0.22, 1, 0.36, 1] }}
          className="max-w-[36rem] pb-12 lg:pb-16"
        >
          <p className="text-[0.7rem] font-semibold uppercase tracking-[0.2em] text-[#F7F3EA]/75 sm:text-[0.75rem]">
            Garden Design &amp; Landscaping · Northamptonshire
          </p>

          <h1
            id="hero-title"
            className="mt-7 text-[clamp(2.625rem,5.8vw,5.25rem)] leading-[1.04] tracking-[-0.02em] text-[#F7F3EA]"
          >
            <span className="block font-normal">Your favourite place.</span>
            <span className="block font-normal italic">Just outside.</span>
          </h1>

          <p className="mt-6 max-w-[430px] text-[1.125rem] leading-[1.7] text-[#F7F3EA]/85">
            Beautiful planting, carefully built patios, and a garden you&rsquo;ll love spending time in.
          </p>

          <div className="mt-8 flex flex-col items-start gap-7 sm:flex-row sm:items-center">
            <Link
              href="#planner"
              className="inline-flex h-[50px] items-center justify-center gap-2 rounded-full bg-[#AD7453] px-8 text-sm font-semibold text-[#F7F3EA] transition-all hover:-translate-y-0.5 hover:bg-[#9C6549] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#F7F3EA]/50 focus-visible:ring-offset-2 focus-visible:ring-offset-forest"
            >
              Plan your garden
              <ArrowUpRight aria-hidden="true" className="size-4" />
            </Link>
            <Link
              href="#projects"
              className="inline-flex items-center gap-1.5 text-sm font-semibold text-[#F7F3EA] transition-colors hover:text-[#F7F3EA]/70 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#F7F3EA]/50"
            >
              Explore our work
              <ArrowUpRight aria-hidden="true" className="size-4" />
            </Link>
          </div>

          <p className="mt-6 text-sm text-[#F7F3EA]/70">
            Free initial site visit
          </p>
        </motion.div>
      </div>
    </section>
  )
}
