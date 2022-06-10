"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_pages_rolsecurity_camaraescaner_camaraescaner_module_ts"],{

/***/ 36813:
/*!*********************************************************************************!*\
  !*** ./src/app/pages/rolsecurity/camaraescaner/camaraescaner-routing.module.ts ***!
  \*********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CamaraescanerPageRoutingModule": () => (/* binding */ CamaraescanerPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var _camaraescaner_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./camaraescaner.page */ 68321);




const routes = [
    {
        path: '',
        component: _camaraescaner_page__WEBPACK_IMPORTED_MODULE_0__.CamaraescanerPage
    }
];
let CamaraescanerPageRoutingModule = class CamaraescanerPageRoutingModule {
};
CamaraescanerPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], CamaraescanerPageRoutingModule);



/***/ }),

/***/ 76414:
/*!*************************************************************************!*\
  !*** ./src/app/pages/rolsecurity/camaraescaner/camaraescaner.module.ts ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CamaraescanerPageModule": () => (/* binding */ CamaraescanerPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 90587);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var _camaraescaner_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./camaraescaner-routing.module */ 36813);
/* harmony import */ var _camaraescaner_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./camaraescaner.page */ 68321);







let CamaraescanerPageModule = class CamaraescanerPageModule {
};
CamaraescanerPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _camaraescaner_routing_module__WEBPACK_IMPORTED_MODULE_0__.CamaraescanerPageRoutingModule
        ],
        declarations: [_camaraescaner_page__WEBPACK_IMPORTED_MODULE_1__.CamaraescanerPage]
    })
], CamaraescanerPageModule);



/***/ }),

/***/ 68321:
/*!***********************************************************************!*\
  !*** ./src/app/pages/rolsecurity/camaraescaner/camaraescaner.page.ts ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CamaraescanerPage": () => (/* binding */ CamaraescanerPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _camaraescaner_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./camaraescaner.page.html?ngResource */ 48822);
/* harmony import */ var _camaraescaner_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./camaraescaner.page.scss?ngResource */ 43813);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var src_app_services_task_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/task.service */ 46138);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var _capacitor_camera__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @capacitor/camera */ 4241);
/* harmony import */ var _capacitor_filesystem__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @capacitor/filesystem */ 91662);
/* harmony import */ var ngx_socket_io__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ngx-socket-io */ 84935);




//importación de las rutas

//importación de los servicios de la api

//importacion de toaskcontroller




