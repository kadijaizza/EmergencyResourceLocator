import axios from "axios";

export const fetchHospitals = async (lat, lon) => {
  const query = `
    [out:json];
    (
      node["amenity"="hospital"](around:8000,${lat},${lon});
      way["amenity"="hospital"](around:8000,${lat},${lon});
      relation["amenity"="hospital"](around:8000,${lat},${lon});
    );
    out center;
  `;

  const res = await axios.post(
    "https://overpass-api.de/api/interpreter",
    query,
    {
      headers: {
        "Content-Type": "text/plain",
      },
    }
  );

  return res.data.elements;
};