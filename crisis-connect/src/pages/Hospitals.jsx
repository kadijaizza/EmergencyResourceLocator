import { useEffect, useState } from "react";
import { fetchHospitals } from "../services/overpassApi";
import BottomNav from "../components/BottomNav";

function Hospitals() {
const [hospitals, setHospitals] = useState([]);
const [loading, setLoading] = useState(true);

useEffect(() => {
navigator.geolocation.getCurrentPosition(
async (position) => {
const lat = position.coords.latitude;
const lon = position.coords.longitude;


    try {
      const data = await fetchHospitals(lat, lon);

      const formatted = data.map((item) => ({
        id: item.id,
        name: item.tags?.name || "Unnamed Hospital",
        lat: item.lat || item.center?.lat,
        lon: item.lon || item.center?.lon,
      }));

      setHospitals(formatted);
    } catch (error) {
      console.log(error);
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
Loading Hospitals... </h2> </div>
);
}

return ( <div className="min-h-screen bg-[#F8D7DD] p-4"> <div className="max-w-md mx-auto pb-24">

```
    <h1 className="text-3xl font-bold text-center mb-6">
      Nearby Hospitals
    </h1>

    <div className="space-y-4">
      {hospitals.map((hospital) => (
        <div
          key={hospital.id}
          className="bg-white rounded-3xl p-5 shadow-sm"
        >
          <h2 className="font-bold text-lg">
            🏥 {hospital.name}
          </h2>

          <button
            onClick={() =>
              window.open(
                `https://www.google.com/maps/search/?api=1&query=${hospital.lat},${hospital.lon}`,
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

export default Hospitals;
