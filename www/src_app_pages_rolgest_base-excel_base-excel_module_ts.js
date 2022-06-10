"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_pages_rolgest_base-excel_base-excel_module_ts"],{

/***/ 68399:
/*!***********************************************************************!*\
  !*** ./src/app/pages/rolgest/base-excel/base-excel-routing.module.ts ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BaseExcelPageRoutingModule": () => (/* binding */ BaseExcelPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var _base_excel_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./base-excel.page */ 7778);




const routes = [
    {
        path: '',
        component: _base_excel_page__WEBPACK_IMPORTED_MODULE_0__.BaseExcelPage
    }
];
let BaseExcelPageRoutingModule = class BaseExcelPageRoutingModule {
};
BaseExcelPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], BaseExcelPageRoutingModule);



/***/ }),

/***/ 40623:
/*!***************************************************************!*\
  !*** ./src/app/pages/rolgest/base-excel/base-excel.module.ts ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BaseExcelPageModule": () => (/* binding */ BaseExcelPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 90587);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var _base_excel_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./base-excel-routing.module */ 68399);
/* harmony import */ var _base_excel_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./base-excel.page */ 7778);







let BaseExcelPageModule = class BaseExcelPageModule {
};
BaseExcelPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _base_excel_routing_module__WEBPACK_IMPORTED_MODULE_0__.BaseExcelPageRoutingModule
        ],
        declarations: [_base_excel_page__WEBPACK_IMPORTED_MODULE_1__.BaseExcelPage]
    })
], BaseExcelPageModule);



/***/ }),

/***/ 7778:
/*!*************************************************************!*\
  !*** ./src/app/pages/rolgest/base-excel/base-excel.page.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BaseExcelPage": () => (/* binding */ BaseExcelPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _base_excel_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./base-excel.page.html?ngResource */ 23348);
/* harmony import */ var _base_excel_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./base-excel.page.scss?ngResource */ 61209);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/platform-browser */ 50318);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var src_app_services_task_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/task.service */ 46138);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 93819);





//importacion de las rutas

//importacion de los servicios

//importacion de toaskcontroller

let BaseExcelPage = class BaseExcelPage {
    constructor(
    //se inyectan las rutas
    router, 
    //se llama el servicio para actualizar la foto
    usuarioServicio, 
    //se inyecta sanitizar
    sanitizer, 
    //inyecta la importación de tosatcontroller
    toastController) {
        this.router = router;
        this.usuarioServicio = usuarioServicio;
        this.sanitizer = sanitizer;
        this.toastController = toastController;
        //llamdo del archivo para subirlo
        this.archivos = [];
        this.nombre = localStorage.getItem('name');
    }
    errorl(mensaje, duracion) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__awaiter)(this, void 0, void 0, function* () {
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
        return (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__awaiter)(this, void 0, void 0, function* () {
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
        //muestra la foto de perfil
        //this.traerfotol();
    }
    salir() {
        //función de cerrar seción
        localStorage.clear();
        this.router.navigate(['login']);
    }
    traerfotol() {
        //función de traer la foto de perfil
        const token = localStorage.getItem('token');
        const idImgPerfil = localStorage.getItem('idImgPerfil');
        // console.log('Token -->',token);
        // console.log('imgPer -->',idImgPerfil);
        this.usuarioServicio.traerfotoperfil(token, idImgPerfil).subscribe((res) => {
            //console.log(res.data.url);
            this.url = res.data.url;
        });
    }
    capturarFoto(event) {
        //función del llamdo de la foto
        const archivoCapturado = event.target.files[0];
        //console.log(archivoCapturado);
        this.archivos.push(archivoCapturado);
        //console.log(event.target.files);
    }
    subirFoto() {
        //función que llama el servicio para actualixar la foto
        try {
            this.loading = true;
            const formularioDeDatos = new FormData();
            formularioDeDatos.append('MyExcel', this.archivos[0]);
            const foto = this.previsualizacion;
            const token = localStorage.getItem('token');
            this.usuarioServicio.enviarexcel(token, formularioDeDatos).subscribe((res) => {
                this.loading = false;
                //console.log('Respuesta del servidor', res);
                const correcto = res.msg;
                if (correcto === 'CREADO CON EXITO') {
                    this.chec('SE CREARON TODOS LOS USUARIOS CON EXITO', 4000);
                }
            }, error => {
                console.log(error);
                const err = error.error.msg;
                if (err === 'ERROR_DETALLE_ITEMS') {
                    this.errorl('DEBES SUBIR UN ARCHIVO EXCEL', 4000);
                }
            });
        }
        catch (e) {
            this.loading = false;
            console.log('ERROR', e);
        }
    }
};
BaseExcelPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__.Router },
    { type: src_app_services_task_service__WEBPACK_IMPORTED_MODULE_2__.TaskService },
    { type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_5__.DomSanitizer },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.ToastController }
];
BaseExcelPage = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.Component)({
        selector: 'app-base-excel',
        template: _base_excel_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_base_excel_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], BaseExcelPage);



/***/ }),

/***/ 61209:
/*!**************************************************************************!*\
  !*** ./src/app/pages/rolgest/base-excel/base-excel.page.scss?ngResource ***!
  \**************************************************************************/
