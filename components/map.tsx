'use client'

import React from 'react'
import L from 'leaflet'

import { MapContainer,Marker,TileLayer,Popup } from 'react-leaflet'

import 'leaflet/dist/leaflet.css'
import markerIcon2x from 'leaflet/dist/images/marker-icon-2x.png'
import markerIcon from 'leaflet/dist/images/marker-icon.png'
import markerShadow from 'leaflet/dist/images/marker-shadow.png'


//@ts-ignore
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconUrl:markerIcon.src,
  iconRetinaUrl:markerIcon2x.src,
  shadowUrl:markerShadow.src
})



const Map = () => {
  const center =[-1.280884120830398,36.82291875674422]
  return (
   <MapContainer
    center={center as L.LatLngExpression}
    zoom={13}
    scrollWheelZoom={false}
    style={{ width: '100%', height: '500px',borderRadius:"25px" }}
   >
     <TileLayer
      url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
    />
           <Marker position={center as L.LatLngExpression}>
        <Popup>
          <p className=' font-semibold text-xl text-sky-300 italic font-mono'>
          Africom Media LTD
          <br /> Located along Kilome Road
            </p>
        </Popup>
      </Marker>
      

   </MapContainer>
  )
}

export default Map