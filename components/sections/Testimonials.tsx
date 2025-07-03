import React from 'react'
import { TestimonialsSection } from '../blocks/testimonials-1'

const testimonials = [
    {
        name: "- Devon Smith",
        rating: 4,
        role: "Lead cuteness manager",
        text: `Living life in the Black® to me means freedom of choice, freedom of movement. It means I’m not chasing a dollar, I’m deciding how that dollar, I’m deciding what that dollar does for me.`,
        avatar:
            "https://media.istockphoto.com/id/1281804798/photo/very-closeup-view-of-amazing-domestic-pet-in-mirror-round-fashion-sunglasses-is-isolated-on.jpg?s=612x612&w=0&k=20&c=oMoz9rUr-rDhMGNmEepCkr7F1g3AXs9416hvVnT_4CI=",
    },
    {
        name: "- Charity Lacky",
        rating: 3,
        role: "CEO, Anti-cat league",
        text: `Living life in the Black® means prioritizing your self-care in order to generate generational wealth. The only way we can do that is if we organize our priorities in accordance with what will endure the test of time and I am so full of gratitude for Leslie and her team for teaching me that lesson at a very young age.`,
        avatar:
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSBgI7Hw5mF3_1vJcls5z33y4272nPT7pBWNw&s",
    },
]
const Testimonials = () => {
    return (
        <TestimonialsSection testimonials={testimonials} />
    )
}

export default Testimonials