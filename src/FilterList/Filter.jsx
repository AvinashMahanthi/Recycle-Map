import React from "react";
import { Data } from "../Data/Data2";

import {
  Dropdown,
  DropdownButton,
  InputGroup,
  Container,
  Col,
  Row,
} from "react-bootstrap";

function FilterTab() {
  var county = [];
  if (Data != null) {
    Data.map((data) => {
      county.push(data.COUNTY);
    });
    var countyList = county.reduce(function (a, b) {
      if (a.indexOf(b) < 0) a.push(b);
      return a;
    }, []);
  }

  const CountyListItem = countyList.map((e, index) => {
    return <p key={index}>{e}</p>;
  });

  const CountyDropdownItems = countyList.map((e, index) => {
    return (
      <Dropdown.Item href="#" key={index}>
        {e}
      </Dropdown.Item>
    );
  });

  var state = [];
  if (Data != null) {
    Data.map((data) => {
      state.push(data.State);
    });
    var stateList = state.reduce(function (a, b) {
      if (a.indexOf(b) < 0) a.push(b);
      return a;
    }, []);
  }

  const StateListItem = stateList.map((e, index) => {
    return <p key={index}>{e}</p>;
  });

  const StateDropdownItems = stateList.map((e, index) => {
    return (
      <Dropdown.Item href="#" key={index}>
        {e}
      </Dropdown.Item>
    );
  });

  return (
    <div>
      <h2>Filter Items Here...</h2>
      <form action="/" method="get">
        <label htmlFor="header-search">
          <span className="visually-hidden">Search </span>
        </label>
        {/* <input type="text" id="header-search" placeholder="County" name="s" /> */}

        <Container>
          <Row>
            <Col>
              <input
                type="text"
                id="header-search"
                placeholder="Waste type"
                name="s"
              />
            </Col>
            <Col>
              <InputGroup className="mb-3" as={Col}>
                <DropdownButton
                  variant="outline-secondary"
                  title="County"
                  id="input-group-dropdown-1"
                >
                  {CountyDropdownItems}
                </DropdownButton>
              </InputGroup>
              <Col>
                <InputGroup className="mb-3" as={Col}>
                  <DropdownButton
                    variant="outline-secondary"
                    title="State"
                    id="input-group-dropdown-1"
                  >
                    {StateDropdownItems}
                  </DropdownButton>
                </InputGroup>
              </Col>
            </Col>
            <Col>
              <button className="search-btn" type="submit">
                Search
              </button>
            </Col>
          </Row>
        </Container>
        {/* <input
          type="text"
          id="header-search"
          placeholder="Waste type"
          name="s"
        />
        <InputGroup className="mb-3">
          <DropdownButton
            variant="outline-secondary"
            title="County"
            id="input-group-dropdown-1"
          >
            {DropdownItems}
          </DropdownButton>
        </InputGroup>

        <button className="search-btn" type="submit">
          Search
        </button> */}
        {CountyListItem}
      </form>
    </div>
  );
}

export default FilterTab;
