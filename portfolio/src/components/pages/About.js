import React from 'react';
import headshot from '../../assets/Loeffler, Michael - Headshot small.jpg'

export default function About() {
  return (
    <div>
      <h1>About Me Page</h1>
      <img src={headshot} alt=""/>
      <p>Bio goes here</p>
    </div>
  );
}
