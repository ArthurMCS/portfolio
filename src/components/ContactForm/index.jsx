/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useRef } from 'react';
import { Form, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import emailjs from '@emailjs/browser';
import FormWrap from './style';

export default function ContactForm() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('gmailMessage', 'template_duwpuvf', form.current, 'QYQPZ8XmzHnzMxUJ2')
      .then(() => {
        alert('Messagem enviada!!');
      }, (error) => {
        alert(error.text);
      });

    e.target.reset();
  };
  return (
    <FormWrap>
      <h1>{'< Contato />'}</h1>
      <Form ref={form} onSubmit={sendEmail}>
        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
          <Form.Label>Nome</Form.Label>
          <Form.Control name="name" type="text" placeholder="Seu nome" required />
        </Form.Group>
        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
          <Form.Label>Email</Form.Label>
          <Form.Control name="email" type="email" placeholder="Seu email" required />
        </Form.Group>
        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
          <Form.Label>Messagem</Form.Label>
          <Form.Control name="message" as="textarea" cols={30} rows={8} placeholder="Sua mensagem" required />
        </Form.Group>
        <Button variant="dark" type="submit" size="lg">
          Submit
        </Button>
      </Form>
    </FormWrap>
  );
}
