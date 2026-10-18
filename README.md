# UniSalud: Sistema Integral de Gestión de Atención Médica Universitaria

UniSalud es una aplicación web orientada a facilitar la gestión de la atención médica universitaria. Su objetivo es permitir que los estudiantes consulten los servicios médicos disponibles, revisen los horarios de atención y gestionen sus citas de manera organizada.

El proyecto está organizado en dos módulos principales: un **frontend** desarrollado con React y TypeScript, y un **backend** desarrollado con Node.js, Express y Prisma, conectado a una base de datos PostgreSQL.

> **Estado actual:** El backend dispone de una ruta inicial de comprobación (`GET /`) y el frontend conserva la pantalla inicial de Vite. La aplicación se encuentra en desarrollo.

## Tabla de contenidos

- [Características](#características)
- [Tecnologías](#tecnologías)
- [Requisitos previos](#requisitos-previos)
- [Estructura del proyecto](#estructura-del-proyecto)
- [Instalación](#instalación)
- [Variables de entorno](#variables-de-entorno)
- [Ejecución en desarrollo](#ejecución-en-desarrollo)
- [Comprobación del backend](#comprobación-del-backend)
- [Base de datos y Prisma](#base-de-datos-y-prisma)
- [Scripts disponibles](#scripts-disponibles)
- [Flujo de trabajo con Git](#flujo-de-trabajo-con-git)
- [Próximas funcionalidades](#próximas-funcionalidades)
- [Autores](#autores)

## Características

La plataforma está diseñada para incorporar las siguientes funcionalidades:

- Consulta de servicios médicos universitarios.
- Visualización de horarios y disponibilidad de atención.
- Solicitud y gestión de citas médicas.
- Consulta del estado de las citas.
- Cancelación de citas.
- Administración de horarios y solicitudes de atención.
- Gestión de usuarios y control de acceso según sus roles.

Estas funcionalidades corresponden al alcance previsto del proyecto y se implementarán progresivamente.

## Tecnologías

### Frontend

- **React:** construcción de interfaces de usuario.
- **TypeScript:** tipado estático para JavaScript.
- **Vite:** entorno de desarrollo y herramienta de construcción.
- **Tailwind CSS:** diseño y estilización de interfaces.
- **Oxlint:** análisis estático del código.

### Backend

- **Node.js:** entorno de ejecución de JavaScript.
- **Express 5:** desarrollo de la API.
- **TypeScript:** desarrollo del backend con tipado estático.
- **Prisma ORM:** definición del modelo de datos e interacción con la base de datos.
- **PostgreSQL:** sistema de gestión de bases de datos relacionales.
- **node-postgres (`pg`):** conexión con PostgreSQL.
- **dotenv:** gestión de variables de entorno.

### Herramientas complementarias

- **Git:** control de versiones.
- **GitHub:** alojamiento del repositorio y colaboración.
- **Visual Studio Code:** entorno de desarrollo.

## Requisitos previos

Antes de instalar el proyecto, asegúrate de contar con las siguientes herramientas:

- [Node.js](https://nodejs.org/)
- npm, incluido con Node.js.
- [Git](https://git-scm.com/)
- [PostgreSQL](https://www.postgresql.org/)
- [Visual Studio Code](https://code.visualstudio.com/) (opcional).

Para comprobar las instalaciones, ejecuta los siguientes comandos en una terminal:

```bash
node -v
npm -v
git --version
```

## Estructura del proyecto

La organización general del repositorio es la siguiente:

```text
Centro-Medico-UNI/
├── frontend/
│   ├── public/
│   ├── src/
│   ├── package.json
│   ├── vite.config.ts
│   └── ...
│
├── backend/
│   ├── prisma/
│   │   └── schema.prisma
│   ├── src/
│   │   └── ...
│   ├── prisma.config.ts
│   ├── package.json
│   └── ...
│
├── .gitignore
└── README.md
```

**Descripción de los directorios:**

- `frontend/`: contiene la interfaz de usuario.
- `frontend/src/`: contiene el código fuente del frontend.
- `backend/`: contiene la API y la lógica del servidor.
- `backend/src/`: contiene el código fuente del backend.
- `backend/prisma/`: contiene el esquema de datos de Prisma.
- `backend/prisma/schema.prisma`: define los modelos de la base de datos.
- `backend/prisma.config.ts`: contiene la configuración de Prisma, según la versión utilizada.
- `.gitignore`: especifica los archivos y directorios que Git debe excluir.
- `README.md`: documenta el proyecto y sus instrucciones de uso.

La estructura es referencial; los archivos pueden variar según el estado actual del repositorio.

## Instalación

### 1. Clonar el repositorio

Abre una terminal y ejecuta:

```bash
git clone https://github.com/TerroncitoDev08/Centro-Medico-UNI.git
```

Ingresa al directorio del proyecto:

```bash
cd Centro-Medico-UNI
```

### 2. Instalar las dependencias del frontend

```bash
cd frontend
npm install
```

### 3. Instalar las dependencias del backend

Desde el directorio raíz del proyecto:

```bash
cd ../backend
npm install
```

Cada módulo tiene sus propias dependencias, por lo que deben instalarse por separado.

## Variables de entorno

El backend necesita variables de entorno para configurar la conexión con PostgreSQL y otros parámetros de ejecución.

Crea un archivo `.env` dentro del directorio `backend/`:

```env
DATABASE_URL="postgresql://USUARIO:CONTRASEÑA@localhost:5432/NOMBRE_BD?schema=public"
PORT=3000
```

Reemplaza los valores de ejemplo por los datos de tu entorno local:

- `USUARIO`: usuario de PostgreSQL.
- `CONTRASEÑA`: contraseña del usuario.
- `NOMBRE_BD`: nombre de la base de datos.
- `PORT`: puerto en el que se ejecutará el servidor, si la aplicación utiliza esta variable.

**Importante:** No subas el archivo `.env` al repositorio. Asegúrate de que esté incluido en `.gitignore`.

Puedes proporcionar un archivo `.env.example` con valores ficticios para facilitar la configuración a otros desarrolladores:

```env
DATABASE_URL="postgresql://usuario:contraseña@localhost:5432/unisalud?schema=public"
PORT=3000
```

El nombre de la base de datos y el puerto deben coincidir con la configuración real del proyecto.

## Ejecución en desarrollo

El frontend y el backend se ejecutan en terminales independientes.

### 1. Iniciar el backend

Abre una terminal y ejecuta:

```bash
cd backend
npm run dev
```

El comando inicia el servidor en modo desarrollo, siempre que el script `dev` esté configurado en `backend/package.json`.

Si el servidor utiliza el puerto `3000`, estará disponible en:

```text
http://localhost:3000
```

### 2. Iniciar el frontend

Abre una segunda terminal desde el directorio raíz del proyecto:

```bash
cd frontend
npm run dev
```

Vite mostrará la dirección local para acceder a la aplicación. Habitualmente es:

```text
http://localhost:5173
```

Abre la dirección que aparezca en la terminal para visualizar el frontend.

## Comprobación del backend

Actualmente, el backend dispone de una ruta inicial de comprobación:

```http
GET /
```

Esta ruta permite verificar que el servidor responde a las solicitudes HTTP.

Puedes comprobarla desde el navegador accediendo a:

```text
http://localhost:3000/
```

También puedes utilizar una terminal:

```bash
curl http://localhost:3000/
```

La respuesta dependerá del contenido definido en la ruta principal del servidor.

Esta comprobación valida la respuesta del servidor, pero no garantiza por sí sola que la conexión con PostgreSQL funcione correctamente.

## Base de datos y Prisma

El proyecto utiliza Prisma ORM para definir los modelos de datos y facilitar las operaciones sobre PostgreSQL.

El esquema se encuentra en:

```text
backend/prisma/schema.prisma
```

Antes de ejecutar operaciones sobre la base de datos, verifica que:

1. PostgreSQL esté instalado y en ejecución.
2. La base de datos exista.
3. La variable `DATABASE_URL` contenga los datos de conexión correctos.
4. La configuración de Prisma corresponda a la versión instalada.

### Comandos de Prisma

Desde el directorio `backend/`, puedes consultar los comandos disponibles:

```bash
npx prisma --help
```

Para validar el esquema, si el comando es compatible con la configuración del proyecto:

```bash
npx prisma validate
```

Para generar el cliente de Prisma, si corresponde a la configuración utilizada:

```bash
npx prisma generate
```

Si el proyecto utiliza migraciones, estas deben crearse y aplicarse de acuerdo con el esquema y la configuración del entorno. No ejecutes migraciones sobre una base de datos compartida o importante sin verificar previamente sus efectos.

## Scripts disponibles

Los scripts se definen en los archivos `package.json` de cada módulo.

Para consultarlos, ejecuta desde el directorio correspondiente:

```bash
npm run
```

### Frontend

Los proyectos configurados con Vite suelen incluir scripts como:

```bash
npm run dev
npm run build
npm run preview
```

La disponibilidad de cada comando depende del `package.json` del frontend.

### Backend

El backend puede incluir scripts para desarrollo, compilación y ejecución. Consulta `backend/package.json` para utilizar los nombres exactos definidos en el proyecto.

## Flujo de trabajo con Git

Para revisar el estado de los archivos modificados:

```bash
git status
```

Para agregar los cambios:

```bash
git add .
```

Para crear un commit:

```bash
git commit -m "docs: actualizar README de UniSalud"
```

Para subir los cambios a la rama actual:

```bash
git push
```

Se recomienda utilizar mensajes de commit claros que describan el cambio realizado.

Ejemplos:

```bash
git commit -m "feat: agregar módulo de citas"
git commit -m "fix: corregir validación de horarios"
git commit -m "docs: actualizar documentación del proyecto"
git commit -m "refactor: reorganizar servicios del backend"
```

## Próximas funcionalidades

Las siguientes funcionalidades forman parte de la evolución prevista del proyecto:

- Diseño e implementación de la página de inicio de UniSalud.
- Consulta de servicios médicos y horarios disponibles.
- Formulario para solicitar citas.
- Visualización del estado de las solicitudes.
- Cancelación y gestión de citas.
- Panel administrativo para gestionar horarios y solicitudes.
- Implementación de endpoints para la API.
- Integración del frontend con el backend.
- Persistencia de datos mediante PostgreSQL y Prisma.
- Validación de datos y manejo de errores.
- Autenticación y autorización según los roles de usuario.
- Pruebas de funcionamiento y validación de requisitos.

La implementación de estas funcionalidades debe priorizar la integridad de las reservas, el control de acceso y la protección de los datos personales.

## Autores

**Proyecto:** UniSalud — Sistema Integral de Gestión de Atención Médica Universitaria.

**Desarrolladores:**

- Lesly Baltazar Alanoca
- Daniel Tomas Cordova Juscamaita

**Repositorio:** [Centro-Medico-UNI en GitHub](https://github.com/TerroncitoDev08/Centro-Medico-UNI)

---

*UniSalud es un proyecto académico en desarrollo orientado a mejorar la organización y el acceso a la atención médica universitaria.*
