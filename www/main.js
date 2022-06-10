(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["main"],{

/***/ 90158:
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppRoutingModule": () => (/* binding */ AppRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var _shared_guards_check_role_guard__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./shared/guards/check-role.guard */ 76773);
/* harmony import */ var _shared_guards_check_role_aprendiz_guard__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./shared/guards/check-role-aprendiz.guard */ 85579);
/* harmony import */ var _shared_guards_check_role_funcionario_guard__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./shared/guards/check-role-funcionario.guard */ 9449);
/* harmony import */ var _shared_guards_check_role_gestor_guard__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./shared/guards/check-role-gestor.guard */ 75589);
/* harmony import */ var _shared_guards_check_role_invitado_guard__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./shared/guards/check-role-invitado.guard */ 90817);

/* eslint-disable max-len */







const routes = [
    {
        path: '',
        redirectTo: 'login',
        pathMatch: 'full'
    },
    {
        path: 'login',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-node_modules_ngneat_error-tailor___ivy_ngcc___fesm2015_ngneat-error-tailor_js"), __webpack_require__.e("src_app_pages_login_login_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./pages/login/login.module */ 21053)).then(m => m.LoginPageModule),
        pathMatch: 'full',
    },
    {
        path: 'forgot-password',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-node_modules_ngneat_error-tailor___ivy_ngcc___fesm2015_ngneat-error-tailor_js"), __webpack_require__.e("src_app_pages_forgot-password_forgot-password_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./pages/forgot-password/forgot-password.module */ 65638)).then(m => m.ForgotPasswordPageModule),
        pathMatch: 'full',
    },
    {
        path: 'register',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-node_modules_ngneat_error-tailor___ivy_ngcc___fesm2015_ngneat-error-tailor_js"), __webpack_require__.e("src_app_pages_register_register_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./pages/register/register.module */ 60207)).then(m => m.RegisterPageModule),
        pathMatch: 'full',
    },
    {
        path: 'verificacion-email',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_pages_verificacion-email_verificacion-email_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./pages/verificacion-email/verificacion-email.module */ 74604)).then(m => m.VerificacionEmailPageModule),
        pathMatch: 'full',
    },
    {
        path: 'actufoto',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_pages_certificado_actufoto_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./pages/certificado/actufoto.module */ 19100)).then(m => m.ActufotoPageModule),
        pathMatch: 'full',
    },
    {
        path: 'fullemail',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_pages_fullemail_fullemail_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./pages/fullemail/fullemail.module */ 23626)).then(m => m.FullemailPageModule),
        pathMatch: 'full',
    },
    {
        path: 'correoverifiexito',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_pages_correoverifiexito_correoverifiexito_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./pages/correoverifiexito/correoverifiexito.module */ 66182)).then(m => m.CorreoverifiexitoPageModule),
        pathMatch: 'full',
    },
    {
        path: 'correoverifierror',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_pages_correoverifierror_correoverifierror_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./pages/correoverifierror/correoverifierror.module */ 27822)).then(m => m.CorreoverifierrorPageModule),
        pathMatch: 'full',
    },
    {
        path: 'actufotoaprendiz',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_pages_rolaprendiz_actufotoaprendiz_actufotoaprendiz_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./pages/rolaprendiz/actufotoaprendiz/actufotoaprendiz.module */ 17647)).then(m => m.ActufotoaprendizPageModule),
        pathMatch: 'full',
        canActivate: [_shared_guards_check_role_aprendiz_guard__WEBPACK_IMPORTED_MODULE_1__.CheckRoleAprendizGuard]
    },
    {
        path: 'entrenmaquiaprendiz',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-node_modules_capacitor_camera_dist_esm_index_js-node_modules_capacitor_filesystem_dis-15466d"), __webpack_require__.e("src_app_pages_rolaprendiz_entrenmaquiaprendiz_entrenmaquiaprendiz_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./pages/rolaprendiz/entrenmaquiaprendiz/entrenmaquiaprendiz.module */ 2838)).then(m => m.EntrenmaquiaprendizPageModule),
        pathMatch: 'full',
        canActivate: [_shared_guards_check_role_aprendiz_guard__WEBPACK_IMPORTED_MODULE_1__.CheckRoleAprendizGuard]
    },
    {
        path: 'inicioapre',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_pages_rolaprendiz_inicioapre_inicio_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./pages/rolaprendiz/inicioapre/inicio.module */ 28821)).then(m => m.InicioPageModule),
        pathMatch: 'full',
        canActivate: [_shared_guards_check_role_aprendiz_guard__WEBPACK_IMPORTED_MODULE_1__.CheckRoleAprendizGuard]
    },
    {
        path: 'perfilaprendiz',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_pages_rolaprendiz_perfilaprendiz_perfilaprendiz_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./pages/rolaprendiz/perfilaprendiz/perfilaprendiz.module */ 29122)).then(m => m.PerfilaprendizPageModule),
        pathMatch: 'full',
        canActivate: [_shared_guards_check_role_aprendiz_guard__WEBPACK_IMPORTED_MODULE_1__.CheckRoleAprendizGuard]
    },
    {
        path: 'actufotofuncionario',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_pages_rolfuncionario_actufotofuncionario_actufotofuncionario_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./pages/rolfuncionario/actufotofuncionario/actufotofuncionario.module */ 50546)).then(m => m.ActufotofuncionarioPageModule),
        pathMatch: 'full',
        canActivate: [_shared_guards_check_role_funcionario_guard__WEBPACK_IMPORTED_MODULE_2__.CheckRoleFuncionarioGuard]
    },
    {
        path: 'entrenmaquifuncionario',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-node_modules_capacitor_camera_dist_esm_index_js-node_modules_capacitor_filesystem_dis-15466d"), __webpack_require__.e("src_app_pages_rolfuncionario_entrenmaquifuncionario_entrenmaquifuncionario_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./pages/rolfuncionario/entrenmaquifuncionario/entrenmaquifuncionario.module */ 86519)).then(m => m.EntrenmaquifuncionarioPageModule),
        pathMatch: 'full',
        canActivate: [_shared_guards_check_role_funcionario_guard__WEBPACK_IMPORTED_MODULE_2__.CheckRoleFuncionarioGuard]
    },
    {
        path: 'iniciofun',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_pages_rolfuncionario_iniciofun_inicio_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./pages/rolfuncionario/iniciofun/inicio.module */ 59344)).then(m => m.InicioPageModule),
        pathMatch: 'full',
        canActivate: [_shared_guards_check_role_funcionario_guard__WEBPACK_IMPORTED_MODULE_2__.CheckRoleFuncionarioGuard]
    },
    {
        path: 'perfilfuncionario',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_pages_rolfuncionario_perfilfuncionario_perfilfuncionario_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./pages/rolfuncionario/perfilfuncionario/perfilfuncionario.module */ 37319)).then(m => m.PerfilfuncionarioPageModule),
        pathMatch: 'full',
        canActivate: [_shared_guards_check_role_funcionario_guard__WEBPACK_IMPORTED_MODULE_2__.CheckRoleFuncionarioGuard]
    },
    {
        path: 'actufotogestor',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_pages_rolgest_actufotogestor_actufotogestor_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./pages/rolgest/actufotogestor/actufotogestor.module */ 95637)).then(m => m.ActufotogestorPageModule),
        pathMatch: 'full',
        canActivate: [_shared_guards_check_role_gestor_guard__WEBPACK_IMPORTED_MODULE_3__.CheckRoleGestorGuard]
    },
    {
        path: 'entrenmaquina',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-node_modules_capacitor_camera_dist_esm_index_js-node_modules_capacitor_filesystem_dis-15466d"), __webpack_require__.e("src_app_pages_rolgest_entrenmaquina_entrenmaquina_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./pages/rolgest/entrenmaquina/entrenmaquina.module */ 78006)).then(m => m.EntrenmaquinaPageModule),
        pathMatch: 'full',
        canActivate: [_shared_guards_check_role_gestor_guard__WEBPACK_IMPORTED_MODULE_3__.CheckRoleGestorGuard]
    },
    {
        path: 'estadisticas',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_pages_rolgest_estadisticas_estadisticas_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./pages/rolgest/estadisticas/estadisticas.module */ 58882)).then(m => m.EstadisticasPageModule),
        pathMatch: 'full',
        canActivate: [_shared_guards_check_role_gestor_guard__WEBPACK_IMPORTED_MODULE_3__.CheckRoleGestorGuard]
    },
    {
        path: 'inicioges',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_pages_rolgest_inicioges_inicio_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./pages/rolgest/inicioges/inicio.module */ 73016)).then(m => m.InicioPageModule),
        pathMatch: 'full',
        canActivate: [_shared_guards_check_role_gestor_guard__WEBPACK_IMPORTED_MODULE_3__.CheckRoleGestorGuard]
    },
    {
        path: 'listado',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_pages_rolgest_listado_listado_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./pages/rolgest/listado/listado.module */ 49587)).then(m => m.ListadoPageModule),
        pathMatch: 'full',
        canActivate: [_shared_guards_check_role_gestor_guard__WEBPACK_IMPORTED_MODULE_3__.CheckRoleGestorGuard]
    },
    {
        path: 'perfilgestor',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_pages_rolgest_perfilgestor_perfilgestor_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./pages/rolgest/perfilgestor/perfilgestor.module */ 95945)).then(m => m.PerfilgestorPageModule),
        pathMatch: 'full',
        canActivate: [_shared_guards_check_role_gestor_guard__WEBPACK_IMPORTED_MODULE_3__.CheckRoleGestorGuard]
    },
    {
        path: 'actufotoseguridad',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_pages_rolsecurity_actufotoseguridad_actufotoseguridad_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./pages/rolsecurity/actufotoseguridad/actufotoseguridad.module */ 8677)).then(m => m.ActufotoseguridadPageModule),
        pathMatch: 'full',
        canActivate: [_shared_guards_check_role_guard__WEBPACK_IMPORTED_MODULE_0__.CheckRoleGuard]
    },
    {
        path: 'camaraescaner',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-node_modules_capacitor_camera_dist_esm_index_js-node_modules_capacitor_filesystem_dis-15466d"), __webpack_require__.e("src_app_pages_rolsecurity_camaraescaner_camaraescaner_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./pages/rolsecurity/camaraescaner/camaraescaner.module */ 76414)).then(m => m.CamaraescanerPageModule),
        pathMatch: 'full',
    },
    {
        path: 'entrenarmaquina',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-node_modules_capacitor_camera_dist_esm_index_js-node_modules_capacitor_filesystem_dis-15466d"), __webpack_require__.e("src_app_pages_rolsecurity_entrenarmaquina_entrenarmaquina_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./pages/rolsecurity/entrenarmaquina/entrenarmaquina.module */ 63256)).then(m => m.EntrenarmaquinaPageModule),
        pathMatch: 'full',
        canActivate: [_shared_guards_check_role_guard__WEBPACK_IMPORTED_MODULE_0__.CheckRoleGuard]
    },
    {
        path: 'listadoseguridad',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_pages_rolsecurity_listadoseguridad_listadoseguridad_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./pages/rolsecurity/listadoseguridad/listadoseguridad.module */ 60786)).then(m => m.ListadoseguridadPageModule),
        pathMatch: 'full',
        canActivate: [_shared_guards_check_role_guard__WEBPACK_IMPORTED_MODULE_0__.CheckRoleGuard]
    },
    {
        path: 'perfilseguridad',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_pages_rolsecurity_perfilseguridad_perfilseguridad_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./pages/rolsecurity/perfilseguridad/perfilseguridad.module */ 31794)).then(m => m.PerfilseguridadPageModule),
        pathMatch: 'full',
        canActivate: [_shared_guards_check_role_guard__WEBPACK_IMPORTED_MODULE_0__.CheckRoleGuard]
    },
    {
        path: 'registroinvitado',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-node_modules_ngneat_error-tailor___ivy_ngcc___fesm2015_ngneat-error-tailor_js"), __webpack_require__.e("src_app_pages_rolsecurity_registroinvitado_registroinvitado_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./pages/rolsecurity/registroinvitado/registroinvitado.module */ 59542)).then(m => m.RegistroinvitadoPageModule),
        pathMatch: 'full',
        canActivate: [_shared_guards_check_role_guard__WEBPACK_IMPORTED_MODULE_0__.CheckRoleGuard]
    },
    {
        path: 'rolseguridad',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_pages_rolsecurity_rolseguridad_rolseguridad_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./pages/rolsecurity/rolseguridad/rolseguridad.module */ 58363)).then(m => m.RolseguridadPageModule),
        pathMatch: 'full',
        canActivate: [_shared_guards_check_role_guard__WEBPACK_IMPORTED_MODULE_0__.CheckRoleGuard]
    },
    {
        path: 'inicioinv',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_pages_rolinvit_inicioinv_inicio_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./pages/rolinvit/inicioinv/inicio.module */ 80591)).then(m => m.InicioPageModule),
        pathMatch: 'full',
        canActivate: [_shared_guards_check_role_invitado_guard__WEBPACK_IMPORTED_MODULE_4__.CheckRoleInvitadoGuard]
    },
    {
        path: 'cambiocontrasena',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-node_modules_ngneat_error-tailor___ivy_ngcc___fesm2015_ngneat-error-tailor_js"), __webpack_require__.e("src_app_pages_cambiocontrasena_cambiocontrasena_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./pages/cambiocontrasena/cambiocontrasena.module */ 78734)).then(m => m.CambiocontrasenaPageModule),
        pathMatch: 'full',
    },
    {
        path: 'perfilinvitado',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_pages_rolinvit_perfilinvitado_perfilinvitado_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./pages/rolinvit/perfilinvitado/perfilinvitado.module */ 88594)).then(m => m.PerfilinvitadoPageModule),
        pathMatch: 'full',
        canActivate: [_shared_guards_check_role_invitado_guard__WEBPACK_IMPORTED_MODULE_4__.CheckRoleInvitadoGuard]
    },
    {
        path: 'entrenmaquiinvitado',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-node_modules_capacitor_camera_dist_esm_index_js-node_modules_capacitor_filesystem_dis-15466d"), __webpack_require__.e("src_app_pages_rolinvit_entrenmaquiinvitado_entrenmaquiinvitado_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./pages/rolinvit/entrenmaquiinvitado/entrenmaquiinvitado.module */ 70480)).then(m => m.EntrenmaquiinvitadoPageModule),
        pathMatch: 'full',
        canActivate: [_shared_guards_check_role_invitado_guard__WEBPACK_IMPORTED_MODULE_4__.CheckRoleInvitadoGuard]
    },
    {
        path: 'actufotoinvitado',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_pages_rolinvit_actufotoinvitado_actufotoinvitado_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./pages/rolinvit/actufotoinvitado/actufotoinvitado.module */ 85634)).then(m => m.ActufotoinvitadoPageModule),
        pathMatch: 'full',
        canActivate: [_shared_guards_check_role_invitado_guard__WEBPACK_IMPORTED_MODULE_4__.CheckRoleInvitadoGuard]
    },
    {
        path: 'base-excel',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_pages_rolgest_base-excel_base-excel_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./pages/rolgest/base-excel/base-excel.module */ 40623)).then(m => m.BaseExcelPageModule),
        pathMatch: 'full',
        canActivate: [_shared_guards_check_role_gestor_guard__WEBPACK_IMPORTED_MODULE_3__.CheckRoleGestorGuard]
    }
];
let AppRoutingModule = class AppRoutingModule {
};
AppRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.NgModule)({
        imports: [
            _angular_router__WEBPACK_IMPORTED_MODULE_7__.RouterModule.forRoot(routes, { preloadingStrategy: _angular_router__WEBPACK_IMPORTED_MODULE_7__.PreloadAllModules, useHash: true })
        ],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_7__.RouterModule]
    })
], AppRoutingModule);



