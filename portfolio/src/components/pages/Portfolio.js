import React from 'react';
import Project from '../Project'
import thumbnail from '../../assets/placeholder-300x200.gif';

export default function Portfolio() {

  const projects = [
    {
      title: "Full-Stack E-commerce Site",
      src: thumbnail,
      github: 'https://github.com/michael-loeffler/Shoe-Store',
      deployed: 'https://mighty-brushlands-95444.herokuapp.com/'
    },
    {
      title: "Tech Blog - Model View Controller framework",
      src: thumbnail,
      github: 'https://github.com/michael-loeffler/Tech-Blog',
      deployed: 'https://shrouded-gorge-55801.herokuapp.com/'
    },
    {
      title: "Social Network API - NoSQL/MongoDB",
      src: thumbnail,
      github: 'https://github.com/michael-loeffler/Social-Network-API',
      deployed: 'https://drive.google.com/file/d/1NLW6204mswgokpV0Pn1CKKZ3e0Gx9fMp/view'
    },
    {
      title: "README Generator - Node",
      src: thumbnail,
      github: 'https://github.com/michael-loeffler/README-Generator',
      deployed: 'https://drive.google.com/file/d/17rqFUdYIMLsRvTYWKeA0RGSfGleac7Ae/view'
    },
    {
      title: "Weather Dashboard - Server-Side APIs",
      src: thumbnail,
      github: 'https://github.com/michael-loeffler/Weather-Dashboard',
      deployed: 'https://michael-loeffler.github.io/Weather-Dashboard/'
    },
    {
      title: "Password Generator - JavaScript",
      src: thumbnail,
      github: 'https://github.com/michael-loeffler/Password-Generator',
      deployed: 'https://michael-loeffler.github.io/Password-Generator/'
    },
  ];

  return (
    <div style={{ paddingBottom: "50px" }}>
      <h1 className='text-center mt-3'>Portfolio</h1>
      <div className="card-deck d-flex flex-wrap justify-content-around">
        {projects.map((project) => {
          return (
            <Project title={project.title} src={project.src} github={project.github} deployed={project.deployed} />
          );
        })}
      </div>
    </div>
  );
}
