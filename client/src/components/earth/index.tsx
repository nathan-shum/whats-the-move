import React, { useEffect, useRef, useState } from 'react';
import { Loader } from '@googlemaps/js-api-loader';

export interface MapProps {
  addresses: string[];
  isEarthView: boolean;
  selectedActivity: {
    Address: string;
    Location: string;
  } | null;
}

const Map: React.FC<MapProps> = ({ addresses, isEarthView, selectedActivity }) => {
  const mapRef = useRef<HTMLDivElement>(null);
  const [map, setMap] = useState<google.maps.Map | null>(null);
  const [streetView, setStreetView] = useState<google.maps.StreetViewPanorama | null>(null);
  const [mapLoaded, setMapLoaded] = useState(false);

  useEffect(() => {
    const loader = new Loader({
      apiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_KEY as string,
      version: 'weekly',
      libraries: ['places']
    });

    loader.load().then(() => {
      setMapLoaded(true);
    }).catch((error) => {
      console.error("Error loading Google Maps:", error);
    });
  }, []);

  useEffect(() => {
    if (!mapLoaded || !addresses || addresses.length === 0 || !mapRef.current) return;

    const newMap = new google.maps.Map(mapRef.current, {
      center: { lat: 0, lng: 0 },
      zoom: 2,
      mapTypeId: isEarthView ? 'satellite' : 'roadmap',
      tilt: isEarthView ? 45 : 0,
    });

    const newStreetView = new google.maps.StreetViewPanorama(mapRef.current, {
      visible: false,
      enableCloseButton: true,
    });

    newMap.setStreetView(newStreetView);

    setMap(newMap);
    setStreetView(newStreetView);

    const bounds = new google.maps.LatLngBounds();
    const geocoder = new google.maps.Geocoder();
    const directionsService = new google.maps.DirectionsService();
    const directionsRenderer = new google.maps.DirectionsRenderer({
      map: newMap,
      suppressMarkers: true
    });

    const waypoints = addresses.slice(1, -1).map(address => ({
      location: address,
      stopover: true
    }));

    addresses.forEach((address, index) => {
      geocoder.geocode({ address }, (results, status) => {
        if (status === 'OK' && results && results[0]) {
          const position = results[0].geometry.location;
          new google.maps.Marker({
            map: newMap,
            position,
            label: `${index + 1}`,
          });
          bounds.extend(position);
          newMap.fitBounds(bounds);

          if (index === addresses.length - 1) {
            directionsService.route({
              origin: addresses[0],
              destination: addresses[addresses.length - 1],
              waypoints: waypoints,
              travelMode: google.maps.TravelMode.DRIVING
            }, (result, status) => {
              if (status === 'OK' && result) {
                directionsRenderer.setDirections(result);
              }
            });
          }
        } else {
          console.error(`Geocoding failed for address: ${addresses[index]}`, status);
        }
      });
    });
  }, [mapLoaded, addresses, isEarthView]);

  useEffect(() => {
    if (map && streetView && selectedActivity) {
      const geocoder = new google.maps.Geocoder();
      geocoder.geocode({ address: selectedActivity.Address }, (results, status) => {
        if (status === 'OK' && results && results[0]) {
          const position = results[0].geometry.location;
          if (isEarthView) {
            streetView.setPosition(position);
            streetView.setVisible(true);
          } else {
            map.setCenter(position);
            map.setZoom(18);
          }
        }
      });
    }
  }, [map, streetView, selectedActivity, isEarthView]);

  useEffect(() => {
    if (map) {
      map.setMapTypeId(isEarthView ? 'satellite' : 'roadmap');
      map.setTilt(isEarthView ? 45 : 0);
    }
  }, [isEarthView, map]);

  return <div ref={mapRef} style={{ width: '100%', height: '100%' }} />;
};

export default Map;
