# Proyecto CRUD

Este proyecto es una API RESTful para la gestión de tareas, roles y posts utilizando operaciones CRUD (Crear, Leer, Actualizar y Eliminar). La API está desarrollada en Node.js con Express y cuenta con documentación integrada mediante Swagger.

## Tabla de Contenidos

- [Descripción](#descripción)
- [Tecnologías Utilizadas](#tecnologías-utilizadas)
- [Instalación](#instalación)
- [Ejecución del Proyecto](#ejecución-del-proyecto)
- [Documentación de la API](#documentación-de-la-api)
- [Endpoints Principales](#endpoints-principales)
  - [Tareas (Tasks)](#tareas-tasks)
  - [Roles](#roles)
  - [Posts](#posts)
- [Pruebas de la API](#pruebas-de-la-api)
- [Contribución](#contribución)
- [Licencia](#licencia)
- [Contacto](#contacto)

## Descripción

El objetivo de este proyecto es ofrecer una API sencilla y estructurada que permita la organización y administración de información a través de endpoints bien definidos. La API está diseñada para gestionar:
- **Tareas (Tasks):** Permite crear, listar, actualizar y eliminar tareas.
- **Roles:** Permite la administración de roles, útiles para el control de acceso y permisos.
- **Posts:** Facilita la creación y gestión de contenido en forma de posts.

## Tecnologías Utilizadas

- **Node.js** y **Express:** Para la creación del servidor y manejo de rutas.
- **Swagger:** Para la documentación interactiva de la API.
- **npm:** Gestión de dependencias.

*$$ Instalación $$*
Pasos para la ejecución
Clonar el repositorio
###  Abre una terminal y ejecuta el siguiente comando para clonar el proyecto desde GitHub:

bash
Copiar
Editar
git clone https://github.com/eder1104/PROYECTO-CRUD.git
Acceder al directorio del proyecto
### Ingresa al directorio clonado:

bash
Copiar
Editar
cd PROYECTO-CRUD
Instalar dependencias
### Una vez en el directorio, instala todas las dependencias necesarias con:

bash
Copiar
Editar
npm install
Ejecutar el proyecto
### Levanta el servidor local usando el comando que inicia el modo de desarrollo:

bash
Copiar
Editar
npm run dev
### El servidor debería iniciarse, generalmente en el puerto 3000 (o el que esté configurado).

**Verificar el funcionamiento**

### Abre tu navegador y accede a:
http://localhost:3000/api/v1
### para comprobar que el servidor responde correctamente.
Si se integró Swagger, probablemente podrás acceder a la documentación de la API en una ruta similar a:
http://localhost:3000/api-docs
### Requisitos Previos

- [Node.js](https://nodejs.org/) (v14 o superior)
- [Git](https://git-scm.com/)

### Pasos de Instalación

1. **Clonar el repositorio**

   Abre una terminal y ejecuta:
   ```bash
   git clone https://github.com/eder1104/PROYECTO-CRUD.git
   ```

2. **Acceder al directorio del proyecto**

   ```bash
   cd PROYECTO-CRUD
   ```

3. **Instalar dependencias**

   Ejecuta:
   ```bash
   npm install
   ```

## Ejecución del Proyecto

Para levantar el servidor en modo desarrollo, utiliza el siguiente comando:
```bash
npm run dev
```
El servidor se iniciará, generalmente en el puerto `3000` (o el puerto configurado por defecto).

## Documentación de la API

La documentación interactiva de la API se encuentra integrada con Swagger. Una vez que el servidor esté en funcionamiento, accede a:
```
http://localhost:3000/api-docs
```
Desde esta interfaz podrás ver todos los endpoints definidos, sus parámetros y probarlos directamente.


### Tareas (Tasks)
- **GET /tasks**  
  Lista todas las tareas registradas.
- **POST /tasks**  
  Crea una nueva tarea.
- **GET /tasks/{id}**  
  Consulta una tarea específica por su ID.
- **PUT /tasks/{id}**  
  Actualiza la información de una tarea.
- **DELETE /tasks/{id}**  
  Elimina una tarea.

### Roles
- **GET /roles**  
  Lista todos los roles.
- **POST /roles**  
  Crea un nuevo rol.
- **GET /roles/{id}**  
  Consulta un rol específico por su ID.
- **PUT /roles/{id}**  
  Actualiza la información de un rol.
- **DELETE /roles/{id}**  
  Elimina un rol.

### Posts
- **GET /posts**  
  Lista todos los posts.
- **POST /posts**  
  Crea un nuevo post.
- **GET /posts/{id}**  
  Consulta un post específico por su ID.
- **PUT /posts/{id}**  
  Actualiza la información de un post.
- **DELETE /posts/{id}**  
  Elimina un post.

## Pruebas de la API

Puedes utilizar herramientas como [Postman](https://www.postman.com/) para enviar peticiones a la API y verificar que los endpoints funcionen según lo esperado.

## Licencia

Este proyecto se distribuye bajo la [MIT License](LICENSE).

¡Gracias por visitar este proyecto y esperamos tus aportaciones!
