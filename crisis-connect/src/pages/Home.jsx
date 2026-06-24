import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { getLocationName } from "../services/locationApi";

function Home() {
const navigate = useNavigate();

const [location, setLocation] = useState("Detecting...");

const [nearestHospital] = useState({
name: "Nearest Hospital",
distance: "1.2 km",
});

useEffect(() => {
navigator.geolocation.getCurrentPosition(
async (position) => {
const placeName = await getLocationName(lat, lon);

setLocation(placeName);
},
() => {
setLocation("Location access denied");
}
);
}, []);

return ( <div className="min-h-screen bg-[#F8D7DD] p-4"> <div className="max-w-md mx-auto pb-24">

```
    {/* Header */}
    <div className="text-center pt-6">
      <h1 className="text-3xl font-bold text-gray-800">
        CrisisConnect
      </h1>

      <p className="text-gray-500 mt-2">
        Emergency Assistance Nearby
      </p>

      <button
        onClick={() => navigate("/sos")}
        className="
          mt-10
          w-44
          h-44
          rounded-full
          bg-[#E84A67]
          text-white
          text-5xl
          font-bold
          animate-pulse
          shadow-lg
        "
      >
        SOS
      </button>

      <p className="mt-5 text-gray-500">
        Tap for Immediate Help
      </p>
    </div>

    {/* Location Card */}
    <div className="bg-white rounded-3xl p-5 mt-6 shadow-sm">
      <p className="text-gray-400 text-sm">
        CURRENT LOCATION
      </p>

      <h3 className="font-semibold mt-2">
        📍 {location}
      </h3>
    </div>

    {/* Nearest Hospital */}
    <div className="bg-white rounded-3xl p-5 mt-6 shadow-sm">
      <div className="flex justify-between items-center">

        <div>
          <p className="text-gray-400 text-sm">
            NEAREST HOSPITAL
          </p>

          <h2 className="font-bold text-lg mt-1">
            {nearestHospital.name}
          </h2>
        </div>

        <div className="text-right">
          <p className="text-[#E84A67] font-semibold">
            {nearestHospital.distance}
          </p>

          <p className="text-xs text-gray-400">
            away
          </p>
        </div>

      </div>

      <button
        onClick={() => navigate("/hospitals")}
        className="
          w-full
          mt-4
          bg-[#E84A67]
          text-white
          py-3
          rounded-2xl
          font-semibold
        "
      >
        View Hospitals
      </button>
    </div>

    {/* Emergency Services */}
    <div className="mt-6">
      <h2 className="text-xl font-bold mb-4">
        Emergency Services
      </h2>

      <div className="grid grid-cols-2 gap-4">

        <button
          onClick={() => navigate("/hospitals")}
          className="bg-white rounded-3xl p-5 shadow-sm"
        >
          <div className="text-4xl">🏥</div>

          <h3 className="font-bold mt-2">
            Hospitals
          </h3>

          <p className="text-sm text-gray-500">
            Nearby medical help
          </p>
        </button>

        <button
          onClick={() => navigate("/pharmacy")}
          className="bg-white rounded-3xl p-5 shadow-sm"
        >
          <div className="text-4xl">💊</div>

          <h3 className="font-bold mt-2">
            Pharmacy
          </h3>

          <p className="text-sm text-gray-500">
            Medicines nearby
          </p>
        </button>

        <button
          onClick={() => navigate("/fire")}
          className="bg-white rounded-3xl p-5 shadow-sm"
        >
          <div className="text-4xl">🚒</div>

          <h3 className="font-bold mt-2">
            Fire Station
          </h3>

          <p className="text-sm text-gray-500">
            Emergency rescue
          </p>
        </button>

        <button
          onClick={() => navigate("/contacts")}
          className="bg-white rounded-3xl p-5 shadow-sm"
        >
          <div className="text-4xl">👨‍👩‍👧</div>

          <h3 className="font-bold mt-2">
            Contacts
          </h3>

          <p className="text-sm text-gray-500">
            Emergency contacts
          </p>
        </button>

      </div>
    </div>

    {/* Emergency Numbers */}
    <div className="bg-white rounded-3xl p-5 mt-6 shadow-sm">
      <h2 className="font-bold text-lg mb-4">
        Emergency Numbers
      </h2>

      <div className="flex flex-col gap-3">

        <a
          href="tel:112"
          className="
            bg-red-500
            text-white
            p-3
            rounded-xl
            text-center
            font-semibold
          "
        >
          🚨 Call 112
        </a>

        <a
          href="tel:108"
          className="
            bg-green-500
            text-white
            p-3
            rounded-xl
            text-center
            font-semibold
          "
        >
          🚑 Ambulance 108
        </a>

        <a
          href="tel:100"
          className="
            bg-blue-500
            text-white
            p-3
            rounded-xl
            text-center
            font-semibold
          "
        >
          👮 Police 100
        </a>

        <a
          href="tel:101"
          className="
            bg-orange-500
            text-white
            p-3
            rounded-xl
            text-center
            font-semibold
          "
        >
          🚒 Fire 101
        </a>

      </div>
    </div>

  </div>
</div>


);
}

export default Home;
