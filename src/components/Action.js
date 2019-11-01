import React from 'react';
import { Col } from 'react-bootstrap';

const Action = ({ title, text, button, link }) => (
  <Col md={4} className="text-center" style={{padding: "10px 30px"}}>
    <h1>{title}</h1>
    <p>{text}</p>
    <p><a href={link} target="_blank" class="button">{button}</a></p>
  </Col>
)

export default Action;
