import React from 'react'
import { motion, useScroll } from 'motion/react'

import ProblemItem from "@/components/problem-item"
const Problem = () => {

    return (
        <section id="problem" className="bg-gray-50 h-full lg:h-screen flex items-center justify-center">
            <div className="container  my-10 lg:my-0">
                <div className="max-w-3xl mx-auto space-y-6 text-center">
                    <motion.h2
                        initial={{ y: 48, opacity: 0 }}
                        whileInView={{ y: 0, opacity: 1 }}
                        transition={{ ease: "easeInOut", duration: 1.5 }}
                        className="text-4xl md:text-5xl font-bold font-montserrat mb-10">
                        Is Money Stress Running Your Life?
                    </motion.h2>
                    <ProblemItem item="How do I manage debt and student loans?" />
                    <ProblemItem item="What should my budget look like?" />
                    <ProblemItem item="How do I start investing?" />
                    <ProblemItem item='When should I think about retirement?' />
                    <ProblemItem item="How do I build the life I want?" />
                    <motion.p
                        initial={{ y: 48, opacity: 0 }}
                        whileInView={{ y: 0, opacity: 1 }}
                        transition={{ ease: "easeInOut", duration: 0.75 }}
                        className="text-2xl font-semibold text-purple-500 text-center mt-8">There is a clear path forward.</motion.p>
                </div>
            </div>
        </section>
    )
}

export default Problem