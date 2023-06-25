import { publicationType } from '@/types';
import React from 'react';


export default function Publication({ contents, author, publishedDate }: publicationType) {
  const datetime = new Date(publishedDate)
  const kstTime = new Date(datetime.toLocaleString("en-US", { timeZone: "Asia/Seoul" }));
  const year = kstTime.getFullYear();
  const month = ("0" + (kstTime.getMonth() + 1)).slice(-2);
  const day = ("0" + kstTime.getDate()).slice(-2);

  console.log("시간", kstTime)
  return (
    <li className=" list-none list-inside mt-2 py-[0.5rem]  border-gray-500 border-b-[0.5px]">
      <p className="font-medium text-sm sm:text-base ">{contents + ' | ' + author + ' | [ ' + year+'-'+month+'-'+day + ']'}</p>
    </li>
  );
}
