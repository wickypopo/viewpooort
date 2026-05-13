import Index from "./sites/Index/Index.jsx";
import Projekte from "./sites/Projekte.jsx";
import Header from "./Sections/Header.jsx";
import { Route, Routes, useLocation } from "react-router-dom";
import PageTransition from "./sites/PageTransition.jsx";
import Leistungen from "./sites/Leistungen.jsx";
import projects from "./data/projects.js";
import Project from "./sites/projects/Project.jsx";

function App() {
  const location = useLocation();
  return (
    <>
      <Header />

      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Index />} />
        <Route path="/projekte" element={<Projekte />} />
        <Route path="/leistungen" element={<Leistungen />} />
        <Route path="/projekte/:slug" element={<Project />} />
      </Routes>
    </>
  );
}
export default App;
