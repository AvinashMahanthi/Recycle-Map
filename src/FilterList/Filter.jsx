import { React, useState } from "react";
import { Data } from "../Data/Data2";
import LocationBox from "../Map/LocationBox";

import {
  excludeColumns,
  excludeColumnsForCounty,
  excludeColumnsForState,
} from "./HardCodedData";

import {
  Dropdown,
  DropdownButton,
  InputGroup,
  Container,
  Col,
  Row,
} from "react-bootstrap";

function FilterTab() {
  const [searchState, setSearchState] = useState("");
  const [searchCounty, setSearchCounty] = useState("");
  const [searchWaste, setSearchWaste] = useState("");
  const [d, setD] = useState(Data);

  // To get all the County items
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
      <Dropdown.Item href="#" key={index} value={e}>
        {e}
      </Dropdown.Item>
    );
  });

  // To get all the State items
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
      <Dropdown.Item href="#" key={index} value={e}>
        {e}
      </Dropdown.Item>
    );
  });

  const LocationList = Data.map((data, index) => {
    return (
      <LocationBox
        key={index}
        State={data.State}
        LOCATION={data.LOCATION}
        COUNTY={data.COUNTY}
        FACILITY_NAME={data.FACILITY_NAME}
        Phone={data.Phone}
        NJEMS_PI={data.NJEMS_PI}
        WASTE_TYPE={data.WASTE_TYPE}
        MUNICIPALITY={data.MUNICIPALITY}
      />
    );
  });

  // handle change event of search input
  const handleChange = (value) => {
    // setD(value);
    setSearchWaste(value);
    filterData(value);
  };

  const handleCountyChange = (value) => {
    setSearchCounty(value);
    filterCounty(value);
  };
  const handleStateChange = (value) => {
    setSearchState(value);
    filterState(value);
  };

  // filter records by search text
  const filterData = (value) => {
    const lowercasedValue = value.toLowerCase().trim();
    if (lowercasedValue === "") setD(Data);
    else {
      const filteredData = Data.filter((item) => {
        return Object.keys(item).some((key) =>
          excludeColumns.includes(key)
            ? false
            : item[key].toString().toLowerCase().includes(lowercasedValue)
        );
      });
      setD(filteredData);
    }
  };

  // filter County records by search text
  const filterCounty = (value) => {
    const lowercasedValue = value.toLowerCase().trim();
    if (lowercasedValue === "") setD(Data);
    else {
      const filteredCounty = Data.filter((item) => {
        return Object.keys(item).some((key) =>
          excludeColumnsForCounty.includes(key)
            ? false
            : item[key].toString().toLowerCase().includes(lowercasedValue)
        );
      });
      setD(filteredCounty);
    }
  };

  // filter State records by search text
  const filterState = (value) => {
    const lowercasedValue = value.toLowerCase().trim();
    if (lowercasedValue === "") setD(Data);
    else {
      const filteredState = Data.filter((item) => {
        return Object.keys(item).some((key) =>
          excludeColumnsForState.includes(key)
            ? false
            : item[key].toString().toLowerCase().includes(lowercasedValue)
        );
      });
      setD(filteredState);
    }
  };

  return (
    <div>
      <h5 className="filter-header">Filter Here...</h5>
      <Container>
        <Row>
          <Col>
            <input
              type="text"
              id="header-search"
              placeholder="Search Waste Type"
              value={searchWaste}
              onChange={(e) => handleChange(e.target.value)}
            />
          </Col>
          <Col>
            <InputGroup className="mb-3" as={Col}>
              <DropdownButton
                variant="outline-secondary"
                title="County"
                id="input-group-dropdown-1"
                name="CountyList"
                value={searchCounty}
                onChange={(event) => {
                  console.log("County log:" + event.target.value);
                  handleCountyChange(event.target.value);
                }}
              >
                {CountyDropdownItems}
              </DropdownButton>
              <DropdownButton
                variant="outline-secondary"
                title="State"
                id="input-group-dropdown-1"
                className="mx-2"
                value={searchState}
                name="StateList"
                onChange={(event) => {
                  console.log("state log:" + event.target.value);
                  handleStateChange(event.target.value);
                }}
              >
                {StateDropdownItems}
              </DropdownButton>
            </InputGroup>
            {/* <Col>
                <InputGroup as={Col}>
                  <DropdownButton
                    variant="outline-secondary"
                    title="State"
                    id="input-group-dropdown-1"
                    // onChange={(event) => {
                    //   setSearchState(event.target.value);
                    // }}
                  >
                    {StateDropdownItems}
                  </DropdownButton>
                </InputGroup>
              </Col> */}
          </Col>
          {/* <Col> */}
          {/* <button className="search-btn" type="submit">
                Search
              </button> */}
          {/* </Col> */}
        </Row>
      </Container>
      {/* {CountyListItem} */}
      <div className="box-container">
        {d.map((data, index) => {
          return (
            <LocationBox
              key={index}
              State={data.State}
              LOCATION={data.LOCATION}
              COUNTY={data.COUNTY}
              FACILITY_NAME={data.FACILITY_NAME}
              Phone={data.Phone}
              NJEMS_PI={data.NJEMS_PI}
              WASTE_TYPE={data.WASTE_TYPE}
              MUNICIPALITY={data.MUNICIPALITY}
            />
          );
        })}
      </div>
    </div>
  );
}

export default FilterTab;
