import React from "react";
import FmdGoodIcon from "@mui/icons-material/FmdGood";

const LocationMarker = ({ lat, lon, onClick }) => {
  return (
    <div className="LocationMarker" onClick={onClick}>
      <svg data-testid="FmdGoodIcon"></svg>
      <FmdGoodIcon className="location-icon" />
    </div>
  );
};

export default LocationMarker;
