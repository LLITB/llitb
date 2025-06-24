import React from 'react'
import { motion } from 'motion/react'
const ProblemItem = ({ item }: { item: string }) => {
    return (
        <motion.p
            initial={{ y: 48, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ ease: "easeInOut", duration: 0.75 }}
            className="text-xl text-gray-700 mb-4"
        >{item}</motion.p>
    )
}

export default ProblemItem