import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { getLocationName } from "../services/locationApi";
import BottomNav from "../components/BottomNav";

function Home() {
  const navigate = useNavigate();

  const [location, setLocation] = useState("Detecting your location...");
  const [currentTime, setCurrentTime] = useState("");

  const [nearestHospital] = useState({
    name: "Nearest Hospital",
    distance: "1.2 km",
  });

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(
      async (position) => {
        const lat = position.coords.latitude;
        const lon = position.coords.longitude;

        const place = await getLocationName(lat, lon);

        setLocation(place);
      },
      () => {
        setLocation("Location access denied");
      }
    );
  }, []);

  useEffect(() => {
    const timer = setInterval(() => {
      const now = new Date();

      setCurrentTime(
        now.toLocaleTimeString([], {
          hour: "2-digit",
          minute: "2-digit",
        })
      );
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-100 via-rose-50 to-red-100">

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10 py-8 pb-32">

        {/* Header */}

        <div className="flex flex-col md:flex-row justify-between items-center">

          <div>

            <h1 className="text-4xl md:text-5xl font-black text-gray-800">
              CrisisConnect
            </h1>

            <p className="text-gray-600 mt-2 text-lg">
              Your Personal Emergency Assistant
            </p>

          </div>

          <div className="mt-6 md:mt-0">

            <div className="bg-white rounded-3xl shadow-lg px-6 py-4">

              <p className="text-sm text-gray-500">
                Current Time
              </p>

              <h2 className="text-2xl font-bold">
                {currentTime}
              </h2>

            </div>

          </div>

        </div>

        {/* Hero Section */}

        <div className="mt-10 grid lg:grid-cols-2 gap-8 items-center">

          {/* Left Side */}

          <div>

            <h2 className="text-5xl font-black text-gray-800 leading-tight">

              Emergency Help

              <span className="text-red-500">
                {" "}One Tap Away
              </span>

            </h2>

            <p className="mt-6 text-lg text-gray-600 leading-8">

              Instantly locate nearby hospitals,
              pharmacies, fire stations and contact
              emergency services whenever you need.

            </p>

            <button
              onClick={() => navigate("/sos")}
              className="
                mt-10
                w-56
                h-56
                rounded-full
                bg-gradient-to-r
                from-red-500
                to-red-700
                text-white
                text-6xl
                font-black
                shadow-2xl
                hover:scale-105
                active:scale-95
                transition
                duration-300
                animate-pulse
              "
            >
              SOS
            </button>

            <p className="mt-5 text-gray-500">
              Tap for Immediate Emergency Assistance
            </p>

          </div>

          {/* Right Side */}

          <div className="space-y-6">

            {/* Location */}

            <div className="bg-white rounded-3xl shadow-xl p-6">

              <p className="text-gray-400 uppercase tracking-wide">
                Current Location
              </p>

              <h3 className="font-bold text-2xl mt-3">
                📍 {location}
              </h3>

            </div>

            {/* Hospital */}

            <div className="bg-white rounded-3xl shadow-xl p-6">

              <div className="flex justify-between items-center">

                <div>

                  <p className="text-gray-400 uppercase">
                    Nearest Hospital
                  </p>

                  <h2 className="font-bold text-2xl mt-2">
                    {nearestHospital.name}
                  </h2>

                </div>

                <div className="text-right">

                  <p className="text-red-500 text-2xl font-bold">
                    {nearestHospital.distance}
                  </p>

                  <p className="text-gray-500">
                    Away
                  </p>

                </div>

              </div>

              <button
                onClick={() => navigate("/hospitals")}
                className="
                  mt-6
                  w-full
                  bg-red-500
                  hover:bg-red-600
                  text-white
                  py-4
                  rounded-2xl
                  text-lg
                  font-bold
                  transition
                "
              >
                View Nearby Hospitals
              </button>

            </div>

          </div>

        </div>

                {/* Emergency Services */}

        <section className="mt-16">

          <div className="flex justify-between items-center mb-8">

            <h2 className="text-3xl font-bold text-gray-800">
              Emergency Services
            </h2>

            <span className="text-gray-500">
              One Tap Access
            </span>

          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">

            <button
              onClick={() => navigate("/hospitals")}
              className="
                bg-white
                rounded-3xl
                p-6
                shadow-lg
                hover:shadow-2xl
                hover:-translate-y-2
                transition-all
                duration-300
                group
              "
            >

              <div className="text-6xl group-hover:scale-110 transition">
                🏥
              </div>

              <h3 className="font-bold text-xl mt-4">
                Hospitals
              </h3>

              <p className="text-gray-500 mt-2 text-sm">
                Nearby hospitals
              </p>

            </button>

            <button
              onClick={() => navigate("/pharmacy")}
              className="
                bg-white
                rounded-3xl
                p-6
                shadow-lg
                hover:shadow-2xl
                hover:-translate-y-2
                transition-all
                duration-300
                group
              "
            >

              <div className="text-6xl group-hover:scale-110 transition">
                💊
              </div>

              <h3 className="font-bold text-xl mt-4">
                Pharmacy
              </h3>

              <p className="text-gray-500 mt-2 text-sm">
                Find medicines
              </p>

            </button>

            <button
              onClick={() => navigate("/fire")}
              className="
                bg-white
                rounded-3xl
                p-6
                shadow-lg
                hover:shadow-2xl
                hover:-translate-y-2
                transition-all
                duration-300
                group
              "
            >

              <div className="text-6xl group-hover:scale-110 transition">
                🚒
              </div>

              <h3 className="font-bold text-xl mt-4">
                Fire Station
              </h3>

              <p className="text-gray-500 mt-2 text-sm">
                Rescue services
              </p>

            </button>

            <button
              onClick={() => navigate("/contacts")}
              className="
                bg-white
                rounded-3xl
                p-6
                shadow-lg
                hover:shadow-2xl
                hover:-translate-y-2
                transition-all
                duration-300
                group
              "
            >

              <div className="text-6xl group-hover:scale-110 transition">
                👨‍👩‍👧
              </div>

              <h3 className="font-bold text-xl mt-4">
                Contacts
              </h3>

              <p className="text-gray-500 mt-2 text-sm">
                Emergency contacts
              </p>

            </button>

          </div>

        </section>

        {/* Emergency Numbers */}

        <section className="mt-16">

          <h2 className="text-3xl font-bold text-gray-800 mb-8">
            Emergency Numbers
          </h2>

          <div className="grid md:grid-cols-2 gap-5">

            <a
              href="tel:112"
              className="
                bg-red-500
                hover:bg-red-600
                text-white
                rounded-3xl
                p-6
                shadow-xl
                transition
              "
            >

              <div className="text-5xl">🚨</div>

              <h3 className="text-3xl font-bold mt-3">
                112
              </h3>

              <p>National Emergency</p>

            </a>

            <a
              href="tel:108"
              className="
                bg-green-500
                hover:bg-green-600
                text-white
                rounded-3xl
                p-6
                shadow-xl
                transition
              "
            >

              <div className="text-5xl">🚑</div>

              <h3 className="text-3xl font-bold mt-3">
                108
              </h3>

              <p>Ambulance</p>

            </a>

            <a
              href="tel:100"
              className="
                bg-blue-500
                hover:bg-blue-600
                text-white
                rounded-3xl
                p-6
                shadow-xl
                transition
              "
            >

              <div className="text-5xl">👮</div>

              <h3 className="text-3xl font-bold mt-3">
                100
              </h3>

              <p>Police</p>

            </a>

            <a
              href="tel:101"
              className="
                bg-orange-500
                hover:bg-orange-600
                text-white
                rounded-3xl
                p-6
                shadow-xl
                transition
              "
            >

              <div className="text-5xl">🚒</div>

              <h3 className="text-3xl font-bold mt-3">
                101
              </h3>

              <p>Fire Service</p>

            </a>

          </div>

        </section>

                {/* Safety Tips */}

        <section className="mt-16">

          <h2 className="text-3xl font-bold text-gray-800 mb-8">
            Safety Tips
          </h2>

          <div className="grid md:grid-cols-2 gap-6">

            <div className="bg-white rounded-3xl p-6 shadow-lg">
              <div className="text-5xl">🩺</div>

              <h3 className="text-xl font-bold mt-4">
                Medical Emergency
              </h3>

              <p className="text-gray-600 mt-2 leading-7">
                Stay calm, call emergency services immediately,
                and avoid moving injured persons unless necessary.
              </p>
            </div>

            <div className="bg-white rounded-3xl p-6 shadow-lg">
              <div className="text-5xl">🔥</div>

              <h3 className="text-xl font-bold mt-4">
                Fire Emergency
              </h3>

              <p className="text-gray-600 mt-2 leading-7">
                Leave the building immediately using stairs.
                Never use elevators during a fire.
              </p>
            </div>

            <div className="bg-white rounded-3xl p-6 shadow-lg">
              <div className="text-5xl">🚗</div>

              <h3 className="text-xl font-bold mt-4">
                Road Accident
              </h3>

              <p className="text-gray-600 mt-2 leading-7">
                Switch on hazard lights, secure the area,
                and call an ambulance if anyone is injured.
              </p>
            </div>

            <div className="bg-white rounded-3xl p-6 shadow-lg">
              <div className="text-5xl">⚠️</div>

              <h3 className="text-xl font-bold mt-4">
                General Safety
              </h3>

              <p className="text-gray-600 mt-2 leading-7">
                Keep your emergency contacts updated and
                always share your live location in emergencies.
              </p>
            </div>

          </div>

        </section>

        {/* Emergency Checklist */}

        <section className="mt-16">

          <div className="bg-white rounded-3xl shadow-xl p-8">

            <h2 className="text-3xl font-bold text-gray-800 mb-6">
              Emergency Checklist
            </h2>

            <div className="space-y-4">

              <div className="flex items-center gap-4">
                <span className="text-green-500 text-2xl">✔</span>
                <p>Stay calm and assess the situation.</p>
              </div>

              <div className="flex items-center gap-4">
                <span className="text-green-500 text-2xl">✔</span>
                <p>Call the nearest emergency service.</p>
              </div>

              <div className="flex items-center gap-4">
                <span className="text-green-500 text-2xl">✔</span>
                <p>Share your location with trusted contacts.</p>
              </div>

              <div className="flex items-center gap-4">
                <span className="text-green-500 text-2xl">✔</span>
                <p>Follow official emergency instructions.</p>
              </div>

            </div>

          </div>

        </section>

        {/* Footer */}

        <footer className="mt-20 text-center">

          <h2 className="text-2xl font-black text-gray-800">
            CrisisConnect
          </h2>

          <p className="text-gray-500 mt-3">
            Stay Safe • Stay Prepared • Stay Connected
          </p>

          <p className="text-gray-400 text-sm mt-2">
            © 2026 CrisisConnect
          </p>

        </footer>

      </div>

      <BottomNav />

    </div>
  );
}

export default Home;