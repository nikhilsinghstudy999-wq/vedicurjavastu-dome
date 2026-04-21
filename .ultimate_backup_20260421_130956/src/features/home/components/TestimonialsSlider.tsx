'use client';
import TestimonialCard from '@/features/testimonials/components/TestimonialCard';
import { useRealtimeContent } from '@/features/shared/hooks/useRealtimeContent';

interface SimpleTestimonial {
  id?: string;
  client_name: string;
  location: string;
  content: string;
  rating?: number;
  verified?: boolean;
}

interface TestimonialsSliderProps {
  testimonials?: SimpleTestimonial[];
}

export function TestimonialsSlider({ testimonials }: TestimonialsSliderProps) {
  const { items } = useRealtimeContent<any>('testimonials');
  const publishedFromHook = items.filter((t: any) => t.is_published);
  
  // Use passed testimonials if provided, otherwise fall back to hook data
  const displayTestimonials = testimonials && testimonials.length > 0 
    ? testimonials 
    : publishedFromHook;

  return (
    <section className="py-16 sm:py-24 overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="text-center mb-8 sm:mb-12">
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-nidra-indigo mb-4">Words of Gratitude</h2>
          <p className="font-sans text-base sm:text-lg text-nidra-indigo/60 max-w-2xl mx-auto">
            Hear from those who have experienced the transformation
          </p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
          {displayTestimonials.slice(0, 8).map((item, index) => {
            const compliantTestimonial = {
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
              <TestimonialCard key={compliantTestimonial.id} testimonial={compliantTestimonial} index={index} />
            );
          })}
        </div>
      </div>
    </section>
  );
}
export default TestimonialsSlider;
