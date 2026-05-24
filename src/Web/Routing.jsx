import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../Pages/Home/Home";
import Explore from "../Pages/Explore/Explore";
import Guide from "../Pages/Guide/Guide";
import About from "../Pages/About/About";

export default function Routing() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/explore" element={<Explore />} />
        <Route path="/guide" element={<Guide />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </>
  );
}
