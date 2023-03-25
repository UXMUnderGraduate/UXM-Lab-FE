import React from 'react';

interface PublicationProps {
  title: string;
  publishedDate: string;
}

const Publication: React.FC<PublicationProps> = ({ title, publishedDate }) => {
  // datetime 문자열 자르기 해야함
  return (
    <li className="publication_item">
      <p className="font-medium text-sm sm:text-base">{'– ' + title + '[ ' + publishedDate + ' ]'}</p>
    </li>
  );
};

export default Publication;
