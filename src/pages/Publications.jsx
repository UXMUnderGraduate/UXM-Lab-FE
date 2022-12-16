import React from 'react';
import PublicationList from '../components/publications/PublicationList';

const Publications = () => {
  return (
    <main className='main'>
      <div className='main-container'>
        <div className='mt-30 mb-12'>
          <h1 className='heading'>Publications</h1>
        </div>
        <article className='publications-article'>
          <h2 className='year'>2022</h2>
          <PublicationList />
        </article>
        <article className='publications-article'>
          <h2 className='year'>2021</h2>
          <PublicationList />
        </article>
        <article className='publications-article'>
          <h2 className='year'>2020</h2>
          <PublicationList />
        </article>
      </div>
    </main>
  );
};

export default Publications;
