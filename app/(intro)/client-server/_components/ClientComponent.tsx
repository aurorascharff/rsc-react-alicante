'use client';

import React from 'react';

type Props = {
  children: React.ReactNode;
  content: React.ReactNode;
};

export default function ClientComponent({ children, content }: Props) {
  console.log('ClientComponent');

  // Without "use client" we cannot use onClick, useState, useEffect, window.location etc
  return (
    <>
      <button
        className="rounded border-2 border-red-500 p-4"
        onClick={() => {
          return alert('Hello!');
        }}
      >
        Click me
        {content}
        {children}
      </button>
    </>
  );
}
