import React, { useEffect, useRef, useState } from 'react';
import { Loader } from '@googlemaps/js-api-loader';

interface MapProps {
  addresses: string[];
}

const Map: React.FC<MapProps> = ({ addresses }) => {
  const mapRef = useRef<HTMLDivElement>(null);
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

    const map = new google.maps.Map(mapRef.current, {
      center: { lat: 0, lng: 0 },
      zoom: 2,
    });

    const bounds = new google.maps.LatLngBounds();
    const geocoder = new google.maps.Geocoder();
    const directionsService = new google.maps.DirectionsService();
    const directionsRenderer = new google.maps.DirectionsRenderer({
      map: map,
      suppressMarkers: true // We'll add our own markers
    });

    const waypoints = addresses.slice(1, -1).map(address => ({
      location: address,
      stopover: true
    }));

    const processGeocodeResults = (results: google.maps.GeocoderResult[], status: google.maps.GeocoderStatus, index: number) => {
      if (status === 'OK' && results && results[0]) {
        const position = results[0].geometry.location;
        new google.maps.Marker({
          map,
          position,
          label: `${index + 1}`,
        });
        bounds.extend(position);
        map.fitBounds(bounds);

        // If all addresses have been geocoded, calculate the route
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
    };

    addresses.forEach((address, index) => {
      geocoder.geocode({ address }, (results, status) => 
        processGeocodeResults(results, status, index)
      );
    });
  }, [mapLoaded, addresses]);

  return <div ref={mapRef} style={{ width: '100%', height: '100%' }} />;
};

export default Map;
