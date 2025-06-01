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
        <Route path="/Divine-Portfolio/" element={<Banner />} />
        <Route path="/Divine-Portfolio/About" element={<Aboutme />} />
        <Route path="/Divine-Portfolio/Contact" element={<Contact />} />
        <Route path="/Divine-Portfolio/Projects" element={<Projects/>}/>
      </Routes>
    </div>
  );
};

export default App;
