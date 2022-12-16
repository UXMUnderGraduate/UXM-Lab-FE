import React, { useEffect, useState } from 'react';
import CardItem from './CardItem';
import PropsTypes from 'prop-types';

export default function CardList(props) {
  const [datas, setData] = useState(props.carddata);
  const [professorData, setProfessorData] = useState({});
  useEffect(() => {
    setProfessorData(datas[0]);
    setData(datas.slice(1, 100)); // 1부터 마지막까지 반환)
    console.log('datas : ', datas, 'professorData : ', professorData);
  }, []);
  return (
    <div className="cardlist">
      <div className="cards__container">
        <div className="cards__wrapper">
          <div className="cards__professor">
            <CardItem
              englishName={professorData.englishName}
              koreaName={professorData.koreaName}
              affiliation={professorData.affiliation} //소속기관
              researchField={professorData.researchField} //연구분야
              email={professorData.email}
              img={professorData.img}
            />
          </div>
          <ul className="cards__items">
            {datas.map((data) => {
              return (
                <CardItem
                  key={data.id}
                  img={data.img}
                  englishName={data.englishName}
                  koreaName={data.koreaName}
                  affiliation={data.affiliation} //소속기관
                  researchField={data.researchField}
                  email={data.email}
                />
              );
            })}
          </ul>
        </div>
      </div>
    </div>
  );
}

CardList.propTypes = {
  datas: PropsTypes.arrayOf(PropsTypes.object),
};
