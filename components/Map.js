import { useState } from "react";
import ReactMapGl, { Marker, Popup } from "react-map-gl";
import { getCenter } from "geolib";
import "mapbox-gl/dist/mapbox-gl.css";

function Map({ searchResults }) {
  const [selectedLocation, setSelectedLocation] = useState({});

  const coordinates = searchResults.map((result) => ({
    longitude: result.long,
    latitude: result.lat,
  }));

  const center = getCenter(coordinates);

  const [viewport, setViewPort] = useState({
    width: "100%",
    height: "100%",
    longitude: center.longitude,
    latitude: center.latitude,
    zoom: 11,
  });

  console.log(selectedLocation);

  return (
    <ReactMapGl
      mapStyle="mapbox://styles/aktasutku/cl65h6ae5001214mur9fvcpw9"
      mapboxAccessToken={process.env.mapbox_key}
      {...viewport}
      onMove={(evt) => setViewPort(evt.viewState)}
    >
      {searchResults.map((result) => (
        <div key={result.long}>
          <Marker
            longitude={result.long}
            latitude={result.lat}
            anchor="top"
            offsetLeft={-20}
            offsetTop={-10}
          >
            <p
              role="img"
              onClick={() => setSelectedLocation(result)}
              className="cursor-pointer text-2xl animate-bounce"
              aria-label="push-pin"
            >
              📍
            </p>
          </Marker>

          {/* Popup if we click on markup */}
          {selectedLocation.long === result.long && (
            <Popup
              longitude={result.long}
              latitude={result.lat}
              anchor="bottom"
              closeOnClick={false}
              onClose={() => setSelectedLocation({})}
            >
              {result.title}
            </Popup>
          )}
        </div>
      ))}
    </ReactMapGl>
  );
}

export default Map;
