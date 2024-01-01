import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Activity from "./pages/Activity";
import Revisions from "./pages/Revisions";
import Planning from "./pages/Planning";
import StudyCircle from "./pages/StudyCircle";
import Supervision from "./pages/Supervision";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/atividades" element={<Activity />} />
        <Route path="/revisoes" element={<Revisions />} />
        <Route path="/planejamento" element={<Planning />} />
        <Route path="/ciclo-de-estudos" element={<StudyCircle />} />
        <Route path="/acompanhamento" element={<Supervision />} />
      </Routes>
    </BrowserRouter>
  );
}
