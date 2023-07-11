// import thumbnail from '../../assets/placeholder-300x200.gif';
import React from 'react';
import Project from '../Project'
import calendar from '../../assets/calendar.png'
import ecommerce from '../../assets/ecommerce.PNG'
import tech from '../../assets/tech.PNG'
import pwa from '../../assets/pwa.png'
import weather from '../../assets/weather.PNG'

export default function Portfolio() {

  const projects = [
    {
      title: 'Full-Stack Calendar App',
      src: calendar,
      github: 'https://github.com/michael-loeffler/Calendar-App',
      deployed: 'https://sleepy-sierra-54387.herokuapp.com/',
      badges: [
        'MongoDB',
        'Mongoose',
        'Express',
        'React',
        'Node',
        'Apollo/GraphQL',
        'bcrypt',
        'Jsonwebtoken',
        'Jwt-decode',
        'Heroku',
        'Dayjs',
      ],
      description: 'Full-Stack, single-page calendar application allowing users to sign-in and create, update, or delete events to stay organized.',
      key: 1
    },
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
      description: 'Full-Stack e-commerce website allowing users to sort results by desired criteria, as well as access Wishlist and Cart features once they create an account and sign-in',
      key: 2
    },
    {
      title: 'Full-Stack Tech Blog',
      src: tech,
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
        'Heroku',
        'Model-View-Controller'
      ],
      description: 'Full-Stack blog web application allowing users to create, update & delete posts, as well as comments on other posts.',
      key: 3
    },
    {
      title: 'PWA Text Editor',
      src: pwa,
      github: 'https://github.com/michael-loeffler/PWA-Text-Editor',
      deployed: 'https://limitless-woodland-21063.herokuapp.com/',
      badges: [
        'babel',
        'webpack',
        'idb',
        'Express',
      ],
      description: 'A simple text editor that allows users to store notes and/or code snippets for future reference, used as an opportunity to learn about Progressive Web Applications (PWAs).',
      key: 4
    },
    {
      title: 'Weather Dashboard - Server-Side APIs',
      src: weather,
      github: 'https://github.com/michael-loeffler/Weather-Dashboard',
      deployed: 'https://michael-loeffler.github.io/Weather-Dashboard/',
      badges: [
        'JavaScript',
        'jQuery',
        'dayjs',
        'Bootstrap',
        'OpenWeather API'
      ],
      description: 'Front-End web application that utilizes the OpenWeatherMap API to fetch weather data for a city based on user input.',
      key: 5
    },
  ];

  return (
    <div style={{ paddingBottom: '50px' }}>
      <h1 className='text-center mt-3'>Portfolio</h1>
      <div className='card-deck d-flex flex-wrap justify-content-around'>
        {projects.map((project) => {
          return (
            <Project title={project.title} src={project.src} github={project.github} deployed={project.deployed} badges={project.badges} description={project.description} key={project.key}/>
          );
        })}
      </div>
    </div>
  );
}
