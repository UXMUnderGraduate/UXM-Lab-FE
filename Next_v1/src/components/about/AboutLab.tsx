import React, { RefObject } from "react";
import Image from "next/image";

const content1 = [
  "안녕하세요. 혁신적인 미디어 기술의 최전선에 있는 UXMedia 연구실을 소개합니다. 우리 연구실은 급변하는 디지털 시대의 핵심 기술들을 연구하고 개발하여, 미디어 콘텐츠에 대한 사용자 경험(UX)을 한 단계 더 발전시키는 것을 목표로 하고 있습니다.",
  "블록체인 기술을 기반으로 한 NFT(Non-Fungible Token)와 DID(Decentralized Identifier)는 우리 연구의 중요한 축을 이룹니다. 이를 통해 디지털 자산의 소유권을 보장하고, 개인의 디지털 정체성을 안전하게 관리할 수 있는 솔루션을 개발하고 있습니다. 특히 NFT 기술을 활용한 디지털 콘텐츠 관리 시스템은 창작자들의 권리를 보호하고 콘텐츠의 가치를 극대화하는 데 기여하고 있습니다.",
  "미디어사물인터넷(IoMT: Internet of Media Things)은 우리 연구실의 또 다른 주요 연구 분야입니다. 일상 생활 속 미디어 기기들이 서로 연결되고 소통하는 생태계를 구축함으로써, 보다 지능적이고 반응성 높은 미디어 경험을 제공하는 것을 목표로 합니다. 이는 스마트 홈, 스마트 시티 등의 분야에서 혁신적인 응용 가능성을 제시하고 있습니다.",
  "메타버스 기술 또한 우리 연구의 중심에 있습니다. 현실과 가상을 융합한 새로운 차원의 디지털 세계를 구현하기 위해, AR(증강현실)과 VR(가상현실), 오감미디어 기술을 접목한 몰입형 콘텐츠 개발에 주력하고 있습니다. 이를 통해 교육, 엔터테인먼트, 비즈니스 등 다양한 분야에서 혁신적인 사용자 경험을 창출하고자 합니다.",
  "UXMedia 연구실은 이러한 첨단 기술들을 통합하여, 차세대 디지털 콘텐츠 관리 및 유통 플랫폼을 개발하고 있습니다. 블록체인 기반의 보안성, IoMT의 연결성, 메타버스의 몰입감을 결합하여, 콘텐츠 창작자와 소비자 모두에게 혁신적인 가치를 제공하는 것이 우리의 궁극적인 목표입니다.",
  "아울러 상기 기술에 대한 국제표준화를 선도하고 있습니다. 이는 ISO/IEC JTC 1 표준화 단체 내 메타버스 및 미디어사물인터넷 표준인 MPEG=V, MPEG-IoMT의 기술 개발에 주도적으로 기여하고 있으며, 현실세계와 가상세계를 연결하는 다양한 기술을 IEEE 2888 WG 내 각종 국제사실표준으로 개발/제정하고 있습니다.",
  "우리 UXMedia 연구실은 끊임없는 혁신과 도전을 통해 미래 미디어 기술의 새로운 지평을 열어가고 있습니다. 함께 미래를 만들어갈 열정 넘치는 연구자들의 참여를 기다립니다.",
];

