import { useEffect, useState } from "react";
import BottomNav from "../components/BottomNav";

function Pharmacy() {
const [pharmacies, setPharmacies] = useState([]);
const [loading, setLoading] = useState(true);

useEffect(() => {
navigator.geolocation.getCurrentPosition(
async (position) => {
const lat = position.coords.latitude;
const lon = position.coords.longitude;


    const query = `
      [out:json];
      (
        node["amenity"="pharmacy"](around:15000,${lat},${lon});
        way["amenity"="pharmacy"](around:15000,${lat},${lon});
        relation["amenity"="pharmacy"](around:15000,${lat},${lon});
      );
      out center;
    `;

    try {
      const response = await fetch(
        "https://overpass-api.de/api/interpreter",
        {
          method: "POST",
          body: query,
        }
      );

      const data = await response.json();

      console.log("Pharmacy Data:", data);

      const formatted = data.elements.map((item) => ({
        id: item.id,
        name: item.tags?.name || "Unnamed Pharmacy",
        lat: item.lat || item.center?.lat,
        lon: item.lon || item.center?.lon,
      }));

      setPharmacies(formatted);
    } catch (error) {
      console.log("Error:", error);
    }

    setLoading(false);
  },
  () => {
    setLoading(false);
  }
);


}, []);

if (loading) {
return ( <div className="min-h-screen bg-[#F8D7DD] flex justify-center items-center"> <h2 className="text-xl font-bold">
Loading Pharmacies... </h2> </div>
);
}

return ( <div className="min-h-screen bg-[#F8D7DD] p-4"> <div className="max-w-md mx-auto pb-24">

```
    <h1 className="text-3xl font-bold text-center mb-6">
      💊 Nearby Pharmacies
    </h1>

    {pharmacies.length === 0 && (
      <div className="bg-white rounded-3xl p-5 shadow-sm text-center">
        No Pharmacies Found Nearby
      </div>
    )}

    <div className="space-y-4">
      {pharmacies.map((pharmacy) => (
        <div
          key={pharmacy.id}
          className="bg-white rounded-3xl p-5 shadow-sm"
        >
          <h2 className="font-bold text-lg">
            💊 {pharmacy.name}
          </h2>

          <button
            onClick={() =>
              window.open(
                `https://www.google.com/maps/search/?api=1&query=${pharmacy.lat},${pharmacy.lon}`,
                "_blank"
              )
            }
            className="
              mt-3
              w-full
              bg-[#E84A67]
              text-white
              py-2
              rounded-xl
              font-semibold
            "
          >
            Open in Maps
          </button>
        </div>
      ))}
    </div>

    <BottomNav />

  </div>
</div>


);
}

export default Pharmacy;
