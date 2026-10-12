<<<<<<< HEAD
# Centro Médico UNI

Aplicación web del proyecto **Centro Médico UNI**, organizada en dos módulos principales: un frontend desarrollado con React y TypeScript, y un backend desarrollado con Node.js, Express y Prisma.

> **Estado actual:** el backend dispone de una ruta inicial de comprobación (`GET /`) y el frontend conserva la pantalla inicial de Vite.

## Tabla de contenidos

- [Tecnologías](#tecnologías)
- [Requisitos previos](#requisitos-previos)
- [Estructura del proyecto](#estructura-del-proyecto)
- [Instalación](#instalación)
- [Variables de entorno](#variables-de-entorno)
- [Ejecución en desarrollo](#ejecución-en-desarrollo)
- [Comprobación del backend](#comprobación-del-backend)
- [Compilación para producción](#compilación-para-producción)
- [Base de datos y Prisma](#base-de-datos-y-prisma)
- [Scripts disponibles](#scripts-disponibles)
- [Control de versiones](#control-de-versiones)
- [Notas de desarrollo](#notas-de-desarrollo)

## Tecnologías

### Frontend

- **React 19**
- **TypeScript**
- **Vite**
- **Tailwind CSS 4** (instalado; verifica que esté configurado en Vite y en los archivos CSS antes de usar sus clases)
- **Oxlint** para análisis estático del código

### Backend

- **Node.js**
- **TypeScript**
- **Express 5**
- **Prisma 7**
- **PostgreSQL**
- **`@prisma/adapter-pg`** y **`pg`** para la conexión con PostgreSQL
- **`dotenv`** para cargar variables de entorno

## Requisitos previos

Instala o configura lo siguiente antes de iniciar el proyecto:

- Node.js y npm.
- Git.
- PostgreSQL disponible para la aplicación.
- Acceso al repositorio de GitHub.

Las versiones utilizadas durante la preparación de esta documentación fueron Node.js `v24.21.0`, npm `11.19.0`, Prisma `7.10.0` y TypeScript `7.0.2` en el backend. Las versiones instaladas pueden cambiar según las dependencias y el entorno.

## Estructura del proyecto

```text
Centro-Medico-UNI/
├── backend/
│   ├── prisma/
│   │   └── schema.prisma
│   ├── src/
│   │   ├── generated/
│   │   │   └── prisma/
│   │   ├── script.ts
│   │   └── server.ts
│   ├── prisma.config.ts
│   ├── prisma7.config.ts
│   ├── package.json
│   └── tsconfig.json
├── frontend/
│   ├── public/
│   ├── src/
│   │   ├── assets/
│   │   ├── App.tsx
│   │   ├── App.css
│   │   ├── index.css
│   │   └── main.tsx
│   ├── index.html
│   ├── package.json
│   ├── tsconfig.json
│   └── vite.config.ts
└── README.md
```

- `frontend/`: interfaz de usuario.
- `backend/`: servidor HTTP, lógica del servidor y acceso a datos.
- `backend/prisma/schema.prisma`: modelos de datos definidos con Prisma.
- `backend/src/server.ts`: punto de entrada del servidor Express.
- `backend/src/script.ts`: script independiente de prueba de acceso a datos.
- `backend/src/generated/prisma/`: cliente generado por Prisma; no se debe editar manualmente.

## Instalación

Clona el repositorio y entra en el proyecto:

```bash
git clone git@github.com:TerroncitoDev08/Centro-Medico-UNI.git
cd Centro-Medico-UNI
```

Instala las dependencias de cada módulo por separado:

```bash
cd backend
npm install

cd ../frontend
npm install
```

## Variables de entorno

El backend carga variables de entorno mediante `dotenv`. Para conectar Prisma con PostgreSQL se utiliza `DATABASE_URL`.

Crea el archivo `backend/.env` y configura allí la URL de conexión de tu entorno local. No subas ese archivo al repositorio ni publiques contraseñas o credenciales.

Ejemplo de formato, con valores ficticios:

```dotenv
DATABASE_URL="postgresql://USUARIO:CONTRASENA@HOST:PUERTO/NOMBRE_BASE?schema=public"
```

Sustituye los valores por los de tu propia configuración. Este ejemplo documenta el formato; no representa credenciales reales ni garantiza que la conexión esté configurada en tu equipo.

## Ejecución en desarrollo

Abre dos terminales, una para cada módulo.

### 1. Iniciar el backend

```bash
cd backend
npm run dev
```

El servidor utiliza el puerto `3000` y debe quedar disponible en:

`http://localhost:3000`

### 2. Iniciar el frontend

En otra terminal:

```bash
cd frontend
npm run dev
```

Vite mostrará en la terminal la dirección local en la que se sirve el frontend. Usa esa dirección para abrir la aplicación en el navegador.

## Comprobación del backend

Actualmente, el backend define una ruta de prueba:

- **Método:** `GET`
- **Ruta:** `/`
- **URL local:** `http://localhost:3000/`

La respuesta esperada es un objeto JSON similar a:

```json
{
  "message": "API Centro Médico UNI funcionando"
}
```

Esta ruta sirve para comprobar que el servidor está iniciado. No representa todavía una API completa del centro médico.

## Compilación para producción

### Backend

Desde `backend/`:

```bash
npm run build
```

El comando ejecuta TypeScript y genera los archivos compilados en `backend/dist/`.

Para iniciar el backend compilado:

```bash
npm start
```

### Frontend

Desde `frontend/`:

```bash
npm run build
```

Este comando ejecuta la comprobación de TypeScript (`tsc -b`) y construye la aplicación con Vite. Los archivos resultantes se generan en `frontend/dist/`.

Para previsualizar localmente la compilación:

```bash
npm run preview
```

La previsualización no sustituye la configuración necesaria para desplegar la aplicación en un servidor de producción.

## Base de datos y Prisma

El proyecto utiliza PostgreSQL y Prisma 7. El esquema actual se encuentra en `backend/prisma/schema.prisma` e incluye el modelo `User` con estos campos:

| Campo | Tipo | Descripción |
|---|---|---|
| `id` | `Int` | Identificador autoincremental y clave primaria. |
| `email` | `String` | Correo electrónico. |
| `password` | `String` | Contraseña almacenada como texto en el esquema actual. |

**Seguridad:** antes de usar este modelo en un entorno real, las contraseñas deben almacenarse mediante un algoritmo de hash apropiado, nunca como texto plano. También conviene establecer las restricciones de unicidad y validación que requiera la aplicación.

El esquema fue validado con Prisma 7.10.0. La configuración activa detectada por Prisma CLI es `backend/prisma7.config.ts`.

No se incluyen aquí comandos de migración porque antes de documentarlos de forma definitiva hay que confirmar el flujo de migraciones y la configuración de Prisma que utilizará el equipo. Cuando se defina ese flujo, documenta los comandos correspondientes junto con el proceso para generar el cliente Prisma.

## Scripts disponibles

### Backend (`backend/package.json`)

| Comando | Función |
|---|---|
| `npm run dev` | Inicia el servidor con `tsx watch`, reiniciándolo al detectar cambios. |
| `npm run build` | Compila el código TypeScript. |
| `npm start` | Ejecuta `dist/server.js`. |
| `npm test` | Actualmente devuelve un mensaje indicando que no hay pruebas configuradas. |
| `npm run postinstall` | Intenta sincronizar las skills de Prisma durante la instalación. |

### Frontend (`frontend/package.json`)

| Comando | Función |
|---|---|
| `npm run dev` | Inicia el servidor de desarrollo de Vite. |
| `npm run build` | Comprueba TypeScript y genera la compilación de producción. |
| `npm run preview` | Sirve una previsualización de la compilación. |
| `npm run lint` | Ejecuta Oxlint. |

Ejecuta los comandos dentro de la carpeta correspondiente, `backend/` o `frontend/`, ya que la raíz del repositorio no tiene un `package.json` propio.

## Control de versiones

Repositorio remoto:

[https://github.com/TerroncitoDev08/Centro-Medico-UNI](https://github.com/TerroncitoDev08/Centro-Medico-UNI)

Los archivos `.env`, `node_modules/`, `dist/` y otros archivos locales o generados deben permanecer fuera del control de versiones según las reglas de `.gitignore`.

## Notas de desarrollo

- Instala las dependencias por separado en `backend/` y `frontend/`.
- No subas archivos `.env`, contraseñas, tokens ni credenciales al repositorio.
- El cliente generado por Prisma no debe modificarse manualmente.
- El frontend tiene instalados Tailwind CSS 4 y su plugin de Vite; confirma que ambos estén configurados en `vite.config.ts` y en la hoja de estilos principal si vas a utilizar clases de Tailwind.
- Antes de desplegar el sistema, configura variables de entorno seguras, manejo de errores, validación de datos, pruebas y una estrategia de migraciones de base de datos.
- Actualiza este documento cuando se agreguen módulos, rutas, modelos, variables de entorno o instrucciones de despliegue.
=======
# UniSalud
>>>>>>> 2f8225cfaa344e1e5d71fdab6e396f42ab0967e3
