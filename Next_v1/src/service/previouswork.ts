import { galleryType } from '@/types';
import axios from 'axios';

export async function getPreviousALL(): Promise<galleryType[]> {
  const response = await axios.get(`${process.env.NEXT_PUBLIC_SERVER_PATH}/previous`);
  const data = response.data;
  console.log('전체 이전 영상 요청중');
  // handle data here, such as filtering or formatting
  return data;
}

export async function getPrevious(id: string): Promise<galleryType> {
  const response = await axios.get(`${process.env.NEXT_PUBLIC_SERVER_PATH}/previous/${id}`);
  const data = response.data;
  console.log(`${id}의 이전 영상 요청중`);
  // handle data here, such as filtering or formatting
  return data;
}
