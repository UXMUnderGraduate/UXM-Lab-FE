import { userType } from '@/types';
import axios from 'axios';

export async function getMembers(): Promise<userType[]> {
  const response = await axios.get(`${process.env.NEXT_PUBLIC_SERVER_PATH}/members`);
  const data = response.data;
  // console.log('전체 멤버 요청중');
  // handle data here, such as filtering or formatting
  return data;
}

export async function getMember(id: string): Promise<userType> {
  const response = await axios.get(`${process.env.NEXT_PUBLIC_SERVER_PATH}/members/${id}`);
  const data = response.data;
  // console.log(`${id}의 멤버 요청중`);
  // handle data here, such as filtering or formatting
  return data;
}


