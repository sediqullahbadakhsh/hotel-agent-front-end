import React from 'react';
import { useParams } from 'react-router-dom';

const ContributorDetails = () => {
  const aboutData = [
    {
      slug: 'ahmad',
      name: 'Ahmad Adel',
      details:
        'software engineer and Full-Stack Developer, who is passionate about Chess and open source.',
      github: 'https://github.com/ahmedadel56',
      twitter: '',
      linkedIn: 'https://www.linkedin.com/in/ahmed-adel56/',
    },
    {
      slug: 'jorge',
      name: 'Jorge Rios',
      details:
        'passionate Full-stack developer and Electronic Engineer from Ecuador. Enjoy learning languages and frameworks like React and React Native.',
      github: 'https://github.com/Alexr16',
      twitter: 'https://twitter.com/ReveloJ',
      linkedIn: 'https://www.linkedin.com/in/jorgeriosr',
    },
    {
      slug: 'sediq',
      name: 'Sediqullah Badakhsh',
      details:
        'Full-Stack Software Developer, loves music and code, passionate to learn more languages and frameworks',
      github: 'https://github.com/sediqullahbadakhsh',
      twitter: 'https://twitter.com/sediqullah6',
      linkedIn: 'https://www.linkedin.com/in/sediqullah',
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
