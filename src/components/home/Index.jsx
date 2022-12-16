import React from 'react';
import Code from '../../assets/code.png';
import DownButton from './DownButton';

const Index = (props) => {
  return (
    <article className='home-article_1'>
      <div className='article-container_1'>
        <div className='mx-10'>
          <p className='font-semibold text-5xl'>MyongJi University</p>
          <p className='font-semibold text-5xl mb-5'>UX Media Laboratory</p>
          <p className='font-semibold text-2xl'>명지대학교 UX Media 연구실</p>
        </div>
        <div>
          <img src={Code} alt='metaverse' className='w-80 h-80' />
        </div>
      </div>
      <DownButton onMoveToElement={props.onMoveToElement} />
    </article>
  );
};

export default Index;
