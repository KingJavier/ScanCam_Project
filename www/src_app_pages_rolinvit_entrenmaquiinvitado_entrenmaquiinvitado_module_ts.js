"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_pages_rolinvit_entrenmaquiinvitado_entrenmaquiinvitado_module_ts"],{

/***/ 4798:
/*!******************************************************************************************!*\
  !*** ./src/app/pages/rolinvit/entrenmaquiinvitado/entrenmaquiinvitado-routing.module.ts ***!
  \******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "EntrenmaquiinvitadoPageRoutingModule": () => (/* binding */ EntrenmaquiinvitadoPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var _entrenmaquiinvitado_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./entrenmaquiinvitado.page */ 89665);




const routes = [
    {
        path: '',
        component: _entrenmaquiinvitado_page__WEBPACK_IMPORTED_MODULE_0__.EntrenmaquiinvitadoPage
    }
];
let EntrenmaquiinvitadoPageRoutingModule = class EntrenmaquiinvitadoPageRoutingModule {
};
EntrenmaquiinvitadoPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], EntrenmaquiinvitadoPageRoutingModule);



/***/ }),

/***/ 70480:
/*!**********************************************************************************!*\
  !*** ./src/app/pages/rolinvit/entrenmaquiinvitado/entrenmaquiinvitado.module.ts ***!
  \**********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "EntrenmaquiinvitadoPageModule": () => (/* binding */ EntrenmaquiinvitadoPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 90587);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var _entrenmaquiinvitado_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./entrenmaquiinvitado-routing.module */ 4798);
/* harmony import */ var _entrenmaquiinvitado_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./entrenmaquiinvitado.page */ 89665);







let EntrenmaquiinvitadoPageModule = class EntrenmaquiinvitadoPageModule {
};
EntrenmaquiinvitadoPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _entrenmaquiinvitado_routing_module__WEBPACK_IMPORTED_MODULE_0__.EntrenmaquiinvitadoPageRoutingModule
        ],
        declarations: [_entrenmaquiinvitado_page__WEBPACK_IMPORTED_MODULE_1__.EntrenmaquiinvitadoPage]
    })
], EntrenmaquiinvitadoPageModule);



/***/ }),

/***/ 89665:
/*!********************************************************************************!*\
  !*** ./src/app/pages/rolinvit/entrenmaquiinvitado/entrenmaquiinvitado.page.ts ***!
  \********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "EntrenmaquiinvitadoPage": () => (/* binding */ EntrenmaquiinvitadoPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _entrenmaquiinvitado_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./entrenmaquiinvitado.page.html?ngResource */ 39291);
/* harmony import */ var _entrenmaquiinvitado_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./entrenmaquiinvitado.page.scss?ngResource */ 68224);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var src_app_services_task_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/task.service */ 46138);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var _capacitor_camera__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @capacitor/camera */ 4241);
/* harmony import */ var _capacitor_filesystem__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @capacitor/filesystem */ 91662);




//importación de las rutas

//importación delos servicios de la api

//importacion de toaskcontroller



