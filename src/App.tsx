import { Col, Container, Row } from "react-bootstrap";
import "./App.scss";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <Container className="App ">
      <Row className="border border-2 border-start-0 border-end-0 border-secondary my-4 mx-2 p-3 text-center text-secondary">
        <h1 className="fw-bold">Meu BR Alcobaça</h1>
      </Row>
      <div className="d-flex bg-secondary bg-opacity-10 p-3 mb-5">
        search here
      </div>
      <div>
        <Row
          className="gap-2 d-flex justify-content-center py-1 text-uppercase  fw-light"
          style={{ height: "200px", fontSize: "12px" }}
        >
          <Col
            xs={7}
            md={8}
            className="bg-secondary  p-2 d-flex align-items-end p-2"
          >
            <div className="bg-light px-1">Category 1</div>
          </Col>
          <Col
            xs={4}
            md={3}
            className="bg-secondary  p-2 d-flex align-items-end"
          >
            <div className="bg-light px-1">Category 2</div>
          </Col>
        </Row>
        <Row
          className="gap-2 d-flex justify-content-center py-1  text-uppercase  fw-light"
          style={{ height: "200px", fontSize: "12px" }}
        >
          <Col
            xs={4}
            md={3}
            className="bg-secondary  p-2 d-flex align-items-end"
          >
            <div className="bg-light px-1">Category 3</div>
          </Col>
          <Col
            xs={7}
            md={8}
            className="bg-secondary  p-2 d-flex align-items-end"
          >
            <div className="bg-light px-1">Category 4</div>
          </Col>
        </Row>
      </div>
      <Row className="border-2 border-bottom border-secondary m-2 mt-5 text-left text-secondary">
        <h2 className="">News</h2>
      </Row>
    </Container>
  );
}

export default App;
