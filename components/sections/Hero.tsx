import React from 'react'

import { VideoText } from '@/components/magicui/video-text'
// import { Input } from "@/components/ui/input"
import { RainbowButton } from "@/components/ui/rainbow-button";
import { LLIBButton } from '../LLIBButton';
import { Button } from '../ui/button';
type Props = {}

export default function Hero({ }: Props) {
    return (
        <section id="hero" className='grid grid-col-2 lg:grid-cols-4 grid-rows-3 h-full lg:h-screen w-screen '>
            <div className='col-span-2 row-span-2 row-start-1 col-start-2 max-w-5xl w-full mx-auto overflow-hidden my-8 lg:my-0'>
                <VideoText src="/video/black_men_5.webm"
                    className="uppercase text-4xl lg:text-6xl ">LIVE LIFE</VideoText>
            </div>
            <div className='col-span-2 row-span-2 col-start-2 row-start-2 max-w-5xl w-full h-8 mx-auto bg-neutral-900 mt-14 z-50'>
                <h1 className='text-2xl font-bold text-white uppercase text-center'>In The Black</h1>
            </div>
            <div className='col-span-2 row-span-1 col-start-2 row-start-3 my-4 lg:-mt-8'>
                <h2 className='text-xl lgtext-4xl font-bold text-neutral-900 uppercase text-center'>
                    If your not talking dollars,<br /> it don't make sense.
                </h2>
                <div className='flex mx-auto space-x-2 lg:space-x-4 justify-center items-center lg:pt-8 px-4'>
                    {/* <Input placeholder="Enter your email" className="w-1/2" /> */}
                    <p className='text-lg lg:text-xl text-black max-w-xl px-4'>Build your dreams, not their checklist</p>
                    {/* <RainbowButton className="cursor-pointer"><a href="#CTA">Join the Waitlist</a></RainbowButton> */}
                    <Button asChild><a href="#CTA">Join Waitlist</a></Button>
                </div>
            </div>
        </section>
    )
}
