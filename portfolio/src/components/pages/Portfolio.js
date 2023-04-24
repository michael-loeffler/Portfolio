import React from 'react';
import Project from '../Project'
import thumbnail from '../../assets/placeholder-300x200.gif';

export default function Portfolio() {
  const github = [
    'https://github.com/michael-loeffler/Shoe-Store',
    'https://github.com/michael-loeffler/Tech-Blog',
    'https://github.com/michael-loeffler/Social-Network-API',
    'https://github.com/michael-loeffler/README-Generator',
    'https://github.com/michael-loeffler/Weather-Dashboard',
    'https://github.com/michael-loeffler/Password-Generator'
  ];
  
  const deployed = [
    'https://mighty-brushlands-95444.herokuapp.com/',
    'https://shrouded-gorge-55801.herokuapp.com/',
    'https://drive.google.com/file/d/1NLW6204mswgokpV0Pn1CKKZ3e0Gx9fMp/view',
    'https://drive.google.com/file/d/17rqFUdYIMLsRvTYWKeA0RGSfGleac7Ae/view',
    'https://michael-loeffler.github.io/Weather-Dashboard/',
    'https://michael-loeffler.github.io/Password-Generator/'
  ];


  return (
    <div>
      <h1>Portfolio Page</h1>
      <div className="card-deck d-flex flex-wrap justify-content-around">
        <Project title="Full-Stack E-commerce Site" src={thumbnail} github={github[0]} deployed={deployed[0]}/> 
        <Project title="Tech Blog - MVC" src={thumbnail} github={github[1]} deployed={deployed[1]}/>
        <Project title="Social Network API - NoSQL/MongoDB" src={thumbnail} github={github[2]} deployed={deployed[2]}/>
        <Project title="README Generator - Node" src={thumbnail} github={github[3]} deployed={deployed[3]}/>
        <Project title="Weather Dashboard - server side APIs" src={thumbnail} github={github[4]} deployed={deployed[4]}/>
        <Project title="Password Generator - JavaScript" src={thumbnail} github={github[5]} deployed={deployed[5]}/>
      </div>
    </div>
  );
}
