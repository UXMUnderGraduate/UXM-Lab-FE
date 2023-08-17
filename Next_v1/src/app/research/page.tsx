'use client';
import React, { useEffect, useState } from 'react';
import Heading from '../../components/ui/Heading';
import { getResearchAll } from '@/service/research';
import { researchType } from '@/types';

export default function Research() {
  const [research, setResearch] = useState<researchType[]>([]);

  useEffect(() => {
    async function fetchData() {
      const research = await getResearchAll();
      setResearch(research);
    }
    fetchData();
  }, []);

  return (
    <>
      <Heading>Research</Heading>
      <div className="flex flex-col gap-y-4 font-semibold text-2xl sm:text-3xl mb-10 sm:mb-20 pl-3">
        {research.map((item) => (
          <React.Fragment key={item.id}>
            <h1>{item.title}</h1>
            <p className="sm:text-2xl  ">{item.contents}</p>
            <div className="flex">
              {item.extraAddress.split(',').map((url) => {
                return (
                  <a key={url} href={url} target="_blank" className="text-base font-semibold  px-4 py-2 hover:shadow-xl rounded-lg hover:bg-slate-300">
                    Github
                  </a>
                );
              })}
            </div>
          </React.Fragment>
        ))}
      </div>
    </>
  );
}
