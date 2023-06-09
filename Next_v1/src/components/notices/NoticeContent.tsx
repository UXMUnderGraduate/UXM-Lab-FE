import React from 'react';
import PropTypes from 'prop-types';

interface NoticeContentProps {
  content: string;
}

const NoticeContent: React.FC<NoticeContentProps> = ({ content }) => {
  return (
    <div className="notice-detail_content">
      <p className="notice-detail_line">{content}</p>
    </div>
  );
};

NoticeContent.propTypes = {
  content: PropTypes.string.isRequired,
};

export default NoticeContent;
