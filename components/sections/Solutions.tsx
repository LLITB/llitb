import React from 'react'
import { motion } from 'motion/react'
const Solutions = () => {
    return (
        <section id="solution" className="h-screen flex items-center justify-center my-10 bg-[#007595]">
            <div
                className="container mx-5">
                <div className="max-w-4xl mx-auto space-y-4 lg:space-y-12 ">
                    <motion.div
                        initial={{ y: 48, opacity: 0 }}
                        whileInView={{ y: 0, opacity: 1 }}
                        transition={{ ease: "easeInOut", duration: 1.2 }}
                        className="text-center space-y-4 text-white">
                        <h2 className="text-4xl md:text-5xl font-bold font-clashDisplay text-shadow-lg/40 text-shadow-[#d100c8]">
                            We are here to help
                        </h2>
                        <h3 className="text-xl md:text-3xl font-semibold font-montserrat">
                            Stress-Free Money Mastery | From Money Mess to Money Zen
                        </h3>
                        <p className="text-lg">
                            Our vision is to ignite intergenerational conversations about life and financial habits, nurture supportive communities where open dialogue about money emotions can flourish, and assist in creating, protecting, and passing on a legacy that spans generations. Rooted in the conviction that tomorrow matters just as much as today, we center our approach on clients’ lifestyle goals, providing a clear roadmap toward lasting growth and prosperity.
                        </p>
                    </motion.div>
                </div>
            </div>
        </section>
    )
}

export default Solutions