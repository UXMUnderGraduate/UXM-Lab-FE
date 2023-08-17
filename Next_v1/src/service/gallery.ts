import { galleryType } from '@/types';
import axios from 'axios';

export async function getGalleries(): Promise<galleryType[]> {
  const response = await axios.get(`${process.env.NEXT_PUBLIC_SERVER_PATH}/gallery`);
  const data = response.data;
  // console.log('전체 겔러리 요청중');
  // handle data here, such as filtering or formatting
  return data;
}

export async function getGallery(id: string): Promise<galleryType> {
  const response = await axios.get(`${process.env.NEXT_PUBLIC_SERVER_PATH}/gallery/${id}`);
  const data = response.data;
  // console.log(`${id}의 겔러리 요청중`);
  // handle data here, such as filtering or formatting
  return data;
}
