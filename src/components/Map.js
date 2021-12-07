import React from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import L from "leaflet";

L.Icon.Default.imagePath = "https://unpkg.com/leaflet@1.5.0/dist/images/";

const Map = () => {
  // const data = [data.location.lat, data.location.lng]
  const position = [52.52859524351253, 13.40991380106977];

  return (
    <div>
      <MapContainer
        id="map"
        // center={[52.562861377240424, 13.577346435890108]}
        center={position}
        zoom={12}
        zoomControl={false}
        style={{ height: "40vh", width: "100%" }}
      >
        <TileLayer
          attribution='&amp;copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />

        <Marker position={position}>
          <Popup>Sportshop "Camping"</Popup>
        </Marker>
      </MapContainer>
    </div>
  );
};

export default Map;
