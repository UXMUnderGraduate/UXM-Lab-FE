import React from 'react';
import Link from 'next/link';
import { galleryType } from '@/types';

export default function VideoCard({ id, title, videoUrl, contents }: galleryType) {
    const urlSplit = videoUrl.split('/');
    return (
        <Link href={`/gallery/${id}`} className="group relative">
            <div className="relative h-80 w-full overflow-hidden rounded-lg bg-white group-hover:opacity-75 sm:aspect-w-2 sm:aspect-h-1 sm:h-64 lg:aspect-w-1 lg:aspect-h-1">
                <div className="card-item-img" >
                    <iframe src={`https://www.youtube.com/embed//${urlSplit[3]}`} width={"100%"} height={"100%"} />
                </div>
            </div>
            <p className="card-item-title">{title}</p>
            <p className="card-item-title"> {contents}</p>
        </Link>
  );
}
