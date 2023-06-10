import React from 'react';
import Code from '../../assets/code.png';
import DownButton from './DownButton';
import Image from 'next/image';

interface IndexProps {
  onMoveToElement: () => void;
}
// Myongji;
const Index: React.FC<IndexProps> = (props) => {
  return (
    <article className="home-article_1">
      <div className="article-container_1">
        <div className="mt-16 mb-6 sm:mt-0 sm:mb-0 mx-8 sm:mx-10 sm:text-left text-center text-zinc-800">
          <p className="font-semibold text-3xl sm:text-5xl">Myongji University</p>
          <p className="font-semibold text-3xl sm:text-5xl mb-3 sm:mb-5">UX Media Laboratory</p>
          <p className="font-semibold text-xl sm:text-2xl">명지대학교 UX Media 연구실</p>
        </div>
        <div className="my-5 sm:my-0">
          <Image src={'/images/1.gif'} width={240} height={240} alt="metaverse" className="w-44 h-44 md:w-60 md:h-60 lg:w-80 lg:h-80" />
        </div>
      </div>
      <DownButton onMoveToElement={props.onMoveToElement} />
    </article>
  );
};

export default Index;
