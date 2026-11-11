export interface Testimonial {
  id: string;
  name: string;
  role: string;
  company: string;
  quote: string;
  metricsResult?: string;
}

export const TESTIMONIALS_LIST: Testimonial[] = [];
