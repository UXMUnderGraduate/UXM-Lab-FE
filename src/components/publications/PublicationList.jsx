import React from 'react';
import PublicationItem from './PublicationItem';

const dummy = [
  {
    id: 0,
    title:
      'Video Streaming Based on Blockchain State Channel with IoT Camera, [2022-02-14]',
  },
  {
    id: 1,
    title:
      'Automatic Smart Contract generation for Internet of Media Things, [2021-09-08]',
  },
  {
    id: 2,
    title: '빠른 검색을 위한 음원 시그니처 인덱싱 방법, [2021-05-26]',
  },
  {
    id: 3,
    title:
      'Quality of Experience Experiment Method and Statistical Analysis for 360-degree Video with Sensory Effect',
  },
];
const PublicationList = () => {
  return (
    <ul className='publications-list'>
      {dummy.map((item) => (
        <PublicationItem key={item.id} title={item.title} />
      ))}
    </ul>
  );
};

export default PublicationList;
