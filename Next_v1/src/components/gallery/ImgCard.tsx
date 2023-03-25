import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

interface ImgCardProps {
  id: number;
  title: string;
  img: string;
  description: string;
}

const ImgCard: React.FC<ImgCardProps> = ({ id, title, img, description }) => {
  return (
    <Link href={`/gallery/${id}`} passHref legacyBehavior>
      <a className="group relative">
        <div className="relative h-80 w-full overflow-hidden rounded-lg bg-white group-hover:opacity-75 sm:aspect-w-2 sm:aspect-h-1 sm:h-64 lg:aspect-w-1 lg:aspect-h-1">
          <Image src={img} alt="" width={10} height={10} className="card-item-img" />
        </div>
        <p className="card-item-title">{title}</p>
        <p className="card-item-title"> {description}</p>
      </a>
    </Link>
  );
};

export default ImgCard;
