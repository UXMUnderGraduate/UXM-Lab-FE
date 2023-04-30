import Image from 'next/image';
import React, { FC } from 'react';

interface CardItemv2Props {
  id?: number;
  img?: string;
  nameKr: string;
  nameEn?: string;
  email?: string;
  degree?: string;
  affiliation?: string;
  isAlumni?: boolean;
  researchField?: string;
  else?: string;
  company?: string;
}

const CardItemv2: FC<CardItemv2Props> = (props) => {
  return (
    <div className="sm:flex p-5 md:pl-14 text-left py-6">
      {props.img && (
        <Image src={`${process.env.NEXT_PUBLIC_SERVER_PATH}/images/${props.img}`} alt={props.nameKr} width={500} height={500} className="w-full  sm:w-52 sm:h-full" />
      )}
      <div className="sm:pl-5 sm:pt-0 pt-3">
        <h1 className="font-black text-xl sm:text-3xl">{props.nameKr + '(' + props.nameEn + ')'}</h1>
        <h2 className="font-bold sm:text-2xl">{props.degree}</h2>
        <h4 className=" font-medium sm:mb-5 sm:text-lg">{props.affiliation}</h4>
        <div className="flex">
          <span className="font-bold sm:text-xl">E-mail : &nbsp;</span>
          <span>
            <h4 className=" font-medium sm:text-xl">{props.email}</h4>
          </span>
        </div>
        {props.researchField && (
          <div className="flex">
            <span className="font-bold sm:text-xl">researchField : &nbsp;</span>
            <span>
              <h4 className=" font-medium sm:text-xl">{props.researchField}</h4>
            </span>
          </div>
        )}
        {props.company && (
          <div className="flex">
            <span className="font-bold sm:text-xl">Company : &nbsp;</span>
            <span>
              <h4 className=" font-medium sm:text-xl">{props.company}</h4>
            </span>
          </div>
        )}
        {props.else && <h1 className="font-bold text-xl mt-3 sm:text-2xl">Biography</h1>}
        {props.else && <p className="sm:text-2xl sm:mb-10">{props.else}</p>}
      </div>
    </div>
  );
};

export default CardItemv2;
