import React from 'react';

interface NoticeContentProps {
  dummy: string[];
}

const NoticeContent: React.FC<NoticeContentProps> = ({ dummy }) => {
  return (
    <div className="notice-detail_content">
      {dummy.map((line, index) => (
        <p key={index} className="notice-detail_line">
          {line}
        </p>
      ))}
    </div>
  );
};

export default NoticeContent;
