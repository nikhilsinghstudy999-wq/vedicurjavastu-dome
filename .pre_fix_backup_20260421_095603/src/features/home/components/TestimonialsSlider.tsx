'use client';
import { useSound } from '@/features/shared/hooks/useSound';
import TestimonialCard from '@/features/testimonials/components/TestimonialCard';
import { Testimonial } from '@/types/admin';

interface SimpleTestimonial {
  id?: string;
  client_name: string;
  location: string;
  content: string;
  rating?: number;
  verified?: boolean;
}

const defaultTestimonials: SimpleTestimonial[] = [
  {
    id: '1',
    client_name: 'Priya Malhotra',
    location: 'London, UK',
    content: "Acharya's guidance transformed our home. We've never felt such peace.",
    rating: 5,
    verified: true,
  },
  {
    id: '2',
    client_name: 'James Whitmore',
    location: 'New York, USA',
    content: "The commercial Vastu analysis was spot on. Revenue up 40% in months.",
    rating: 5,
    verified: true,
  },
  {
    id: '3',
    client_name: 'Ananya Sharma',
    location: 'Dubai, UAE',
    content: "My health improved dramatically after implementing the remedies.",
    rating: 5,
    verified: true,
  },
  {
    id: '4',
    client_name: 'Michael Chen',
    location: 'Singapore',
    content: "Unparalleled depth of knowledge. Practical and transformative.",
    rating: 5,
    verified: true,
  },
  {
    id: '5',
    client_name: 'Elena Rossi',
    location: 'Milan, Italy',
    content: "Finally feel at peace in my own home. Forever grateful.",
    rating: 5,
    verified: true,
  },
  {
    id: '6',
    client_name: 'David Miller',
    location: 'Sydney, Australia',
    content: "The land selection advice saved us from a disastrous purchase.",
    rating: 5,
    verified: true,
  },
];

interface TestimonialsSliderProps {
  testimonials?: SimpleTestimonial[];
}

export function TestimonialsSlider({ testimonials }: TestimonialsSliderProps) {
  const { play } = useSound();
  const items = testimonials && testimonials.length > 0 ? testimonials : defaultTestimonials;

  return (
    <section className="py-16 sm:py-24 overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="text-center mb-8 sm:mb-12">
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-nidra-indigo mb-4">
            Words of Gratitude
          </h2>
          <p className="font-sans text-base sm:text-lg text-nidra-indigo/60 max-w-2xl mx-auto">
            Hear from those who have experienced the transformation
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
          {items.map((item, index) => {
            // Build a fully compliant Testimonial object
            const compliantTestimonial: Testimonial = {
              id: item.id || `testimonial-${index}`,
              client_name: item.client_name,
              location: item.location,
              content: item.content,
              rating: item.rating || 5,
              verified: item.verified !== undefined ? item.verified : true,
              project_type: '',
              avatar_url: null,
              order_index: index,
              is_published: true,
            };

            return (
              <div
                key={item.id || index}
                onMouseEnter={() => play('hoverCard')}
                className="w-full"
              >
                <TestimonialCard testimonial={compliantTestimonial} index={index} />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
export default TestimonialsSlider;