let EntrenmaquiinvitadoPage = class EntrenmaquiinvitadoPage {
    constructor(router, foto, 
    //inyecta la importación de tosatcontroller
    toastController) {
        this.router = router;
        this.foto = foto;
        this.toastController = toastController;
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
        //se llama eel nombre del perfil en locaslstorage
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
        //muestra la foto en la vista
        this.numFotosAzure();
    }
    numFotosAzure() {
        const token = localStorage.getItem('token');
        this.foto.totalfoto(token).subscribe((res) => {
            const num = res;
            this.numero = res;
        });
    }
    salir() {
        //función de cerrarseción
        localStorage.clear();
        this.router.navigate(['login']);
    }
    traerfotol() {
        //funció que llama el servicio de traer la foto
        const token = localStorage.getItem('token');
        const idImgPerfil = localStorage.getItem('idImgPerfil');
        //console.log('Token -->',token);
        //console.log('imgPer -->',idImgPerfil);
        this.foto.traerfotoperfil(token, idImgPerfil).subscribe((res) => {
            //console.log(res.data.url);
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
                quality: 50
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
            const base64 = {
                base: base64Data,
            };
            const token = localStorage.getItem('token');
            this.foto.enviarfoto(token, base64).subscribe((res) => {
                //console.log(res);
                const correcto = res.dataImg;
                this.numFotosAzure();
                if (correcto === res.dataImg) {
                    this.chec('SE ENTRENO LA MAQUINA SATISFACTORIAMENTE', 4000);
                }
            }, error => {
                console.log(error);
                const err = error.error.msg;
                if (err === 'ROSTRO NO ENCONTRADO') {
                    this.errorl('DEBE APARECER UN ROSTRO EN LA FOTO', 5000);
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
EntrenmaquiinvitadoPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__.Router },
    { type: src_app_services_task_service__WEBPACK_IMPORTED_MODULE_2__.TaskService },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.ToastController }
];
EntrenmaquiinvitadoPage = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_8__.Component)({
        selector: 'app-entrenmaquiinvitado',
        template: _entrenmaquiinvitado_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_entrenmaquiinvitado_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], EntrenmaquiinvitadoPage);



/***/ }),

/***/ 68224:
/*!*********************************************************************************************!*\
  !*** ./src/app/pages/rolinvit/entrenmaquiinvitado/entrenmaquiinvitado.page.scss?ngResource ***!
  \*********************************************************************************************/
/***/ ((module) => {

module.exports = ".salida {\n  font-size: 40px;\n  background-color: transparent;\n}\n\n.elicono {\n  font-size: 130px;\n}\n\n.lafoto {\n  max-width: 125px;\n  height: 125px;\n  padding: 0.5em;\n  height: 8vh;\n  filter: drop-shadow(3px 4px 4px #444);\n}\n\n.lacard {\n  border-radius: 1rem;\n  filter: drop-shadow(3px 3px 3px #444);\n}\n\n.eltexto {\n  font-family: \"Quicksand\", sans-serif;\n}\n\n.titulos {\n  font-size: 35px;\n  font-family: \"Nanum Gothic\", sans-serif;\n}\n\n#numero {\n  font-family: \"Nanum Gothic\", sans-serif;\n  float: right;\n  display: flex;\n  vertical-align: super;\n}\n\n.numCar {\n  margin-top: -5.9%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImVudHJlbm1hcXVpaW52aXRhZG8ucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksZUFBQTtFQUNBLDZCQUFBO0FBQ0o7O0FBQ0E7RUFDSSxnQkFBQTtBQUVKOztBQUFBO0VBQ0ksZ0JBQUE7RUFDQSxhQUFBO0VBQ0EsY0FBQTtFQUNBLFdBQUE7RUFDQSxxQ0FBQTtBQUdKOztBQURBO0VBQ0ksbUJBQUE7RUFDQSxxQ0FBQTtBQUlKOztBQUZBO0VBQ0ksb0NBQUE7QUFLSjs7QUFIQTtFQUNFLGVBQUE7RUFDQSx1Q0FBQTtBQU1GOztBQUhBO0VBRUUsdUNBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtFQUNBLHFCQUFBO0FBS0Y7O0FBRkE7RUFDRSxpQkFBQTtBQUtGIiwiZmlsZSI6ImVudHJlbm1hcXVpaW52aXRhZG8ucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnNhbGlkYXtcclxuICAgIGZvbnQtc2l6ZTogNDBweDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xyXG59XHJcbi5lbGljb25ve1xyXG4gICAgZm9udC1zaXplOiAxMzBweDtcclxufVxyXG4ubGFmb3Rve1xyXG4gICAgbWF4LXdpZHRoOiAxMjVweDtcclxuICAgIGhlaWdodDogMTI1cHg7XHJcbiAgICBwYWRkaW5nOiAuNWVtO1xyXG4gICAgaGVpZ2h0OiA4dmg7XHJcbiAgICBmaWx0ZXI6IGRyb3Atc2hhZG93KDNweCA0cHggNHB4ICM0NDQpO1xyXG59XHJcbi5sYWNhcmR7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxcmVtO1xyXG4gICAgZmlsdGVyOiBkcm9wLXNoYWRvdygzcHggM3B4IDNweCAjNDQ0KTtcclxufVxyXG4uZWx0ZXh0b3tcclxuICAgIGZvbnQtZmFtaWx5OiAnUXVpY2tzYW5kJywgc2Fucy1zZXJpZjtcclxuICB9XHJcbi50aXR1bG9ze1xyXG4gIGZvbnQtc2l6ZTogMzVweDtcclxuICBmb250LWZhbWlseTogJ05hbnVtIEdvdGhpYycsIHNhbnMtc2VyaWY7XHJcbn1cclxuXHJcbiNudW1lcm97XHJcbiAgLy8gdGV4dC1hbGlnbjogcmlnaHQ7XHJcbiAgZm9udC1mYW1pbHk6ICdOYW51bSBHb3RoaWMnLCBzYW5zLXNlcmlmO1xyXG4gIGZsb2F0OiByaWdodDtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIHZlcnRpY2FsLWFsaWduOiBzdXBlcjtcclxufVxyXG5cclxuLm51bUNhcntcclxuICBtYXJnaW4tdG9wOiAtNS45JTtcclxufVxyXG4iXX0= */";

/***/ }),

/***/ 39291:
/*!*********************************************************************************************!*\
  !*** ./src/app/pages/rolinvit/entrenmaquiinvitado/entrenmaquiinvitado.page.html?ngResource ***!
  \*********************************************************************************************/
/***/ ((module) => {

module.exports = "<!--***************** SCAN CAM *****************-->\r\n<!--***************** ABRIL 2022 *****************-->\r\n<!--*************** DESARROLADORES ***************** -->\r\n<!--**************** CAMILA PARDO *****************-->\r\n<!--**************** YESETH REYES *****************-->\r\n\r\n<ion-toolbar color=\"light\">\r\n  <ion-row>\r\n    <ion-col size=\"2\">\r\n      <ion-buttons>\r\n        <ion-menu-button color=\"dark\" menu=\"first\"></ion-menu-button>\r\n        <!--redirección a perfil presionando el nombre del usuario-->\r\n        <ion-button routerLink=\"/perfilinvitado\" expand=\"block\" fill=\"clear\" shape=\"round\" color=\"dark\">\r\n          <!--nombre del usuario-->\r\n          <h5 class=\"eltexto\">{{this.nombre}}</h5>\r\n        </ion-button>\r\n      </ion-buttons>\r\n    </ion-col>\r\n    <ion-col size=\"9\">\r\n    </ion-col>\r\n    <ion-col size=\"1\">\r\n      <!--botón de salida-->\r\n      <button class=\"salida\" (click)=\"salir()\">\r\n        <ion-icon name=\"log-out-outline\" color=\"dark\"></ion-icon>\r\n      </button>\r\n    </ion-col>\r\n  </ion-row>\r\n</ion-toolbar>\r\n\r\n\r\n<ion-content class=\"fondo\">\r\n  <ion-grid fixed>\r\n    <ion-row>\r\n      <ion-col size=\"12\">\r\n        <ion-text color=\"primary\">\r\n          <h1 class=\"titulos\">Fotografía</h1>\r\n          <h4 class=\"numCar\" id=\"numero\">{{this.numero}} / 5</h4>\r\n        </ion-text>\r\n      </ion-col>\r\n      <!--Explicacion para interaccion de usuario-->\r\n      <div class=\"ion-text-center\">\r\n        <h2 class=\"eltexto\">Presionar el boton de la parte inferior para iniciar la captura de fotos, seguir las recomendaciones dadas anteriormente.</h2>\r\n      </div>\r\n    </ion-row>\r\n  </ion-grid>\r\n\r\n  <!-- Depliega el metodo de tomar una fotografia. -->\r\n  <ion-fab vertical=\"bottom\" horizontal=\"center\" slot=\"fixed\">\r\n    <ion-fab-button (click)=\"addPhotoToGallery()\">\r\n      <ion-icon name=\"camera\"></ion-icon>\r\n    </ion-fab-button>\r\n  </ion-fab>\r\n\r\n  <!-- ORganiza la foto tomada en la pag -->\r\n\r\n\r\n    <ion-grid>\r\n      <ion-row>\r\n        <!--especificación de espacios para imagenes cargadas en la plataforma-->\r\n        <ion-col size=\"6\" size-md=\"4\" size-lg=\"3\" *ngFor=\"let photo of photos; index as position\">\r\n          <ion-card\r\n            style=\"background-color: rgba(221, 221, 221, 0.707); box-shadow: 10px 5px 5px rgba(0, 0, 0, 0.275); border-radius: 10px;\">\r\n              <ion-card-content style=\"padding: 0;\">\r\n                <ion-img style=\"object-fit: cover; height: 30vh; max-width: 100%; border-radius: 10px; \"\r\n                  [src]=\"photo.webviewPath\" > </ion-img>\r\n              </ion-card-content>\r\n          </ion-card>\r\n        </ion-col>\r\n\r\n      </ion-row>\r\n    </ion-grid>\r\n\r\n</ion-content>\r\n";

/***/ })

}]);
//# sourceMappingURL=src_app_pages_rolinvit_entrenmaquiinvitado_entrenmaquiinvitado_module_ts.js.map