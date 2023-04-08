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
    affiliation: 'Department of Convergence Software, Myongji Univ, Republic of Korea', //소속기관
    isAlumni: false,
    researchField: 'BlockChain', //연구분야
    email: 'goldmunt@gmail.com',
    degree: 'Advisor',
    img: '/images/professor.jpeg',
  },
  {
    id: 2, //index
    nameEn: 'MinHyuk Jeong',
    nameKr: '정민혁',
    affiliation: 'Department of Computer Engineering, Myongji Univ, Republic of Korea', //소속기관
    isAlumni: false,
    researchField: '없는디..', //연구분야
    email: 'jmh8900@gmail.com',
    degree: 'Ph.D. Candidate',
    img: '/images/minhyuk.jpeg',
  },
  {
    id: 3, //index
    nameEn: 'Heesoo Choi',
    nameKr: '최희수',
    affiliation: 'Department of Convergence Software, Myongji Univ, Republic of Korea', //소속기관
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
    affiliation: 'Department of Convergence Software, Myongji Univ, Republic of Korea', //소속기관
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
    affiliation: 'Department of Convergence Software, Myongji Univ, Republic of Korea', //소속기관
    isAlumni: false,
    researchField: '없는디..', //연구분야
    email: 'lotto9803@naver.com',
    degree: 'BS Student',
    img: '/images/donghyeok.jpeg',
  },
  {
    id: 6, //index
    nameEn: 'Sohyeon Kim',
    nameKr: '김소현',
    affiliation: 'Department of Convergence Software, Myongji Univ, Republic of Korea', //소속기관이름
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
    affiliation: 'Department of Convergence Software, Myongji Univ, Republic of Korea', //소속기관
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
    affiliation: 'Department of Convergence Software, Myongji Univ, Republic of Korea', //소속기관
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
    affiliation: 'Department of Convergence Software, Myongji Univ, Republic of Korea', //소속기관
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
    affiliation: 'Department of Convergence Software, Myongji Univ, Republic of Korea', //소속기관
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
    affiliation: 'Department of Convergence Software, Myongji Univ, Republic of Korea', //소속기관
    isAlumni: true,
    researchField: '없는디..', //연구분야
    email: 'djyou128@gmail.com',
    degree: 'BS Student',
    img: '/images/dojin.jpeg',
    companyAndDepartment: 'VCNC backend Developor',
  },
  {
    id: 12, //index
    nameEn: 'Test',
    nameKr: '테스트',
    affiliation: 'Department of Convergence Software, Myongji Univ, Republic of Korea', //소속기관
    isAlumni: true,
    researchField: '없는디..', //연구분야
    email: 'test@test.com',
    degree: 'BS Student',
    img: '',
    companyAndDepartment: 'VCNC backend Developor',
  },
];

const CardList: React.FC = () => {
  const BSList = filteredList(dummy, ['Advisor', 'MS Student', 'Ph.D. Student', 'Ph.D. Candidate'], true);

  const MSList = filteredList(dummy, ['Advisor', 'BS Student', 'Ph.D. Student', 'Ph.D. Candidate'], true);

  const Ph_D_C_List = filteredList(dummy, ['Advisor', 'BS Student', 'MS Student', 'Ph.D. Student'], true);

  const Ph_D_S_List = filteredList(dummy, ['Advisor', 'BS Student', 'MS Student', 'Ph.D. Candidate'], true);

  const alumniList = filteredList(dummy, [], false);

  console.log(BSList);
  return (
    <div className="w-full text-center">
      <TitleHorizon>Professor</TitleHorizon>
      <CardItemv2
        nameKr={dummy[0].nameKr}
        nameEn={dummy[0].nameEn}
        img={dummy[0].img}
        position={dummy[0].degree}
        email={dummy[0].email}
        affiliation={dummy[0].affiliation}
        else={
          'Sang-Kyun Kim received his BS, MS, and PhD degrees in computer science from the University of Iowa in 1991, 1994, and 1997. In 1997, he joined the Samsung Advanced Institute of Technology as a researcher.\nHe was a senior research staff member as well as a project leader on the Image and Video Content Search Team of the Computing Technology Lab until 2007. He is now a professor in the Department of Convergence Software at Myongji University. His research interests include digital content (image, video, and music) analysis and management, fast image search and indexing, colour adaptation, 4D media, sensors and actuators, virtual reality and Metaverse, Internet of Media Things, and multimedia standardization. He serves as a project editor of MPEG-V International Standards, that is, ISO/IEC 23005-2/3/4/5 and 23005-7 as well as an AHG chair and a project editor of ISO/IEC 23093 (MPEG Internet of Media Things). He also serves as a vice-chairman of IEEE 2888.'
        }
      />

      <TitleHorizon>Ph.D Candidate</TitleHorizon>
      {Ph_D_C_List &&
        Ph_D_C_List.map((data) => {
          return (
            <CardItemv2
              key={data.id}
              nameKr={data.nameKr}
              nameEn={data.nameEn}
              img={data.img}
              position={'Ph.D Candidate'}
              researchField={data.researchField}
              email={data.email}
              affiliation={data.affiliation}
            />
          );
        })}
      {/* <TitleHorizon>Ph.D Student</TitleHorizon> */}
      <TitleHorizon>MS Students</TitleHorizon>
      {MSList &&
        MSList.map((data) => {
          return (
            <CardItemv2
              key={data.id}
              nameKr={data.nameKr}
              nameEn={data.nameEn}
              img={data.img}
              position={'MS Student'}
              researchField={data.researchField}
              email={data.email}
              affiliation={data.affiliation}
            />
          );
        })}
      <TitleHorizon>BS Students</TitleHorizon>
      {BSList &&
        BSList.map((data) => {
          return (
            <CardItemv2
              key={data.id}
              nameKr={data.nameKr}
              nameEn={data.nameEn}
              img={data.img}
              position={'BS Student'}
              researchField={data.researchField}
              email={data.email}
              affiliation={data.affiliation}
            />
          );
        })}
      {/* <CardItemv2 nameKr={dummy[3].nameKr} nameEn={dummy[3].nameEn} img={dummy[3].img} position={dummy[3].degree} email={dummy[3].email} /> */}
      <TitleHorizon>Alumni</TitleHorizon>
      {alumniList &&
        alumniList.map((data) => {
          return (
            <CardItemv2
              key={data.id}
              nameKr={data.nameKr}
              nameEn={data.nameEn}
              img={data.img}
              position={data.degree}
              email={data.email}
              affiliation={data.affiliation}
              companyAndDepartment={data.companyAndDepartment}
            />
          );
        })}
    </div>
  );
};

export default CardList;
