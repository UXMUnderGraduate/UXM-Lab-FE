import React from 'react';
import ImgList from '../components/gallery/ImgList';

export default function Gallery() {
  return (
    <main className="main">
      <div className="main-container">
        <div className="mt-30 mb-1">
          <h1 className="heading">Gallery</h1>
        </div>
        <article className="gallery-article">
          <ImgList />
        </article>
      </div>
    </main>
  );
}
