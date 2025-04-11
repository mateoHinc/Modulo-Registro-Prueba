import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

import "./App.css";

import TurnoForm from "./components/TurnoForm";
import RegistroForm from "./components/RegistroForm";
import RegistroFiltro from "./components/RegistroFiltro";

function App() {
  return (
    <Router>
      <nav className="flex gap-4 bg-gray-900 shadow-lg p-4 text-white">
        <Link to="/" className="font-semibold hover:text-blue-400">
          Registrar Turno
        </Link>
        <Link to="/registro" className="font-semibold hover:text-blue-400">
          Registrar Producción
        </Link>
        <Link to="/filtrar" className="font-semibold hover:text-blue-400">
          Filtrar Registros
        </Link>
      </nav>

      <div className="mx-auto p-6 max-w-2xl">
        <Routes>
          <Route path="/" element={<TurnoForm />} />
          <Route path="/" element={<RegistroForm />} />
          <Route path="/" element={<RegistroFiltro />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
