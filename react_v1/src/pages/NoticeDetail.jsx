import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import NoticeHeader from '../components/notices/NoticeHeader';
import NoticeContent from '../components/notices/NoticeContent';

const dummy = [
  '안녕하세요, 네이버웍스입니다.',
  '\n',
  '공공기관 및 지자체를 위한 공공 네이버웍스가 출시되었습니다.',
  '\n',
  '공공 네이버웍스는 서비스형 소프트웨어(SaaS) 부문의 클라우드 서비스 보안 인증(CSAP, Cloud Security Assurance Program)을 획득하였으며, 국제 인증 기관으로부터 정보 보호 및 관리에 대한 안정성과 신뢰성을 공인받았습니다.',
  '\n',
  'CSAP(Cloud Security Assurance Program)은 클라우드 서비스 제공자가 제공하는 서비스에 대해 『 클라우드 컴퓨팅 발전 및 이용자 보호에 관한 법률 』 제 23조 제2항에 따라 정보보호 기준의 준수여부 확인을 인증기관이 평가·인증하여 이용자들이 안심하고 클라우드 서비스를 이용할 수 있도록 지원하는 제도입니다.',
  '\n',
  '물리적 망분리 요건 외에도 국가정보원이 규정하는 제품 안정성 기준(CC인증) 및 국내 고유 암호화 모듈 탑재 등 고도의 안정성 기준이 요구됩니다.',
  '\n',
  '공공 네이버웍스가 제공하는 상품과 이용 요금은 공공 네이버웍스 브랜드사이트에서 상세히 확인할 수 있으며, 서비스 및 도입관련 문의는 온라인 문의하기로 부탁드립니다.',
  '\n',
  '감사합니다.',
];

const NoticeDetail = () => {
  const { state } = useLocation();
  const { title, createdAt } = state;

  return (
    <article className='notice-detail'>
      <NoticeHeader title={title} createdAt={createdAt} />
      <NoticeContent dummy={dummy} />
      <div className='notice-button'>
        <Link to={'/notices'} className='notice-link'>
          목록으로
        </Link>
      </div>
    </article>
  );
};

export default NoticeDetail;
