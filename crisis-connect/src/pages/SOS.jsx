import { useState } from "react";

function SOS() {
const [countdown, setCountdown] = useState(null);

const triggerSOS = () => {
let time = 5;
setCountdown(time);


const timer = setInterval(() => {
  time--;

  if (time === 0) {
    clearInterval(timer);

    navigator.geolocation.getCurrentPosition(
      (position) => {
        const lat = position.coords.latitude;
        const lon = position.coords.longitude;

        alert(
          `SOS ACTIVATED!\n\nLocation:\nhttps://maps.google.com/?q=${lat},${lon}`
        );

        setCountdown(null);
      }
    );
  } else {
    setCountdown(time);
  }
}, 1000);


};

return ( <div className="min-h-screen bg-[#F8D7DD] flex flex-col justify-center items-center p-6">


  <h1 className="text-4xl font-bold mb-4">
    Emergency SOS
  </h1>

  <p className="text-gray-600 mb-8 text-center">
    Press the button to activate emergency mode
  </p>

  <button
    onClick={triggerSOS}
    className="
      w-52
      h-52
      rounded-full
      bg-red-600
      text-white
      text-5xl
      font-bold
      animate-pulse
      shadow-lg
    "
  >
    SOS
  </button>

  {countdown && (
    <div className="mt-8 text-center">
      <p className="text-xl font-semibold">
        Sending Alert In
      </p>

      <p className="text-5xl font-bold text-red-600 mt-2">
        {countdown}
      </p>
    </div>
  )}
</div>


);
}

export default SOS;
