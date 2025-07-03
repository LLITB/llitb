import React from 'react'
import Image from 'next/image'
import teaching from '@/public/images/teaching.webp';
import leslie from '@/public/images/headshot.webp'
const About = () => {
    return (
        <section id="about" className="h-full my-10 mx-5 flex items-center justify-center">
            <div className='container px-4 md:px-6 max-w-5xl'>
                <h2 className="text-4xl md:text-5xl font-bold font-clashDisplay text-center mb-10  text-shadow-sm/20 text-shadow-[#d100cb]">My Journey</h2>
                <div className='grid grid-cols-3 gap-4'>
                    <div className='col-start-1 col-span-3 md:col-span-2 space-y-4'>
                        <p className='font-light text-lg leading-8'>
                            I’ve been on this journey since the Great Recession. At the time, I found myself
                            in yet another transition - only this one wasn’t by choice. The economy was the
                            worst we’d seen in decades, and I had to learn some hard but valuable lessons:
                            how to set clear priorities and stick to them, how to manage a career shift under
                            stress, and how to make money decisions in the middle of so much uncertainty
                            —uncertainty about income, family, the future… everything.
                        </p>
                        <p className='font-light text-lg leading-8'>
                            As I reflected on where I was, what I had accomplished, and where I wanted to
                            go, I realized even people who are trained in the world of finance - people who
                            are usually organized and thoughtful - can make mistakes. We can lose focus
                            and overlook our future selves when making decisions in the moment.
                            Sometimes it takes a major life event to snap us out of autopilot and make us
                            realize that planning for the future isn’t optional - it’s essential.
                        </p>
                    </div>
                    <div className='col-start-1 md:col-start-3 col-span-3 md:col-span-1 overflow-hidden justify-items-center'>
                        <Image src={leslie} alt="Leslie" width={476} height={693} />
                    </div>
                    <div className='col-start-1 col-span-3 space-y-4'>

                        <p className='font-light text-lg leading-8'>
                            That was true for me. I had to develop the discipline of doing the hard work -
                            figuring out my next career move, managing my budget, trying to get my
                            financial life in order - but I really wished I had someone to guide me - a money
                            coach. But at that time, that kind of support felt out of reach. It left me
                            wondering: how do people get help when they need it most, not just when they
                            can afford it?
                        </p>
                        <p className='font-light text-lg leading-8'>
                            That moment was a turning point. I became committed to being the kind of
                            resource I wish I had - someone who helps others proactively prepare for the life
                            and legacy they want, even in the midst of uncertainty.
                        </p>
                        <p className='font-light text-lg leading-8'>
                            Live Life in the Black® became my mantra and guiding light. It’s more than a
                            phrase—it’s a mindset. A reminder that financial wellness isn’t about perfection;
                            it’s about intention, alignment, and preparing today for the life and legacy you
                            want tomorrow.
                        </p>
                    </div>

                </div>
            </div>
        </section>
    )
}

export default About