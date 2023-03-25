import React from 'react';
import PropTypes from 'prop-types';

export default function CardItemv2(props) {
  return (
    <div className="sm:flex p-5 md:pl-14 text-left py-6">
      <img src={props.img} alt={props.nameKr} className="w-full  sm:w-52 sm:h-full" />
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
}

CardItemv2.propTypes = {
  img: PropTypes.node.isRequired,
  nameKr: PropTypes.string.isRequired,
  nameEn: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
};
