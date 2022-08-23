import React from 'react';
import { useParams } from 'react-router-dom';

const ContributorDetails = () => {
  const aboutData = [
    {
      slug: '*',
      name: 'nothing',
      details: 'Ahmad',
      github: '',
      twitter: '',
      linkedIn: '',
    },
    {
      slug: 'cont-ahmad',
      name: 'Ahmad',
      details: 'Ahmad',
      github: '',
      twitter: '',
      linkedIn: '',
    },
    {
      slug: 'cont-jorge',
      name: 'Jorge',
      details: 'Jorge',
      github: '',
      twitter: '',
      linkedIn: '',
    },
    {
      slug: 'cont-sediq',
      name: 'Sediq',
      details: '',
      github: '',
      twitter: '',
      linkedIn: '',
    },
  ];

  const { slug } = useParams();
  const aboutContent = aboutData.find((item) => item.slug === slug);
  const { name } = aboutContent;

  return (
    <div className="App">
      <h1>{name}</h1>
    </div>
  );
};
export default ContributorDetails;
