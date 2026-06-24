import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Hospitals from "./pages/Hospitals";
import SOS from "./pages/SOS";
import Pharmacy from "./pages/Pharmacy";
import Contacts from "./pages/Contacts";
import FireStation from "./pages/FireStation";


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/hospitals" element={<Hospitals />} />
        <Route path="/sos" element={<SOS />} />
        <Route path="/pharmacy" element={<Pharmacy />} />
        <Route path="/contacts" element={<Contacts />} />
        <Route path="/fire" element={<FireStation />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;