import React from 'react';
import Badge from 'react-bootstrap/Badge';
import '../style.css';

function Project({ src, alt, title, description, badges, visible, username, password, deployed, github }) {
    return (
        <div className="card mb-4 mt-3 mx-1 bg-light text-dark">
            <img className="card-img-top" src={src} alt={alt} style={{ objectFit: 'contain', borderBottomStyle: 'solid' }} />
            <div className="card-body">
                <h5 className="card-title">{title}</h5>
                <p className="card-text mt-3">{description}</p>
                {badges.map((badge) => {
                    return (<Badge key={badge} className="mx-1 mt-1 text-dark" pill bg="info">{badge}</Badge>)
                })}
                <div className={visible ? 'd-block mt-3' : 'd-none'}>
                    <p className="card-text mb-0">{username}</p>
                    <p className="card-text">{password}</p>
                </div>
            </div>
            <div className="card-footer d-flex justify-content-between">
                <a href={deployed} target="_blank" rel="noopener noreferrer"><small className="text-dark">Deployed App/Demo</small></a>
                <a href={github} target="_blank" rel="noopener noreferrer"><small className="text-dark">GitHub Repo</small></a>
            </div>
        </div>
    )
}

export default Project;