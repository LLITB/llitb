'use client'
import React from "react";
import { motion } from 'motion/react'; // Correct import for 'motion' library

interface ButtonProps {
    label: string;
    onClick: () => void;
}

export const LLIBButton: React.FC<ButtonProps> = ({ label, onClick }) => {
    return (
        <motion.button
            initial={{
                opacity: 0,
                y: 5
            }}
            animate={{
                opacity: 1,
                y: 0
            }}
            whileHover={{
                scale: 1.05,
                y: -5,
                boxShadow: "0px 3px 7px rgba(8,112,184,0.7)"
            }}
            transition={{
                duration: 0.3,
                ease: 'easeInOut'
            }}
            onClick={onClick}
            className="group relative cursor-pointer text-neutral-300 text-2xl px-12 py-4 rounded-lg bg-black shadow-[0px_1px_2px_0px_rbga(255,255,255,0.1)_inset,0px_-1px_2px_0px_rgba(255,255,255,255,0.2)_inset]">
            <span className="group-hover:text-purple-500 transition-colors duration-300">{label}</span>
            <span className="absolute inset-x-0 bottom-0 bg-gradient-to-r from-transparent via-purple-500 to-transparent h-[2px] w-3/4 mx-auto"></span>
            <span className="absolute opacity-15 group-hover:opacity-100 transition-opacity duration-300 inset-x-0 bottom-0 bg-gradient-to-r from-transparent via-purple-500 to-transparent h-[6px] w-3/4 mx-auto blur-sm"></span>
        </motion.button>
    )
}