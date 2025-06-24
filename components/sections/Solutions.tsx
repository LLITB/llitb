import React from 'react'
import { motion } from 'motion/react'
const Solutions = () => {
    return (
        <section id="solution" className="h-screen flex items-center justify-center my-10">
            <motion.div
                initial={{ scale: 0.5, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.8, type: 'spring', stiffness: 50 }}
                className="container mx-5">
                <div className="max-w-4xl mx-auto space-y-4 lg:space-y-12">
                    <div className="text-center space-y-4">
                        <h2 className="text-3xl md:text-4xl font-bold font-montserrat">
                            We are here to help
                        </h2>
                        <h3 className="text-xl md:text-3xl font-semibold font-montserrat">
                            Stress-Free Money Mastery | From Money Mess to Money Zen
                        </h3>
                        <p className="text-lg text-gray-700">
                            Our vision is to ignite intergenerational conversations about life and financial habits, nurture supportive communities where open dialogue about money emotions can flourish, and assist in creating, protecting, and passing on a legacy that spans generations. Rooted in the conviction that tomorrow matters just as much as today, we center our approach on clients’ lifestyle goals, providing a clear roadmap toward lasting growth and prosperity.
                        </p>
                    </div>
                </div>
            </motion.div>
        </section>
    )
}

export default Solutions