import React from 'react';
import CardList from '../components/members/CardList';
import Heading from '../components/ui/Heading';

const dummy = [
  {
    id: '1', //index
    englishName: 'SangKyon Kim',
    koreaName: '김상균',
    affiliation: 'Myongji Univ', //소속기관
    researchField: 'IoMT, BlockChain', //연구분야
    email: 'glodmunt@mju.ac.kr',
    img: 'https://www.mju.ac.kr/sites/mjukr/jojik_mju/tech_pic.jsp?ssU=20070075',
  },
  {
    id: '2', //index
    englishName: 'MinHyuk Jeong',
    koreaName: '정민혁',
    affiliation: 'Myongji Univ', //소속기관
    researchField: '없는디..', //연구분야
    email: 'jmh8900@gmail.com',
    img: 'https://source.unsplash.com/random',
  },
  {
    id: '3', //index
    englishName: 'Minsu Kim',
    koreaName: '김민수',
    affiliation: 'Myongji Univ', //소속기관
    researchField: '없는디..', //연구분야
    email: 'minsu020302@gmail.com',
    img: 'https://source.unsplash.com/random',
  },
  {
    id: '4', //index
    englishName: 'Chanhee lee',
    koreaName: '이찬희',
    affiliation: 'Myongji Univ', //소속기관
    researchField: '없는디..', //연구분야
    email: 'lch02130@naver.com',
    img: 'https://source.unsplash.com/random',
  },
  {
    id: '5', //index
    englishName: 'Donghyeok Jang',
    koreaName: '장동혁',
    affiliation: 'Myongji Univ', //소속기관
    researchField: '없는디..', //연구분야
    email: 'lotto9803@naver.com',
    img: 'https://source.unsplash.com/random',
  },
  {
    id: '6', //index
    englishName: 'Sohyeon Kim ',
    koreaName: '김소현',
    affiliation: 'Myongji Univ', //소속기관이름
    researchField: '없는디..', //연구분야
    email: 'ksohyeon39@gmail.com',
    img: 'https://source.unsplash.com/random',
  },
  {
    id: '7', //index
    englishName: 'Gi Woong Chae',
    koreaName: '채기웅',
    affiliation: 'Myongji Univ', //소속기관
    researchField: '없는디..', //연구분야
    email: 'rldndco@mju.ac.kr',
    img: 'https://source.unsplash.com/random',
  },
  {
    id: '7', //index
    englishName: 'Seonjae Hyun',
    koreaName: '현선재',
    affiliation: 'Myongji Univ', //소속기관
    researchField: '없는디..', //연구분야
    email: 'hsj106@mju.ac.kr',
    img: 'https://source.unsplash.com/random',
  },
];

export default function Members() {
  return (
    <>
      <Heading>Members</Heading>
      <article className="member-article">
        <CardList carddata={dummy} />
      </article>
    </>
  );
}
