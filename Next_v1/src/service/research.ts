import { researchType } from '@/types';
import axios from 'axios';

export async function getResearchAll(): Promise<researchType[]> {
  const response = await axios.get(`${process.env.NEXT_PUBLIC_SERVER_PATH}/research`);
  const data = response.data;
  // console.log('전체 리서치 리스트 요청중');
  // handle data here, such as filtering or formatting
  return data;
}

export async function getResearchOne(id: string): Promise<researchType> {
  const response = await axios.get(`${process.env.NEXT_PUBLIC_SERVER_PATH}/research/${id}`);
  const data = response.data;
  // console.log(`${id}의 리서치 요청중`);
  // handle data here, such as filtering or formatting
  return data;
}
