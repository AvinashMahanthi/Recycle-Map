const LocationInfo = ({ info }) => {
  return (
    <div className="location-info">
      <h3>Location Info</h3>
      <ul>
        <li>
          State: <strong>{info.State}</strong>
        </li>
        <li>
          COUNTY: <strong>{info.COUNTY}</strong>
        </li>
        <li>
          LOCATION: <strong>{info.LOCATION}</strong>
        </li>
        <li>
          FACILITY NAME: <strong>{info.FACILITY_NAME}</strong>
        </li>
        <li>
          Phone: <strong>{info.Phone}</strong>
        </li>
        <li>
          NJEMS_PI: <strong>{info.NJEMS_PI}</strong>
        </li>
        <li>
          WASTE_TYPE: <strong>{info.WASTE_TYPE}</strong>
        </li>
        <li>
          MUNICIPALITY: <strong>{info.MUNICIPALITY}</strong>
        </li>
      </ul>
    </div>
  );
};

export default LocationInfo;
