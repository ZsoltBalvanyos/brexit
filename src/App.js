import React from 'react';
import { Container, Row, Col, Navbar, Nav } from 'react-bootstrap';

import Main from './components/Main.js';
import Action from './components/Action.js';

import 'bootstrap/dist/css/bootstrap.min.css';
import './styles/brexit.scss';

function App() {

  const csatlakozzURL = "https://jelentkezes.momentum.hu/";
  const tamogassURL = "https://momentum.hu/momentum-tamogatas/";
  const mailto = "mailto:brexit@momentum.hu";

  return (
    <div>

      <Navbar bg="light" expand="lg">

        <Navbar.Brand href="#home">
          <Container>
            <Row>
              <img src="momentum-szavazz.svg" alt="Szavazz a Momentumra!" height="40" />
              <div style={{marginLeft: 20, marginTop: 5}}>BREXIT INFO</div>
            </Row>
          </Container>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse>
          <Nav className="ml-auto">
            <Nav.Link href={csatlakozzURL}>CSATLAKOZOK</Nav.Link>
            <Nav.Link href={tamogassURL}>TÁMOGATÁST KÜLDÖK</Nav.Link>
            <Nav.Link href={mailto}>KÉRDEZEK</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>

      <Container fluid id="header" >
        <Row width="100%">

        </Row>
      </Container>

      <Main />

      <Container fluid>
        <Row id="footer-actions">
          <Container>
            <Action
              title="CSATLAKOZZ"
              text="Csatlakozz a Momentumhoz, tegyünk közösen az ország fejlődéséért!"
              button="Csatlakozok"
              link={csatlakozzURL}
            />
            <Action
              title="TÁMOGASS"
              text="Pénzügyileg támogatnád a kezdeményezésünket?"
              button="Támogatást küldök"
              link={tamogassURL}
            />
            <Action
              title="KAPCSOLAT"
              text="Kérdéseid vagy javaslataid vannak? Szívesen meghallgatunk."
              button="Üzenetet küldök"
              link={mailto}
            />
          </Container>
        </Row>
        <Row id="footer">
          <Col xs={12} sm={6}>
            <div>Momentum Mozgalom © 2019. Minden jog fenntartva</div>
          </Col>
          <Col xs={12} sm={{ span: 3, offset: 3 }}>
            <a
              target="_blank"
              href="https://momentum.hu/momentum-adatvedelmi-tajekoztato/"
            >
              Adatvédelmi tájékoztató
            </a>
          </Col>
        </Row>
      </Container>

    </div>
  );
}

export default App;
