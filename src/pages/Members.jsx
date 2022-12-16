import React from 'react';
import CardList from '../components/members/CardList';
import CardItem from '../components/members/CardItem';

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
    englishName: 'Minsu Kim',
    koreaName: '김민수',
    affiliation: 'Myongji Univ', //소속기관
    researchField: '없는디..', //연구분야
    email: 'minsu020302@gmail.com',
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
    englishName: 'Minsu Kim',
    koreaName: '김민수',
    affiliation: 'Myongji Univ', //소속기관
    researchField: '없는디..', //연구분야
    email: 'minsu020302@gmail.com',
    img: 'https://source.unsplash.com/random',
  },
  {
    id: '5', //index
    englishName: 'Minsu Kim',
    koreaName: '김민수',
    affiliation: 'Myongji Univ', //소속기관
    researchField: '없는디..', //연구분야
    email: 'minsu020302@gmail.com',
    img: 'https://source.unsplash.com/random',
  },
  {
    id: '6', //index
    englishName: 'Minsu Kim',
    koreaName: '김민수',
    affiliation: 'Myongji Univ', //소속기관
    researchField: '없는디..', //연구분야
    email: 'minsu020302@gmail.com',
    img: 'https://source.unsplash.com/random',
  },
  {
    id: '7', //index
    englishName: 'Minsu Kim',
    koreaName: '김민수',
    affiliation: 'Myongji Univ', //소속기관
    researchField: '없는디..', //연구분야
    email: 'minsu020302@gmail.com',
    img: 'https://source.unsplash.com/random',
  },
  {
    id: '8', //index
    englishName: 'Minsu Kim',
    koreaName: '김민수',
    affiliation: 'Myongji Univ', //소속기관
    researchField: '없는디..', //연구분야
    email: 'minsu020302@gmail.com',
    img: 'https://source.unsplash.com/random',
  },
];

export default function Members() {
  return (
    <main className="main">
      <div className="main-container">
        <div className="mt-30 mb-12">
          <h1 className="heading">Members</h1>
        </div>
        <article className="member-article">
          <CardList carddata={dummy} />
        </article>
      </div>
    </main>
  );
}
