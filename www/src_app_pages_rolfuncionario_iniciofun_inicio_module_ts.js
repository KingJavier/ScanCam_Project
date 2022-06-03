"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_pages_rolfuncionario_iniciofun_inicio_module_ts"],{

/***/ 85491:
/*!*************************************************************************!*\
  !*** ./src/app/pages/rolfuncionario/iniciofun/inicio-routing.module.ts ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "InicioPageRoutingModule": () => (/* binding */ InicioPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var _inicio_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./inicio.page */ 48685);




const routes = [
    {
        path: '',
        component: _inicio_page__WEBPACK_IMPORTED_MODULE_0__.InicioPage
    }
];
let InicioPageRoutingModule = class InicioPageRoutingModule {
};
InicioPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], InicioPageRoutingModule);



/***/ }),

/***/ 59344:
/*!*****************************************************************!*\
  !*** ./src/app/pages/rolfuncionario/iniciofun/inicio.module.ts ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "InicioPageModule": () => (/* binding */ InicioPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 90587);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var _inicio_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./inicio-routing.module */ 85491);
/* harmony import */ var _inicio_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./inicio.page */ 48685);







let InicioPageModule = class InicioPageModule {
};
InicioPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _inicio_routing_module__WEBPACK_IMPORTED_MODULE_0__.InicioPageRoutingModule
        ],
        declarations: [_inicio_page__WEBPACK_IMPORTED_MODULE_1__.InicioPage]
    })
], InicioPageModule);



/***/ }),

/***/ 48685:
/*!***************************************************************!*\
  !*** ./src/app/pages/rolfuncionario/iniciofun/inicio.page.ts ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "InicioPage": () => (/* binding */ InicioPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _inicio_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./inicio.page.html?ngResource */ 24597);
/* harmony import */ var _inicio_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./inicio.page.scss?ngResource */ 96227);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var src_app_services_task_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/task.service */ 46138);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ 93819);




//importación de las rutas

//importación de los servicios de la api


let InicioPage = class InicioPage {
    constructor(router, usuarioServicio, toastController) {
        this.router = router;
        this.usuarioServicio = usuarioServicio;
        this.toastController = toastController;
        //llamdo del nombre del localstorage
        this.nombre = localStorage.getItem('name');
    }
    alert(mensaje, duracion) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__awaiter)(this, void 0, void 0, function* () {
            //función que hace el llamado de una alerta sobre un error
            const toast = yield this.toastController.create({
                message: mensaje,
                color: 'warning',
                duration: duracion,
            });
            toast.present();
        });
    }
    ngOnInit() {
        //llamdo de la foto
        //this.traerfotol();
        this.numFotosAzure();
    }
    numFotosAzure() {
        const token = localStorage.getItem('token');
        this.usuarioServicio.totalfoto(token).subscribe((res) => {
            const num = res;
            if (num < 5) {
                this.alert('POR FAVOR ENTRENAR LA MAQUINA', 4000);
            }
        });
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
        this.usuarioServicio.traerfotoperfil(token, idImgPerfil).subscribe((res) => {
            //console.log(res.data.url);
            this.url = res.data.url;
        });
    }
};
InicioPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__.Router },
    { type: src_app_services_task_service__WEBPACK_IMPORTED_MODULE_2__.TaskService },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.ToastController }
];
InicioPage = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.Component)({
        selector: 'app-inicio',
        template: _inicio_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_inicio_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], InicioPage);



/***/ }),

/***/ 96227:
/*!****************************************************************************!*\
  !*** ./src/app/pages/rolfuncionario/iniciofun/inicio.page.scss?ngResource ***!
  \****************************************************************************/
