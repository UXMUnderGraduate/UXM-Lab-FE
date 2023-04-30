'use client';
import Form from '@/components/admin/Form';
import Heading from '@/components/ui/Heading';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react';

export default function page() {
  const path = usePathname();
  return (
    <div className="mt-20 w-full">
      <div className="w-full flex justify-between">
        <Link href={'/admin'} className="font-semibold text-sm sm:text-base px-4 py-2  rounded-xl">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
            <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
          </svg>
        </Link>
        <h1 className="font-semibold text-2xl sm:text-3xl text-myBlue">{path?.split('/')[2]}</h1>
        <div></div>
      </div>
      <div>
        
      </div>
      {/* <Form title="제목" affiliation="소속기관" /> */}
    </div>
  );
}
