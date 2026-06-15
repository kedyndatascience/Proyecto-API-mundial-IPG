# Proyecto-API-mundial-IPG
Este es un repositorio para la asignatura de PROGRAMACIÓN BACKEND del instituto IPG

DESCRIPCION DEL PROYECTO

Este proyecto corresponde a la creación de una API RESTful básica utilizando Node.js y Express.js, desarrollada en Visual Studio Code.
La API permite gestionar datos relacionados con equipos del Mundial de Fútbol, utilizando operaciones CRUD (Crear, Leer, Actualizar y Eliminar).

El objetivo principal fue comprender:
La estructura de un servidor con Express
El manejo de rutas y métodos HTTP
El uso de JSON como formato de intercambio de datos
La organización del proyecto en archivos separados
El uso de Git y GitHub para control de versiones

Tecnologías utilizadas
Node.js
Express.js
Visual Studio Code
Git & GitHub
Postman (para pruebas de la API)

ESTRUCTURA DEL PROYECTO 

proyecto-api/
│
├── data.js
├── index.js
├── routes.js
├── package.json
└── .gitignore

data.js
En este archivo se definió un arreglo con datos del Mundial de Fútbol.
Cada registro contiene:

id
equipo
grupo

index.js
Aquí se configuró el servidor Express, definiendo:

El puerto de ejecución
La ruta base /api
La importación de las rutas desde routes.js

routes.js
Aquí se implementaron las rutas CRUD:

GET → Listar equipos
GET /:id → Obtener un equipo por ID
POST → Agregar un nuevo equipo
PUT /:id → Actualizar un equipo existente
DELETE /:id → Eliminar un equipo

COMO SE EJECUTÓ EL PROYECTO:

1) instalar las dependencias:

npm install

2) Ejecutar el servidor:

node index.js

3) Abrir en el navegador o Postman:

http://localhost:3000/api/equipos

PRUEBAS CON POSTMAN
tomo un tiempo comprender como utilizarlo pero luego se hicieron pruebas con: 

GET - Listar equipos
GET http://localhost:3000/api/equipos

POST – Crear equipo
Body → raw → JSON: 

{
  "equipo": "Chile",
  "grupo": "D"
}

PUT – Actualizar equipo
PUT http://localhost:3000/api/equipos/3

body:
{
  "equipo": "Francia",
  "grupo": "Z"
}

DELETE -Eliminar equipo
DELETE http://localhost:3000/api/equipos/7

Control de versiones con Git y GitHub
Se inicializó el repositorio con git init
Se agregaron los archivos con git add .
Se creó el primer commit con git commit -m "API Mundial 2026 lista"
Se conectó el repositorio local con GitHub
Se realizó el push final al repositorio remoto

Conclusión
Este proyecto permitió comprender el funcionamiento de una API REST con Express, el manejo de rutas, el uso de JSON, y la importancia del control de versiones con Git y GitHub.
Además, se practicó el uso de Postman para probar endpoints y validar el correcto funcionamiento del servidor. tomo un tiempo aproximado de 6 horas
