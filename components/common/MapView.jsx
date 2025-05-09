"use client";

import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";
import { useEffect } from "react";

// Fix marker icon paths (Leaflet defaults break in Next.js)
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: "/leaflet/marker-icon-2x-red.png",
  iconUrl: "/leaflet/marker-icon-red.png",
  shadowUrl: "/leaflet/marker-shadow.png",
});

const MapView = ({ lat, lng, name }) => {
  
  return lat && lng ? (
    <MapContainer
      key={`${lat}-${lng}`}
      center={[lat, lng]}
      zoom={8}
      scrollWheelZoom={false}
      style={{
        height: "300px",
        width: "100%",
        borderRadius: "8px",
        zIndex: 1,
      }}
    >
      <TileLayer
        attribution='&copy; OpenStreetMap contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Marker position={[lat, lng]}>
        <Popup>{name}</Popup>
      </Marker>
    </MapContainer>
  ) : (
    <div>Loading map...</div>
  );  
};

export default MapView;
