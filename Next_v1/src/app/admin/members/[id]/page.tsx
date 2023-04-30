import Layout from '@/components/admin/Layout';
import { getMember } from '@/service/member';
import Image from 'next/image';
import React from 'react';

type Props = {
  params: {
    id: string;
  };
};

export default async function page({ params }: Props) {
  const person = await getMember(params.id);
  console.log('이사람은>>', person);
  return (
    <div className="mt-20 w-full">
      <Layout backPath="/admin/members">
        <div className="w-full">
          <Image src={`${process.env.NEXT_PUBLIC_SERVER_PATH}/images/${person.img}`} width={600} height={600} alt={`${person.nameEn}\'s image`} />
          <div>{`한국명 : ${person.nameKr}`}</div>
          <div>{`영문명 : ${person.nameEn}`}</div>
          <div>{`소속기관 : ${person.affiliation}`}</div>
          <div>{`졸업여부 : ${person.isAlumni}`}</div>
          <div>{`연구분야 : ${person.researchField}`}</div>
          <div>{`이메일 : ${person.email}`}</div>
          <div>{`회사 : ${person.company}`}</div>
        </div>
      </Layout>
    </div>
  );
}
