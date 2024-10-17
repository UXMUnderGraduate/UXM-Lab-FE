import React, { RefObject } from 'react';

interface AboutUsProps {
  element: RefObject<HTMLElement>;
}

const content1 = [
  '1.	블록체인 기반 NFT와 DID: 디지털 자산 소유권 보장 및 개인 정체성 관리 ','2.	미디어사물인터넷(IoMT): 연결된 미디어 기기 생태계 구축','3.	메타버스: AR, VR, 오감미디어 기술을 활용한 몰입형 콘텐츠 개발','4.	차세대 디지털 콘텐츠 관리 및 유통 플랫폼 개발','5.	국제표준화 선도: ISO/IEC JTC 1의 MPEG-V, MPEG-IoMT 및 IEEE 2888 WG 표준 개발',
];

const AboutUs: React.FC<AboutUsProps> = (props) => {
  return (
    <article ref={props.element} className="home-article_2">
      <div className="article-container_2">
        <div className="-mt-10">
          <h2 className="heading">About Us</h2>
        </div>
        <div>
          <div className="mb-3 sm:mb-5">
            <p className="typo">UXMedia 연구실은 혁신적인 미디어 기술의 최전선에서 사용자 경험(UX)을 향상시키는 것을 목표로 합니다. 주요 연구 분야는 다음과 같습니다:</p>
          </div>
          <div className="mb-3 sm:mb-5">
            {content1.map((line, idx) => {
              return (
                <p key={idx} className="typo">
                  {line}
                </p>
              );
            })}
          </div>
          <p className="typo">UXMedia 연구실은 이러한 기술들을 통합하여 콘텐츠 창작자와 소비자에게 혁신적인 가치를 제공하고, 미래 미디어 기술의 새로운 지평을 열어가고 있습니다</p>
        </div>
      </div>
    </article>
  );
};

export default AboutUs;
