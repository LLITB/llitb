import { useRef, forwardRef } from "react";
import SubscriberForm from "@/components/SubscriberForm"
import TextPressure from "@/components/TextPressure";
import SubscriberFormFormik from "../SubscriberFormFormik";
import SubscribeForm from "@/components/SubscribeForm"
// import MailchimpForm from "../MailchimpForm";

const CTA = forwardRef<HTMLDivElement, React.ComponentPropsWithoutRef<'div'>>((props, ref) => {
    return (
        <section id="CTA" ref={ref} className="h-full bg-[#00759550] text-white px-5 py-10">
            <div className="container" id="final-call">
                <div className="max-w-3xl mx-auto space-y-8 text-center">
                    <div className='flex flex-col space-y-5'>
                        <h2 className="text-3xl mt-8 md:text-4xl font-bold font-montserrat">
                            Helping you get your
                        </h2>
                        <h2 className="block md:hidden text-8xl mt-8 font-bold font-montserrat">
                            Money
                        </h2>
                        <TextPressure
                            text="money"
                            flex={true}
                            alpha={false}
                            stroke={false}
                            width={false}
                            weight={true}
                            italic={true}
                            textColor="#f4f4f4"
                            strokeColor="#004353"
                            minFontSize={200}
                            className="hidden md:block"
                        />
                        <h2 className="text-3xl md:text-4xl font-bold font-montserrat">
                            right
                        </h2>
                    </div>

                    {/* <p className="text-lg">
                        Join the VIP waitlist now. Get first access to workshop dates, exclusive early bird discounts, and bonus
                        financial tips sent straight to your inbox.
                    </p> */}
                    <p className="text-lg font-semibold bg-[#007595] p-4 rounded-lg inline-block">
                        FREE Bonus: Get our '5 Simple Money Moves Young Professionals Can Make This Week' checklist instantly
                        when you sign up!
                    </p>

                    <div className="max-w-md mx-auto">
                        {/* <SubscribeForm /> */}
                        <SubscriberForm />
                        {/* <MailchimpForm /> */}
                        {/* <SubscriberFormFormik /> */}
                    </div>

                </div>
            </div>
        </section>
    )
})

export default CTA