/***/ ((module) => {

module.exports = ".salida {\n  font-size: 40px;\n  background-color: transparent;\n}\n\n.elicono {\n  font-size: 130px;\n}\n\n.lafoto {\n  padding: 0.5em;\n  height: 8vh;\n  filter: drop-shadow(3px 4px 4px #444);\n}\n\n.lacard {\n  border-radius: 1rem;\n  box-shadow: 0px 10px 10px rgba(0, 0, 0, 0.537);\n}\n\n.ion-avatar {\n  display: flex;\n  justify-content: center;\n  margin: 0 auto;\n}\n\n.titulos {\n  text-align: center;\n  font-weight: bold;\n  font-size: 35px;\n  font-family: \"Nanum Gothic\", sans-serif;\n}\n\n.titulo {\n  text-align: center;\n  font-weight: bold;\n  margin: 20px;\n  font-size: 35px;\n  font-family: \"Nanum Gothic\", sans-serif;\n}\n\n.eltexto {\n  font-family: \"Quicksand\", sans-serif;\n}\n\n.eltextos {\n  font-family: \"Quicksand\", sans-serif;\n  font-size: 25px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluaWNpby5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxlQUFBO0VBQ0EsNkJBQUE7QUFDSjs7QUFDQTtFQUNJLGdCQUFBO0FBRUo7O0FBQUE7RUFDSSxjQUFBO0VBQ0EsV0FBQTtFQUNBLHFDQUFBO0FBR0o7O0FBQUE7RUFDSSxtQkFBQTtFQUNBLDhDQUFBO0FBR0o7O0FBREE7RUFDSSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxjQUFBO0FBSUo7O0FBREE7RUFDSSxrQkFBQTtFQUNBLGlCQUFBO0VBQ0ksZUFBQTtFQUNBLHVDQUFBO0FBSVI7O0FBRkU7RUFDRSxrQkFBQTtFQUNBLGlCQUFBO0VBQ0EsWUFBQTtFQUNJLGVBQUE7RUFDQSx1Q0FBQTtBQUtSOztBQUhFO0VBQ0Usb0NBQUE7QUFNSjs7QUFKRTtFQUNFLG9DQUFBO0VBQ0EsZUFBQTtBQU9KIiwiZmlsZSI6ImluaWNpby5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuc2FsaWRhe1xyXG4gICAgZm9udC1zaXplOiA0MHB4O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XHJcbn1cclxuLmVsaWNvbm97XHJcbiAgICBmb250LXNpemU6IDEzMHB4O1xyXG59XHJcbi5sYWZvdG97XHJcbiAgICBwYWRkaW5nOiAuNWVtO1xyXG4gICAgaGVpZ2h0OiA4dmg7XHJcbiAgICBmaWx0ZXI6IGRyb3Atc2hhZG93KDNweCA0cHggNHB4ICM0NDQpO1xyXG59XHJcbiBcclxuLmxhY2FyZHtcclxuICAgIGJvcmRlci1yYWRpdXM6IDFyZW07XHJcbiAgICBib3gtc2hhZG93OiAwcHggMTBweCAxMHB4IHJnYmEoMCwgMCwgMCwgMC41MzcpO1xyXG59XHJcbi5pb24tYXZhdGFye1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgbWFyZ2luOiAwIGF1dG87XHJcbn1cclxuXHJcbi50aXR1bG9ze1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgZm9udC13ZWlnaHQ6Ym9sZDtcclxuICAgICAgICBmb250LXNpemU6IDM1cHg7XHJcbiAgICAgICAgZm9udC1mYW1pbHk6ICdOYW51bSBHb3RoaWMnLCBzYW5zLXNlcmlmO1xyXG4gIH1cclxuICAudGl0dWxve1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgZm9udC13ZWlnaHQ6Ym9sZDtcclxuICAgIG1hcmdpbjogMjBweDtcclxuICAgICAgICBmb250LXNpemU6IDM1cHg7XHJcbiAgICAgICAgZm9udC1mYW1pbHk6ICdOYW51bSBHb3RoaWMnLCBzYW5zLXNlcmlmO1xyXG4gIH1cclxuICAuZWx0ZXh0b3tcclxuICAgIGZvbnQtZmFtaWx5OiAnUXVpY2tzYW5kJywgc2Fucy1zZXJpZjtcclxuICB9XHJcbiAgLmVsdGV4dG9ze1xyXG4gICAgZm9udC1mYW1pbHk6ICdRdWlja3NhbmQnLCBzYW5zLXNlcmlmO1xyXG4gICAgZm9udC1zaXplOiAyNXB4O1xyXG4gIH0iXX0= */";

/***/ }),

/***/ 24597:
/*!****************************************************************************!*\
  !*** ./src/app/pages/rolfuncionario/iniciofun/inicio.page.html?ngResource ***!
  \****************************************************************************/
