# 🏭 Modulo de Registro de Producción - Prueba Técnica

Este proyecto es una aplicación web fullstack parar registrar y consultar la producción por turno en una línea de fabricación. Permite:

- Registrar turnos de trabajo (mañana, tarde, noche, etc.)
- Registrar la producción diaria (máquina, fecha, proyecto)
- Filtrar registros por turno
- Conexión entre frontend React y backend Laravel

---

## 🚀 Tecnologías utilizadas

- ⚙️ **Backend:** PHP Laravel 12 (modo mínimo)
- 🎨 **Frontend:** React + Vite + TailwindCSS
- 🔁 API RESTful con conexión entre ambos
- 🛠 Base de datos: SQLite

---

## 📥 Clonar el repositorio

```bash
git clone https://github.com/mateoHinc/Modulo-Registro-Prueba.git
cd Modulo-Registro-Prueba
```

![image](https://github.com/user-attachments/assets/22a2bbdd-55e8-420c-b962-dcfff11384cd)

Aparecerán dos proyectos dentro de la carpeta

![image](https://github.com/user-attachments/assets/98c14a20-f776-4e9b-91db-9a519682c8c4)

La carpeta frontend-modulo-registro(frontend) que es la parte visual para el usuario

![image](https://github.com/user-attachments/assets/37e9577c-9f08-4f15-b5b7-02f8355b2d70)

Mientras la carpeta Modulo Registro/modulo-registro(backend) se encarga la parte lógica y guardar en la bases de datos

![image](https://github.com/user-attachments/assets/e26f0fe5-0788-4d29-b2e6-f87e9a4aa59c)
![image](https://github.com/user-attachments/assets/2b2c3c20-c989-43e8-8df9-f9e12ed18f70)

---

## 🧩 Preparar el Backend (Laravel)
1. Ve a la carpeta del backend

```bash
cd Modulo Registro/modulo-registro
code .
```

2. Instala dependencias

```bash
composer install
```

3. Crea el archivo .env y configura tu base de datos:

```bash
cp .env.example .env
```

4. Genera la clave de la aplicación:

```bash
php artisan key:generate
```

5. Crea la base de datos y ejecuta las migraciones:

```bash
php artisan key:generate
```

6. (Opcional) Agrega datos de prueba:

```bash
php artisan db:seed
```

7. Levanta el servidor:

```bash
php -S localhost:8000 -t public
```
Finalmente aparecerá la ejecución del backend salió exitosamente

![image](https://github.com/user-attachments/assets/d6ed4a60-f322-40d3-8d86-b8ee47384c1c)

---

## 🧪 API disponible

| Método | Endpoint                  | Descripción                    |
|--------|---------------------------|--------------------------------|
| GET    | `/api/turnos`             | Listar turnos                  |
| POST   | `/api/turnos`             | Registrar turno                |
| GET    | `/api/registros`          | Listar registros               |
| POST   | `/api/registros`          | Registrar producción           |
| POST   | `/api/registros/filtrar`  | Filtrar por `turno_id`         |

## 🧩 Preparar el Backend (Laravel)
1. Ve a la carpeta del frontend:

```bash
cd frontend-modulo-registro
code .
```

2. Instala dependencias:

```bash
npm install
```

4. Ejecuta el servidor de desarrollo:

```bash
npm run dev
```

Abre en navegador:
📍 http://localhost:5173

![image](https://github.com/user-attachments/assets/170fa1be-01c3-43ee-bdec-73bad5e85ab5)

---

## 🛡 Garantía de Fiabilidad del Módulo

Para asegurar que el módulo de registro de producción sea confiable, robusto y mantenible, se implementaron las siguientes estrategias:

### ✅ Validación de datos
- Laravel valida todos los campos requeridos en cada endpoint (`Request::validate`).
- También se realiza validación del lado del cliente con React para brindar feedback inmediato.

### 🧪 Pruebas funcionales
- Pruebas manuales realizadas desde Postman y el frontend.
- Preparado para incluir `Feature Tests` en Laravel que validen los flujos críticos del sistema.

### 🔁 Control de errores
- Manejo de excepciones controlado con respuestas JSON claras.
- El frontend detecta errores y muestra mensajes útiles para el usuario.

### 🧱 Integridad de la base de datos
- Uso de migraciones para definir la estructura de las tablas.
- Relación entre registros y turnos controlada por claves foráneas (`foreign keys`).

### 🌐 API desacoplada
- Comunicación clara entre frontend y backend mediante una API REST bien definida.
- Permite escalar o mantener cada parte del sistema de forma independiente.

### 👥 Pruebas con datos reales
- El sistema fue probado con datos reales de producción simulados.
- Las respuestas de filtrado y búsqueda han sido verificadas en múltiples escenarios.

---
