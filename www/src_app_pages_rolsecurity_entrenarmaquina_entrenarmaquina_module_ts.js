"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_pages_rolsecurity_entrenarmaquina_entrenarmaquina_module_ts"],{

/***/ 90204:
/*!*************************************************************************************!*\
  !*** ./src/app/pages/rolsecurity/entrenarmaquina/entrenarmaquina-routing.module.ts ***!
  \*************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "EntrenarmaquinaPageRoutingModule": () => (/* binding */ EntrenarmaquinaPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var _entrenarmaquina_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./entrenarmaquina.page */ 7840);




const routes = [
    {
        path: '',
        component: _entrenarmaquina_page__WEBPACK_IMPORTED_MODULE_0__.EntrenarmaquinaPage
    }
];
let EntrenarmaquinaPageRoutingModule = class EntrenarmaquinaPageRoutingModule {
};
EntrenarmaquinaPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], EntrenarmaquinaPageRoutingModule);



/***/ }),

/***/ 63256:
/*!*****************************************************************************!*\
  !*** ./src/app/pages/rolsecurity/entrenarmaquina/entrenarmaquina.module.ts ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "EntrenarmaquinaPageModule": () => (/* binding */ EntrenarmaquinaPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 90587);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var _entrenarmaquina_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./entrenarmaquina-routing.module */ 90204);
/* harmony import */ var _entrenarmaquina_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./entrenarmaquina.page */ 7840);







let EntrenarmaquinaPageModule = class EntrenarmaquinaPageModule {
};
EntrenarmaquinaPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _entrenarmaquina_routing_module__WEBPACK_IMPORTED_MODULE_0__.EntrenarmaquinaPageRoutingModule
        ],
        declarations: [_entrenarmaquina_page__WEBPACK_IMPORTED_MODULE_1__.EntrenarmaquinaPage]
    })
], EntrenarmaquinaPageModule);



/***/ }),

/***/ 7840:
/*!***************************************************************************!*\
  !*** ./src/app/pages/rolsecurity/entrenarmaquina/entrenarmaquina.page.ts ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "EntrenarmaquinaPage": () => (/* binding */ EntrenarmaquinaPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _entrenarmaquina_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./entrenarmaquina.page.html?ngResource */ 70403);
/* harmony import */ var _entrenarmaquina_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./entrenarmaquina.page.scss?ngResource */ 16323);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var src_app_services_task_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/task.service */ 46138);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var _capacitor_camera__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @capacitor/camera */ 4241);
/* harmony import */ var _capacitor_filesystem__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @capacitor/filesystem */ 91662);




//importación de las rutas

//importación delos servicios de la api

//importacion de toaskcontroller



let EntrenarmaquinaPage = class EntrenarmaquinaPage {
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
        //this.traerfotol();
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
EntrenarmaquinaPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__.Router },
    { type: src_app_services_task_service__WEBPACK_IMPORTED_MODULE_2__.TaskService },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.ToastController }
];
EntrenarmaquinaPage = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_8__.Component)({
        selector: 'app-entrenarmaquina',
        template: _entrenarmaquina_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_entrenarmaquina_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], EntrenarmaquinaPage);



/***/ }),

/***/ 16323:
/*!****************************************************************************************!*\
  !*** ./src/app/pages/rolsecurity/entrenarmaquina/entrenarmaquina.page.scss?ngResource ***!
  \****************************************************************************************/
/***/ ((module) => {

module.exports = ".salida {\n  font-size: 40px;\n  background-color: transparent;\n}\n\n.elicono {\n  font-size: 130px;\n}\n\n.lafoto {\n  padding: 0.5em;\n  height: 8vh;\n  filter: drop-shadow(3px 4px 4px #444);\n}\n\n.lacard {\n  border-radius: 1rem;\n  filter: drop-shadow(3px 3px 3px #444);\n}\n\n.eltexto {\n  font-family: \"Quicksand\", sans-serif;\n}\n\n.titulos {\n  font-size: 35px;\n  font-family: \"Nanum Gothic\", sans-serif;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImVudHJlbmFybWFxdWluYS5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxlQUFBO0VBQ0EsNkJBQUE7QUFDSjs7QUFDQTtFQUNJLGdCQUFBO0FBRUo7O0FBQUE7RUFDSSxjQUFBO0VBQ0EsV0FBQTtFQUNBLHFDQUFBO0FBR0o7O0FBREE7RUFDSSxtQkFBQTtFQUNBLHFDQUFBO0FBSUo7O0FBREE7RUFDSSxvQ0FBQTtBQUlKOztBQURFO0VBQ0UsZUFBQTtFQUNBLHVDQUFBO0FBSUoiLCJmaWxlIjoiZW50cmVuYXJtYXF1aW5hLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5zYWxpZGF7XHJcbiAgICBmb250LXNpemU6IDQwcHg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcclxufVxyXG4uZWxpY29ub3tcclxuICAgIGZvbnQtc2l6ZTogMTMwcHg7XHJcbn1cclxuLmxhZm90b3tcclxuICAgIHBhZGRpbmc6IC41ZW07XHJcbiAgICBoZWlnaHQ6IDh2aDtcclxuICAgIGZpbHRlcjogZHJvcC1zaGFkb3coM3B4IDRweCA0cHggIzQ0NCk7XHJcbn1cclxuLmxhY2FyZHtcclxuICAgIGJvcmRlci1yYWRpdXM6IDFyZW07XHJcbiAgICBmaWx0ZXI6IGRyb3Atc2hhZG93KDNweCAzcHggM3B4ICM0NDQpO1xyXG59XHJcblxyXG4uZWx0ZXh0b3tcclxuICAgIGZvbnQtZmFtaWx5OiAnUXVpY2tzYW5kJywgc2Fucy1zZXJpZjtcclxuICB9XHJcblxyXG4gIC50aXR1bG9ze1xyXG4gICAgZm9udC1zaXplOiAzNXB4O1xyXG4gICAgZm9udC1mYW1pbHk6ICdOYW51bSBHb3RoaWMnLCBzYW5zLXNlcmlmO1xyXG4gIH0iXX0= */";

/***/ }),

