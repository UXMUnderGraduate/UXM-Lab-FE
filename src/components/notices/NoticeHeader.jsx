import React from 'react';

const NoticeHeader = ({ title, createdAt }) => {
  return (
    <header className='notice-detail_header'>
      <h1 className='notice-detail_title'>{title}</h1>
      <p className='notice-detail_date'>{createdAt}</p>
    </header>
  );
};

export default NoticeHeader;
