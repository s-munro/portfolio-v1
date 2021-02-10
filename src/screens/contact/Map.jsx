// import React, { useEffect } from "react";
// import "./Map.scss";
// import L from "leaflet";
// import {} from "mapbox-gl-leaflet";

// const Map = () => {
//   const coords = {
//     lat: 39.167629,
//     long: -86.5331,
//     zoom: 13,
//   };
//   let mapContainer;

//   useEffect(() => {
//     const map = L.map(mapContainer).setView(
//       [coords.lat, coords.long],
//       coords.zoom
//     );

//     // the attribution is required for the Geoapify Free tariff plan
//     map.attributionControl
//       .setPrefix("")
//       .addAttribution(
//         'Powered by <a href="https://www.geoapify.com/" target="_blank">Geoapify</a> | © OpenStreetMap <a href="https://www.openstreetmap.org/copyright" target="_blank">contributors</a>'
//       );

//     var myAPIKey = "084da157f8ee4e7ebb13730fe5d0fee3";
//     const mapStyle = "https://maps.geoapify.com/v1/styles/positron/style.json";

//     L.mapboxGL({
//       style: `${mapStyle}?apiKey=${myAPIKey}`,
//       accessToken:
//         "pk.eyJ1Ijoicy1tdW5ybyIsImEiOiJja2t0YW9oeDcxOTNyMnBxa2Z0dmJ6am03In0.rR-Iz4vGW9vxk7N0qPEKcQ",
//     }).addTo(map);

//     L.circle([coords.lat, coords.long], {
//       color: "#2f294f",
//       fillColor: "#2f294f",
//       fillOpacity: 0.1,
//       radius: 1000,
//     }).addTo(map);
//   }, [coords.lat, coords.long, coords.zoom, mapContainer]);

//   return (
//     <div className="map-container" ref={(gl) => (mapContainer = gl)}></div>
//   );
// };

// export default Map;