/***/ ((module) => {

module.exports = "<!--***************** SCAN CAM *****************-->\r\n<!--***************** ABRIL 2022 *****************-->\r\n<!--*************** DESARROLADORES ***************** -->\r\n<!--**************** CAMILA PARDO *****************-->\r\n<!--**************** YESETH REYES *****************-->\r\n\r\n<ion-toolbar color=\"light\">\r\n  <ion-row>\r\n    <ion-col size=\"2\">\r\n      <ion-buttons>\r\n        <ion-menu-button color=\"dark\" menu=\"first\"></ion-menu-button>\r\n         <!--redirección a perfil presionando el nombre del usuario-->\r\n        <ion-button routerLink=\"/perfilinvitado\" expand=\"block\" fill=\"clear\" shape=\"round\" color=\"dark\">\r\n          <!--nombre del usuario-->\r\n          <h5 class=\"eltexto\">{{this.nombre}}</h5>\r\n        </ion-button>\r\n      </ion-buttons>\r\n    </ion-col>\r\n    <ion-col size=\"9\">\r\n    </ion-col>\r\n    <ion-col size=\"1\">\r\n       <!--botón de salida-->\r\n      <button class=\"salida\" (click)=\"salir()\">\r\n        <ion-icon name=\"log-out-outline\" color=\"dark\"></ion-icon>\r\n      </button>\r\n    </ion-col>\r\n  </ion-row>\r\n</ion-toolbar>\r\n\r\n\r\n<ion-content id=\"texto\" class=\"fondo\">\r\n  <ion-grid fixed>\r\n    \r\n\r\n    <ion-col size=\"12\">\r\n      <ion-text color=\"primary\">\r\n        <!--Titulo de Bienvenida -->\r\n        <h1 class=\"titulos\">¡Bienvenido a ScanCam!</h1>\r\n      </ion-text>\r\n    </ion-col>\r\n\r\n\r\n    <ion-col size=\"12\">\r\n      <!--definición de acción a seguir-->\r\n      <div class=\"ion-text-center\">\r\n        <h2 class=\"eltexto\">En este apartado encontrara el instructivo para entrenar la identificación del reconocimiento facial.</h2>\r\n      </div>\r\n      <ion-row>\r\n          <ion-col size=\"collaps\" size-lg=\"3\"  sizeXs=\"collaps\"></ion-col>\r\n          <ion-col ion-col size-sm=\"12\"  size-lg=\"6\">\r\n               <ion-card class=\"lacard\">\r\n              <ion-card-header>\r\n                <!--nombre de ubicación-->\r\n              <ion-card-title class=\"ion-text-center\"><h1 style=\"margin: 35px;\" class=\"eltexto\">Frontal</h1></ion-card-title>\r\n              <ion-card-subtitle class=\"ion-text-center\"><h2 class=\"eltexto\">Ubicación requerida para la foto</h2></ion-card-subtitle>\r\n            </ion-card-header>\r\n            <!--Explicación de posición para captura de -imagen-->\r\n            <ion-card-content>\r\n              <h3 class=\"eltexto\">Ubiquese frente a la camara como se muestra en la imagen de ejemplo a continuacion.</h3>\r\n            </ion-card-content>\r\n            <!--imagenuno-->\r\n            <ion-col size=\"12\" class=\"ion-avatar\">\r\n              <img width=\"300rem\" src=\"../../../../assets/Imagenes/costado.PNG\" alt=\"cara_central\" style=\"text-align: center\">\r\n            </ion-col>\r\n\r\n          </ion-card>\r\n          </ion-col>\r\n        <ion-col size=\"collaps\" size-lg=\"3\" sizeXs=\"collaps\"></ion-col>\r\n\r\n\r\n        <ion-col size-sm=\"12\"  size-lg=\"3\">\r\n          <ion-card class=\"lacard\">\r\n            <ion-card-header>\r\n              <!--nombre de ubicación-->\r\n              <ion-card-title class=\"ion-text-center\">\r\n                <h1 class=\"eltextos\">Lateral Izquierdo</h1>\r\n              </ion-card-title>\r\n              <ion-card-subtitle class=\"ion-text-center\">\r\n                <h2 class=\"eltexto\">Ubicación requerida para la foto</h2>\r\n              </ion-card-subtitle>\r\n            </ion-card-header>\r\n             <!--Explicación de posición para captura de -imagen-->\r\n            <ion-card-content>\r\n              <h3 class=\"eltexto\">\r\n                Ubique su lateral izquierdo frente a la camara como se muestra en la imagen de ejemplo a continuacion.\r\n              </h3>\r\n            </ion-card-content>\r\n            <!--imagendos-->\r\n            <ion-col size=\"12\" class=\"ion-avatar\">\r\n              <img width=\"300rem\" src=\"../../../../assets/Imagenes/costado.PNG\" alt=\"\" style=\"text-align: center\">\r\n            </ion-col>\r\n          </ion-card>\r\n        </ion-col>\r\n\r\n\r\n\r\n        <ion-col size-sm=\"12\"  size-lg=\"3\">\r\n          <ion-card class=\"lacard\">\r\n            <ion-card-header>\r\n              <!--nombre de ubicación-->\r\n              <ion-card-title class=\"ion-text-center\">\r\n                <h1 class=\"eltexto\">Lateral Derecho</h1>\r\n              </ion-card-title>\r\n              <ion-card-subtitle class=\"ion-text-center\">\r\n                <h2 class=\"eltexto\">Ubicación requerida para la foto</h2>\r\n              </ion-card-subtitle>\r\n            </ion-card-header>\r\n            <!--Explicación de posición para captura de -imagen-->\r\n            <ion-card-content>\r\n              <h3 class=\"eltexto\">\r\n                Ubique su lateral derecho frente a la camara como se muestra en la imagen de ejemplo a continuacion.\r\n              </h3>\r\n            </ion-card-content>\r\n            <!--imagentres-->\r\n            <ion-col size=\"12\" class=\"ion-avatar\">\r\n              <img width=\"300rem\" src=\"../../../../assets/Imagenes/costado2.png\" alt=\"\" style=\"text-align: center\">\r\n            </ion-col>\r\n          </ion-card>\r\n        </ion-col>\r\n\r\n        <ion-col size-sm=\"12\" size-md=\"4\" size-lg=\"3\">\r\n          <ion-card class=\"lacard\">\r\n            <ion-card-header>\r\n              <ion-card-title class=\"ion-text-center\">\r\n                <h1 class=\"eltexto\">3/4 Izquierdo</h1>\r\n              </ion-card-title>\r\n              <ion-card-subtitle class=\"ion-text-center\">\r\n                <h2 class=\"eltexto\">Ubicación requerida para la foto</h2>\r\n              </ion-card-subtitle>\r\n            </ion-card-header>\r\n\r\n            <ion-card-content>\r\n              <h3 class=\"eltexto\">\r\n                Ubique su lado 3/4 izquierdo frente a la camara como se muestra en la imagen de ejemplo a continuacion.\r\n              </h3>\r\n            </ion-card-content>\r\n            <!--imagencuatro-->\r\n            <ion-col size=\"12\" class=\"ion-avatar\">\r\n              <img width=\"300rem\" src=\"../../../../assets/Imagenes/mujertrescuartos1.PNG\" alt=\"\"\r\n                style=\"text-align: center\">\r\n            </ion-col>\r\n          </ion-card>\r\n        </ion-col>\r\n\r\n\r\n        <ion-col size-sm=\"12\" size-md=\"4\" size-lg=\"3\">\r\n          <ion-card class=\"lacard\">\r\n            <ion-card-header>\r\n              <ion-card-title class=\"ion-text-center\">\r\n                <h1 class=\"eltexto\">3/4 Derecho</h1>\r\n              </ion-card-title>\r\n              <ion-card-subtitle class=\"ion-text-center\">\r\n                <h2 class=\"eltexto\">Ubicación requerida para la foto</h2>\r\n              </ion-card-subtitle>\r\n            </ion-card-header>\r\n\r\n            <ion-card-content>\r\n              <h3 class=\"eltexto\">\r\n                Ubique su lado 3/4 derecho frente a la camara como se muestra en la imagen de ejemplo a continuacion.\r\n              </h3>\r\n            </ion-card-content>\r\n            <ion-col size=\"12\" class=\"ion-avatar\">\r\n              <img width=\"300rem\" src=\"../../../../assets/Imagenes/mujertrescuartos2.png\" alt=\"\"\r\n                style=\"text-align: center\">\r\n            </ion-col>\r\n            <!--imagencinco-->\r\n          </ion-card>\r\n        </ion-col>\r\n      </ion-row>\r\n    </ion-col>\r\n \r\n\r\n    <!--boton para ir a entrenamiento-->\r\n\r\n    <div class=\"ion-text-center\">\r\n      <h2 class=\"eltexto\">Al dar click en el siguiente boton lo redireccionara a una vista para poder ejecutar el entrenamiento.</h2>\r\n    </div>\r\n\r\n  \r\n    <ion-col size=\"6\">\r\n\r\n        <ion-row class=\"ion-text-center\">\r\n          <ion-col size-lg=\"5\" size-sm=\"\"></ion-col>\r\n        <ion-col size-lg=\"2\" size-md=\"6\" size-sm=\"12\">\r\n          <ion-card color=\"primary\" class=\"lacard\" >\r\n            <button   routerLink=\"/entrenmaquifuncionario\">\r\n              <ion-icon name=\"camera\" class=\"elicono\"  > Siguiente</ion-icon>\r\n            </button>\r\n          </ion-card>\r\n        </ion-col>\r\n        \r\n        <ion-col size-lg=\"5\" size-sm=\"\"></ion-col>\r\n        </ion-row>\r\n        \r\n\r\n    </ion-col>\r\n    </ion-grid>\r\n</ion-content>";

/***/ })

}]);
//# sourceMappingURL=src_app_pages_rolfuncionario_iniciofun_inicio_module_ts.js.map