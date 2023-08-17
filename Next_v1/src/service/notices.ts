import { noticeType } from '@/types';
import axios from 'axios';

export async function getNoticeAll(): Promise<noticeType[]> {
  const response = await axios.get(`${process.env.NEXT_PUBLIC_SERVER_PATH}/notices`);
  const data = response.data;
  // console.log('전체 공지 리스트 요청중');
  // handle data here, such as filtering or formatting
  return data;
}

export async function getNoticeOne(id: string): Promise<noticeType> {
  const response = await axios.get(`${process.env.NEXT_PUBLIC_SERVER_PATH}/notices/${id}`);
  const data = response.data;
  // console.log(`${id}의 공지 요청중`);

  return data;
}