/***/ }),

/***/ 55041:
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppComponent": () => (/* binding */ AppComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _app_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app.component.html?ngResource */ 33383);
/* harmony import */ var _app_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app.component.scss?ngResource */ 79259);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var _services_task_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./services/task.service */ 46138);
/* harmony import */ var ngx_socket_io__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-socket-io */ 84935);








let AppComponent = class AppComponent {
    constructor(
    //inyevta la importación de taskservices
    usuarioservicio, router, toastController, socket) {
        this.usuarioservicio = usuarioservicio;
        this.router = router;
        this.toastController = toastController;
        this.socket = socket;
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
    ngOnInit() {
        const token = localStorage.getItem('token');
        if (token !== null) {
            this.usuarioservicio.verifiToken(token).subscribe((res) => {
                const msg = res.msg;
                if (msg === 'TOKEN_NULO') {
                    this.errorl('SU SESIÓN HA CADUCADO', 5000);
                    localStorage.clear();
                    this.router.navigate(['login']);
                }
                if (msg === 'NOT_TOKEN') {
                    localStorage.clear();
                    this.router.navigate(['login']);
                }
            });
        }
    }
};
AppComponent.ctorParameters = () => [
    { type: _services_task_service__WEBPACK_IMPORTED_MODULE_2__.TaskService },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__.Router },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.ToastController },
    { type: ngx_socket_io__WEBPACK_IMPORTED_MODULE_6__.Socket }
];
AppComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.Component)({
        selector: 'app-root',
        template: _app_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_app_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], AppComponent);



