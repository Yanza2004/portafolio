import Home from "./components/HomePage/Home";
import { Routes, Route } from "react-router-dom";
import Projects from "./components/Projects";
import NavBar from "./components/NavBar/NavBar";
import AboutMe from "./components/AboutMe";
import Contacts from "./components/Contacts";

function App() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="projects" element={<Projects />} />
        <Route path="aboutMe" element={<AboutMe />} />
        <Route path="contacts" element={<Contacts />} />
      </Routes>
    </>
  );
}
export default App;
