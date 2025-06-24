"use client"
import { useRef, useEffect } from "react";
import { ReactLenis } from 'lenis/react';
import { Button } from "@/components/ui/button"

import Image from "next/image"
import Link from "next/link"
import logo from "@/public/images/LLitB-logo-50-50.png"
import Hero from '@/components/sections/Hero'
import Problem from '@/components/sections/Problem'
import Solutions from "@/components/sections/Solutions"
import Help from "@/components/sections/Help"
import Proof from "@/components/sections/Proof"
// import Workshop from "@/components/sections/Workshop"
import CTA from "@/components/sections/CTA"
export default function Home() {
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      const parallaxElements = document.querySelectorAll<HTMLElement>(".parallax")
      parallaxElements.forEach((element) => {
        const speed = Number(element.getAttribute("data-speed")) || 0.2
        const yPos = -(window.scrollY * speed)
        element.style.transform = `translateY(${yPos}px)`
      })
    }

    window.addEventListener("scroll", handleScroll)
    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])
  const handleClick = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };
  return (
    <div className="flex min-h-screen flex-col overflow-x-hidden">
      {/* Header */}
      <header className="sticky top-0 z-50 w-full border-b bg-white/80 backdrop-blur-sm">
        <div className="container mx-auto flex h-16 items-center justify-between px-2">
          <div className="flex items-center gap-2">
            <Image
              src={logo}
              alt="Live Life In The Black logo"
              width={40}
              height={40}
              className="h-10 w-10"
            />
            <span className="text-base lg:text-lg font-semibold text-black font-montserrat">Live Life In The Black</span>
          </div>
          <div className="flex items-center gap-2">
            <Button className="bg-amber-400 hover:bg-amber-500 text-black" onClick={handleClick} >Join the Waitlist</Button>
          </div>
        </div>
      </header>
      <ReactLenis root options={{ lerp: 0.1, duration: 1.5, smoothWheel: true }}>
        <main >
          {/* Hero Section */}
          <Hero />

          {/* Problem/Agitation Section */}
          <Problem />

          {/* Solution/Benefits Section */}
          <Solutions />

          <Help />

          {/* Social Proof Section add back in when get content */}
          {/* <Proof /> */}

          {/* Feature/Benefit Section (Workshop Curriculum) */}
          {/* <Workshop/> */}

          {/* <section className="py-16 bg-gray-50">
          <div className="container">
            <div className="max-w-3xl mx-auto space-y-8">
              <h2 className="text-3xl md:text-4xl font-bold font-montserrat text-center">
                Quick Answers to Your Questions
              </h2>

              <Accordion type="single" collapsible className="w-full">
                <AccordionItem value="item-1">
                  <AccordionTrigger className="text-lg font-semibold">No time! How long is this?</AccordionTrigger>
                  <AccordionContent>
                    Busy? Perfect. Four focused sessions (~60-90 min each) + recordings. Tiny time investment, huge
                    financial return.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-2">
                  <AccordionTrigger className="text-lg font-semibold">Why pay? Info online is free.</AccordionTrigger>
                  <AccordionContent>
                    Free info = chaos & bias. Get a proven, step-by-step system from unbiased experts. Save time, avoid
                    costly mistakes, get results faster.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-3">
                  <AccordionTrigger className="text-lg font-semibold">Is this right for me?</AccordionTrigger>
                  <AccordionContent>
                    Yes! Designed for young pros. Starts clear, builds confidence. Perfect if you're starting out or
                    need real structure.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-4">
                  <AccordionTrigger className="text-lg font-semibold">What's the price?</AccordionTrigger>
                  <AccordionContent>
                    Waitlist = First dibs on launch details & best early bird pricing. Lock in maximum value now, decide
                    later.
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>
          </div>
        </section> */}

          {/* Final Call to Action (CTA) Section */}
          <CTA ref={scrollRef} />
        </main>
      </ReactLenis>
      {/* Footer */}

    </div>
  )
}