/***/ }),

/***/ 36747:
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppModule": () => (/* binding */ AppModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/platform-browser */ 50318);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common/http */ 28784);
/* harmony import */ var ng2_charts__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ng2-charts */ 44195);
/* harmony import */ var _awesome_cordova_plugins_barcode_scanner_ngx__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @awesome-cordova-plugins/barcode-scanner/ngx */ 38283);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app.component */ 55041);
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app-routing.module */ 90158);
/* harmony import */ var _components_components_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/components.module */ 45642);
/* harmony import */ var ngx_socket_io__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ngx-socket-io */ 84935);
/* harmony import */ var _ionic_pwa_elements_loader__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/pwa-elements/loader */ 38763);












// eslint-disable-next-line quote-props
const config = { url: 'https://apiscancam01.herokuapp.com/', options: { 'transports': ['websocket'] } };

(0,_ionic_pwa_elements_loader__WEBPACK_IMPORTED_MODULE_4__.defineCustomElements)(window);
let AppModule = class AppModule {
};
AppModule = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.NgModule)({
        declarations: [_app_component__WEBPACK_IMPORTED_MODULE_1__.AppComponent],
        entryComponents: [],
        imports: [
            _components_components_module__WEBPACK_IMPORTED_MODULE_3__.ComponentsModule,
            ng2_charts__WEBPACK_IMPORTED_MODULE_7__.NgChartsModule,
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_8__.BrowserModule,
            _angular_common_http__WEBPACK_IMPORTED_MODULE_9__.HttpClientModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_10__.IonicModule.forRoot(),
            _app_routing_module__WEBPACK_IMPORTED_MODULE_2__.AppRoutingModule,
            ngx_socket_io__WEBPACK_IMPORTED_MODULE_11__.SocketIoModule.forRoot(config)
        ],
        providers: [
            _awesome_cordova_plugins_barcode_scanner_ngx__WEBPACK_IMPORTED_MODULE_0__.BarcodeScanner,
            { provide: _angular_router__WEBPACK_IMPORTED_MODULE_12__.RouteReuseStrategy, useClass: _ionic_angular__WEBPACK_IMPORTED_MODULE_10__.IonicRouteStrategy }
        ],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_1__.AppComponent],
    })
], AppModule);



/***/ }),

/***/ 45642:
/*!*************************************************!*\
  !*** ./src/app/components/components.module.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ComponentsModule": () => (/* binding */ ComponentsModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var _menuapre_menuapre_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./menuapre/menuapre.component */ 4559);





//importación de menucontroller

let ComponentsModule = class ComponentsModule {
};
ComponentsModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        declarations: [
            //se importa el menu componente
            _menuapre_menuapre_component__WEBPACK_IMPORTED_MODULE_0__.MenuapreComponent,
        ],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__.IonicModule,
            _angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterModule,
        ],
        exports: [
            //se exporta el menu componente
            _menuapre_menuapre_component__WEBPACK_IMPORTED_MODULE_0__.MenuapreComponent,
        ]
    })
], ComponentsModule);



/***/ }),

/***/ 4559:
/*!***********************************************************!*\
  !*** ./src/app/components/menuapre/menuapre.component.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MenuapreComponent": () => (/* binding */ MenuapreComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _menuapre_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./menuapre.component.html?ngResource */ 82071);
/* harmony import */ var _menuapre_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./menuapre.component.scss?ngResource */ 7245);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var src_app_services_task_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/task.service */ 46138);
/* harmony import */ var ngx_socket_io__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-socket-io */ 84935);




//importación de menu controller

//importación de los servicios de la api


let MenuapreComponent = class MenuapreComponent {
    //se inyecta el menucontroller
    constructor(menu, usuarioServicio, socket) {
        this.menu = menu;
        this.usuarioServicio = usuarioServicio;
        this.socket = socket;
        //llamdo del nombre del localstorage
        this.nombre = null;
        this.url = null;
        this.nombre = localStorage.getItem('name');
    }
    //funcionalidad del boton amburguesa
    openFirst() {
        this.menu.enable(true, 'first');
        this.menu.open('first');
    }
    openEnd() {
        this.menu.open('end');
    }
    openCustom() {
        this.menu.enable(true, 'custom');
        this.menu.open('custom');
    }
    //llamado del role desde el localstorage para asignar a cada rol su boton amburguesa
    ngOnInit() {
        // this.socket.connect();
        this.inicio();
    }
    inicio() {
        this.socket.on('server:newlogin', (callback) => {
            this.role = callback.role[0];
            this.nombre = callback.nombre;
        });
        this.socket.on('server:url-img', (dat) => (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__awaiter)(this, void 0, void 0, function* () {
            // console.log('esto es la url', dat);
            this.url = dat;
            // console.log(this.url);
        }));
        if (localStorage.getItem('role')) {
            const role = localStorage.getItem('role');
            // console.log(role);
            this.role = role;
            const img = localStorage.getItem('idImgPerfil');
            // console.log(img);
            if (img) {
                this.traerfotol();
            }
        }
    }
    traerfotol() {
        //función de tarer la foto de los servicios de la api
        const token = localStorage.getItem('token');
        const idImgPerfil = localStorage.getItem('idImgPerfil');
        // console.log(idImgPerfil);
        this.usuarioServicio.traerfotoperfil(token, idImgPerfil).subscribe((res) => {
            //console.log(res.data.url);
            this.url = res.data.url;
        });
    }
};
MenuapreComponent.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__.MenuController },
    { type: src_app_services_task_service__WEBPACK_IMPORTED_MODULE_2__.TaskService },
    { type: ngx_socket_io__WEBPACK_IMPORTED_MODULE_5__.Socket }
];
MenuapreComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.Component)({
        selector: 'app-menuapre',
        template: _menuapre_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_menuapre_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], MenuapreComponent);