let CamaraescanerPage = class CamaraescanerPage {
    constructor(router, foto, 
    //inyecta la importación de tosatcontroller
    toastController, 
    //se llama a socket.io
    socket) {
        this.router = router;
        this.foto = foto;
        this.toastController = toastController;
        this.socket = socket;
        //? Matriz que contendra uan referencia a cada foto.
        this.photos = [];
        //? Convierte la imagen a base64
        this.convertBlobToBase64 = (blob) => new Promise((resolve, reject) => {
            const reader = new FileReader();
            reader.onerror = reject;
            reader.onload = () => {
                resolve(reader.result);
            };
            reader.readAsDataURL(blob);
            //console.log(reader);
        });
        //llamdo del nombre del localstorage
        this.nombre = localStorage.getItem('name');
    }
    errorl(mensaje, duracion) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(this, void 0, void 0, function* () {
            //función que hace el llamado de una alerta sobre un error
            const toast = yield this.toastController.create({
                message: mensaje,
                color: 'danger',
                duration: duracion,
            });
            toast.present();
        });
    }
    chec(mensaje, duracion) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(this, void 0, void 0, function* () {
            //función que hace el llamado de una alerta sobre un error
            const toast = yield this.toastController.create({
                message: mensaje,
                color: 'success',
                duration: duracion,
            });
            toast.present();
        });
    }
    ngOnInit() {
        //llamdo de la foto
        // this.traerfotol();
    }
    salir() {
        //función de cerrar seción
        localStorage.clear();
        this.router.navigate(['login']);
    }
    traerfotol() {
        //función de tarer la foto de los servicios de la api
        const token = localStorage.getItem('token');
        const idImgPerfil = localStorage.getItem('idImgPerfil');
        //console.log('Token -->',token);
        //console.log('imgPer -->',idImgPerfil);
        this.foto.traerfotoperfil(token, idImgPerfil).subscribe((res) => {
            // console.log(res.data.url);
            this.url = res.data.url;
        });
    }
    addPhotoToGallery() {
        this.addNewToGallery();
    }
    //? método para tomar una fotografia. devuelve un blob
    addNewToGallery() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(this, void 0, void 0, function* () {
            //? Tomar una foto
            const capturedPhoto = yield _capacitor_camera__WEBPACK_IMPORTED_MODULE_3__.Camera.getPhoto({
                resultType: _capacitor_camera__WEBPACK_IMPORTED_MODULE_3__.CameraResultType.Uri,
                source: _capacitor_camera__WEBPACK_IMPORTED_MODULE_3__.CameraSource.Camera,
                //?resolucion de la foto
                quality: 100
            });
            //? Guarda la imagen y la agrega a la colección de fotos.
            const savedImageFile = yield this.savePicture(capturedPhoto);
            //console.log(savedImageFile);
            //? unshift Inserta nuevos elementos al comienzo de una matriz y devuelve la nueva longitud de la matriz.
            this.photos.unshift(savedImageFile);
        });
    }
    savePicture(photo) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(this, void 0, void 0, function* () {
            //? Convierta la foto al formato base64, requerido por la API del sistema de archivos para guardar
            const base64Data = yield this.readAsBase64(photo);
            //? Escribir el archivo en el directorio de datos.
            const fileName = new Date().getTime() + '.jpeg';
            const savedFile = yield _capacitor_filesystem__WEBPACK_IMPORTED_MODULE_4__.Filesystem.writeFile({
                path: fileName,
                data: base64Data,
                directory: _capacitor_filesystem__WEBPACK_IMPORTED_MODULE_4__.Directory.Data,
            });
            //console.log('Chingada',savedFile);
            const base64simple = base64Data.split(',').pop();
            const base64 = {
                base: base64simple,
            };
            const token = localStorage.getItem('token');
            this.foto.enviarfototemp(token, base64).subscribe((res) => {
                // console.log(res);
                this.name = res.dataUser.name;
                this.apellido = res.dataUser.apellido;
                this.documento = res.dataUser.documento;
                this.telefono = res.dataUser.telefono;
                this.email = res.dataUser.email;
                this.role = res.dataUser.role[0];
                this.coincidencia = 100 * res.coincidencia;
                this.tipo = res.tipo.tipo;
                this.socket.emit('cliente:fototemp', {
                    res
                });
                this.socket.emit('cliente:estadisticas', {
                    res
                });
                //this.datosUser = res.datosUser;
                //this.datosazure = res.datosazure;
                const correcto = res.dataUser;
                if (correcto === res.dataUser) {
                    this.chec(res.dataUser.name, 4000);
                }
            }, error => {
                const err = error.error;
                console.log(err);
                if (err === 'ERROR ROSTRO NO ENCONTRADO') {
                    this.errorl('ROSTRO NO ENCONTRADO EN LA BASE DE DATOS', 5000);
                    this.socket.emit('prenderRojo');
                }
            });
            //? Use webPath para mostrar la nueva imagen en lugar de base64, ya que ya está cargada en la memoria.
            return {
                filepath: fileName,
                webviewPath: photo.webPath
            };
        });
    }
    readAsBase64(photo) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(this, void 0, void 0, function* () {
            //? Obtiene la foto, léala como un blob y luego conviértala al formato base64
            const response = yield fetch(photo.webPath);
            const blob = yield response.blob();
            //console.log('vaina loca',response);
            //console.log('vaina loca X2', blob);
            return yield this.convertBlobToBase64(blob);
        });
    }
};
CamaraescanerPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__.Router },
    { type: src_app_services_task_service__WEBPACK_IMPORTED_MODULE_2__.TaskService },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.ToastController },
    { type: ngx_socket_io__WEBPACK_IMPORTED_MODULE_8__.Socket }
];
CamaraescanerPage = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_9__.Component)({
        selector: 'app-camaraescaner',
        template: _camaraescaner_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_camaraescaner_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], CamaraescanerPage);



/***/ }),

/***/ 43813:
/*!************************************************************************************!*\
  !*** ./src/app/pages/rolsecurity/camaraescaner/camaraescaner.page.scss?ngResource ***!
  \************************************************************************************/
