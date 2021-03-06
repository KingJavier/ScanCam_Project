# ScanCam_Back

_El proyecto es un Sistema de informaci贸n para el control de Ingreso y Salida mediante reconocimiento Facial de los usuarios de la instituci贸n SENA (CBA) con simulaci贸n de talanquera mediante Arduino_

## Inicializar 馃く:

 * Al clonar o descargar el proyecto:
    * npm install o npm i

 * Para iniciar el proyecto de Node:
    * npm start o npm run dev

### Pre-requisitos 馃搵

_Tener un Arduino UNO contectado a uno de los puertos seriales del computador, con el protocolo Firmata. Para conocer m谩s informaci贸n ingresar a la Librer铆a JohnnyFive _
_Tener instalado Node.js, npm, un editor de c贸digo, tener una cuenta en mongo Atlas, tener una cuenta vigente en Azure, tener una cuenta en cloudinary, tener un email de google con OAuth para el envio de mails_

```
 * http://johnny-five.io/
 * https://nodejs.org/
 * https://www.npmjs.com/
 * https://azure.microsoft.com/
 * https://cloudinary.com/
 * https://developers.google.com/oauthplayground/
```

## Construido con 馃洜锔?

_El proyecto fue desarrollado con las siguientes herramientas_

* [Node](https://nodejs.org/es/)- Node y Express
* [Microsoft Azure](https://azure.microsoft.com/) - IA de Reconocimiento Facial
* [Mongo DB](https://www.mongodb.com/) - Base de Datos no relacional
* [Johnny-five](http://johnny-five.io/) - Librearia para controladores Arduino, en este caso Arduino UNO 

## Estructura de carpetas 馃搨:
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
## Configuracion de rutas 馃摗:
Todas las rutas estan definidas segun el schema a utilizar despues del |/api/|.

* URL desarrollo: 
   ``` http://localhost:3001/api/ ```

* URL produccion:
    ``` https://apiscancam01.herokuapp.com/api/ ```
    
* Documentacion de los servicios endpoint de la API REST:
  ``` https://documenter.getpostman.com/view/20115348/UVyn3JrP ```
  
## Recomendaciones 馃憖:
* Leer la documentacion interna de cada archivo para entender el proceso de la API
* Revisar siempre las respuestas del servidor
* Revisar las dependencias del package.json
---

## Licencia 馃搫

Este proyecto est谩 bajo la Licencia Copyright.

## Expresiones de Gratitud 馃巵

* Agradecimientos al equipo de desarrollo de la App, instructores y compa帽eros del SENA - ADSI 2252471  馃摙
* Prontamente una versi贸n 2.0 de la mano de mi equipo de trabajo, con animos de salir a tomar unas 馃嵑 o un caf茅 鈽? para celebrar la culminaci贸n del tecn贸logo. 

---
鈱笍 con 鉂わ笍 por  Javier Eudoro Rey| Ivan Daniel Baron 馃帀
