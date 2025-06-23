// TestimonialServer.tsx
import { getData } from '@/lib/getData';
import TestimonialClient from '../Testimonials'; // adjust path if needed

export default async function TestimonialServer() {
  const response = await getData({
    contentType: 'testimonial',
    params: {
      include_fallback: true,
      include_branch: false,
    },
  });
  // console.dir(response,{depth:null});

  const testimonials = response?.[0]?.testimonial_data ?? []; 
  return <TestimonialClient testimonials={testimonials} />;
}
