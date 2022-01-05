import React from "react";
import { useState } from "react";
import { Data } from "../Data/Data2";
import LocationMarker from "./LocationMarker";
import LocationInfo from "./LocationInfo";

import GoogleMapReact from "google-map-react";

const Map = () => {
  const [locationInf, setLocationInf] = useState(null);

  const defaultProps = {
    center: {
      lat: 39.3823,
      lng: 74.6166,
    },
    zoom: 11,
    visibleRowFirst: -1,
    visibleRowLast: -1,
    hoveredRowIndex: -1,
  };

  const Locations = Data.map((data, index) => {
    // console.log(data);
    return (
      <LocationMarker
        key={index}
        lat={data.LATITUDE}
        lng={data.LONGITUDE}
        onClick={() =>
          setLocationInf({
            State: data.State,
            LOCATION: data.LOCATION,
            COUNTY: data.COUNTY,
            FACILITY_NAME: data.FACILITY_NAME,
            Phone: data.Phone,
            NJEMS_PI: data.NJEMS_PI,
            WASTE_TYPE: data.WASTE_TYPE,
            MUNICIPALITY: data.MUNICIPALITY,
          })
        }
      />
    );
  });

  return (
    <>
      <div style={{ height: "100vh", width: "100%" }}>
        <GoogleMapReact
          bootstrapURLKeys={{ key: "AIzaSyCc0LkSTy393asVtL5zXYxRdFtLhIoQ4EY" }}
          defaultCenter={defaultProps.center}
          defaultZoom={defaultProps.zoom}
        >
          {Locations}
        </GoogleMapReact>
        {locationInf && <LocationInfo info={locationInf} />}
      </div>
    </>
  );
};

export default Map;
