export const getLocationName = async (lat, lon) => {
  const response = await fetch(
    `https://nominatim.openstreetmap.org/reverse?format=json&lat=${lat}&lon=${lon}`
  );

  const data = await response.json();

  const city =
  data.address?.city ||
  data.address?.town ||
  data.address?.village ||
  "";

const state =
  data.address?.state || "";

return `${city}, ${state}`;
};