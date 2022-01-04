import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

// Local Imports

import FilterTab from "./FilterList/Filter.jsx";
import Map from "./Map/Map";
import { Container, Col, Row } from "react-bootstrap";

function App() {
  return (
    <div className="App">
      <nav>
        <h2 className="Nav-header align-left">Recycling Map</h2>
      </nav>

      <Container fluid>
        <Row>
          <Col className="filter" xs={6} md={4}>
            <FilterTab />
          </Col>
          <Col className="map" xs={6} md={8}>
            <Map />
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default App;
