import React from 'react';
import Heading from '../components/ui/Heading';
import PublicationList from '../components/publications/PublicationList';

const Publications = () => {
  return (
    <>
      <Heading>Publications</Heading>
      <div className='sm:mb-10'>
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
    </>
  );
};

export default Publications;
