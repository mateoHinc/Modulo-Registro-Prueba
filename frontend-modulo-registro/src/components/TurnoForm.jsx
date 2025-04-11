import { useState } from "react";
import { api } from "../services/api";

export default function TurnoForm() {
  const [nombre, setNombre] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    await api.post("/turnos", { nombre });
    setNombre("");
    alert("Turno Creado");
  };

  return (
    <form onSubmit={handleSubmit} className="mt-4">
      <input
        type="text"
        value={nombre}
        onChange={(e) => setNombre(e.target.value)}
        placeholder="Nombre del turno"
        className="p-2 border rounded"
      />
      <button className="bg-blue-600 ml-2 px-4 py-2 rounded text-white">
        Crear
      </button>
    </form>
  );
}
