import React from 'react'
import Image from 'next/image'
import logo from '@/public/images/LLitB-logo-wo-words.svg';
import { Button } from '@/components/ui/button';
const Navbar = () => {
    return (
        <header className="fixed z-50 w-full border-b bg-white/80 backdrop-blur-sm">
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
                    <Button className='bg-[#f1bb32] hover:bg-[#fee094]  text-black' asChild><a href="#CTA">Join Waitlist</a></Button>
                </div>
            </div>
        </header>
    )
}

export default Navbar