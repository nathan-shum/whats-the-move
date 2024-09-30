import React, { useEffect, useRef } from 'react';
import { Loader } from '@googlemaps/js-api-loader';

const GoogleMapsPlaces = () => {
  const mapRef = useRef(null);
  const markerRef = useRef(null);
  const placePickerRef = useRef(null);

  useEffect(() => {
    const loader = new Loader({
      apiKey: process.env.GOOGLE_MAPS_KEY,
      version: 'weekly',
      libraries: ['places']
    });

    loader.load().then(() => {
      const init = async () => {
        await customElements.whenDefined('gmp-map');
        const map = mapRef.current;
        const marker = markerRef.current;
        const placePicker = placePickerRef.current;

        if (!map || !marker || !placePicker) return;

        const infowindow = new window.google.maps.InfoWindow();

        map.innerMap.setOptions({
          mapTypeControl: false
        });

        placePicker.addEventListener('gmpx-placechange', () => {
          const place = placePicker.value;
          if (!place.geometry?.location) {
            window.alert("No details available for input: '" + place.name + "'");
            infowindow.close();
            marker.position = null;
            return;
          }

          if (place.geometry.viewport) {
            map.innerMap.fitBounds(place.geometry.viewport);
          } else {
            map.center = `${place.geometry.location.lat()},${place.geometry.location.lng()}`;
            map.zoom = '17';
          }

          marker.position = place.geometry.location.toJSON();
          infowindow.setContent(
            `<strong>${place.name}</strong><br>
             <span>${place.formatted_address}</span>`
          );
          infowindow.open(map.innerMap, marker);
        });
      };

      init();
    });
  }, []);

  return (
    <div style={{ height: '100%', width: '100%' }}>
      <gmp-map
        ref={mapRef}
        center="40.749933,-73.98633"
        zoom="13"
        map-id="DEMO_MAP_ID"
      >
        <div slot="control-block-start-inline-start" style={{ padding: '20px' }}>
          <gmpx-place-picker ref={placePickerRef} placeholder="Enter an address" />
        </div>
        <gmp-advanced-marker ref={markerRef} />
      </gmp-map>
    </div>
  );
};

export default GoogleMapsPlaces;
