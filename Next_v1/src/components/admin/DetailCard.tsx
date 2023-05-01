import React from 'react';
import { userType } from '@/types';
import Image from 'next/image';
import Link from 'next/link';

export default function DetailCard(props: userType) {
  const { id, nameKr, nameEn, affiliation, isAlumni, researchField, email, img, company } = props;
  return (
    <Link href={`/admin/members/${id}`} className="w-auto border border-1 shadow-lg rounded-lg p-2">
      <Image src={`${process.env.NEXT_PUBLIC_SERVER_PATH}/images/${img}`} width={400} height={400} alt={`${nameEn}\'s image`} />
      <div>{`한국명 : ${nameKr}`}</div>
      <div>{`영문명 : ${nameEn}`}</div>
      <div>{`alumni : ${isAlumni}`}</div>
    </Link>
  );
}
