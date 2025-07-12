import Navbar from "./pages/Navbar";
import Banner from "./pages/Banner";
import Aboutme from "./pages/Aboutme";
import Contact from "./pages/Contact";
import { Route, Routes } from "react-router";
import Projects from "./pages/Projects";
const App = () => {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Banner />} />
        <Route path="/About" element={<Aboutme />} />
        <Route path="/Contact" element={<Contact />} />
        <Route path="/Projects" element={<Projects />} />
      </Routes>
    </div>
  );
};

export default App;
