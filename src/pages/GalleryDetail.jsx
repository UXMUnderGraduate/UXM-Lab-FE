import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import NoticeHeader from '../components/notices/NoticeHeader';

const GalleryDetail = () => {
  const { state } = useLocation();
  const { title, img, description } = state;

  return (
    <article className="notice-detail">
      <NoticeHeader title={title} />
      <img src={img} alt="" />
      <p className="notice-detail_line">{description}</p>
      <div className="notice-button">
        <Link to={'/gallery'} className="notice-link">
          목록으로
        </Link>
      </div>
    </article>
  );
};

export default GalleryDetail;
