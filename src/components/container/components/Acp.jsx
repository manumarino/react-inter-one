import React, { useState, useEffect } from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import axios from 'axios';



function Acp() {

  const [avisos, setAvisos] = useState([]);

  useEffect(() => {
    const url = 'https://ssl.smn.gob.ar/feeds/CAP/avisocortoplazo/rss_acpCAP.xml';
    axios.get(url)
      .then(response => {
        const parser = new DOMParser();
        const xmlDoc = parser.parseFromString(response.data, 'text/xml');
        const items = xmlDoc.getElementsByTagName('item');
        const avisos = Array.from(items).map(item => {
          const title = item.getElementsByTagName('title')[0].textContent;
          const description = item.getElementsByTagName('description')[0].textContent;
          const coordinates = item.getElementsByTagName('georss:point')[0].textContent.split(' ');
          const lat = parseFloat(coordinates[0]);
          const lng = parseFloat(coordinates[1]);
          return { title, description, lat, lng };
        });
        setAvisos(avisos);
      })
      .catch(error => console.log(error));
  }, []);

  return (
    <MapContainer center={[-34.603722, -58.381592]} zoom={10}>
      <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
      {avisos.map((aviso, index) => (
        <Marker key={index} position={[aviso.lat, aviso.lng]}>
          <Popup>
            <h3>{aviso.title}</h3>
            <p>{aviso.description}</p>
          </Popup>
        </Marker>
      ))}
    </MapContainer>
  );
}

export default Acp;
