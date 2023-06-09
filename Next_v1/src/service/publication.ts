import { publicationType } from '@/types';
import axios from 'axios';

export async function getPublicationAll(): Promise<publicationType[]> {
  const response = await axios.get(`${process.env.NEXT_PUBLIC_SERVER_PATH}/publications`);
  const data = response.data;
  console.log('전체 출판물 리스트 요청중');
  // handle data here, such as filtering or formatting
  return data;
}

export async function getPublicationOne(id: string): Promise<publicationType> {
  const response = await axios.get(`${process.env.NEXT_PUBLIC_SERVER_PATH}/publications/${id}`);
  const data = response.data;
  console.log(`${id}의 출판물 요청중`);
  // handle data here, such as filtering or formatting
  return data;
}

export function groupDataByYear(data: any[]): { year: string; items: any[] }[] {
  const groupedData: { [year: string]: any[] } = {};

  data.forEach((item) => {
    const { year } = item;
    if (groupedData[year]) {
      groupedData[year].push(item);
    } else {
      groupedData[year] = [item];
    }
  });

  const sortedYears = Object.keys(groupedData).sort((a, b) => Number(b) - Number(a));

  const sortedData: { year: string; items: any[] }[] = sortedYears.map((year) => ({
    year,
    items: groupedData[year],
  }));

  return sortedData;
}

export function sortDataByYear(data: any[]): { year: string; items: any[] }[] {
  const sortedData = groupDataByYear(data);

  sortedData.sort((a, b) => Number(b.year) - Number(a.year));

  return sortedData;
}
