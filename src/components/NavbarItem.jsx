'use client'

import React from 'react';
import Link from 'next/link';
import { useSearchParams } from 'next/navigation';

export default function NavbarItem({ title, param }) {

  const searchParams = useSearchParams();
  const genre = searchParams.get('genre');

  // console.log("genre=", genre);
  console.log(searchParams.has('genre'));
  // console.log("param=", param);

  return (
    <div key={title}>
      <Link 
      className={`hover:text-amber-600 font-semibold
      ${genre === param
          ? `underline underline-offset-4 decoration-4 decoration-amber-500 rounded-lg`
          : ``}`}
      href={`/?genre=${param}`}>
        {title}
      </Link>
    </div>
  )
}
