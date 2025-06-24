"use client"
import React from 'react'
// import Testimonial from '../Testimonial'
import { AnimatedTestimonials } from "@/components/animated-testimonials"
const Proof = () => {
    const testimonials = [
        {
            quote:
                "I went from drowning in credit card stress to paying off over $5,000 in just 6 months using their debt strategy. Game changer!",
            name: "Jon Jones",
            designation: "Product Manager at TechFlow",
            src: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=3560&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        },
        {
            quote:
                "Finally understood investing basics without feeling dumb! I opened my first retirement account and feel confident about the future.",
            name: "Donna Rodriguez",
            designation: "CTO at InnovateSphere",
            src: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        },
        {
            quote:
                "It was a lot of work and it was scary at first but the results once we started were undeniable",
            name: "Eric Watson",
            designation: "Operations Director at CloudScale",
            src: "https://images.unsplash.com/photo-1623582854588-d60de57fa33f?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        },
        {
            quote:
                "My wife and I are actually thinking about buying a house now. That is something I did not was going to be possible.",
            name: "James Kim",
            designation: "Engineering Lead at DataPro",
            src: "https://images.unsplash.com/photo-1636041293178-808a6762ab39?q=80&w=3464&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        },
    ];
    return (
        <section className="py-16 bg-gray-50 relative overflow-hidden">
            <div className="container ">
                <div className="max-w-4xl mx-auto space-y-12">
                    <h2 className="text-3xl md:text-4xl font-bold font-montserrat text-center">
                        Real Results from Young Professionals Like You
                    </h2>

                    <div className="my-5">
                        <AnimatedTestimonials testimonials={testimonials} />
                    </div>

                    <div className="text-center text-sm text-gray-600 mt-8">
                        Led by Certified Financial Planners™
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Proof