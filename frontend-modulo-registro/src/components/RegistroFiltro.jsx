import { useEffect, useState } from "react";
import { api } from "../services/api";

export default function RegistroFiltro() {
  const [turnos, setTurnos] = useState([]);
  const [turnoId, setTurnoId] = useState("");
  const [registros, setRegistros] = useState([]);

  useEffect(() => {
    api.get("/turnos").then((res) => setTurnos(res.data));
  }, []);

  const handleChange = async (e) => {
    const id = e.target.value;
    setTurnoId(id);

    if (id) {
      try {
        const response = await api.post("/registros/filtrar", { turno_id: id });
        console.log("Respuesta del backend: ", response.data);
        setRegistros(response.data);
      } catch (error) {
        console.error("Error al filtrar registros: ", error);
      }
    } else {
      setRegistros([]);
    }
  };

  return (
    <div className="space-y-6 mt-10">
      <h2 className="font-bold text-white text-xl">
        Filtrar Registros por Turno
      </h2>

      <select
        value={turnoId}
        onChange={handleChange}
        className="bg-gray-800 p-2 border rounded-lg w-full text-white boder-gray-600"
      >
        <option value="">Selecciona un turno</option>
        {turnos.map((t) => (
          <option key={t.id} value={t.id}>
            {t.nombre}
          </option>
        ))}
      </select>

      <div className="space-y-4">
        {registros.map((r) => (
          <div
            key={r.id}
            className="bg-gray-900 shadow p-4 border rounded-lg text-white"
          >
            <p>
              <strong>Fecha:</strong> {r.fecha}
            </p>
            <p>
              <strong>Máquina: </strong> {r.maquina}
            </p>
            <p>
              <strong>Proyecto: </strong> {r.proyecto}
            </p>
            <p>
              <strong>Turno: </strong> {r.turno?.nombre}
            </p>
          </div>
        ))}
        {registros.length === 0 && turnoId && (
          <p className="text-white">No hay Registros para este turno.</p>
        )}
      </div>
    </div>
  );
}
