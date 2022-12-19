import React from 'react';

const content1 = [
  '4차 산업시대를 견인할 핵심 기술들인 사물 인터넷(IoT), 혼합현실(MR)과 인공지능(AI)을 융합하여, 자연/산업 재난 예방, 대응 및 기타 다양한 상용 분야에 효과적으로 적용될 수 있는 ICT 기술을 확보하는 것을 목표로 하고 있습니다.',
];
const content2 = [
  '4차 산업시대를 견인할 핵심 기술들인 사물 인터넷(IoT), 혼합현실(MR)과 인공지능(AI)을 융합하여 자연/산업 재난 예방, 대응 및 기타 다양한 상용 분야에 효과적으로 적용될 수 있는 ICT 기술을 확보하는 것을 목표로 하고 있습니다.',
];

const AboutUS = (props) => {
  return (
    <article ref={props.element} className='home-article_2'>
      <div className='article-container_2'>
        <div className='-mt-10'>
          <h2 className='heading'>About Us (예시)</h2>
        </div>
        <div>
          <div className='mb-3 sm:mb-5'>
            <p className='typo'>
              UX Media Lab은 유무선 이동통신 환경에서 네트워크 구조, 프로토콜 및
              보안의 선도적인 연구를 수행해 왔습니다.
            </p>
            <p className='typo'>.....</p>
          </div>
          <div className='mb-3 sm:mb-5'>
            {content1.map((line, idx) => {
              return (
                <p key={idx} className='typo'>
                  {line}
                </p>
              );
            })}
          </div>
          <div className='mb-3 sm:mb-5'>
            {content2.map((line, idx) => {
              return (
                <p key={idx} className='typo'>
                  {line}
                </p>
              );
            })}
          </div>
          <p className='typo'>...</p>
        </div>
      </div>
    </article>
  );
};

export default AboutUS;
