import React from 'react';
import PropsTypes from 'prop-types';

export default function CardItem(props) {
  return (
    <div class="cards__item">
      <img class="cards__img" src={props.img} alt="" />
      <div class="cards__info">
        <h5 class="cards__name">
          {props.englishName} <br />
          {props.koreaName}
        </h5>
        <p class="cards__Composition">
          Affiliation :{' ' + props.affiliation} <br /> Research Field :
          {' ' + props.researchField} <br />
          Email : {' ' + props.email}
        </p>
      </div>
    </div>
  );
}

CardItem.propTypes = {
  englishName: PropsTypes.string,
  koreaName: PropsTypes.string,
  affiliation: PropsTypes.string,
  researchField: PropsTypes.string,
  email: PropsTypes.string,
  img: PropsTypes.string,
};
