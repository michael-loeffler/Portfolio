import React, {useState} from 'react';
import { Form, Button } from 'react-bootstrap';
import '../../style.css';

export default function Contact() {
  const [validated, setValidated] = useState(false);

  const validateForm = (e) => {
    const form = e.currentTarget;
    if (form.checkValidity() === false) {
      e.preventDefault();
      e.stopPropagation();
    }
    setValidated(true);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    e.stopPropagation();
    const name = e.target[0].value;
    const message = e.target[1].value;
    if (name !== "" && message !== "") {
      document.location = "mailto:michaelloeffler23@gmail.com?subject="+name+" wants to connect!&body="+message;
    }
  };

  return (
    <div className='d-flex flex-column align-items-center'>
      <h1 className='text-center mt-3'>Contact Me</h1>

      <Form className="needs-validation" id='form' noValidate validated={validated} onSubmit={handleSubmit} onBlur={validateForm}>
      <Form.Group className='mt-2'>
        <Form.Label>Name</Form.Label>
        <Form.Control type="text" name="name" placeholder="Peter Parker" required/>
        <Form.Control.Feedback type='invalid'>
          This field is required.
        </Form.Control.Feedback>
      </Form.Group>
      <Form.Group className='mt-2'>
        <Form.Label>Message</Form.Label>
        <Form.Control as="textarea" name="message" rows={3} required></Form.Control>
        <Form.Control.Feedback type='invalid'>
          This field is required.
        </Form.Control.Feedback>
      </Form.Group>
      <Button type="submit" className="btn btn-primary mt-3">Send</Button>
      </Form>
    </div>
  );
}