/***/ 70403:
/*!****************************************************************************************!*\
  !*** ./src/app/pages/rolsecurity/entrenarmaquina/entrenarmaquina.page.html?ngResource ***!
  \****************************************************************************************/
/***/ ((module) => {

module.exports = "<!--***************** SCAN CAM *****************-->\r\n<!--***************** ABRIL 2022 *****************-->\r\n<!--*************** DESARROLADORES ***************** -->\r\n<!--**************** CAMILA PARDO *****************-->\r\n<!--**************** YESETH REYES *****************-->\r\n\r\n<ion-toolbar color=\"light\">\r\n  <ion-row>\r\n    <ion-col size=\"2\">\r\n      <ion-buttons>\r\n        <ion-menu-button color=\"dark\" menu=\"first\"></ion-menu-button>\r\n        <!--redirección a perfil presionando el nombre del usuario-->\r\n        <ion-button routerLink=\"/perfilseguridad\" expand=\"block\" fill=\"clear\" shape=\"round\" color=\"dark\">\r\n          <!--nombre del usuario-->\r\n          <h5 class=\"eltexto\">{{this.nombre}}</h5>\r\n        </ion-button>\r\n      </ion-buttons>\r\n    </ion-col>\r\n    <ion-col size=\"9\">\r\n    </ion-col>\r\n    <ion-col size=\"1\">\r\n      <!--botón de salida-->\r\n      <button class=\"salida\" (click)=\"salir()\">\r\n        <ion-icon name=\"log-out-outline\" color=\"dark\"></ion-icon>\r\n      </button>\r\n    </ion-col>\r\n  </ion-row>\r\n</ion-toolbar>\r\n\r\n<ion-content class=\"fondo\">\r\n  <ion-grid fixed>\r\n    <ion-row>\r\n      <ion-col size=\"12\">\r\n        <ion-text color=\"primary\">\r\n           <!--Titulo para indicar la foto-->\r\n          <h1 class=\"titulos\">Fotografía</h1>\r\n        </ion-text>\r\n      </ion-col>\r\n      <!--Explicacion para interaccion de usuario-->\r\n      <div class=\"ion-text-center\">\r\n        <h2 class=\"eltexto\">Presionar el boton de la parte inferior para iniciar la captura de fotos, seguir las recomendaciones dadas anteriormente.</h2>\r\n      </div>\r\n    </ion-row>\r\n  </ion-grid>\r\n  \r\n  <!-- Depliega el metodo de tomar una fotografia. -->\r\n  <ion-fab vertical=\"bottom\" horizontal=\"center\" slot=\"fixed\">\r\n    <ion-fab-button (click)=\"addPhotoToGallery()\">\r\n      <ion-icon name=\"camera\"></ion-icon>\r\n    </ion-fab-button>\r\n  </ion-fab>\r\n\r\n  <!-- ORganiza la foto tomada en la pag -->\r\n\r\n\r\n    <ion-grid>\r\n      <ion-row>\r\n         <!--especificación de espacios para imagenes cargadas en la plataforma-->\r\n        <ion-col size=\"6\" size-md=\"4\" size-lg=\"3\" *ngFor=\"let photo of photos; index as position\">\r\n          <ion-card\r\n            style=\"background-color: rgba(221, 221, 221, 0.707); box-shadow: 10px 5px 5px rgba(0, 0, 0, 0.275); border-radius: 10px;\">\r\n              <ion-card-content style=\"padding: 0;\">\r\n                <ion-img style=\"object-fit: cover; height: 30vh; max-width: 100%; border-radius: 10px; \"\r\n                  [src]=\"photo.webviewPath\" > </ion-img>\r\n              </ion-card-content>\r\n          </ion-card>\r\n        </ion-col>\r\n        \r\n      </ion-row>\r\n    </ion-grid>\r\n\r\n</ion-content>\r\n";

/***/ })

}]);
//# sourceMappingURL=src_app_pages_rolsecurity_entrenarmaquina_entrenarmaquina_module_ts.js.map