/***/ ((module) => {

module.exports = ".salida {\n  font-size: 40px;\n  background-color: transparent;\n}\n\n.elicono {\n  font-size: 130px;\n}\n\n.lafoto {\n  max-width: 125px;\n  height: 125px;\n  padding: 0.5em;\n  height: 8vh;\n  filter: drop-shadow(3px 4px 4px #444);\n}\n\n.lacard {\n  border-radius: 1rem;\n  filter: drop-shadow(3px 3px 3px #444);\n}\n\n.eltexto {\n  font-family: \"Quicksand\", sans-serif;\n}\n\n.titulos {\n  font-size: 35px;\n  font-family: \"Nanum Gothic\", sans-serif;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNhbWFyYWVzY2FuZXIucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksZUFBQTtFQUNBLDZCQUFBO0FBQ0o7O0FBQ0E7RUFDSSxnQkFBQTtBQUVKOztBQUFBO0VBQ0ksZ0JBQUE7RUFDQSxhQUFBO0VBQ0EsY0FBQTtFQUNBLFdBQUE7RUFDQSxxQ0FBQTtBQUdKOztBQUFBO0VBQ0ksbUJBQUE7RUFDQSxxQ0FBQTtBQUdKOztBQURBO0VBQ0ksb0NBQUE7QUFJSjs7QUFGRTtFQUNFLGVBQUE7RUFDQSx1Q0FBQTtBQUtKIiwiZmlsZSI6ImNhbWFyYWVzY2FuZXIucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnNhbGlkYXtcclxuICAgIGZvbnQtc2l6ZTogNDBweDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xyXG59XHJcbi5lbGljb25ve1xyXG4gICAgZm9udC1zaXplOiAxMzBweDtcclxufVxyXG4ubGFmb3Rve1xyXG4gICAgbWF4LXdpZHRoOiAxMjVweDtcclxuICAgIGhlaWdodDogMTI1cHg7XHJcbiAgICBwYWRkaW5nOiAuNWVtO1xyXG4gICAgaGVpZ2h0OiA4dmg7XHJcbiAgICBmaWx0ZXI6IGRyb3Atc2hhZG93KDNweCA0cHggNHB4ICM0NDQpO1xyXG59XHJcblxyXG4ubGFjYXJke1xyXG4gICAgYm9yZGVyLXJhZGl1czogMXJlbTtcclxuICAgIGZpbHRlcjogZHJvcC1zaGFkb3coM3B4IDNweCAzcHggIzQ0NCk7XHJcbn1cclxuLmVsdGV4dG97XHJcbiAgICBmb250LWZhbWlseTogJ1F1aWNrc2FuZCcsIHNhbnMtc2VyaWY7XHJcbiAgfVxyXG4gIC50aXR1bG9ze1xyXG4gICAgZm9udC1zaXplOiAzNXB4O1xyXG4gICAgZm9udC1mYW1pbHk6ICdOYW51bSBHb3RoaWMnLCBzYW5zLXNlcmlmO1xyXG4gIH1cclxuXHJcbiJdfQ== */";

/***/ }),

/***/ 48822:
/*!************************************************************************************!*\
  !*** ./src/app/pages/rolsecurity/camaraescaner/camaraescaner.page.html?ngResource ***!
  \************************************************************************************/
