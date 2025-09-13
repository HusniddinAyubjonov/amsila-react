import React from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import style from "./map.module.css";
import icon from "../../icon/Frame.svg";
import icon2 from "../../icon/Frame-1.svg";
import icon3 from "../../icon/Frame-2.svg";
import icon4 from "../../icon/Frame-3.svg";

// 📍 Координаты
const position: [number, number] = [38.563046, 68.733881];

// 🧷 Кастомная иконка
const customIcon = L.icon({
  iconUrl: "/src/shared/icon/map-amsila-avatar.svg", // путь к SVG
  iconSize: [38, 38],
  iconAnchor: [19, 38],
  popupAnchor: [0, -38],
});

const MapComponent: React.FC = () => {
  return (
    <div className={style.container2}>
      {/* Блок с информацией */}
      <div className={style.infoBox}>
        <div className={style.title}>
          Точка встречи <br />
          <mark>с вдохновением</mark>
        </div>
        <div className={style.contact}>
          г. Душанбе, улица Абдуллабекова, 5
          <br />
          <a href="tel:+992206116666">+992 206 11 66-66</a>
          <br />
          <a href="mailto:info@amsila.tj">info@amsila.tj</a>
        </div>
        <div className={style.icons}>
          <a
            href="https://www.facebook.com/mm.amsila?mibextid=ZbWKwL"
            target="_blank"
          >
            <img src={icon4} alt="Facebook" />
          </a>
          <a
            href="https://www.instagram.com/mm.amsila?igsh=ejdkN2hmemJscDhn"
            target="_blank"
          >
            <img src={icon2} alt="Instagram" />
          </a>
          <a href="https://www.behance.net/khayubjono5c7d" target="_blank">
            <img src={icon3} alt="Behance" />
          </a>
          <a href="https://pin.it/2zByzdyfN" target="_blank">
            <img src={icon} alt="Pinterest" />
          </a>
        </div>
      </div>

      {/* Карта */}
      <MapContainer className={style.map} center={position} zoom={16}>
        <TileLayer url="https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png" />
        <Marker position={position} icon={customIcon}>
          <Popup>
            г. Душанбе, ул. Абдуллабекова, 5
            <br />
            Почтовый индекс: 734000
          </Popup>
        </Marker>
      </MapContainer>
    </div>
  );
};

export default MapComponent;
