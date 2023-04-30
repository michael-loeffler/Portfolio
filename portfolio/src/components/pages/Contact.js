import React, {useState} from 'react';
import { Form, Button } from 'react-bootstrap';

export default function Contact() {
  const [validated, setValidated] = useState(false);

  const handleSubmit = (e) => {
    const form = e.currentTarget;
    if (form.checkValidity() === false) {
      e.preventDefault();
      e.stopPropagation();
    }
    setValidated(true);
  };

  return (
    <div style={{paddingBottom: "50px"}} className='d-flex flex-column align-items-center'>
      <h1 className='mt-2'>Contact Page</h1>

      <Form className="needs-validation col-md-6" noValidate validated={validated} onSubmit={handleSubmit} onBlur={handleSubmit}>
      <Form.Group>
        <Form.Label>Name</Form.Label>
        <Form.Control type="text" placeholder="Kevin McCallister" required/>
        <Form.Control.Feedback type='invalid'>
          This field is required.
        </Form.Control.Feedback>
      </Form.Group>
      <Form.Group>
        <Form.Label>Email Address</Form.Label>
        <Form.Control type="email" placeholder="name@example.com" required/>
        <Form.Control.Feedback type='invalid'>
          Valid Email Address is required.
        </Form.Control.Feedback>
      </Form.Group> 
      <Form.Group>
        <Form.Label>Message</Form.Label>
        <Form.Control as="textarea" rows={3} required></Form.Control>
        <Form.Control.Feedback type='invalid'>
          This field is required.
        </Form.Control.Feedback>
      </Form.Group>
      <Button type="submit" className="btn btn-primary mt-2">Send</Button>
      </Form>
    </div>
  );
}
