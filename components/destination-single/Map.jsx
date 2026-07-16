import dynamic from "next/dynamic";
import { useEffect, useState } from "react";

// Import map dynamically to avoid SSR
const DynamicMap = dynamic(() => import("../../components/common/MapView"), {
  ssr: false,
});

const Map = ({ destination }) => {
  const [lat, setLat] = useState(null);
  const [lng, setLng] = useState(null);
  const [name, setName] = useState(null);

  useEffect(() => {
    if (destination != null) {
      if (destination.lat && destination.lng) {
        setLat(destination.lat);
        setLng(destination.lng);
        setName(destination.name);
      }
    }
  }, [destination]);
  return (
    <div className="relative w-full">
      
      <DynamicMap
        lat={lat}
        lng={lng}
        name={name}
      />
    </div>
  );
};

export default Map;