/***/ }),

/***/ 46138:
/*!******************************************!*\
  !*** ./src/app/services/task.service.ts ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TaskService": () => (/* binding */ TaskService)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common/http */ 28784);


//importación de httpclient

let TaskService = class TaskService {
    //inyecta la importación de httpclient
    constructor(http) {
        this.http = http;
        //llamado de la api (apisacancam01)
        this.api = 'https://apiscancam01.herokuapp.com/api';
    }
    //llamado del metodo login de la api
    createLogeo(logeo) {
        const path = '';
        return this.http.post('https://apiscancam01.herokuapp.com/api/auth/login', logeo);
    }
    //llamado del metodo register de la api
    createsTask(task) {
        const path = '';
        return this.http.post('https://apiscancam01.herokuapp.com/api/auth/register', task);
    }
    //llamado del metodo forgot-password de la api
    updateOlvido(olvido) {
        const path = 'https://apiscancam01.herokuapp.com/api/auth/forgot-password';
        return this.http.put(path, olvido);
    }
    //llamdo del metodo crear foto
    createsFoto(token, foto) {
        const path = '';
        return this.http.post('https://apiscancam01.herokuapp.com/api/perfil', foto, { headers: { authorization: `${token}` } });
    }
    //llamado del metodo listado del gestor
    listadogest(token) {
        return this.http.get('https://apiscancam01.herokuapp.com/api/auth/users', { headers: { authorization: `${token}` } });
    }
    //llamdo de metodo actualización de rol
    actualizarrole(token, id, role) {
        // eslint-disable-next-line max-len
        return this.http.put(`https://apiscancam01.herokuapp.com/api/auth/actualizar-rol/${id}`, role, { headers: { authorization: `${token}` } });
    }
    //llamdo del metodo activar usuario
    activar(token, id) {
        return this.http.put(`https://apiscancam01.herokuapp.com/api/auth/activar/${id}`, {}, { headers: { authorization: `${token}` } });
    }
    //llamdo del metodo deshabilitar usuario
    inhabilitar(token, id) {
        return this.http.put(`https://apiscancam01.herokuapp.com/api/auth/deshabilitar/${id}`, {}, { headers: { authorization: `${token}` } });
    }
    //llamdo del metodo enviar correo
    enviarcorreo(email) {
        return this.http.post(`https://apiscancam01.herokuapp.com/api/auth/verifyemail/`, email);
    }
    listadoentrada(token) {
        return this.http.get(`https://apiscancam01.herokuapp.com/api/registro`, { headers: { authorization: `${token}` } });
    }
    //llamdo del metodo listado de salida
    // listadosalida(token){
    //   return this.http.get(`https://apiscancam01.herokuapp.com/api/regsalida`, {headers:{authorization: `${token}`}});
    // }
    //llamdo del metodo de cambio de contraseña
    cambiocontrasena(body) {
        return this.http.put(`https://apiscancam01.herokuapp.com/api/auth/reset-password`, body);
    }
    //llamdo del metodo traer foto de perfil
    traerfotoperfil(token, idImgPerfil) {
        return this.http.get(`https://apiscancam01.herokuapp.com/api/perfil/${idImgPerfil}`, { headers: { authorization: `${token}` } });
    }
    //llamdo del metodo certificado
    createsCertificado(token, foto) {
        return this.http.post('https://apiscancam01.herokuapp.com/api/certificado', foto, { headers: { authorization: `${token}` } });
    }
    //? Ruta para enviar base64 de la camara storage.
    enviarfoto(token, body) {
        return this.http.post(`https://apiscancam01.herokuapp.com/api/storage/`, body, { headers: { authorization: `${token}` } });
    }
    //? Ruta para enviar base64 de la camara fototemp.
    enviarfototemp(token, body) {
        return this.http.post(`https://apiscancam01.herokuapp.com/api/fototemp/`, body, { headers: { authorization: `${token}` } });
    }
    //? Metodo para traer numeor de registros de entrada
    numregentrada(token) {
        return this.http.get(`https://apiscancam01.herokuapp.com/api/registro/numeroregistros`, { headers: { authorization: `${token}` } });
    }
    //? Metodo para traer numeor de registros de salida
    numregsalida(token) {
        return this.http.get(`https://apiscancam01.herokuapp.com/api/regsalida/numeroregistros`, { headers: { authorization: `${token}` } });
    }
    //?llamdo del metodo crear foto
    enviarexcel(token, excel) {
        return this.http.post('https://apiscancam01.herokuapp.com/api/auth/excel', excel, { headers: { authorization: `${token}` } });
    }
    //? Metodo para traer numeor de registros de salida
    totalfoto(token) {
        return this.http.get(`https://apiscancam01.herokuapp.com/api/auth/numrostros`, { headers: { authorization: `${token}` } });
    }
    //? Metodo para traer numeor de registros de entrada
    verifiToken(token) {
        return this.http.get(`https://apiscancam01.herokuapp.com/api/auth/token`, { headers: { authorization: `${token}` } });
    }
    //? Metodo para enviar fecha
    filtro(token, fecha) {
        return this.http.get(`https://apiscancam01.herokuapp.com/api/registro/filtro/${fecha}`, { headers: { authorization: `${token}` } });
    }
    //? Metodo para enviar fecha
    next(token, numero) {
        return this.http.get(`https://apiscancam01.herokuapp.com/api/registro/${numero}`, { headers: { authorization: `${token}` } });
    }
    //? Metodo para enviar fecha
    back(token, numero) {
        return this.http.get(`https://apiscancam01.herokuapp.com/api/registro/${numero}`, { headers: { authorization: `${token}` } });
    }
};
TaskService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_0__.HttpClient }
];
TaskService = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.Injectable)({
        providedIn: 'root'
    })
], TaskService);



/***/ }),

/***/ 85579:
/*!************************************************************!*\
  !*** ./src/app/shared/guards/check-role-aprendiz.guard.ts ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CheckRoleAprendizGuard": () => (/* binding */ CheckRoleAprendizGuard)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var src_app_services_task_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/services/task.service */ 46138);




let CheckRoleAprendizGuard = class CheckRoleAprendizGuard {
    constructor(authSvc, router) {
        this.authSvc = authSvc;
        this.router = router;
    }
    canActivate(route, state) {
        const role = localStorage.getItem('role');
        // eslint-disable-next-line no-cond-assign
        if (role !== 'aprendiz') {
            this.router.navigate(['login']);
            // Si devolvemos FALSE no de permitirá el acceso
            return false;
        }
        else {
            return true;
        }
    }
};
CheckRoleAprendizGuard.ctorParameters = () => [
    { type: src_app_services_task_service__WEBPACK_IMPORTED_MODULE_0__.TaskService },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_1__.Router }
];
CheckRoleAprendizGuard = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Injectable)({
        providedIn: 'root'
    })
], CheckRoleAprendizGuard);



