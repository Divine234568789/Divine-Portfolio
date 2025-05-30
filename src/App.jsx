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
        <Route path="/Divine-portfolio" element={<Banner />} />
        <Route path="/Divine-portfolio/About" element={<Aboutme />} />
        <Route path="/Divine-portfolio/Contact" element={<Contact />} />
        <Route path="/Divine-portfolio/Projects" element={<Projects/>}/>
      </Routes>
    </div>
  );
};

export default App;
