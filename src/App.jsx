import { useState } from "react";
import LandingPage from "./components/home/landing_page";
import Navbar from "./components/home/navbar";
import Player from "./components/player/player";
import { Route, Routes, useLocation } from "react-router-dom";
import LoadBatches from "./components/batches/main";
import TopicLoader from "./components/batch/topics";
import Login from "./components/login/login";
import AboutUs from "./components/aboutus/aboutus";
function App() {
  const [user, setUser] = useState(null);
  const location = useLocation();
  console.log(location);
  return (
    <div className=" h-screen bg-black w-full sticky top-0">
      {location.pathname != "/login" ? <Navbar user={user} /> : <></>}
      <Routes>
        <Route path="play" element={<Player />} />
        <Route path="login" element={<Login setUser={setUser} />} />
        <Route path="/" element={<LandingPage />} />
        <Route path="batches" element={<LoadBatches />} />
        <Route path="batch" element={<TopicLoader />} />
        <Route path="aboutus" element={<AboutUs />} />
      </Routes>
    </div>
  );
}

export default App;
