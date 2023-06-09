'use client';
import React, { useEffect, useState } from 'react';
import NoticeItem from './NoticeItem';
import { noticeType } from '@/types';
import { getNoticeAll } from '@/service/notices';

interface DummyData {
  id: number;
  title: string;
  createdAt: string;
}

const dummy: DummyData[] = [
  {
    id: 0,
    title: '숨은 정부지원금 찾기의 알림 서비스 종료 안내',
    createdAt: '2022. 12. 13',
  },
  {
    id: 1,
    title: '환전 서비스 환율 우대 정책 변경 안내',
    createdAt: '2022. 12. 09',
  },
  {
    id: 2,
    title: 'ATM 출금 수수료 지원 종료 안내',
    createdAt: '2022. 12. 01',
  },
  {
    id: 3,
    title: '금융정보 이용약관 변경 안내',
    createdAt: '2022. 11. 23',
  },
  {
    id: 4,
    title: '숨은 정부지원금 찾기의 알림 서비스 종료 안내',
    createdAt: '2022. 11. 13',
  },
  {
    id: 5,
    title: '환전 서비스 환율 우대 정책 변경 안내',
    createdAt: '2022. 11. 09',
  },
  {
    id: 6,
    title: '토스 금융정보 구독 서비스(금융팁) 이용약관 변경 안내',
    createdAt: '2022. 11. 01',
  },
  {
    id: 7,
    title: 'ATM 출금 수수료 지원 종료 안내',
    createdAt: '2022. 10. 23',
  },
];

const NoticeList: React.FC = () => {
  const [noticeList, setNoticeList] = useState<noticeType[]>([]);

  useEffect(() => {
    async function fetchData() {
      const noticeList = await getNoticeAll();

      setNoticeList(noticeList);
    }
    fetchData();
  }, []);

  return (
    <ul className="notice-list">
      {noticeList.map((item) => (
        <NoticeItem key={item.id} id={item.id.toString()} title={item.title} createdAt={item.createdAt} />
      ))}
    </ul>
  );
};

export default NoticeList;
