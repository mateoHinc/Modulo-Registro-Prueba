import { useEffect, useState } from "react";
import { api } from "../services/api";

export default function TurnoList() {
  const [turnos, setTurnos] = useState([]);

  useEffect(() => {
    api.get("/turnos").then((res) => setTurnos(res.data));
  }, []);

  return (
    <div>
      <h2 className="font-bold text-xl">Turnos</h2>
      <ul className="pl-5 list-disc">
        {turnos.map((t) => (
          <li key={t.id}>{t.nombre}</li>
        ))}
      </ul>
    </div>
  );
}
