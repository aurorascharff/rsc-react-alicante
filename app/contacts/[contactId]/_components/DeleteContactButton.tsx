'use client';

import React from 'react';
import SubmitButton from '@/components/ui/SubmitButton';
import { deleteContact } from '@/data/actions/deleteContact';

export default function DeleteContactButton({ contactId }: { contactId: string }) {
  const deleteContactById = deleteContact.bind(null, contactId);

  return (
    <form
      onSubmit={async e => {
        e.preventDefault();
        const response = confirm('Are you sure you want to delete this contact?');
        if (!response) {
          return;
        }
        await deleteContactById();
      }}
      action={deleteContactById}
    >
      <SubmitButton type="submit" theme="destroy">
        Delete
      </SubmitButton>
    </form>
  );
}
