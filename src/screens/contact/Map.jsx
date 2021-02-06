import React, { useState, useEffect } from "react";
import "./Map.scss";
import L from "leaflet";
import {} from "mapbox-gl-leaflet";

const Map = () => {
  const [coords, setCoords] = useState({
    lat: 39.1653,
    long: -86.5263857,
    zoom: 15,
  });
  let mapContainer;

  useEffect(() => {
    const map = L.map(mapContainer).setView(
      [coords.lat, coords.long],
      coords.zoom
    );

    // the attribution is required for the Geoapify Free tariff plan
    map.attributionControl
      .setPrefix("")
      .addAttribution(
        'Powered by <a href="https://www.geoapify.com/" target="_blank">Geoapify</a> | © OpenStreetMap <a href="https://www.openstreetmap.org/copyright" target="_blank">contributors</a>'
      );

    var myAPIKey = "084da157f8ee4e7ebb13730fe5d0fee3";
    const mapStyle = "https://maps.geoapify.com/v1/styles/positron/style.json";

    const gl = L.mapboxGL({
      style: `${mapStyle}?apiKey=${myAPIKey}`,
      accessToken:
        "pk.eyJ1Ijoicy1tdW5ybyIsImEiOiJja2t0YW9oeDcxOTNyMnBxa2Z0dmJ6am03In0.rR-Iz4vGW9vxk7N0qPEKcQ",
    }).addTo(map);
  }, [coords.lat, coords.long, coords.zoom, mapContainer]);

  return (
    <div className="map-container" ref={(el) => (mapContainer = el)}></div>
  );
};

export default Map;