/***/ ((module) => {

module.exports = ".salida {\n  font-size: 40px;\n  background-color: transparent;\n}\n\n.eltexto {\n  font-family: \"Quicksand\", sans-serif;\n}\n\n.titulos {\n  text-align: center;\n  font-weight: bold;\n  font-size: xx-large;\n  font-size: 35px;\n  font-family: \"Nanum Gothic\", sans-serif;\n  color: #3880ff;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImJhc2UtZXhjZWwucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksZUFBQTtFQUNBLDZCQUFBO0FBQ0o7O0FBQ0E7RUFDSSxvQ0FBQTtBQUVKOztBQUNFO0VBQ0Usa0JBQUE7RUFDRixpQkFBQTtFQUNBLG1CQUFBO0VBQ0EsZUFBQTtFQUNBLHVDQUFBO0VBQ0EsY0FBQTtBQUVGIiwiZmlsZSI6ImJhc2UtZXhjZWwucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnNhbGlkYXtcclxuICAgIGZvbnQtc2l6ZTogNDBweDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xyXG59XHJcbi5lbHRleHRve1xyXG4gICAgZm9udC1mYW1pbHk6ICdRdWlja3NhbmQnLCBzYW5zLXNlcmlmO1xyXG4gICAgXHJcbiAgfVxyXG4gIC50aXR1bG9ze1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIGZvbnQtd2VpZ2h0OmJvbGQ7XHJcbiAgZm9udC1zaXplOnh4LWxhcmdlO1xyXG4gIGZvbnQtc2l6ZTogMzVweDtcclxuICBmb250LWZhbWlseTogJ05hbnVtIEdvdGhpYycsIHNhbnMtc2VyaWY7XHJcbiAgY29sb3I6ICMzODgwZmY7XHJcbn1cclxuIl19 */";

/***/ }),

/***/ 23348:
/*!**************************************************************************!*\
  !*** ./src/app/pages/rolgest/base-excel/base-excel.page.html?ngResource ***!
  \**************************************************************************/
/***/ ((module) => {

module.exports = "\r\n<!--***************** SCAN CAM *****************-->\r\n<!--***************** ABRIL 2022 *****************-->\r\n<!--*************** DESARROLADORES ***************** -->\r\n<!--**************** CAMILA PARDO *****************-->\r\n<!--**************** YESETH REYES *****************-->\r\n\r\n<ion-toolbar color=\"light\">\r\n  <ion-row>\r\n    <ion-col size=\"2\">\r\n      <ion-buttons>\r\n        <ion-menu-button color=\"dark\" menu=\"first\"></ion-menu-button>\r\n        <!--redirección a perfil presionando el nombre del usuario-->\r\n        <ion-button routerLink=\"/perfilinvitado\" expand=\"block\" fill=\"clear\" shape=\"round\" color=\"dark\">\r\n          <!--nombre del usuario-->\r\n          <h5 class=\"eltexto\">{{this.nombre}}</h5>\r\n        </ion-button>\r\n      </ion-buttons>\r\n    </ion-col>\r\n    <ion-col size=\"9\">\r\n    </ion-col>\r\n    <ion-col size=\"1\">\r\n      <button class=\"salida\" (click)=\"salir()\">\r\n        <!--botón de salida-->\r\n        <ion-icon name=\"log-out-outline\" color=\"dark\"></ion-icon>\r\n      </button>\r\n    </ion-col>\r\n  </ion-row>\r\n</ion-toolbar>\r\n\r\n\r\n  <ion-content class=\"fondo\">\r\n    <ion-grid>\r\n      <ion-row >\r\n        <ion-col sizeMd=\"4\" offsetMd=\"4\">\r\n          <ion-card id=\"lacarta\">\r\n            <ion-card-content >\r\n              <ion-row>\r\n                <ion-col size=\"12\" class=\"text-center\" >\r\n                  <h1 class=\"titulos\" >Archivo de excel</h1>  \r\n                </ion-col>\r\n                <ion-col size=\"12\"></ion-col>\r\n                  <ion-col size=\"12\"></ion-col>\r\n                <ion-row>\r\n                  <ion-col size=\"12\">\r\n                    <h2 class=\"eltexto\">En este apartado podra seleccionar un archivo excel para facilitar el registro de los usuarios.</h2>\r\n                  </ion-col>\r\n                  <ion-col size=\"12\"></ion-col>\r\n                  <ion-col size=\"12\"></ion-col>\r\n                  <ion-col size=\"12\"></ion-col>\r\n                  <ion-col size=\"12\"></ion-col>\r\n                  <ion-col size=\"12\">\r\n                    \r\n                    <div class=\"ion-text-center\">\r\n                      <div class=\"row\">\r\n                        <div class=\"col-lg-4 col-md-4 col-sm-12\">\r\n                          <input (change)=\"capturarFoto($event)\" type=\"file\" id=\"boton2\">\r\n                        </div>\r\n                        <!--Botón para cargar la base de datos de excel-->\r\n                        <div class=\"col-lg-4 col-md-4 col-sm-12\">\r\n                          <ion-button type=\"button\" [disabled]=\"loading\"  (click)=\"subirFoto()\" color=\"primary\" class=\"ion-margin-top\" id=\"boton\">\r\n                            {{(loading) ? 'Cargando...' : 'Actualizar'}}\r\n                          </ion-button>\r\n                        </div>\r\n                      </div>\r\n                    </div>\r\n                  </ion-col>\r\n              </ion-row>\r\n              </ion-row>\r\n            </ion-card-content>\r\n        </ion-card>\r\n        </ion-col>\r\n      </ion-row>\r\n    </ion-grid>\r\n  </ion-content>\r\n\r\n";

/***/ })

}]);
//# sourceMappingURL=src_app_pages_rolgest_base-excel_base-excel_module_ts.js.map