import React from 'react';
import PropsTypes from 'prop-types';

export default function CardItem(props) {
  return (
    <div className="cards__item">
      <img className="object-cover rounded-t-lg  sm:w-40 sm:h-48 w-30 h-30 m-1  md:rounded-none md:rounded-l-lg " src={props.img} alt="인물사진" />
      <div className="cards__info">
        <h5 className="cards__name">
          {props.nameEn} <br />
          {props.nameKr}
        </h5>
        <p className="cards__Composition">
          Affiliation :{' ' + props.affiliation} <br /> Research Field :{' ' + props.researchField} <br />
          Email : {' ' + props.email}
          <br />
          Alumni : {''} {props.isAlumni ? '네' : '아니오'}
        </p>
      </div>
    </div>
  );
}

CardItem.propTypes = {
  nameEn: PropsTypes.string,
  nameKr: PropsTypes.string,
  affiliation: PropsTypes.string,
  isAlumni: PropsTypes.bool,
  researchField: PropsTypes.string,
  email: PropsTypes.string,
  img: PropsTypes.string,
};
