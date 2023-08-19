import React from 'react';
import ImgList from '@/components/gallery/ImgList';
import Heading from '@/components/ui/Heading';

export default function PreviousWork() {
  return (
    <>
      <Heading>PreviousWork</Heading>
      <article className="gallery-article">
        <ImgList />
      </article>
    </>
  );
}
