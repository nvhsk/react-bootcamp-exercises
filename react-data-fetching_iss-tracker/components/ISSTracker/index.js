// import { useEffect, useState } from "react";
import useSWR, { mutate } from "swr";
import Controls from "../Controls/index";
import Map from "../Map/index";

const URL = "https://api.wheretheiss.at/v1/satellites/25544";
const fetcher = (...args) => fetch(...args).then((res) => res.json());

export default function ISSTracker() {
  // const [coords, setCoords] = useState({
  // longitude: 0,
  // latitude: 0,
  // });

  // async function getISSCoords() {
  //   try {
  //     const response = await fetch(URL);
  //     if (response.ok) {
  //       const data = await response.json();
  //       setCoords({ longitude: data.longitude, latitude: data.latitude });
  //     }
  //   } catch (error) {
  //     console.error(error);
  //   }
  // }

  // useEffect(() => {
  //   const timer = setInterval(() => {
  //     getISSCoords();
  //   }, 5000);

  //   return () => {
  //     clearInterval(timer);
  //   };
  // }, []);

  const handleReload = () => {
    mutate(URL);
  };

  const { data, error } = useSWR(URL, fetcher, { refreshInterval: 5000 });

  if (error) return <div>failed to load</div>;
  if (!data) return <div>loading...</div>;

  return (
    <main>
      <Map longitude={data.longitude} latitude={data.latitude} />
      <Controls
        longitude={data.longitude}
        latitude={data.latitude}
        onReload={handleReload}
      />
    </main>
  );
}
