'use client';

import { matchSorter } from 'match-sorter';
import React from 'react';
import { useSafeSearchParams } from '@/validations/routeSchema';
import ContactButton from './ContactButton';
import type { Contact } from '@prisma/client';

type Props = {
  contacts: Contact[];
};

export default function ContactList({ contacts }: Props) {
  const { q } = useSafeSearchParams('home');

  const filteredContacts = q
    ? matchSorter(contacts, q, {
        keys: ['first', 'last'],
      })
    : contacts;

  return (
    <nav className="flex-1 overflow-auto px-8 py-4">
      {filteredContacts.length ? (
        <ul>
          {filteredContacts.map(contact => {
            return (
              <li key={contact.id} className="mx-1">
                <ContactButton contact={contact} />
              </li>
            );
          })}
        </ul>
      ) : (
        <p>
          <i>No contacts</i>
        </p>
      )}
    </nav>
  );
}
