import { publicationType } from '@/types';
import React from 'react';

export default function Publication({ contents, author, publishedDate }: publicationType) {
  return (
    <li className=" list-none list-inside mt-2 py-[0.5rem]  border-gray-500 border-b-[0.5px]">
      <p className="font-medium text-sm sm:text-base ">{contents + ' | ' + author + ' | [ ' + publishedDate.slice(0, 10) + ']'}</p>
    </li>
  );
}
