'use client';
import { useEffect, useState } from 'react';
import Heading from '../../components/ui/Heading';
import PublicationList from '../../components/publications/PublicationList';
import { sortDataByYear } from '@/service/publication';

export default function Publications() {
  const [data, setData] = useState<{ year: string; items: any[] }[]>([]);

  useEffect(() => {
    async function fetchData() {
      const publications = await sortDataByYear();
      setData(publications);
    }
    fetchData();
  }, []);

  return (
    <>
      <Heading>Publications</Heading>
      <div className="sm:mb-10">
        {data.map((item) => {
          return (
            <article key={item.year} className="publications-article">
              <h2 className="year">{item.year}</h2>
              <PublicationList items={item.items} />
            </article>
          );
        })}
      </div>
    </>
  );
}
