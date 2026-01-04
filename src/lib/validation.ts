import { z } from 'zod';

export const contactSchema = z.object({
  name: z.string().min(2, 'Please enter at least 2 characters'),
  email: z.string().email('Please enter a valid email'),
  message: z.string().min(10, 'Please add a bit more detail'),
});

export type ContactFormData = z.infer<typeof contactSchema>;
