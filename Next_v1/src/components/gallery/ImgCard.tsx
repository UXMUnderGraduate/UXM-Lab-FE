import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { galleryType } from '@/types';

export default function ImgCard({ id, title, imgUrls, contents }: galleryType) {
  return (
    <Link href={`/gallery/${id}`} passHref legacyBehavior>
      <a className="group relative">
        <div className="relative h-80 w-full overflow-hidden rounded-lg bg-white group-hover:opacity-75 sm:aspect-w-2 sm:aspect-h-1 sm:h-64 lg:aspect-w-1 lg:aspect-h-1">
          <Image src={`${process.env.NEXT_PUBLIC_IMG_PATH}/${imgUrls[0]}`} alt="" width={200} height={300} className="card-item-img" />
        </div>
        <p className="card-item-title">{title}</p>
        <p className="card-item-title"> {contents}</p>
      </a>
    </Link>
  );
}
