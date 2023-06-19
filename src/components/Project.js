import React from 'react';
import Badge from 'react-bootstrap/Badge';
import '../App.css';

function Project({title, src, github, deployed, badges}) {
    return (
    <div className="card w-25 mb-5 mt-3 mx-1 bg-light text-dark">
        <img className="card-img-top" src={src} alt="" />
        <div className="card-body">
            <h5 className="card-title">{title}</h5>
            {badges.map((badge) => {
            return (<Badge key={badge} className="mx-1 text-dark" pill bg="info">{badge}</Badge>)
            })}
            <p className="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
        </div>
        <div className="card-footer d-flex justify-content-between">
            <a href={deployed} target="_blank" rel="noopener noreferrer"><small className="text-dark">Deployed App</small></a>
            <a href={github} target="_blank" rel="noopener noreferrer"><small className="text-dark">GitHub Repo</small></a>
        </div>
    </div>
    )
}

export default Project;