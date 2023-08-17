'use client';
import NoticeContent from '@/components/notices/NoticeContent';
import NoticeHeader from '@/components/notices/NoticeHeader';
import SkeletonElement from '@/components/ui/SkeletonElement';
import { getNoticeOne } from '@/service/notices';
import { noticeType } from '@/types';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';

// 서버랑 통신할때 id조회로 데이터 가져오기

const NoticeDetail = () => {
  const path = usePathname();
  const id = path.split('/')[2];

  const [notice, setNotice] = useState<noticeType>();

  useEffect(() => {
    getNoticeOne(id).then((res) => {
      setNotice(res);
    });
  }, [id]);

  if (!notice) {
    return (
      <article className="notice-detail">
        <SkeletonElement />
      </article>
    );
  }

  return (
    <article className="notice-detail">
      <NoticeHeader title={notice.title} createdAt={notice.createdAt.slice(0, 10)} />
      <NoticeContent content={notice.contents} />
      <div className="notice-button">
        <Link href="/notices" className="notice-link">
          목록으로
        </Link>
      </div>
    </article>
  );
};

export default NoticeDetail;
