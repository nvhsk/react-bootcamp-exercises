import { useEffect, useState } from "react";
import Controls from "./components/Controls";
import Map from "./components/Map";
import "./styles.css";

export default function App() {
  const [coords, setCoords] = useState({
    longitude: 0,
    latitude: 0,
  });

  useEffect(() => {
    async function getISSCoords() {
      const response = await fetch(
        "https://api.wheretheiss.at/v1/satellites/25544"
      );
      const fetchedISSCoords = await response.json();

      console.log(fetchedISSCoords);
      setCoords(fetchedISSCoords);
    }
    getISSCoords();

    const interval = setInterval(getISSCoords, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <main>
      <Map longitude={coords.longitude} latitude={coords.latitude} />
      <Controls
        longitude={coords.longitude}
        latitude={coords.latitude}
        onRefresh={useEffect.getISSCoords}
      />
    </main>
  );
}
