import React from 'react';

export default function Contact() {

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   form.checkValidity();
  // }

  return (
    <div style={{paddingBottom: "50px"}} className='d-flex flex-column align-items-center'>
      <h1 className='mt-2'>Contact Page</h1>

      <form className="needs-validation col-md-6" noValidate>
      <div className="form-group">
        <label for="name">Name</label>
        <input type="text" className="form-control" id="name" placeholder="Kevin McCallister" required/>
        <div className="invalid-feedback">
          This field is required.
        </div>
      </div>  
      <div className="form-group">
        <label for="email">Email address</label>
        <input type="email" className="form-control" id="email" placeholder="name@example.com" required/>
        <div className="invalid-feedback">
          This field is required.
        </div>
      </div>
      <div className="form-group">
        <label for="message">Message</label>
        <textarea className="form-control" id="message" rows="3" required></textarea>
        <div className="invalid-feedback">
          This field is required.
        </div>
      </div>
      <button type="submit" className="btn btn-primary mt-2">Send</button>
      </form>
    </div>
  );
}
