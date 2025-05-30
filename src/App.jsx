import Navbar from "./components/Navbar";
import Banner from "./components/Banner";
import Aboutme from "./components/Aboutme";
import Contact from "./components/Contact";
import { Route, Routes } from "react-router";
import Projects from "./components/Projects";
const App = () => {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Banner />} />
        <Route path="/About" element={<Aboutme />} />
        <Route path="/Contact" element={<Contact />} />
        <Route path="/Projects" element={<Projects/>}/>
      </Routes>
    </div>
  );
};

export default App;
