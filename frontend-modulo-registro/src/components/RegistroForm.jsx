import { useEffect, useState } from "react";
import { api } from "../services/api";

export default function RegistroForm() {
  const [turnos, setTurnos] = useState([]);
  const [form, setForm] = useState({
    fecha: "",
    maquina: "",
    proyecto: "",
    turno_id: "",
  });

  useEffect(() => {
    api.get("/turnos").then((res) => setTurnos(res.data));
  }, []);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await api.post("/registros", form);
      alert("Registro guardado correctamente");
      setForm({ fecha: "", maquina: "", proyecto: "", turno_id: "" });
    } catch (err) {
      alert("Error al guardar el registro");
      console.error(err);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4 mt-6">
      <div>
        <label>Fecha:</label>
        <input
          type="date"
          name="fecha"
          value={form.fecha}
          onChange={handleChange}
          className="p-2 border rounded w-full"
          required
        />
      </div>

      <div>
        <label>Máquina:</label>
        <input
          type="text"
          name="maquina"
          value={form.maquina}
          onChange={handleChange}
          className="p-2 border rounded w-full"
          required
        />
      </div>

      <div>
        <label>Proyecto:</label>
        <input
          type="text"
          name="proyecto"
          value={form.proyecto}
          onChange={handleChange}
          className="p-2 border rounded w-full"
          required
        />
      </div>

      <div>
        <label>Turno:</label>
        <select
          name="turno_id"
          value={form.turno_id}
          onChange={handleChange}
          className="bg-gray-800 p-2 border border-gray-600 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 w-full text-white"
          required
        >
          <option value="">Selecciona un turno</option>
          {turnos.map((turno) => (
            <option key={turno.id} value={turno.id}>
              {turno.nombre}
            </option>
          ))}
        </select>
      </div>

      <button
        type="submit"
        className="bg-green-600 px-4 py-2 rounded text-white"
      >
        Guardar Registro
      </button>
    </form>
  );
}
