import React from "react";

const LocationBox = ({
  State,
  COUNTY,
  LOCATION,
  FACILITY_NAME,
  Phone,
  NJEMS_PI,
  WASTE_TYPE,
  MUNICIPALITY,
}) => {
  return (
    <div className="location-box">
      <ul>
        <li>
          State: <strong>{State}</strong>
        </li>
        <li>
          COUNTY: <strong>{COUNTY}</strong>
        </li>
        <li>
          LOCATION: <strong>{LOCATION}</strong>
        </li>
        <li>
          FACILITY NAME: <strong>{FACILITY_NAME}</strong>
        </li>
        <li>
          Phone: <strong>{Phone}</strong>
        </li>
        <li>
          NJEMS_PI: <strong>{NJEMS_PI}</strong>
        </li>
        <li>
          WASTE_TYPE: <strong>{WASTE_TYPE}</strong>
        </li>
        <li>
          MUNICIPALITY: <strong>{MUNICIPALITY}</strong>
        </li>
      </ul>
    </div>
  );
};

export default LocationBox;
