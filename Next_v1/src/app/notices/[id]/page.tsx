'use client';
import NoticeContent from '@/components/notices/NoticeContent';
import NoticeHeader from '@/components/notices/NoticeHeader';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';

const dummy = [
  {
    id: 0,
    title: '숨은 정부지원금 찾기의 알림 서비스 종료 안내',
    createdAt: '2022. 12. 13',
    content: [
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
    ],
  },
  {
    id: 1,
    title: '환전 서비스 환율 우대 정책 변경 안내',
    createdAt: '2022. 12. 09',
    content: [
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
    ],
  },
  {
    id: 2,
    title: 'ATM 출금 수수료 지원 종료 안내',
    createdAt: '2022. 12. 01',
    content: [
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
    ],
  },
  {
    id: 3,
    title: '금융정보 이용약관 변경 안내',
    createdAt: '2022. 11. 23',
    content: [
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
    ],
  },
  {
    id: 4,
    title: '숨은 정부지원금 찾기의 알림 서비스 종료 안내',
    createdAt: '2022. 11. 13',
    content: [
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
    ],
  },
  {
    id: 5,
    title: '환전 서비스 환율 우대 정책 변경 안내',
    createdAt: '2022. 11. 09',
    content: [
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
    ],
  },
  {
    id: 6,
    title: '토스 금융정보 구독 서비스(금융팁) 이용약관 변경 안내',
    createdAt: '2022. 11. 01',
    content: [
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
    ],
  },
  {
    id: 7,
    title: 'ATM 출금 수수료 지원 종료 안내',
    createdAt: '2022. 10. 23',
    content: [
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
    ],
  },
];

// 서버랑 통신할때 id조회로 데이터 가져오기

const NoticeDetail: React.FC = () => {
  const currentPath = usePathname();
  const [currentId, setCurrentId] = useState(0);

  useEffect(() => {
    if (currentPath) {
      setCurrentId(parseInt(currentPath.charAt(currentPath.length - 1)));
    }
  }, [currentPath]);

  return (
    <article className="notice-detail">
      <NoticeHeader title={dummy[currentId].title} createdAt={dummy[currentId].createdAt} />
      <NoticeContent dummy={dummy[currentId].content} />
      <div className="notice-button">
        <a href="/notices" className="notice-link">
          목록으로
        </a>
      </div>
    </article>
  );
};

export default NoticeDetail;
