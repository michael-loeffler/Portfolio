import React from 'react';
import Project from '../Project'
import calendar from '../../assets/calendar.png'
import ecommerce from '../../assets/ecommerce.PNG'
import python from '../../assets/python.png'
import tech from '../../assets/tech.PNG'
import pwa from '../../assets/pwa.png'
import weather from '../../assets/weather.PNG'
import badge from '../../assets/badge.png'

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
        'dayjs',
        'Heroku'
      ],
      description: 'Full-Stack, single-page calendar application allowing users to sign-in and create, update, or delete events to stay organized.',
      alt: 'Screenshot of the Calendar App, providing an sample calendar in the month-view, displaying daily and multi-day events in a variety of colors. Other features of the app displayed in the screenshot include a "Create Event" button, navigation buttons, as well as the ability switch between month, week, work-week, day, and agenda views.',
      visible: true,
      username: `Username: "demo@test.com"`,
      password: `Password: "password123"`,
      key: 1
    },
    {
      title: 'Full-Stack E-commerce Site',
      src: ecommerce,
      github: 'https://github.com/michael-loeffler/Shoe-Store',
      deployed: 'https://mighty-brushlands-95444.herokuapp.com/',
      badges: [
        'MySQL',
        'Sequelize',
        'Express',
        'Handlebars',
        'Node',
        'bcrypt',
        'dotenv',
        'Bootstrap',
        'EmailJS',
        'Heroku'
      ],
      description: 'Full-Stack e-commerce website allowing users to sort results by desired criteria, and access Wishlist and Cart features once logged in.',
      alt: 'Screenshot of the E-commerce Site titled "Shoe Store", providing a preview of the homepage which displays different pairs of shoes as well as the features available to users with an account such as adding products to their Wishlist or to their Cart. The sort button is also featured, allowing users to sort products by price or by amount in stock.',
      visible: true,
      username: `Username: "demo@test.com"`,
      password: `Password: "password123"`,
      key: 2
    },
    {
      title: 'Python News Feed',
      src: python,
      github: 'https://github.com/michael-loeffler/python-newsfeed',
      deployed: 'https://morning-tor-74579-9e2c56a00e99.herokuapp.com/',
      badges: [
        'Python',
        'Flask',
        'SQLAlchemy',
        'PyMySQL',
        'Jinja2',
        'bcrypt',
        'Gunicorn',
        'Heroku'
      ],
      description: 'Python/Flask news application where users can post, upvote, or comment on links to tech articles.',
      alt: 'Screenshot of the Python News Feed application called "Just Tech News", providing a preview of the homepage which displays posts made by users linking to useful resources.',
      visible: true,
      username: `Username: "test@test.com"`,
      password: `Password: "12345"`,
      key: 3
    },
    {
      title: 'C# Security Badge Maker',
      src: badge,
      github: 'https://github.com/michael-loeffler/CSharp-Security-Badge-Maker',
      deployed: 'https://drive.google.com/file/d/12jQorTxnfoHV4q-s7QRMQ7tRWxJNaI8O/view?usp=sharing',
      badges: [
        'C#',
        '.Net Core SDK',
        'dotnet',
        'SkiaSharp',
        'Newtonsoft.Json',
      ],
      description: 'C# command-line application where users can quickly generate security badges for new employees.',
      alt: 'Sample security badge created using the application. It features a photo of an "employee" (my dog), their name, and their ID number, along with the company name and a barcode.',
      visible: 'false',
      username: ``,
      password: ``,
      key: 4
    },
    {
      title: 'Full-Stack Tech Blog',
      src: tech,
      github: 'https://github.com/michael-loeffler/Tech-Blog',
      deployed: 'https://shrouded-gorge-55801.herokuapp.com/',
      badges: [
        'MySQL',
        'Sequelize',
        'Express',
        'Handlebars',
        'Node',
        'bcrypt',
        'dotenv',
        'Model-View-Controller',
        'Heroku'
      ],
      description: 'Full-Stack blog web application allowing users to create, update, or delete posts and the same with comments on other posts.',
      alt: 'Screenshot of the Tech Blog to provide a preview of what a user\'s dashboard would look like once they are logged in. The dashboard page welcomes the user by name, displays any blog posts they have created, and includes buttons to update or delete blog posts.',
      visible: true,
      username: `Username: "demo@test.com"`,
      password: `Password: "password123"`,
      key: 5
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
        'Heroku'
      ],
      description: 'A simple text editor that allows users to store notes and/or code snippets for future reference, used as an opportunity to learn about Progressive Web Applications (PWAs).',
      alt: 'Screenshot of the PWA Text Editor taken on a mobile device demonstrating that the application can be installed and used like any other mobile app. The screenshot includes a preview of what a user sees upon opening the app, as well as the app appearing on an iPhone\'s home screen.',
      visible: false,
      username: ``,
      password: ``,
      key: 6
    },
    {
      title: 'Weather Dashboard',
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
      alt: 'Screenshot of the Weather Dashboard showing the weather for a given day, as well as for the next 5 days, of a city searched by the user. The dashboard provides temperature, wind speed, and humidity for each day, as well as an icon depicting the weather for the day. Finally, the dashboard displays a search history of the cities the user has viewed.',
      visible: false,
      username: ``,
      password: ``,
      key: 7
    },
  ];

  return (
    <div style={{ paddingBottom: '50px' }}>
      <h1 className='text-center mt-3'>Portfolio</h1>
      <div className='card-deck d-flex flex-wrap justify-content-around'>
        {projects.map((project) => {
          return (
            <Project title={project.title} src={project.src} github={project.github} deployed={project.deployed} badges={project.badges} description={project.description} alt={project.alt} visible={project.visible} username={project.username} password={project.password} key={project.key}/>
          );
        })}
      </div>
    </div>
  );
}