/***/ }),

/***/ 9449:
/*!***************************************************************!*\
  !*** ./src/app/shared/guards/check-role-funcionario.guard.ts ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CheckRoleFuncionarioGuard": () => (/* binding */ CheckRoleFuncionarioGuard)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var src_app_services_task_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/services/task.service */ 46138);




let CheckRoleFuncionarioGuard = class CheckRoleFuncionarioGuard {
    constructor(authSvc, router) {
        this.authSvc = authSvc;
        this.router = router;
    }
    canActivate(route, state) {
        const role = localStorage.getItem('role');
        // eslint-disable-next-line no-cond-assign
        if (role !== 'funcionario') {
            this.router.navigate(['login']);
            // Si devolvemos FALSE no de permitirá el acceso
            return false;
        }
        else {
            return true;
        }
    }
};
CheckRoleFuncionarioGuard.ctorParameters = () => [
    { type: src_app_services_task_service__WEBPACK_IMPORTED_MODULE_0__.TaskService },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_1__.Router }
];
CheckRoleFuncionarioGuard = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Injectable)({
        providedIn: 'root'
    })
], CheckRoleFuncionarioGuard);



/***/ }),

/***/ 75589:
/*!**********************************************************!*\
  !*** ./src/app/shared/guards/check-role-gestor.guard.ts ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CheckRoleGestorGuard": () => (/* binding */ CheckRoleGestorGuard)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var src_app_services_task_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/services/task.service */ 46138);




let CheckRoleGestorGuard = class CheckRoleGestorGuard {
    constructor(authSvc, router) {
        this.authSvc = authSvc;
        this.router = router;
    }
    canActivate(route, state) {
        const role = localStorage.getItem('role');
        // eslint-disable-next-line no-cond-assign
        if (role !== 'gestor') {
            this.router.navigate(['login']);
            // Si devolvemos FALSE no de permitirá el acceso
            return false;
        }
        else {
            return true;
        }
    }
};
CheckRoleGestorGuard.ctorParameters = () => [
    { type: src_app_services_task_service__WEBPACK_IMPORTED_MODULE_0__.TaskService },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_1__.Router }
];
CheckRoleGestorGuard = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Injectable)({
        providedIn: 'root'
    })
], CheckRoleGestorGuard);



/***/ }),

/***/ 90817:
/*!************************************************************!*\
  !*** ./src/app/shared/guards/check-role-invitado.guard.ts ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CheckRoleInvitadoGuard": () => (/* binding */ CheckRoleInvitadoGuard)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var _services_task_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../services/task.service */ 46138);




let CheckRoleInvitadoGuard = class CheckRoleInvitadoGuard {
    constructor(authSvc, router) {
        this.authSvc = authSvc;
        this.router = router;
    }
    canActivate(route, state) {
        const role = localStorage.getItem('role');
        // eslint-disable-next-line no-cond-assign
        if (role !== 'invitado') {
            this.router.navigate(['login']);
            // Si devolvemos FALSE no de permitirá el acceso
            return false;
        }
        else {
            return true;
        }
    }
};
CheckRoleInvitadoGuard.ctorParameters = () => [
    { type: _services_task_service__WEBPACK_IMPORTED_MODULE_0__.TaskService },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_1__.Router }
];
CheckRoleInvitadoGuard = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Injectable)({
        providedIn: 'root'
    })
], CheckRoleInvitadoGuard);



/***/ }),

/***/ 76773:
/*!***************************************************!*\
  !*** ./src/app/shared/guards/check-role.guard.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CheckRoleGuard": () => (/* binding */ CheckRoleGuard)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var src_app_services_task_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/services/task.service */ 46138);




let CheckRoleGuard = class CheckRoleGuard {
    constructor(authSvc, router) {
        this.authSvc = authSvc;
        this.router = router;
    }
    canActivate(route, state) {
        const role = localStorage.getItem('role');
        // eslint-disable-next-line no-cond-assign
        if (role !== 'seguridad') {
            this.router.navigate(['login']);
            // Si devolvemos FALSE no de permitirá el acceso
            return false;
        }
        else {
            return true;
        }
    }
};
CheckRoleGuard.ctorParameters = () => [
    { type: src_app_services_task_service__WEBPACK_IMPORTED_MODULE_0__.TaskService },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_1__.Router }
];
CheckRoleGuard = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Injectable)({
        providedIn: 'root'
    })
], CheckRoleGuard);



/***/ }),

/***/ 92340:
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "environment": () => (/* binding */ environment)
/* harmony export */ });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ 14431:
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ 68150);
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app/app.module */ 36747);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ 92340);




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.production) {
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.enableProdMode)();
}
(0,_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_3__.platformBrowserDynamic)().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_0__.AppModule)
    .catch(err => console.log(err));


/***/ }),

