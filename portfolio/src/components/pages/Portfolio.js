import React from 'react';
import Project from '../Project'
import thumbnail from '../../assets/placeholder-300x200.gif';
import ecommerce from '../../assets/ecommerce_site.PNG'

export default function Portfolio() {

  const projects = [
    {
      title: 'Full-Stack E-commerce Site',
      src: ecommerce,
      github: 'https://github.com/michael-loeffler/Shoe-Store',
      deployed: 'https://mighty-brushlands-95444.herokuapp.com/',
      badges: [
        'Node',
        'Express',
        'SQL',
        'Sequelize',
        'Handlebars',
        'bcrypt',
        'dotenv',
        'Heroku'
      ],
      key: 1
    },
    {
      title: 'Tech Blog - Model View Controller framework',
      src: thumbnail,
      github: 'https://github.com/michael-loeffler/Tech-Blog',
      deployed: 'https://shrouded-gorge-55801.herokuapp.com/',
      badges: [
        'Node',
        'Express',
        'SQL',
        'Sequelize',
        'Handlebars',
        'bcrypt',
        'dotenv',
        'Heroku'
      ],
      key: 2
    },
    {
      title: 'Social Network API - NoSQL/MongoDB',
      src: thumbnail,
      github: 'https://github.com/michael-loeffler/Social-Network-API',
      deployed: 'https://drive.google.com/file/d/1NLW6204mswgokpV0Pn1CKKZ3e0Gx9fMp/view',
      badges: [
        'MongoDB',
        'Mongoose',
        'Node',
        'Express'
      ],
      key: 3
    },
    {
      title: 'README Generator - Node',
      src: thumbnail,
      github: 'https://github.com/michael-loeffler/README-Generator',
      deployed: 'https://drive.google.com/file/d/17rqFUdYIMLsRvTYWKeA0RGSfGleac7Ae/view',
      badges: [
        'Node',
        'inquirer'
      ],
      key: 4
    },
    {
      title: 'Weather Dashboard - Server-Side APIs',
      src: thumbnail,
      github: 'https://github.com/michael-loeffler/Weather-Dashboard',
      deployed: 'https://michael-loeffler.github.io/Weather-Dashboard/',
      badges: [
        'JavaScript',
        'jQuery',
        'dayjs',
        'Bootstrap',
        'OpenWeather API'
      ],
      key: 5
    },
    {
      title: 'Password Generator - JavaScript',
      src: thumbnail,
      github: 'https://github.com/michael-loeffler/Password-Generator',
      deployed: 'https://michael-loeffler.github.io/Password-Generator/',
      badges: ['JavaScript'],
      key: 6
    },
  ];

  return (
    <div style={{ paddingBottom: '50px' }}>
      <h1 className='text-center mt-3'>Portfolio</h1>
      <div className='card-deck d-flex flex-wrap justify-content-around'>
        {projects.map((project) => {
          return (
            <Project title={project.title} src={project.src} github={project.github} deployed={project.deployed} badges={project.badges} key={project.key}/>
          );
        })}
      </div>
    </div>
  );
}
