import React, { useEffect, useState } from 'react';
import Heading from '../components/ui/Heading';
import PublicationList from '../components/publications/PublicationList';
import axios from 'axios';

const Publications = () => {
  // const [publications, setPublications] = useState(null);

  // useEffect(() => {
  //   setTimeout(async () => {
  //     console.log('load');
  //     const res = await axios.get(`${process.env.REACT_APP_URL}/api/images`);
  //     const data = await res.data;
  //     console.log(data);
  //     setPublications(data);
  //   }, 5000);
  // }, []);

  return (
    <>
      <Heading>Publications</Heading>
      <div className="sm:mb-10">
        <article className="publications-article">
          <h2 className="year">2022</h2>
          <PublicationList />
        </article>
        <article className="publications-article">
          <h2 className="year">2021</h2>
          <PublicationList />
        </article>
        <article className="publications-article">
          <h2 className="year">2020</h2>
          <PublicationList />
        </article>
      </div>
    </>
  );
};

export default Publications;