/***/ 50863:
/*!******************************************************************************************************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm/ lazy ^\.\/.*\.entry\.js$ include: \.entry\.js$ exclude: \.system\.entry\.js$ namespace object ***!
  \******************************************************************************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var map = {
	"./ion-accordion_2.entry.js": [
		70079,
		"common",
		"node_modules_ionic_core_dist_esm_ion-accordion_2_entry_js"
	],
	"./ion-action-sheet.entry.js": [
		25593,
		"common",
		"node_modules_ionic_core_dist_esm_ion-action-sheet_entry_js"
	],
	"./ion-alert.entry.js": [
		13225,
		"common",
		"node_modules_ionic_core_dist_esm_ion-alert_entry_js"
	],
	"./ion-app_8.entry.js": [
		4812,
		"common",
		"node_modules_ionic_core_dist_esm_ion-app_8_entry_js"
	],
	"./ion-avatar_3.entry.js": [
		86655,
		"common",
		"node_modules_ionic_core_dist_esm_ion-avatar_3_entry_js"
	],
	"./ion-back-button.entry.js": [
		44856,
		"common",
		"node_modules_ionic_core_dist_esm_ion-back-button_entry_js"
	],
	"./ion-backdrop.entry.js": [
		13059,
		"node_modules_ionic_core_dist_esm_ion-backdrop_entry_js"
	],
	"./ion-breadcrumb_2.entry.js": [
		58648,
		"common",
		"node_modules_ionic_core_dist_esm_ion-breadcrumb_2_entry_js"
	],
	"./ion-button_2.entry.js": [
		98308,
		"common",
		"node_modules_ionic_core_dist_esm_ion-button_2_entry_js"
	],
	"./ion-card_5.entry.js": [
		44690,
		"common",
		"node_modules_ionic_core_dist_esm_ion-card_5_entry_js"
	],
	"./ion-checkbox.entry.js": [
		64090,
		"common",
		"node_modules_ionic_core_dist_esm_ion-checkbox_entry_js"
	],
	"./ion-chip.entry.js": [
		36214,
		"common",
		"node_modules_ionic_core_dist_esm_ion-chip_entry_js"
	],
	"./ion-col_3.entry.js": [
		69447,
		"node_modules_ionic_core_dist_esm_ion-col_3_entry_js"
	],
	"./ion-datetime_3.entry.js": [
		79689,
		"common",
		"node_modules_ionic_core_dist_esm_ion-datetime_3_entry_js"
	],
	"./ion-fab_3.entry.js": [
		18840,
		"common",
		"node_modules_ionic_core_dist_esm_ion-fab_3_entry_js"
	],
	"./ion-img.entry.js": [
		40749,
		"node_modules_ionic_core_dist_esm_ion-img_entry_js"
	],
	"./ion-infinite-scroll_2.entry.js": [
		69667,
		"common",
		"node_modules_ionic_core_dist_esm_ion-infinite-scroll_2_entry_js"
	],
	"./ion-input.entry.js": [
		83288,
		"common",
		"node_modules_ionic_core_dist_esm_ion-input_entry_js"
	],
	"./ion-item-option_3.entry.js": [
		35473,
		"common",
		"node_modules_ionic_core_dist_esm_ion-item-option_3_entry_js"
	],
	"./ion-item_8.entry.js": [
		53634,
		"common",
		"node_modules_ionic_core_dist_esm_ion-item_8_entry_js"
	],
	"./ion-loading.entry.js": [
		22855,
		"common",
		"node_modules_ionic_core_dist_esm_ion-loading_entry_js"
	],
	"./ion-menu_3.entry.js": [
		495,
		"common",
		"node_modules_ionic_core_dist_esm_ion-menu_3_entry_js"
	],
	"./ion-modal.entry.js": [
		58737,
		"common",
		"node_modules_ionic_core_dist_esm_ion-modal_entry_js"
	],
	"./ion-nav_2.entry.js": [
		99632,
		"common",
		"node_modules_ionic_core_dist_esm_ion-nav_2_entry_js"
	],
	"./ion-picker-column-internal.entry.js": [
		54446,
		"common",
		"node_modules_ionic_core_dist_esm_ion-picker-column-internal_entry_js"
	],
	"./ion-picker-internal.entry.js": [
		32275,
		"node_modules_ionic_core_dist_esm_ion-picker-internal_entry_js"
	],
	"./ion-popover.entry.js": [
		48050,
		"common",
		"node_modules_ionic_core_dist_esm_ion-popover_entry_js"
	],
	"./ion-progress-bar.entry.js": [
		18994,
		"common",
		"node_modules_ionic_core_dist_esm_ion-progress-bar_entry_js"
	],
	"./ion-radio_2.entry.js": [
		23592,
		"common",
		"node_modules_ionic_core_dist_esm_ion-radio_2_entry_js"
	],
	"./ion-range.entry.js": [
		35454,
		"common",
		"node_modules_ionic_core_dist_esm_ion-range_entry_js"
	],
	"./ion-refresher_2.entry.js": [
		290,
		"common",
		"node_modules_ionic_core_dist_esm_ion-refresher_2_entry_js"
	],
	"./ion-reorder_2.entry.js": [
		92666,
		"common",
		"node_modules_ionic_core_dist_esm_ion-reorder_2_entry_js"
	],
	"./ion-ripple-effect.entry.js": [
		64816,
		"node_modules_ionic_core_dist_esm_ion-ripple-effect_entry_js"
	],
	"./ion-route_4.entry.js": [
		45534,
		"common",
		"node_modules_ionic_core_dist_esm_ion-route_4_entry_js"
	],
	"./ion-searchbar.entry.js": [
		94902,
		"common",
		"node_modules_ionic_core_dist_esm_ion-searchbar_entry_js"
	],
	"./ion-segment_2.entry.js": [
		91938,
		"common",
		"node_modules_ionic_core_dist_esm_ion-segment_2_entry_js"
	],
	"./ion-select_3.entry.js": [
		78179,
		"common",
		"node_modules_ionic_core_dist_esm_ion-select_3_entry_js"
	],
	"./ion-slide_2.entry.js": [
		90668,
		"node_modules_ionic_core_dist_esm_ion-slide_2_entry_js"
	],
	"./ion-spinner.entry.js": [
		61624,
		"common",
		"node_modules_ionic_core_dist_esm_ion-spinner_entry_js"
	],
	"./ion-split-pane.entry.js": [
		19989,
		"node_modules_ionic_core_dist_esm_ion-split-pane_entry_js"
	],
	"./ion-tab-bar_2.entry.js": [
		28902,
		"common",
		"node_modules_ionic_core_dist_esm_ion-tab-bar_2_entry_js"
	],
	"./ion-tab_2.entry.js": [
		70199,
		"common",
		"node_modules_ionic_core_dist_esm_ion-tab_2_entry_js"
	],
	"./ion-text.entry.js": [
		48395,
		"common",
		"node_modules_ionic_core_dist_esm_ion-text_entry_js"
	],
	"./ion-textarea.entry.js": [
		96357,
		"common",
		"node_modules_ionic_core_dist_esm_ion-textarea_entry_js"
	],
	"./ion-toast.entry.js": [
		38268,
		"common",
		"node_modules_ionic_core_dist_esm_ion-toast_entry_js"
	],
	"./ion-toggle.entry.js": [
		15269,
		"common",
		"node_modules_ionic_core_dist_esm_ion-toggle_entry_js"
	],
	"./ion-virtual-scroll.entry.js": [
		32875,
		"node_modules_ionic_core_dist_esm_ion-virtual-scroll_entry_js"
	]
};
function webpackAsyncContext(req) {
	if(!__webpack_require__.o(map, req)) {
		return Promise.resolve().then(() => {
			var e = new Error("Cannot find module '" + req + "'");
			e.code = 'MODULE_NOT_FOUND';
			throw e;
		});
	}

	var ids = map[req], id = ids[0];
	return Promise.all(ids.slice(1).map(__webpack_require__.e)).then(() => {
		return __webpack_require__(id);
	});
}
webpackAsyncContext.keys = () => (Object.keys(map));
webpackAsyncContext.id = 50863;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 55899:
/*!**************************************************************************************************************************************************!*\
  !*** ./node_modules/@ionic/pwa-elements/dist/esm/ lazy ^\.\/.*\.entry\.js$ include: \.entry\.js$ exclude: \.system\.entry\.js$ namespace object ***!
  \**************************************************************************************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var map = {
	"./pwa-action-sheet.entry.js": [
		45464,
		"node_modules_ionic_pwa-elements_dist_esm_pwa-action-sheet_entry_js"
	],
	"./pwa-camera-modal-instance.entry.js": [
		68724,
		"node_modules_ionic_pwa-elements_dist_esm_pwa-camera-modal-instance_entry_js"
	],
	"./pwa-camera-modal.entry.js": [
		8145,
		"node_modules_ionic_pwa-elements_dist_esm_pwa-camera-modal_entry_js"
	],
	"./pwa-camera.entry.js": [
		30527,
		"node_modules_ionic_pwa-elements_dist_esm_pwa-camera_entry_js"
	],
	"./pwa-toast.entry.js": [
		44389,
		"node_modules_ionic_pwa-elements_dist_esm_pwa-toast_entry_js"
	]
};
function webpackAsyncContext(req) {
	if(!__webpack_require__.o(map, req)) {
		return Promise.resolve().then(() => {
			var e = new Error("Cannot find module '" + req + "'");
			e.code = 'MODULE_NOT_FOUND';
			throw e;
		});
	}

	var ids = map[req], id = ids[0];
	return __webpack_require__.e(ids[1]).then(() => {
		return __webpack_require__(id);
	});
}
webpackAsyncContext.keys = () => (Object.keys(map));
webpackAsyncContext.id = 55899;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 79259:
/*!***********************************************!*\
  !*** ./src/app/app.component.scss?ngResource ***!
  \***********************************************/
/***/ ((module) => {

"use strict";
module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcHAuY29tcG9uZW50LnNjc3MifQ== */";

/***/ }),

