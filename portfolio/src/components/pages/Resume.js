import React from 'react';

export default function Resume() {
  return (
    <div>
      <h1>Resume Page</h1>
      <a href="https://docs.google.com/document/d/1WPSw44IoKUFXcExWGt3zNqWq6DeWBifn/edit" download="filename"><button className="button button-secondary">Download my Resume</button></a>
      <h3>Front-End Proficiencies</h3>
      <ul>
        <li>List Item</li>
        <li>List Item</li>
        <li>List Item</li>
      </ul>
      <h3>Back-End Proficiencies</h3>
      <ul>
        <li>List Item</li>
        <li>List Item</li>
        <li>List Item</li>
      </ul>
    </div>
  );
}