/***/ ((module) => {

module.exports = "<!--***************** SCAN CAM *****************-->\r\n<!--***************** ABRIL 2022 *****************-->\r\n<!--*************** DESARROLADORES ***************** -->\r\n<!--**************** CAMILA PARDO *****************-->\r\n<!--**************** YESETH REYES *****************-->\r\n\r\n<ion-toolbar color=\"light\">\r\n  <ion-row>\r\n    <ion-col size=\"2\">\r\n      <ion-buttons>\r\n        <ion-menu-button color=\"dark\" menu=\"first\"></ion-menu-button>\r\n        <!--Boton para llevar al Rol perfil seguridad -->\r\n          <ion-button routerLink=\"/perfilseguridad\" expand=\"block\" fill=\"clear\" shape=\"round\" color=\"dark\">\r\n            <!--Funcion para llamado de Usuario-->\r\n          <h5 class=\"eltexto\">{{this.nombre}}</h5>\r\n        </ion-button>\r\n      </ion-buttons>\r\n    </ion-col>\r\n    <ion-col size=\"9\">\r\n    </ion-col>\r\n    <ion-col size=\"1\">\r\n      <!--Boton salir de la camara escaner-->\r\n      <button class=\"salida\" (click)=\"salir()\">\r\n        <ion-icon name=\"log-out-outline\" color=\"dark\"></ion-icon>\r\n      </button>\r\n    </ion-col>\r\n  </ion-row>\r\n</ion-toolbar>\r\n\r\n<ion-content class=\"fondo\">\r\n  <ion-row class=\"ion-text-center\">\r\n    <ion-col size=\"5\"></ion-col>\r\n    <ion-col size=\"12\" size-sm=\"2\">\r\n      <ion-card class=\"lacard\" color=\"primary\">\r\n        <!--Funcion para añadir fotos-->\r\n        <button (click)=\"addPhotoToGallery()\">\r\n          <ion-icon id=\"icono\" name=\"camera\" class=\"elicono\"></ion-icon>\r\n        </button>\r\n      </ion-card>\r\n    </ion-col>\r\n    <ion-col size=\"9\"> </ion-col>\r\n  </ion-row>\r\n\r\n  <ion-row>\r\n    <ion-col size=\"12\" size-md=\"4\" >\r\n      <ion-card class=\"lacard\" style=\" height: 530px; \">\r\n        <ion-card-content class=\"eltexto\">\r\n          <!--Mostrar datos traidos de la base de datos por medio de funciones-->\r\n          <ion-item>\r\n            <!--Llamado del tipo de rol-->\r\n            <h2 class=\"eltexto\">TIPO: <strong>{{this.tipo}}</strong></h2>\r\n          </ion-item>\r\n\r\n          <ion-item class=\"ion-margin-vertical\" >\r\n            <!--Llamado del nombre de la base de datos-->\r\n            <h4 class=\"eltexto\">Nombre: {{this.name}}</h4>\r\n          </ion-item>\r\n\r\n          <ion-item class=\"ion-margin-vertical\" >\r\n            <!--LLamdo del appelido de la base de datos-->\r\n            <h4 class=\"eltexto\">Apellido: {{this.apellido}}</h4>\r\n          </ion-item>\r\n\r\n          <ion-item class=\"ion-margin-vertical\">\r\n            <!--Llamado del documento de la base de datos-->\r\n            <h4 class=\"eltexto\">Documento: {{this.documento}}</h4>\r\n          </ion-item>\r\n\r\n          <ion-item class=\"ion-margin-vertical\">\r\n            <!--LLamdo del email de la base de datos-->\r\n            <h4 class=\"eltexto\">Correo: {{this.email}}</h4>\r\n          </ion-item>\r\n\r\n          <ion-item class=\"ion-margin-vertical\">\r\n            <!--Llamado del telefono de la base de datos-->\r\n            <h4 class=\"eltexto\">Teléfono: {{this.telefono}}</h4>\r\n          </ion-item>\r\n\r\n          <ion-item class=\"ion-margin-vertical\">\r\n            <!--Llamado del rol de la base de datos-->\r\n            <h4 class=\"eltexto\">Rol: {{this.role}}</h4>\r\n          </ion-item>\r\n\r\n          <ion-item class=\"ion-margin-vertical\">\r\n            <!--Llamado de coincidencias de concidencia-->\r\n            <h4 class=\"eltexto\">Coincidencia: {{this.coincidencia}}%</h4>\r\n          </ion-item>\r\n        </ion-card-content>\r\n      </ion-card>\r\n    </ion-col>\r\n\r\n      <!-- ORganiza la foto tomada en la pag -->\r\n      \r\n      \r\n\r\n    <ion-grid fixed>\r\n      <ion-row>\r\n        <ion-col size=\"6\" size-lg=\"3\" *ngFor=\"let photo of photos;index as position\">\r\n        <ion-card\r\n        style=\"background-color: rgba(221, 221, 221, 0.707); box-shadow: 10px 5px 5px rgba(0, 0, 0, 0.275); border-radius: 10px;\">\r\n          <ion-card-content style=\"padding: 0;\">\r\n            <ion-img style=\"object-fit: cover; height: 30vh; max-width: 100%; border-radius: 10px;\"\r\n              [src]=\"photo.webviewPath\" > </ion-img>\r\n          </ion-card-content>\r\n      </ion-card>\r\n    </ion-col>\r\n      </ion-row>\r\n    </ion-grid>\r\n\r\n\r\n  </ion-row>\r\n\r\n\r\n</ion-content>\r\n";

/***/ })

}]);
//# sourceMappingURL=src_app_pages_rolsecurity_camaraescaner_camaraescaner_module_ts.js.map