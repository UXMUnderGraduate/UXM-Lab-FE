'use client';
import CardItemv2 from './CardItemv2';
import TitleHorizon from './TitleHorizon';
import { filteredList } from '../../utils/filter';
import { getMembers } from '@/service/member';
import { useEffect, useState } from 'react';
import { userType } from '@/types';

export default function CardList() {
  const [members, setMembers] = useState<userType[]>([]);

  useEffect(() => {
    async function fetchData() {
      const members = await getMembers();
      setMembers(members);
    }
    fetchData();
  }, []);

  const Advisor = filteredList(members, ['Undergraduate student', "master's student", 'Ph.D. Student', 'Ph.D. Candidate'], true);

  const UGList = filteredList(members, ['Advisor', "master's student", 'Ph.D. Student', 'Ph.D. Candidate'], true);

  const MSList = filteredList(members, ['Advisor', 'Undergraduate student', 'Ph.D. Student', 'Ph.D. Candidate'], true);

  const Ph_D_C_List = filteredList(members, ['Advisor', 'Undergraduate student', "master's student", 'Ph.D. Student'], true);

  const Ph_D_S_List = filteredList(members, ['Advisor', 'Undergraduate student', "master's student", 'Ph.D. Candidate'], true);

  const alumniList = filteredList(members, [], false);

  return (
    <div className="w-full text-center">
      <TitleHorizon>Professor</TitleHorizon>
      {Advisor &&
        Advisor.map((data) => {
          return (
            <CardItemv2
              key={data.id}
              nameKr={data.nameKr}
              nameEn={data.nameEn}
              img={data.img}
              degree={data.degree}
              email={data.email}
              else={
                'Sang-Kyun Kim received his BS, MS, and PhD degrees in computer science from the University of Iowa in 1991, 1994, and 1997. In 1997, he joined the Samsung Advanced Institute of Technology as a researcher.\nHe was a senior research staff member as well as a project leader on the Image and Video Content Search Team of the Computing Technology Lab until 2007. He is now a professor in the Department of Convergence Software at Myongji University. His research interests include digital content (image, video, and music) analysis and management, fast image search and indexing, colour adaptation, 4D media, sensors and actuators, virtual reality and Metaverse, Internet of Media Things, and multimedia standardization. He serves as a project editor of MPEG-V International Standards, that is, ISO/IEC 23005-2/3/4/5 and 23005-7 as well as an AHG chair and a project editor of ISO/IEC 23093 (MPEG Internet of Media Things). He also serves as a vice-chairman of IEEE 2888.'
              }
            />
          );
        })}

      <TitleHorizon>Ph.D Candidate</TitleHorizon>
      {Ph_D_C_List &&
        Ph_D_C_List.map((data) => {
          return (
            <CardItemv2
              key={data.id}
              nameKr={data.nameKr}
              nameEn={data.nameEn}
              img={data.img}
              degree={'Ph.D Candidate'}
              researchField={data.researchField}
              email={data.email}
              affiliation={data.affiliation}
            />
          );
        })}
      {/* <TitleHorizon>Ph.D Student</TitleHorizon> */}
      <TitleHorizon>{"master's students"}</TitleHorizon>
      {MSList &&
        MSList.map((data) => {
          return (
            <CardItemv2
              key={data.id}
              nameKr={data.nameKr}
              nameEn={data.nameEn}
              img={data.img}
              degree={"master's student"}
              researchField={data.researchField}
              email={data.email}
              affiliation={data.affiliation}
            />
          );
        })}
      <TitleHorizon>Undergraduate students</TitleHorizon>
      {UGList &&
        UGList.map((data) => {
          return (
            <CardItemv2
              key={data.id}
              nameKr={data.nameKr}
              nameEn={data.nameEn}
              img={data.img}
              degree={'Undergraduate student'}
              researchField={data.researchField}
              email={data.email}
              affiliation={data.affiliation}
            />
          );
        })}
      {/* <CardItemv2 nameKr={members[3].nameKr} nameEn={members[3].nameEn} img={members[3].img} degree={members[3].degree} email={members[3].email} /> */}
      <TitleHorizon>Alumni</TitleHorizon>
      {alumniList &&
        alumniList.map((data) => {
          return (
            <CardItemv2
              key={data.id}
              nameKr={data.nameKr}
              nameEn={data.nameEn}
              img={data.img}
              degree={data.degree}
              email={data.email}
              affiliation={data.affiliation}
              company={data.company}
            />
          );
        })}
    </div>
  );
}
