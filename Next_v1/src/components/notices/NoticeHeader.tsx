import PropTypes from 'prop-types';

interface NoticeHeaderProps {
  title: string;
  createdAt?: string;
}

const NoticeHeader: React.FC<NoticeHeaderProps> = ({ title, createdAt }) => {
  return (
    <header className="notice-detail_header">
      <h1 className="notice-detail_title">{title}</h1>
      <p className="notice-detail_date">{createdAt}</p>
    </header>
  );
};

NoticeHeader.propTypes = {
  title: PropTypes.string.isRequired,
  createdAt: PropTypes.string.isRequired,
};

export default NoticeHeader;
