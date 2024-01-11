import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Activity from "./pages/Activity";
import Subjects from "./pages/Subjects/Subjects";
import CreateSubjects from "./pages/Subjects/CreateSubjects";
import Planning from "./pages/Planning";
import StudyCircle from "./pages/StudyCircle";
import Supervision from "./pages/Supervision";
import Login from "./pages/auth/Login";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/" element={<Home />} />
        <Route path="/atividades" element={<Activity />} />
        <Route path="/materias" element={<Subjects />} />
        <Route path="/materias/criar-materia" element={<CreateSubjects />} />
        <Route path="/planejamento" element={<Planning />} />
        <Route path="/ciclo-de-estudos" element={<StudyCircle />} />
        <Route path="/acompanhamento" element={<Supervision />} />
      </Routes>
    </BrowserRouter>
  );
}
