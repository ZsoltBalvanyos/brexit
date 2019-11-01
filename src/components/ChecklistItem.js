import React from 'react';
import { Container, Row, Card, Accordion, Button } from 'react-bootstrap';

const ChecklistItem = ({index, header, text}) => (
  <Card>
    <Accordion.Toggle as={Card.Header} eventKey={index} className="panel-heading">
      {header}
    </Accordion.Toggle>
    <Accordion.Collapse eventKey={index}>
      <Card.Body>{text}</Card.Body>
    </Accordion.Collapse>
  </Card>
)

export default ChecklistItem;