const AboutLab = () => {
  return (
    //TODO
    <div className="article-container_2">
      <div className="w-full flex justify-center">
        <Image
          src={"/images/professor_profile.jpeg"}
          alt="교수 프로필 사진"
          width={240}
          height={260}
          className="shadow-md mr-3 mb-5 block md:hidden"
        />
      </div>
      <div className="flex">
        <Image
          src={"/images/professor_profile.jpeg"}
          alt="교수 프로필 사진"
          width={240}
          height={260}
          className="shadow-md mr-3 mb-3 hidden md:block"
        />
        <div>
          <div className="mb-3 sm:mb-5 flex">
            <p className="typo">
              안녕하세요. 혁신적인 미디어 기술의 최전선에 있는 UXMedia 연구실을
              소개합니다. 우리 연구실은 급변하는 디지털 시대의 핵심 기술들을
              연구하고 개발하여, 미디어 콘텐츠에 대한 사용자 경험(UX)을 한 단계
              더 발전시키는 것을 목표로 하고 있습니다.
            </p>
          </div>
          <div className="mb-3 sm:mb-5">
            <p className="typo ">
              블록체인 기술을 기반으로 한 NFT(Non-Fungible Token)와
              DID(Decentralized Identifier)는 우리 연구의 중요한 축을 이룹니다.
              이를 통해 디지털 자산의 소유권을 보장하고, 개인의 디지털 정체성을
              안전하게 관리할 수 있는 솔루션을 개발하고 있습니다. 특히 NFT
              기술을 활용한 디지털 콘텐츠 관리 시스템은 창작자들의 권리를
              보호하고 콘텐츠의 가치를 극대화하는 데 기여하고 있습니다.
            </p>
          </div>
        </div>
      </div>
      <div className="mb-3 sm:mb-5">
        <p className="typo">
          미디어사물인터넷(IoMT: Internet of Media Things)은 우리 연구실의 또
          다른 주요 연구 분야입니다. 일상 생활 속 미디어 기기들이 서로 연결되고
          소통하는 생태계를 구축함으로써, 보다 지능적이고 반응성 높은 미디어
          경험을 제공하는 것을 목표로 합니다. 이는 스마트 홈, 스마트 시티 등의
          분야에서 혁신적인 응용 가능성을 제시하고 있습니다.
        </p>
      </div>
      <div className="mb-3 sm:mb-5">
        <p className="typo">
          메타버스 기술 또한 우리 연구의 중심에 있습니다. 현실과 가상을 융합한
          새로운 차원의 디지털 세계를 구현하기 위해, AR(증강현실)과
          VR(가상현실), 오감미디어 기술을 접목한 몰입형 콘텐츠 개발에 주력하고
          있습니다. 이를 통해 교육, 엔터테인먼트, 비즈니스 등 다양한 분야에서
          혁신적인 사용자 경험을 창출하고자 합니다.
        </p>
      </div>
      <div className="mb-3 sm:mb-5">
        <p className="typo">
          UXMedia 연구실은 이러한 첨단 기술들을 통합하여, 차세대 디지털 콘텐츠
          관리 및 유통 플랫폼을 개발하고 있습니다. 블록체인 기반의 보안성,
          IoMT의 연결성, 메타버스의 몰입감을 결합하여, 콘텐츠 창작자와 소비자
          모두에게 혁신적인 가치를 제공하는 것이 우리의 궁극적인 목표입니다.
        </p>
      </div>
      <div className="mb-3 sm:mb-5">
        <p className="typo">
          아울러 상기 기술에 대한 국제표준화를 선도하고 있습니다. 이는 ISO/IEC
          JTC 1 표준화 단체 내 메타버스 및 미디어사물인터넷 표준인 MPEG=V,
          MPEG-IoMT의 기술 개발에 주도적으로 기여하고 있으며, 현실세계와
          가상세계를 연결하는 다양한 기술을 IEEE 2888 WG 내 각종
          국제사실표준으로 개발/제정하고 있습니다.
        </p>
      </div>
      <div className="mb-3 sm:mb-5">
        <p className="typo">
          우리 UXMedia 연구실은 끊임없는 혁신과 도전을 통해 미래 미디어 기술의
          새로운 지평을 열어가고 있습니다. 함께 미래를 만들어갈 열정 넘치는
          연구자들의 참여를 기다립니다.
        </p>
      </div>
      <div className="w-full flex justify-end mt-3 items-center">
        <p className="">UXMedia 연구실 담당 교수 김상균</p>
        <Image
          src={"/images/signature.png"}
          alt="교수님 싸인"
          width={150}
          height={75}
        />
      </div>
    </div>
  );
};

export default AboutLab;
