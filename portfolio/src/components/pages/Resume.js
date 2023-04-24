import React from 'react';

export default function Resume() {
  return (
    <div className="d-flex flex-column align-items-center" style={{paddingBottom: "50px"}}>
      <h1 className='mt-2'>Resume Page</h1>
      <a href="https://docs.google.com/document/d/1WPSw44IoKUFXcExWGt3zNqWq6DeWBifn/edit" download="filename"><button className="btn btn-secondary mt-3">Download my Resume</button></a>

        <div className="card mt-5">
          <div className="card-header">
            <h5 className="mb-0">Front-End Proficiencies</h5>
          </div>
            <ul className="list-group text-center">
              <li className="list-group-item">Cras justo odio</li>
              <li className="list-group-item">Dapibus ac facilisis in</li>
              <li className="list-group-item">Morbi leo risus</li>
              <li className="list-group-item">Porta ac consectetur ac</li>
              <li className="list-group-item">Vestibulum at eros</li>
            </ul>
        </div>
     
        <div className="card mt-5">
          <div className="card-header">
            <h5 className="mb-0">Back-End Proficiencies</h5>
          </div>
            <ul className="list-group text-center">
              <li className="list-group-item">Cras justo odio</li>
              <li className="list-group-item">Dapibus ac facilisis in</li>
              <li className="list-group-item">Morbi leo risus</li>
              <li className="list-group-item">Porta ac consectetur ac</li>
              <li className="list-group-item">Vestibulum at eros</li>
            </ul>
        </div>

    </div>
  );
}
