import React from 'react';
import PropsTypes from 'prop-types';
import { Link } from 'react-router-dom';

export default function ImgCard({ id, title, img, description }) {
  return (
    <Link to={`/gallery/${id}`} className="group relative" state={{ title, img, description }}>
      <div class="relative h-80 w-full overflow-hidden rounded-lg bg-white group-hover:opacity-75 sm:aspect-w-2 sm:aspect-h-1 sm:h-64 lg:aspect-w-1 lg:aspect-h-1">
        <img src={img} alt="" class="card-item-img" />
      </div>
      <p class="card-item-title">{title}</p>
    </Link>
  );
}

ImgCard.PropsTypes = {
  title: PropsTypes.string,
  img: PropsTypes.string,
};
