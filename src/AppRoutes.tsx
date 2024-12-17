import { BrowserRouter, Route, Routes } from "react-router-dom";
import AboutMe from "./Componentes/Pages/AboutMe";
import Projects from "./Componentes/Pages/Projects";

function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<AboutMe />}></Route>
        <Route path="/projects" element={<Projects />}></Route>
      </Routes>
    </BrowserRouter>
  );
}
export default AppRoutes;