/***/ 7245:
/*!************************************************************************!*\
  !*** ./src/app/components/menuapre/menuapre.component.scss?ngResource ***!
  \************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "* {\n  font-family: \"Quicksand\", sans-serif;\n}\n\n.menu-header-bg {\n  height: 240px;\n  width: 350px;\n  background: #76e4ff;\n  background: linear-gradient(90deg, #76e4ff 0%, #265df7 100%);\n  box-shadow: 0px 1px 10px rgba(79, 126, 255, 0.7);\n  transform: rotate(15deg);\n  border-radius: 50px 10px 300px 10px;\n  margin-left: -18px;\n  margin-top: -40px;\n  margin-bottom: 0.5px;\n}\n\n.header-content {\n  position: absolute;\n  top: 30px;\n  left: 15px;\n  display: flex;\n  align-content: center;\n}\n\n.header-content img {\n  width: 70px;\n  height: 90px;\n  border-radius: 50%;\n  border: 4px solid rgba(79, 126, 255, 0.7);\n  margin-left: 30px;\n}\n\n.header-content h2 {\n  font-weight: 300;\n  font-size: 23px;\n  color: #ffff;\n  letter-spacing: 0.4px;\n}\n\n.header-content ion-icon {\n  display: flex;\n  width: 70px;\n  height: 90px;\n  margin-left: 30px;\n}\n\n.action-button {\n  display: flex;\n  justify-content: center;\n}\n\n.action-button ion-icon {\n  margin-right: 10px;\n}\n\n#navbar {\n  position: relative;\n  bottom: 20px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1lbnVhcHJlLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBR0ksb0NBQUE7QUFESjs7QUFJQTtFQUNJLGFBQUE7RUFDQSxZQUFBO0VBQ0EsbUJBQUE7RUFDQSw0REFBQTtFQUNBLGdEQUFBO0VBQ0Esd0JBQUE7RUFDQSxtQ0FBQTtFQUNBLGtCQUFBO0VBQ0EsaUJBQUE7RUFDQSxvQkFBQTtBQURKOztBQUlBO0VBQ0ksa0JBQUE7RUFDQSxTQUFBO0VBQ0EsVUFBQTtFQUNBLGFBQUE7RUFDQSxxQkFBQTtBQURKOztBQUlJO0VBQ0ksV0FBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLHlDQUFBO0VBQ0EsaUJBQUE7QUFGUjs7QUFLSTtFQUNJLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLFlBQUE7RUFDQSxxQkFBQTtBQUhSOztBQU1JO0VBQ0ksYUFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsaUJBQUE7QUFKUjs7QUFRQTtFQUNJLGFBQUE7RUFDQSx1QkFBQTtBQUxKOztBQU9JO0VBQ0ksa0JBQUE7QUFMUjs7QUFTQTtFQUNJLGtCQUFBO0VBQ0EsWUFBQTtBQU5KIiwiZmlsZSI6Im1lbnVhcHJlLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiKntcclxuICAgIC8vIGZvbnQtZmFtaWx5OiBsYXRvO1xyXG4gICAgLy9mb250LWZhbWlseTogJ05hbnVtIEdvdGhpYycsIHNhbnMtc2VyaWY7XHJcbiAgICBmb250LWZhbWlseTogJ1F1aWNrc2FuZCcsIHNhbnMtc2VyaWY7XHJcbn1cclxuXHJcbi5tZW51LWhlYWRlci1iZ3tcclxuICAgIGhlaWdodDogMjQwcHg7XHJcbiAgICB3aWR0aDogMzUwcHg7XHJcbiAgICBiYWNrZ3JvdW5kOiAjNzZlNGZmO1xyXG4gICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDkwZGVnLCAjNzZlNGZmIDAlLCAjMjY1ZGY3IDEwMCUpO1xyXG4gICAgYm94LXNoYWRvdzogMHB4IDFweCAxMHB4IHJnYmEoNzksIDEyNiwgMjU1LCAwLjcpO1xyXG4gICAgdHJhbnNmb3JtOiByb3RhdGUoMTVkZWcpO1xyXG4gICAgYm9yZGVyLXJhZGl1czogNTBweCAxMHB4IDMwMHB4IDEwcHg7XHJcbiAgICBtYXJnaW4tbGVmdDogLTE4cHg7XHJcbiAgICBtYXJnaW4tdG9wOiAtNDBweDtcclxuICAgIG1hcmdpbi1ib3R0b206IDAuNXB4O1xyXG59XHJcblxyXG4uaGVhZGVyLWNvbnRlbnR7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB0b3A6IDMwcHg7XHJcbiAgICBsZWZ0OiAxNXB4O1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGFsaWduLWNvbnRlbnQ6IGNlbnRlcjtcclxuXHJcblxyXG4gICAgaW1nIHtcclxuICAgICAgICB3aWR0aDogNzBweDtcclxuICAgICAgICBoZWlnaHQ6IDkwcHg7XHJcbiAgICAgICAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gICAgICAgIGJvcmRlcjogNHB4IHNvbGlkIHJnYmEoNzksIDEyNiwgMjU1LCAwLjcpO1xyXG4gICAgICAgIG1hcmdpbi1sZWZ0OiAzMHB4O1xyXG4gICAgfVxyXG5cclxuICAgIGgye1xyXG4gICAgICAgIGZvbnQtd2VpZ2h0OiAzMDA7XHJcbiAgICAgICAgZm9udC1zaXplOiAyM3B4O1xyXG4gICAgICAgIGNvbG9yOiAjZmZmZjtcclxuICAgICAgICBsZXR0ZXItc3BhY2luZzogMC40cHg7XHJcbiAgICB9XHJcblxyXG4gICAgaW9uLWljb257XHJcbiAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICB3aWR0aDogNzBweDtcclxuICAgICAgICBoZWlnaHQ6IDkwcHg7XHJcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDMwcHg7XHJcbiAgICB9XHJcbn1cclxuXHJcbi5hY3Rpb24tYnV0dG9ue1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG5cclxuICAgIGlvbi1pY29ue1xyXG4gICAgICAgIG1hcmdpbi1yaWdodDogMTBweDtcclxuICAgIH1cclxufVxyXG5cclxuI25hdmJhcntcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIGJvdHRvbTogMjBweDtcclxufVxyXG4iXX0= */";

/***/ }),

/***/ 33383:
/*!***********************************************!*\
  !*** ./src/app/app.component.html?ngResource ***!
  \***********************************************/
/***/ ((module) => {

"use strict";
module.exports = "<!--***************** SCAN CAM *****************-->\r\n<!--***************** ABRIL 2022 *****************-->\r\n<!--*************** DESARROLADORES ***************** -->\r\n<!--**************** CAMILA PARDO *****************-->\r\n<!--**************** YESETH REYES *****************-->\r\n\r\n<ion-app>\r\n\r\n  <!-- <app-menu></app-menu> -->\r\n  <app-menuapre></app-menuapre>\r\n  <!-- the main content -->\r\n  <ion-router-outlet id=\"principal\"></ion-router-outlet>\r\n\r\n</ion-app>\r\n\r\n\r\n";

/***/ }),

