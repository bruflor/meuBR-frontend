import { Button, Col, Container, Row } from "react-bootstrap";
import { Icon } from "@iconify/react";

import "./App.scss";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <Container className="App ">
      <Row className="border border-2 border-start-0 border-end-0 border-secondary my-4 p-3 text-center text-secondary">
        <h1 className="fw-bold">Meu BR Alcobaça</h1>
      </Row>
      <div className="d-flex bg-secondary bg-opacity-10 p-3 mb-5 justify-content-between">
        search here
        <Icon icon="akar-icons:search" />
      </div>
      {/* categories */}
      <div>
        <Row
          className="gap-2 d-flex justify-content-center py-1 text-uppercase  fw-light"
          style={{ height: "200px", fontSize: "12px" }}
        >
          <Col
            xs={7}
            md={8}
            className="bg-secondary p-2 d-flex align-items-end p-2"
          >
            <div className="bg-light px-1">Category 1</div>
          </Col>
          <Col
            xs={4}
            md={3}
            className="bg-secondary p-2 d-flex align-items-end"
          >
            <div className="bg-light px-1">Category 2</div>
          </Col>
        </Row>
        <Row
          className="gap-2 d-flex justify-content-center py-1 text-uppercase  fw-light"
          style={{ height: "200px", fontSize: "12px" }}
        >
          <Col
            xs={4}
            md={3}
            className="bg-secondary  p-2 d-flex align-items-end p-2"
          >
            <div className="bg-light px-1">Category 3</div>
          </Col>
          <Col
            xs={7}
            md={8}
            className="bg-secondary  p-2 d-flex align-items-end p-2"
          >
            <div className="bg-light px-1">Category 4</div>
          </Col>
        </Row>
      </div>
      <div className=" d-flex flex-row-reverse my-2">
        <Button
          size="sm"
          className="bg-secondary bg-opacity-25 border-0 text-secondary"
        >
          Todas as categorias
        </Button>
      </div>
      <Row className="border-2 border-bottom border-secondary my-4 text-left text-secondary">
        <h2 className="">News</h2>
      </Row>
      <Row>
        <Col xs={12} md={6}>
          <div className="bg-secondary " style={{ height: "400px" }}></div>
          <span className="text-secondary">category of news</span>
          <h3>Title of News</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia
            deserunt ad voluptatibus earum sed qui facere sapiente. Magnam eius
            maxime, cum fugiat dignissimos quaerat voluptates nesciunt cumque?
            Incidunt, consequuntur itaque?
          </p>
        </Col>
        <Col xs={12} md={6} className="d-flex flex-column gap-3">
          <Col className="d-flex gap-3">
            <div className="bg-secondary" style={{ minWidth: "180px" }}></div>
            <div>
              <span className="text-secondary">category of news</span>
              <h3>Title of News</h3>
              <p className="m-0">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Mollitia deserunt ad voluptatibus earum sed qui facere sapiente.
              </p>
            </div>
          </Col>
          <Col className="d-flex gap-3">
            <div className="bg-secondary" style={{ minWidth: "180px" }}></div>
            <div>
              <span className="text-secondary">category of news</span>
              <h3>Title of News</h3>
              <p className="m-0">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Mollitia deserunt ad voluptatibus earum sed qui facere sapiente.
              </p>
            </div>
          </Col>
          <Col className="d-flex gap-3">
            <div className="bg-secondary" style={{ minWidth: "180px" }}></div>
            <div>
              <span className="text-secondary">category of news</span>
              <h3>Title of News</h3>
              <p className="m-0">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Mollitia deserunt ad voluptatibus earum sed qui facere sapiente.
              </p>
            </div>
          </Col>
        </Col>
      </Row>
    </Container>
  );
}

export default App;
