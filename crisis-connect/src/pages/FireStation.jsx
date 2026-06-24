import { useState, useEffect } from "react";

function FireStation() {
const [stations, setStations] = useState([]);

useEffect(() => {
setStations([
{
id: 1,
name: "Central Fire Station",
},
{
id: 2,
name: "City Fire Rescue",
},
]);
}, []);

return ( <div className="min-h-screen bg-[#F8D7DD] p-4"> <div className="max-w-md mx-auto">

```
    <h1 className="text-3xl font-bold text-center mb-6">
      🚒 Fire Stations
    </h1>

    {stations.map((station) => (
      <div
        key={station.id}
        className="bg-white rounded-3xl p-5 mb-4 shadow-sm"
      >
        <h2 className="font-bold text-lg">
          {station.name}
        </h2>
      </div>
    ))}

  </div>
</div>


);
}

export default FireStation;
