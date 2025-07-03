import React from 'react'
import { motion } from 'motion/react'
import { DollarSign, LineChart, PiggyBank, Target, Clock, Umbrella } from "lucide-react"
const Help = () => {
    return (
        <section id="help" className="h-full my-10 mx-5 lg:h-screen flex items-center justify-center">
            <div className="container ">
                <motion.h2
                    initial={{ y: 48, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    transition={{ ease: "easeInOut", duration: 0.8 }}
                    className="text-4xl md:text-5xl font-bold font-clashDisplay text-center mb-10 text-shadow-sm/20 text-shadow-[#d100cb]">At the Wealthy Mindset Workshop you will learn...</motion.h2>
                <motion.div
                    initial={{ y: 48, opacity: 0.5 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    transition={{ ease: "easeInOut", duration: 0.5 }}
                    className="grid md:grid-cols-2 gap-8">
                    <motion.div
                        initial={{ y: 48, opacity: 0.5 }}
                        whileInView={{ y: 0, opacity: 1 }}
                        transition={{ staggerChildren: 0.8, delayChildren: 2.5 }}
                        className="bg-white p-6 rounded-lg shadow-md border border-gray-100">
                        <div className="flex items-start gap-4">
                            <div className="bg-purple-100 p-3 rounded-full">
                                <DollarSign className="h-6 w-6 text-[#007595]" />
                            </div>
                            <div>
                                <h3 className="text-lg lg:text-2xl font-bold mb-2 font-opensans">Your digital financial profile</h3>
                                <p className="text-xl text-gray-700">
                                    Everything you need, all in one place, empowering you to confidently discuss your financial picture with your trusted advisors.
                                </p>
                            </div>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ y: 48, opacity: 0.5 }}
                        whileInView={{ y: 0, opacity: 1 }}
                        transition={{ staggerChildren: 0.8, delayChildren: 2.5 }}
                        className="bg-white p-6 rounded-lg shadow-md border border-gray-100">
                        <div className="flex items-start gap-4">
                            <div className="bg-purple-100 p-3 rounded-full">
                                <PiggyBank className="h-6 w-6 text-[#007595]" />
                            </div>
                            <div>
                                <h3 className="text-lg lg:text-2xl font-bold mb-2 font-opensans">Strategic Cash Management</h3>
                                <p className="text-xl text-gray-700">
                                    Strategically manage your spending, eliminate debt, and grow your savings to build a strong financial foundation.
                                </p>
                            </div>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ y: 48, opacity: 0.5 }}
                        whileInView={{ y: 0, opacity: 1 }}
                        transition={{ staggerChildren: 0.8, delayChildren: 2.5 }}
                        className="bg-white p-6 rounded-lg shadow-md border border-gray-100">
                        <div className="flex items-start gap-4">
                            <div className="bg-purple-100 p-3 rounded-full">
                                <Target className="h-6 w-6 text-[#007595]" />
                            </div>
                            <div>
                                <h3 className="text-lg lg:text-2xl font-bold mb-2 font-opensans">Prepare for the Unknown</h3>
                                <p className="text-xl text-gray-700">
                                    Protect your assets and future by understanding your insurance needs and building a plan that supports long-term wealth.
                                </p>
                            </div>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ y: 48, opacity: 0.5 }}
                        whileInView={{ y: 0, opacity: 1 }}
                        transition={{ staggerChildren: 0.8, delayChildren: 2.5 }}
                        className="bg-white p-6 rounded-lg shadow-md border border-gray-100">
                        <div className="flex items-start gap-4">
                            <div className="bg-purple-100 p-3 rounded-full">
                                <LineChart className="h-6 w-6 text-[#007595]" />
                            </div>
                            <div>
                                <h3 className="text-lg lg:text-2xl font-bold mb-2 font-opensans">Establish Obtainable Current and Long-term Goals</h3>
                                <p className="text-xl text-gray-700">
                                    Set realistic financial goals to bring structure, stability, and purpose to your money journey.
                                </p>
                            </div>
                        </div>
                    </motion.div>

                    <motion.div initial={{ y: 48, opacity: 0.5 }}
                        whileInView={{ y: 0, opacity: 1 }}
                        transition={{ staggerChildren: 0.8, delayChildren: 2.5 }} className="bg-white p-6 rounded-lg shadow-md border border-gray-100">
                        <div className="flex items-start gap-4">
                            <div className="bg-purple-100 p-3 rounded-full">
                                <Clock className="h-6 w-6 text-[#007595]" />
                            </div>
                            <div>
                                <h3 className="text-lg lg:text-2xl font-bold mb-2 font-opensans">Retire in Style</h3>
                                <p className="text-xl text-gray-700">
                                    Start planning now to retire on your own terms with clarity, confidence, and fewer financial burdens.
                                </p>
                            </div>
                        </div>
                    </motion.div>

                    <motion.div initial={{ y: 48, opacity: 0.5 }}
                        whileInView={{ y: 0, opacity: 1 }}
                        transition={{ staggerChildren: 0.8, delayChildren: 2.5 }} className="bg-white p-6 rounded-lg shadow-md border border-gray-100">
                        <div className="flex items-start gap-4">
                            <div className="bg-purple-100 p-3 rounded-full">
                                <Umbrella className="h-6 w-6 text-[#007595]" />
                            </div>
                            <div>
                                <h3 className="text-lg lg:text-2xl font-bold mb-2 font-opensans">Legacy of Debt or Wealth?</h3>
                                <p className="text-gray-700">
                                    Decide what legacy you want to leave—learn how to build and pass on wealth, not worry.
                                </p>
                            </div>
                        </div>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    )
}

export default Help