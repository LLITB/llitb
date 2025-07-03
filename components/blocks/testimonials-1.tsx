import { Card, CardHeader, CardFooter, CardContent } from "@/components/ui/card";
import { Star } from "lucide-react";
import { motion } from "motion/react";
export interface Testimonial {
  name: string;
  role: string;
  text: string;
  avatar: string;
  rating?: number;
}

interface TestimonialsSectionProps {
  title?: string;
  subtitle?: string;
  badgeText?: string;
  testimonials: Testimonial[];
}

export function TestimonialsSection({
  title = "What Live Life in the Black® means to our community….",
  subtitle = "See what our customers have to say about us.",
  badgeText = "Testimonials",
  testimonials,
}: TestimonialsSectionProps) {
  return (
    <section id="testimonials" className="bg-[#007595] h-full lg:h-screen flex items-center justify-center">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            {/* <div className="inline-block rounded-lg bg-primary px-3 py-1 text-sm text-primary-foreground">
              {badgeText}
            </div> */}
            <h2 className="text-4xl md:text-5xl font-bold font-clashDisplay max-w-4xl text-white  text-shadow-lg/40 text-shadow-[#d100c8]">
              {title}
            </h2>
            {/* <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              {subtitle}
            </p> */}
          </div>
        </div>
        <motion.div initial={{ y: 48, opacity: 0 }} whileInView={{ y: 0, opacity: 1 }} transition={{ ease: "easeInOut", duration: 0.8 }} className="mx-auto grid max-w-5xl gap-6 py-12 lg:grid-cols-2">
          {testimonials.map((t, i) => {
            const stars = typeof t.rating === "number" ? t.rating : 0;
            return (
              <Card key={i} className="flex flex-col h-full">
                {/* <CardHeader>
                  <div className="flex items-center gap-2">
                    <div className="flex">
                      {Array.from({ length: stars }).map((_, idx) => (
                        <Star
                          key={idx}
                          className={`h-4 w-4 ${
                            idx < stars
                              ? "fill-primary text-primary"
                              : "text-muted fill-muted"
                          }`}
                        />
                      ))}
                    </div>
                  </div>
                </CardHeader> */}
                <CardHeader></CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">"{t.text}"</p>
                </CardContent>
                <CardFooter className="mt-auto">
                  <div className="flex items-center gap-4">
                    {/* <img
                      src={t.avatar}
                      alt={t.name}
                      className="rounded-xl w-8 h-8 object-cover"
                    /> */}
                    <div>
                      <p className="text-lg font-medium text-[#d100cb]">{t.name}</p>
                      {/* <p className="text-xs text-muted-foreground">{t.role}</p> */}
                    </div>
                  </div>
                </CardFooter>
              </Card>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
