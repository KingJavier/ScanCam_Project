# ScanCam_Back

_El proyecto es un Sistema de información para el control de Ingreso y Salida mediante reconocimiento Facial de los usuarios de la institución SENA (CBA) con simulación de talanquera mediante Arduino_

## Inicializar 🤯:

 * Al clonar o descargar el proyecto:
    * npm install o npm i

 * Para iniciar el proyecto de Node:
    * npm start o npm run dev

### Pre-requisitos 📋

_Tener un Arduino UNO contectado a uno de los puertos seriales del computador, con el protocolo Firmata. Para conocer más información ingresar a la Librería JohnnyFive _
_Tener instalado Node.js, npm, un editor de código, tener una cuenta en mongo Atlas, tener una cuenta vigente en Azure, tener una cuenta en cloudinary, tener un email de google con OAuth para el envio de mails_

```
 * http://johnny-five.io/
 * https://nodejs.org/
 * https://www.npmjs.com/
 * https://azure.microsoft.com/
 * https://cloudinary.com/
 * https://developers.google.com/oauthplayground/
```

## Construido con 🛠️

_El proyecto fue desarrollado con las siguientes herramientas_

* [Node](https://nodejs.org/es/)- Node y Express
* [Microsoft Azure](https://azure.microsoft.com/) - IA de Reconocimiento Facial
* [Mongo DB](https://www.mongodb.com/) - Base de Datos no relacional
* [Johnny-five](http://johnny-five.io/) - Librearia para controladores Arduino, en este caso Arduino UNO 

## Estructura de carpetas 📂:
_Una estructura de carpetas simple y entendible para un entorno backend en una API REST_
```
    |_Archivos principales
    |__Controllers
        |__Archivos de controladores
    |__Config
        |__Archivo de configuracion DB
    |__Utils
        |__Archivos para ayudas (helper)
    |__Models
        |__Archivos de estructura de la db en Mongo
    |__Middleware
        |__Archivos para diferrentes validadores (middleware)
    |__Routes
        |__Archivos de las diferentes rutas para el control de los endpoints
    |__Validators
        |__Archivos para el control de posteo de datos en Mongo
```
## Configuracion de rutas 📡:
Todas las rutas estan definidas segun el schema a utilizar despues del |/api/|.

* URL desarrollo: 
   ``` http://localhost:3001/api/ ```

* URL produccion:
    ``` https://apiscancam01.herokuapp.com/api/ ```
    
* Documentacion de los servicios endpoint de la API REST:
  ``` https://documenter.getpostman.com/view/20115348/UVyn3JrP ```
  
## Recomendaciones 👀:
* Leer la documentacion interna de cada archivo para entender el proceso de la API
* Revisar siempre las respuestas del servidor
* Revisar las dependencias del package.json
---

## Licencia 📄

Este proyecto está bajo la Licencia Copyright.

## Expresiones de Gratitud 🎁

* Agradecimientos al equipo de desarrollo de la App, instructores y compañeros del SENA - ADSI 2252471  📢
* Prontamente una versión 2.0 de la mano de mi equipo de trabajo, con animos de salir a tomar unas 🍺 o un café ☕ para celebrar la culminación del tecnólogo. 

---
⌨️ con ❤️ por  Javier Eudoro Rey| Ivan Daniel Baron 🎉
