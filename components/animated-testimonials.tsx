"use client";
import { useRef, useEffect, useState } from "react";
import { ArrowRight, ArrowLeft } from 'lucide-react';
// Corrected import for Motion 12.15
import { motion, AnimatePresence } from "motion/react"; // Use motion/react based on your info
import Image from "next/image";
import { cn } from "@/lib/utils";

type Testimonial = {
    quote: string;
    name: string;
    designation: string;
    src: string;
};

export const AnimatedTestimonials = ({
    testimonials,
    autoplay = false,
    className,
}: {
    testimonials: Testimonial[];
    autoplay?: boolean;
    className?: string;
}) => {
    const [active, setActive] = useState(0);

    // Store the random rotations in a ref
    const rotationsRef = useRef<number[]>([]);

    // Use a state variable to control when the component is "hydrated" and can use client-specific values
    const [isClient, setIsClient] = useState(false);

    useEffect(() => {
        // This effect runs only on the client after initial hydration
        setIsClient(true);

        // Generate random rotations ONLY on the client
        if (rotationsRef.current.length === 0) {
            rotationsRef.current = testimonials.map(() => Math.floor(Math.random() * 21) - 10);
        }

        if (autoplay) {
            const interval = setInterval(handleNext, 5000);
            return () => clearInterval(interval);
        }
    }, [autoplay, testimonials]); // Add testimonials to dependency array if its length can change dynamically

    const handleNext = () => {
        setActive((prev) => (prev + 1) % testimonials.length);
    };

    const handlePrev = () => {
        setActive((prev) => (prev - 1 + testimonials.length) % testimonials.length);
    };

    const isActive = (index: number) => {
        return index === active;
    };

    // Helper to safely get the rotation. It will return 0 on the server.
    const getSafeRotateY = (index: number) => {
        return isClient && rotationsRef.current[index] !== undefined
            ? rotationsRef.current[index]
            : 0; // Return 0 (or a consistent default) for SSR
    };

    return (
        <div className={cn("max-w-sm md:max-w-4xl mx-auto px-4 md:px-8 lg:px-12 py-20", className)}>
            <div className="relative grid grid-cols-1 md:grid-cols-2 gap-20">
                <div>
                    <div className="relative h-80 w-full">
                        <AnimatePresence>
                            {testimonials.map((testimonial, index) => (
                                <motion.div
                                    key={testimonial.src}
                                    initial={{
                                        opacity: 0,
                                        scale: 0.9,
                                        z: -100,
                                        rotate: getSafeRotateY(index), // Use safe getter
                                    }}
                                    animate={{
                                        opacity: isActive(index) ? 1 : 0.7,
                                        scale: isActive(index) ? 1 : 0.95,
                                        z: isActive(index) ? 0 : -100,
                                        rotate: isActive(index) ? 0 : getSafeRotateY(index), // Use safe getter
                                        zIndex: isActive(index)
                                            ? 999
                                            : testimonials.length + 2 - index,
                                        y: isActive(index) ? [0, -80, 0] : 0,
                                    }}
                                    exit={{
                                        opacity: 0,
                                        scale: 0.9,
                                        z: 100,
                                        rotate: getSafeRotateY(index), // Use safe getter
                                    }}
                                    transition={{
                                        duration: 0.4,
                                        ease: "easeInOut",
                                    }}
                                    className="absolute inset-0 origin-bottom"
                                >
                                    <Image
                                        src={testimonial.src}
                                        alt={testimonial.name}
                                        width={500}
                                        height={500}
                                        draggable={false}
                                        className="h-full w-full rounded-3xl object-cover object-center"
                                    />
                                </motion.div>
                            ))}
                        </AnimatePresence>
                    </div>
                </div>
                <div className="flex justify-between flex-col py-4">
                    <motion.div
                        key={active}
                        initial={{
                            y: 20,
                            opacity: 0,
                        }}
                        animate={{
                            y: 0,
                            opacity: 1,
                        }}
                        exit={{
                            y: -20,
                            opacity: 0,
                        }}
                        transition={{
                            duration: 0.2,
                            ease: "easeInOut",
                        }}
                    >
                        <h3 className="text-2xl font-bold text-foreground">
                            {testimonials[active].name}
                        </h3>
                        <p className="text-sm text-muted-foreground">
                            {testimonials[active].designation}
                        </p>
                        <motion.p className="text-lg text-muted-foreground mt-8">
                            {testimonials[active].quote.split(" ").map((word, index) => (
                                <motion.span
                                    key={index}
                                    initial={{
                                        filter: "blur(10px)",
                                        opacity: 0,
                                        y: 5,
                                    }}
                                    animate={{
                                        filter: "blur(0px)",
                                        opacity: 1,
                                        y: 0,
                                    }}
                                    transition={{
                                        duration: 0.2,
                                        ease: "easeInOut",
                                        delay: 0.02 * index,
                                    }}
                                    className="inline-block"
                                >
                                    {word}&nbsp;
                                </motion.span>
                            ))}
                        </motion.p>
                    </motion.div>
                    <div className="flex gap-4 pt-12 md:pt-0">
                        <button
                            onClick={handlePrev}
                            className="h-7 w-7 rounded-full bg-secondary flex items-center justify-center group/button"
                        >
                            <ArrowLeft className="h-5 w-5 text-foreground group-hover/button:scale-105 transition-transform duration-300" />
                        </button>
                        <button
                            onClick={handleNext}
                            className="h-7 w-7 rounded-full bg-secondary flex items-center justify-center group/button"
                        >
                            <ArrowRight className="h-5 w-5 text-foreground group-hover/button:scale-105 transition-transform duration-300" />
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};