/***/ 82071:
/*!************************************************************************!*\
  !*** ./src/app/components/menuapre/menuapre.component.html?ngResource ***!
  \************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "<!--***************** SCAN CAM *****************-->\r\n<!--***************** ABRIL 2022 *****************-->\r\n<!--*************** DESARROLADORES ***************** -->\r\n<!--**************** CAMILA PARDO *****************-->\r\n<!--**************** YESETH REYES *****************-->\r\n\r\n\r\n<!--Contenido principal para roles del sisitema -->\r\n<ion-menu side=\"start\" menuId=\"first\" contentId=\"principal\">\r\n  <ion-content>\r\n    <div class=\"menu-header-bg\"></div>\r\n    <div class=\"header-content\">\r\n      <ion-row id=\"navbar\">\r\n        <ion-col size=\"1\"></ion-col>\r\n        <ion-col size=\"11\">\r\n          <ion-row>\r\n            <ion-col size=\"1\"></ion-col>\r\n            <ion-col size=\"11\" style=\"display:block; margin-left: 40px;\">\r\n              <div>\r\n                    <!--Mostrar foto del usuario de la base de datos por Url-->\r\n                    <div *ngIf=\"!this.url\">\r\n                      <ion-icon name=\"person-outline\" color=\"light\"></ion-icon>\r\n                    </div>\r\n\r\n                    <!--Mostrar y traer la foto de la base de datos-->\r\n                    <div *ngIf=\"this.url \">\r\n                      <img [src]=\"this.url\" class=\"lafoto\">\r\n                    </div>\r\n              </div>\r\n            </ion-col>\r\n            <ion-col size=\"1\"></ion-col>\r\n            <ion-col size=\"11\">\r\n                <!--Condicion de nombre para llamar nombre de usuario a vista front-->\r\n                <ion-label>\r\n                  <h2 *ngIf=\"this.nombre !== null \">{{this.nombre}}</h2>\r\n                </ion-label>\r\n            </ion-col>\r\n          </ion-row>\r\n        </ion-col>\r\n      </ion-row>\r\n    </div>\r\n\r\n    <div class=\"action-button\">\r\n      <!--condicionales rol aprendiz-->\r\n      <ion-list *ngIf=\"this.role==='aprendiz' \">\r\n        <!--Inicio para perfil aprendiz-->\r\n        <ion-item routerLink=\"/inicioapre\">\r\n          <ion-icon name=\"home-outline\"></ion-icon>Inicio\r\n        </ion-item>\r\n        <!--Perfil rol aprendiz-->\r\n        <ion-item routerLink=\"/perfilaprendiz\">\r\n          <ion-icon name=\"person-outline\"></ion-icon>Perfil\r\n        </ion-item>\r\n        <!--entrenamiento de maquina del aprendiz-->\r\n        <ion-item routerLink=\"/entrenmaquiaprendiz\">\r\n          <ion-icon name=\"camera\"></ion-icon>Entrenamiento Sistema\r\n        </ion-item>\r\n      </ion-list>\r\n\r\n      <!--condicionales rol invitado-->\r\n      <ion-list *ngIf=\"this.role==='invitado' \">\r\n        <!--Inicio para perfil invitado-->\r\n        <ion-item routerLink=\"/inicioinv\">\r\n          <ion-icon name=\"home-outline\"></ion-icon>Inicio\r\n        </ion-item>\r\n        <!--Perfil rol invitado-->\r\n        <ion-item routerLink=\"/perfilinvitado\">\r\n          <ion-icon name=\"person-outline\"></ion-icon>Perfil\r\n        </ion-item>\r\n        <!--entrenamiento de maquina del invitado-->\r\n        <ion-item routerLink=\"/entrenmaquiinvitado\">\r\n          <ion-icon name=\"camera\"></ion-icon>Entrenamiento Sistema\r\n        </ion-item>\r\n      </ion-list>\r\n\r\n      <!--condicionales rol funcionario-->\r\n      <ion-list *ngIf=\"this.role==='funcionario' \">\r\n        <!--Inicio para perfil funcionario-->\r\n        <ion-item routerLink=\"/iniciofun\">\r\n          <ion-icon name=\"home-outline\"></ion-icon>Inicio\r\n        </ion-item>\r\n        <!--Perfil rol funcionario-->\r\n        <ion-item routerLink=\"/perfilfuncionario\">\r\n          <ion-icon name=\"person-outline\"></ion-icon>Perfil\r\n        </ion-item>\r\n        <!--entrenamiento de maquina del invitado-->\r\n        <ion-item routerLink=\"/entrenmaquifuncionario\">\r\n          <ion-icon name=\"camera\"></ion-icon>Entrenamiento Sistema\r\n        </ion-item>\r\n      </ion-list>\r\n\r\n\r\n      <!--condicionales rol gestor-->\r\n      <ion-list *ngIf=\"this.role==='gestor' \">\r\n        <!--Inicio para perfil gestor-->\r\n        <ion-item routerLink=\"/inicioges\">\r\n          <ion-icon name=\"home-outline\"></ion-icon>Inicio\r\n        </ion-item>\r\n        <!--Perfil rol gestor-->\r\n        <ion-item routerLink=\"/perfilgestor\">\r\n          <ion-icon name=\"person-outline\"></ion-icon>Perfil\r\n        </ion-item>\r\n        <!--entrenamiento de maquina del invitado-->\r\n        <ion-item routerLink=\"/entrenmaquina\">\r\n          <ion-icon name=\"camera\"></ion-icon>Entrenamiento Sistema\r\n        </ion-item>\r\n        <!--vista base de datos rol gestor-->\r\n        <ion-item routerLink=\"/listado\">\r\n          <ion-icon name=\"documents-outline\"></ion-icon>Base de Datos\r\n        </ion-item>\r\n        <!--estadisticas de registro de entrada y salida-->\r\n        <ion-item routerLink=\"/estadisticas\">\r\n          <ion-icon name=\"bar-chart-outline\"></ion-icon>Estadisticas\r\n        </ion-item>\r\n        <!--creación de usuarios del rol gestor -->\r\n        <ion-item routerLink=\"/base-excel\">\r\n          <ion-icon name=\"server-outline\"></ion-icon>Crear Usuarios\r\n        </ion-item>\r\n      </ion-list>\r\n\r\n      <!--condicionales rol seguridad-->\r\n      <ion-list *ngIf=\"this.role==='seguridad' \">\r\n        <!--Inicio para perfil seguridad-->\r\n        <ion-item routerLink=\"/rolseguridad\">\r\n          <ion-icon name=\"home-outline\"></ion-icon>Inicio\r\n        </ion-item>\r\n        <!--Perfil rol seguridad-->\r\n        <ion-item routerLink=\"/perfilseguridad\">\r\n          <ion-icon name=\"person-outline\"></ion-icon>Perfil\r\n        </ion-item>\r\n        <!--entrenamiento de maquina del invitado-->\r\n        <ion-item routerLink=\"/entrenarmaquina\">\r\n          <ion-icon name=\"camera\"></ion-icon>Entrenamiento Sistema\r\n        </ion-item>\r\n        <!--registro de invitados-->\r\n        <ion-item routerLink=\"/registroinvitado\">\r\n          <ion-icon name=\"person-add-outline\"></ion-icon>Registrar Invitado\r\n        </ion-item>\r\n        <!--lista de los registros de ingresos-->\r\n        <ion-item routerLink=\"/listadoseguridad\">\r\n          <ion-icon name=\"documents-outline\"></ion-icon>Listado de Ingresos\r\n        </ion-item>\r\n        <!--Reconocimiento facial-->\r\n        <ion-item routerLink=\"/camaraescaner\">\r\n          <ion-icon name=\"camera-reverse-outline\"></ion-icon>Reconocimiento\r\n        </ion-item>\r\n      </ion-list>\r\n\r\n    </div>\r\n  </ion-content>\r\n</ion-menu>\r\n";

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendor"], () => (__webpack_exec__(14431)));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=main.js.map