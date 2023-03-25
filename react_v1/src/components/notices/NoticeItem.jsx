import React from 'react';
import { Link } from 'react-router-dom';

const NoticeItem = ({ id, title, createdAt }) => {
  return (
    <li className='notice-list_item'>
      <Link
        to={`/notices/${id}`}
        className='notice-item_link'
        state={{ title, createdAt }}>
        <span className='notice-item_title'>{title}</span>
        <span className='notice-item_date'>{createdAt}</span>
      </Link>
    </li>
  );
};

export default NoticeItem;
