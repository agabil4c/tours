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
      // Assume you're selecting the first destination just for demonstration
      //const { lat, lng } = destination[0]; 
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
        //lat={-1.4061} lng={35.0386} name="Maasai Mara" 
        lat={lat}
        lng={lng}
        name={name}
      />
    </div>
  );
};

export default Map;
