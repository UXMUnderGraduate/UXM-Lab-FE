'use client';
import Image from 'next/image';
import Link from 'next/link';
import NoticeHeader from '@/components/notices/NoticeHeader';
import { useEffect, useState } from 'react';
import { getGallery } from '@/service/gallery';
import { galleryType } from '@/types';
import { usePathname } from 'next/navigation';

type Props = {
  params: {
    slug: string;
  };
};

const GalleryDetail = (props: Props) => {
  const path = usePathname();
  const id = path.split('/')[2];
  const [gallery, setGallery] = useState<galleryType>();

  useEffect(() => {
    getGallery(id).then((res) => {
      setGallery(res);
      console.log('test', res);
    });
  }, [id]);

  return (
    <article className="notice-detail">
      <NoticeHeader title={gallery?.title} createdAt={gallery?.createdAt.slice(0, 10)} />
      {gallery?.imgUrls.map((url) => (
        <Image key={url} src={`${process.env.NEXT_PUBLIC_IMG_PATH}/${url}`} alt={gallery.title + ' 사진'} width={500} height={500} className="w-full" /> 
      ))}
      <div className="relative pb-[56.25%]">
        <iframe src={`https://www.youtube.com/embed//${gallery?.videoUrl.split('/')[3]}`}width={"100%"} height={"100%"} className=' absolute top-0 bottom-0 left-0 right-0'/>
      </div>
      <p className="notice-detail_line">{gallery?.contents}</p>
      <div className="notice-button">
        <Link href={'/gallery'} className="notice-link">
          목록으로
        </Link>
      </div>
    </article>
  );
};

export default GalleryDetail;
