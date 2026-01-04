'use server';

import { contactSchema, type ContactFormData } from '@/lib/validation';

export async function submitContact(data: ContactFormData) {
  const parsed = contactSchema.safeParse(data);

  if (!parsed.success) {
    return {
      success: false,
      message: parsed.error.errors[0]?.message ?? 'Please check the form.',
    };
  }

  const payload = parsed.data;
  console.log('Contact submission', payload);

  return {
    success: true,
    message: 'Thank you. I will respond soon.',
  };
}
