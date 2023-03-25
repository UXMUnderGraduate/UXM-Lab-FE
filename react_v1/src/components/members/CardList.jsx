import React from 'react';
// import CardItem from './CardItem';
// import SkeletonElement from '../ui/SkeletonElement';
// import axios from 'axios';
import CardItemv2 from './CardItemv2';
import TitleHorizon from './TitleHorizon';
import { filteredList } from '../../utils/fillter';

const dummy = [
  {
    id: 1, //index
    nameEn: 'SangKyon Kim',
    nameKr: '김상균',
    affiliation: 'Myongji Univ', //소속기관
    isAlumni: false,
    researchField: 'BlockChain', //연구분야
    email: 'glodmunt@mju.ac.kr',
    degree: 'Professor',
    img: '/images/professor.jpeg',
  },
  {
    id: 2, //index
    nameEn: 'MinHyuk Jeong',
    nameKr: '정민혁',
    affiliation: 'Myongji Univ', //소속기관
    isAlumni: false,
    researchField: '없는디..', //연구분야
    email: 'jmh8900@gmail.com',
    degree: 'Ph.D. Candidate',
    img: '/images/',
  },
  {
    id: 3, //index
    nameEn: 'Heesoo Choi',
    nameKr: '최희수',
    affiliation: 'Myongji Univ', //소속기관
    isAlumni: false,
    researchField: '없는디..', //연구분야
    email: 'cocamon85@gmail.com',
    degree: 'MS Student',
    img: '/images/heesoo.jpg',
  },
  {
    id: 4, //index
    nameEn: 'Minsu Kim',
    nameKr: '김민수',
    affiliation: 'Myongji Univ', //소속기관
    isAlumni: false,
    researchField: '없는디..', //연구분야
    email: 'minsu020302@gmail.com',
    degree: 'BS Student',
    img: '/images/minsu.jpg',
  },
  {
    id: 5, //index
    nameEn: 'Donghyeok Jang',
    nameKr: '장동혁',
    affiliation: 'Myongji Univ', //소속기관
    isAlumni: false,
    researchField: '없는디..', //연구분야
    email: 'lotto9803@naver.com',
    degree: 'BS Student',
    img: '/images/donghyeok.jpeg',
  },
  {
    id: 6, //index
    nameEn: 'Sohyeon Kim ',
    nameKr: '김소현',
    affiliation: 'Myongji Univ', //소속기관이름
    isAlumni: false,
    researchField: '없는디..', //연구분야
    email: 'sooooooohyeon5@naver.com',
    degree: 'BS Student',
    img: '/images/sohyeon.jpeg',
  },
  {
    id: 7, //index
    nameEn: 'Gi Woong Chae',
    nameKr: '채기웅',
    affiliation: 'Myongji Univ', //소속기관
    isAlumni: false,
    researchField: '없는디..', //연구분야
    email: 'rldndco@mju.ac.kr',
    degree: 'BS Student',
    img: '/images/giwoong.jpeg',
  },
  {
    id: 8, //index
    nameEn: 'Seonjae Hyun',
    nameKr: '현선재',
    affiliation: 'Myongji Univ', //소속기관
    isAlumni: false,
    researchField: '없는디..', //연구분야
    email: 'hsj106@mju.ac.kr',
    degree: 'BS Student',
    img: '/images/seonjae.jpg',
  },
  {
    id: 9, //index
    nameEn: 'SuJi Kim',
    nameKr: '김수지',
    affiliation: 'Myongji Univ', //소속기관
    isAlumni: false,
    researchField: '없는디..', //연구분야
    email: 'doyeon96@gmail.com',
    degree: 'MS Student',
    img: '/images/SuJi.jpg',
  },
  {
    id: 10, //index
    nameEn: 'Younghwan Kim',
    nameKr: '김영환',
    affiliation: 'Myongji Univ', //소속기관
    isAlumni: false,
    researchField: '없는디..', //연구분야
    email: 'dudghks021121@gmail.com',
    degree: 'BS Student',
    img: '/images/younhwan.jpeg',
  },
  {
    id: 11, //index
    nameEn: 'DoJin You',
    nameKr: '유도진',
    affiliation: 'Myongji Univ', //소속기관
    isAlumni: true,
    researchField: '없는디..', //연구분야
    email: 'djyou128@gmail.com',
    degree: 'BS Student',
    img: '/images/dojin.jpeg',
  },
];

export default function CardList() {
  const BSList = filteredList(dummy, ['Professor', 'MS Student', 'Ph.D. Student', 'Ph.D. Candidate'], true);

  const MSList = filteredList(dummy, ['Professor', 'BS Student', 'Ph.D. Student', 'Ph.D. Candidate'], true);

  const Ph_D_C_List = filteredList(dummy, ['Professor', 'BS Student', 'MS Student', 'Ph.D. Student'], true);

  console.log(Ph_D_C_List);
  const Ph_D_S_List = filteredList(dummy, ['Professor', 'BS Student', 'MS Student', 'Ph.D. Candidate'], true);

  const alumniList = filteredList(dummy, [], false);

  return (
    <div className="w-full text-center">
      <TitleHorizon>Professor</TitleHorizon>
      <CardItemv2 nameKr={dummy[0].nameKr} nameEn={dummy[0].nameEn} img={dummy[0].img} position={dummy[0].degree} email={dummy[0].email} />

      <TitleHorizon>Ph.D Candidate</TitleHorizon>
      {Ph_D_C_List &&
        Ph_D_C_List.map((data) => {
          return <CardItemv2 key={data.id} nameKr={data.nameKr} nameEn={data.nameEn} img={data.img} position={data.degree} email={data.email} />;
        })}
      {/* <TitleHorizon>Ph.D Student</TitleHorizon> */}
      <TitleHorizon>MS Students</TitleHorizon>
      {MSList &&
        MSList.map((data) => {
          return <CardItemv2 key={data.id} nameKr={data.nameKr} nameEn={data.nameEn} img={data.img} position={data.degree} email={data.email} />;
        })}
      <TitleHorizon>BS Students</TitleHorizon>
      {BSList &&
        BSList.map((data) => {
          return <CardItemv2 key={data.id} nameKr={data.nameKr} nameEn={data.nameEn} img={data.img} position={data.degree} email={data.email} />;
        })}
      {/* <CardItemv2 nameKr={dummy[3].nameKr} nameEn={dummy[3].nameEn} img={dummy[3].img} position={dummy[3].degree} email={dummy[3].email} /> */}
      <TitleHorizon>Alumni</TitleHorizon>
      {alumniList &&
        alumniList.map((data) => {
          return <CardItemv2 key={data.id} nameKr={data.nameKr} nameEn={data.nameEn} img={data.img} position={data.degree} email={data.email} />;
        })}
    </div>
  );
}
