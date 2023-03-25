import React from 'react';
import ImgList from '@/components/gallery/ImgList';
import Heading from '@/components/ui/Heading';

export default function Gallery() {
  return (
    <>
      <Heading>Gallery</Heading>
      <article className="gallery-article">
        <ImgList />
      </article>
    </>
  );
}
