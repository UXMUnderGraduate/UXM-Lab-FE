'use client';
import React, { useEffect, useState } from 'react';
import ImgCard from './ImgCard';
import SkeletonElement from '../ui/SkeletonElement';
import { getGalleries } from '@/service/gallery';
import { galleryType } from '@/types';
import VideoCard from './VedeoCard';
import { usePathname } from 'next/navigation';
import { getPreviousALL } from '@/service/previouswork';

export default function ImgList() {
  const [fetchData, setFetchData] = useState<galleryType[]>([]);
  const path = usePathname();

  useEffect(() => {
    async function fetchData() {
      if (path === '/gallery') {
        const gallery = await getGalleries();
        setFetchData(gallery);
      } else if (path === '/previous_work') {
        const previous = await getPreviousALL();
        setFetchData(previous);
      }
    }
    fetchData();
  }, []);

  return (
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <div className="card-container">
        <div className="grid-wrapper">
          {fetchData &&
            fetchData.map((item) => {
              return item.imgUrls.length === 0 ? <VideoCard key={item.id} {...item} /> : <ImgCard key={item.id} {...item} />;
            })}
        </div>
        {!fetchData && (
          <div className="w-60 grid">
            <SkeletonElement />
            <SkeletonElement />
            <SkeletonElement />
            <SkeletonElement />
          </div>
        )}
      </div>
    </div>
  );
}
