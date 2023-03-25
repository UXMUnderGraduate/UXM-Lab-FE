import React from 'react';

const NoticeContent = ({ dummy }) => {
  return (
    <div className='notice-detail_content'>
      {dummy.map((line) => (
        <>
          <p className='notice-detail_line'>{line}</p>
        </>
      ))}
    </div>
  );
};

export default NoticeContent;
