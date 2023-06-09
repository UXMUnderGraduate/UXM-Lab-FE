'use client';
import Link from 'next/link';

interface NoticeItemProps {
  id: string;
  title: string;
  createdAt: string;
}

const NoticeItem: React.FC<NoticeItemProps> = ({ id, title, createdAt }) => {
  return (
    <li className="notice-list_item">
      <Link href={`notices/${id}`} legacyBehavior passHref>
        <a className="notice-item_link">
          <span className="notice-item_title">{title}</span>
          <span className="notice-item_date">{createdAt.slice(0, 10)}</span>
        </a>
      </Link>
    </li>
  );
};

export default NoticeItem;
