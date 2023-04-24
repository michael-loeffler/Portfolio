import React from 'react';
import '../App.css';

function Project(props) {
    return (
    <div className="card w-25 my-5 mx-1">
        <img className="card-img-top" src={props.src} alt="" />
        <div className="card-body">
            <h5 className="card-title">{props.title}<span className="badge badge-pill badge-dark">Node</span></h5>
            <p className="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
        </div>
        <div className="card-footer d-flex justify-content-between">
            <a href={props.deployed} target="_blank" rel="noopener noreferrer"><small className="text-muted">Deployed App</small></a>
            <a href={props.github}><small className="text-muted">GitHub Repo</small></a>
        </div>
    </div>
    )
}

export default Project;