import { researchType } from '@/types';
import Link from 'next/link';
import React from 'react';

export default function DetailResearchCard(props: researchType) {
  return (
    <Link href={`/admin/research/${props.id}`} className="w-auto border border-1 shadow-lg rounded-lg p-2">
      <div className="text-xl font-bold">{`ID : ${props.id}`}</div>
      <div className="text-xl font-bold">{`Title : ${props.title}`}</div>
    </Link>
  );
}
