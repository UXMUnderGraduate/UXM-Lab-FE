import Image from 'next/image';
import React, { FC } from 'react';

interface CardItemv2Props {
  img: string;
  nameKr: string;
  nameEn: string;
  email: string;
  position: string;
}

const CardItemv2: FC<CardItemv2Props> = (props) => {
  return (
    <div className="sm:flex p-5 md:pl-14 text-left py-6">
      <Image src={props.img} alt={props.nameKr} width={30} height={30} className="w-full  sm:w-52 sm:h-full" />
      <div className="sm:pl-5 sm:pt-0 pt-3">
        <h1 className="font-black text-xl sm:text-3xl">{props.nameKr + '(' + props.nameEn + ')'}</h1>
        <h2 className="font-bold sm:text-2xl">{props.position}</h2>
        <h4 className=" font-medium sm:mb-5 sm:text-lg">Department of Convergence Software, Myongji Univ, Republic of Korea</h4>
        <div className="flex">
          <span className="font-bold sm:text-xl">E-mail : &nbsp;</span>
          <span>
            <h4 className=" font-medium sm:text-xl">{props.email}</h4>
          </span>
        </div>
      </div>
    </div>
  );
};

export default CardItemv2;
