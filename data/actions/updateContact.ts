'use server';

import { revalidatePath } from 'next/cache';
import { redirect } from 'next/navigation';
import { prisma } from '@/db';
import { slow } from '@/utils/slow';
import { routes } from '@/validations/routeSchema';

export async function updateContact(contactId: string, formData: FormData) {
  await slow();

  const data = Object.fromEntries(formData);

  await prisma.contact.update({
    data,
    where: {
      id: contactId,
    },
  });

  revalidatePath('/');
  redirect(routes.contactId({ contactId }));
}
