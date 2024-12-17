"use client";

import React, { useState, useEffect, useRef } from "react";
import mapboxgl from "mapbox-gl";
import axios from "axios";
import "mapbox-gl/dist/mapbox-gl.css";

const MAPBOX_ACCESS_TOKEN = process.env.NEXT_PUBLIC_MAPBOX_ACCESS_TOKEN;
const OPENROUTE_API_URL =
  "https://api.openrouteservice.org/v2/directions/driving-car/";

const MapWithRoute = ({ startingPoint, destination }) => {
  const [map, setMap] = useState(null);
  const mapContainer = useRef(null); // To reference the map container

  useEffect(() => {
    // Only proceed if both startingPoint and destination are provided
    if (startingPoint && destination) {
      fetchCoordinates(startingPoint, destination);
    }
  }, [startingPoint, destination]);

  const fetchCoordinates = async (postalCode1, postalCode2) => {
    const geocodeUrl = `https://api.mapbox.com/geocoding/v5/mapbox.places/`;
    try {
      const coordinates1 = await fetch(
        `${geocodeUrl}${postalCode1}.json?access_token=${MAPBOX_ACCESS_TOKEN}`
      )
        .then((res) => res.json())
        .then((data) => data.features[0]?.geometry.coordinates);
      const coordinates2 = await fetch(
        `${geocodeUrl}${postalCode2}.json?access_token=${MAPBOX_ACCESS_TOKEN}`
      )
        .then((res) => res.json())
        .then((data) => data.features[0]?.geometry.coordinates);

      console.log("Coordinates 1:", coordinates1);
      console.log("Coordinates 2:", coordinates2);

      if (coordinates1 && coordinates2) {
        plotRoute(coordinates1, coordinates2);
      } else {
        alert("Invalid postal codes or no results found.");
      }
    } catch (error) {
      console.error("Error fetching coordinates:", error);
    }
  };

  const plotRoute = async (coordinates1, coordinates2) => {
    if (!map) return;

    // Fetch the route from OpenRouteService API
    const route = await getRoute(coordinates1, coordinates2);
    console.log("Route coordinates:", route);

    if (route.length === 0) {
      console.error("No route data available.");
      return;
    }

    // Add markers at the starting and ending points
    new mapboxgl.Marker().setLngLat(coordinates1).addTo(map);
    new mapboxgl.Marker().setLngLat(coordinates2).addTo(map);

    // Add the route line (pink outline)
    if (map.getSource("route")) {
      map.getSource("route").setData({
        type: "FeatureCollection",
        geometry: {
          type: "LineString",
          coordinates: route,
        },
      });
      console.log("Route data added to map");
    } else {
      console.error("Route source not found.");
    }
  };

  const getRoute = async (start, end) => {
    try {
      const response = await axios.get(OPENROUTE_API_URL, {
        params: {
          start: `${start[0]},${start[1]}`,
          end: `${end[0]},${end[1]}`,
          api_key: process.env.NEXT_PUBLIC_OPENROUTE_API_KEY, // Ensure API key is correct
        },
      });

      console.log("Route response:", response.data);

      const route = response.data.routes[0]?.geometry?.coordinates || [];
      return route;
    } catch (error) {
      console.error("Error fetching the route:", error);
      return [];
    }
  };

  useEffect(() => {
    mapboxgl.accessToken = MAPBOX_ACCESS_TOKEN;

    // Initialize the map
    const newMap = new mapboxgl.Map({
      container: mapContainer.current,
      style: "mapbox://styles/mapbox/streets-v11", // Change this to your preferred style
      center: [103.8198, 1.3521], // Default coordinates (Singapore)
      zoom: 13,
    });

    newMap.on("load", () => {
      // Ensure that the map is loaded
      console.log("Map loaded");
      // Add an empty source for the route line
      newMap.addSource("route", {
        type: "geojson",
        data: {
          type: "FeatureCollection",
          features: [],
        },
      });

      // Add the route layer
      newMap.addLayer({
        id: "route",
        type: "line",
        source: "route",
        paint: {
          "line-color": "#FF69B4", // Bright pink color
          "line-width": 6,
          "line-opacity": 1,
        },
      });

      setMap(newMap);
    });

    return () => newMap.remove();
  }, []);

  return (
    <div
      ref={mapContainer}
      style={{
        height: "500px",
        width: "100%",
        marginTop: "7px",
      }}
    />
  );
};

export default MapWithRoute;
