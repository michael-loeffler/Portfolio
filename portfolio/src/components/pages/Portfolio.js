import React from 'react';
import Project from '../Project'
import thumbnail from '../../assets/placeholder-300x200.gif';

export default function Portfolio() {
  const githubURLs = [
    'https://github.com/michael-loeffler/Shoe-Store',
    'https://github.com/michael-loeffler/Tech-Blog',
    'https://github.com/michael-loeffler/Social-Network-API',
    'https://github.com/michael-loeffler/README-Generator',
    'https://github.com/michael-loeffler/Weather-Dashboard',
    'https://github.com/michael-loeffler/Password-Generator'
  ]

  return (
    <div>
      <h1>Portfolio Page</h1>
      <div className="card-deck d-flex">
        <Project title="15/16 Full-Stack E-commerce Site" src={thumbnail} github={githubURLs[0]}/> 
        <Project title="14 Tech Blog - MVC" src={thumbnail} github={githubURLs[1]}/>
        <Project title="18 Social Network API - NoSQL/MongoDB" src={thumbnail} github={githubURLs[2]}/>
        <Project title="9 README Generator - Node" src={thumbnail} github={githubURLs[3]}/>
        <Project title="6 Weather Dashboard - server side APIs" src={thumbnail} github={githubURLs[4]}/>
        <Project title="3 Password Generator - JavaScript" src={thumbnail} github={githubURLs[5]}/>
      </div>
    </div>
  );
}
