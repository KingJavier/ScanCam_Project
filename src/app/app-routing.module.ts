/* eslint-disable max-len */
import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { CheckRoleGuard } from'./shared/guards/check-role.guard';
import { CheckRoleAprendizGuard } from'./shared/guards/check-role-aprendiz.guard';
import { CheckRoleFuncionarioGuard} from'./shared/guards/check-role-funcionario.guard';
import { CheckRoleGestorGuard } from'./shared/guards/check-role-gestor.guard';
import { CheckRoleInvitadoGuard} from'./shared/guards/check-role-invitado.guard';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./pages/home/home.module').then( m => m.HomePageModule),
    pathMatch: 'full'
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'login',
    loadChildren: () => import('./pages/login/login.module').then( m => m.LoginPageModule),
    pathMatch: 'full',
  },
  {
    path: 'forgot-password',
    loadChildren: () => import('./pages/forgot-password/forgot-password.module').then( m => m.ForgotPasswordPageModule),
    pathMatch: 'full',
  },
  {
    path: 'register',
    loadChildren: () => import('./pages/register/register.module').then( m => m.RegisterPageModule),
    pathMatch: 'full',
  },
  {
    path: 'verificacion-email',
    loadChildren: () => import('./pages/verificacion-email/verificacion-email.module').then( m => m.VerificacionEmailPageModule),
    pathMatch: 'full',
  },
  {
    path: 'actufoto',
    loadChildren: () => import('./pages/certificado/actufoto.module').then( m => m.ActufotoPageModule),
    pathMatch: 'full',
  },
  {
    path: 'fullemail',
    loadChildren: () => import('./pages/fullemail/fullemail.module').then( m => m.FullemailPageModule),
    pathMatch: 'full',
  },
  {
    path: 'correoverifiexito',
    loadChildren: () => import('./pages/correoverifiexito/correoverifiexito.module').then( m => m.CorreoverifiexitoPageModule),
    pathMatch: 'full',
  },
  {
    path: 'correoverifierror',
    loadChildren: () => import('./pages/correoverifierror/correoverifierror.module').then( m => m.CorreoverifierrorPageModule),
    pathMatch: 'full',
  },
  {
    path: 'actufotoaprendiz',
    loadChildren: () => import('./pages/rolaprendiz/actufotoaprendiz/actufotoaprendiz.module').then( m => m.ActufotoaprendizPageModule),
    pathMatch: 'full',
    canActivate:[CheckRoleAprendizGuard]
  },
  {
    path: 'entrenmaquiaprendiz',
    loadChildren: () => import('./pages/rolaprendiz/entrenmaquiaprendiz/entrenmaquiaprendiz.module').then( m => m.EntrenmaquiaprendizPageModule),
    pathMatch: 'full',
    canActivate:[CheckRoleAprendizGuard]
  },
  {
    path: 'inicioapre',
    loadChildren: () => import('./pages/rolaprendiz/inicioapre/inicio.module').then( m => m.InicioPageModule),
    pathMatch: 'full',
    canActivate:[CheckRoleAprendizGuard]
  },
  {
    path: 'perfilaprendiz',
    loadChildren: () => import('./pages/rolaprendiz/perfilaprendiz/perfilaprendiz.module').then( m => m.PerfilaprendizPageModule),
    pathMatch: 'full',
    canActivate:[CheckRoleAprendizGuard]
  },
  {
    path: 'actufotofuncionario',
    loadChildren: () => import('./pages/rolfuncionario/actufotofuncionario/actufotofuncionario.module').then( m => m.ActufotofuncionarioPageModule),
    pathMatch: 'full',
    canActivate:[CheckRoleFuncionarioGuard]
  },
  {
    path: 'entrenmaquifuncionario',
    loadChildren: () => import('./pages/rolfuncionario/entrenmaquifuncionario/entrenmaquifuncionario.module').then( m => m.EntrenmaquifuncionarioPageModule),
    pathMatch: 'full',
    canActivate:[CheckRoleFuncionarioGuard]
  },
  {
    path: 'iniciofun',
    loadChildren: () => import('./pages/rolfuncionario/iniciofun/inicio.module').then( m => m.InicioPageModule),
    pathMatch: 'full',
    canActivate:[CheckRoleFuncionarioGuard]
  },
  {
    path: 'perfilfuncionario',
    loadChildren: () => import('./pages/rolfuncionario/perfilfuncionario/perfilfuncionario.module').then( m => m.PerfilfuncionarioPageModule),
    pathMatch: 'full',
    canActivate:[CheckRoleFuncionarioGuard]
  },
  {
    path: 'actufotogestor',
    loadChildren: () => import('./pages/rolgest/actufotogestor/actufotogestor.module').then( m => m.ActufotogestorPageModule),
    pathMatch: 'full',
    canActivate:[CheckRoleGestorGuard]
  },
  {
    path: 'entrenmaquina',
    loadChildren: () => import('./pages/rolgest/entrenmaquina/entrenmaquina.module').then( m => m.EntrenmaquinaPageModule),
    pathMatch: 'full',
    canActivate:[CheckRoleGestorGuard]
  },
  {
    path: 'estadisticas',
    loadChildren: () => import('./pages/rolgest/estadisticas/estadisticas.module').then( m => m.EstadisticasPageModule),
    pathMatch: 'full',
    canActivate:[CheckRoleGestorGuard]
  },
  {
    path: 'inicioges',
    loadChildren: () => import('./pages/rolgest/inicioges/inicio.module').then( m => m.InicioPageModule),
    pathMatch: 'full',
    canActivate:[CheckRoleGestorGuard]
  },
  {
    path: 'listado',
    loadChildren: () => import('./pages/rolgest/listado/listado.module').then( m => m.ListadoPageModule),
    pathMatch: 'full',
    canActivate:[CheckRoleGestorGuard]
  },
  {
    path: 'perfilgestor',
    loadChildren: () => import('./pages/rolgest/perfilgestor/perfilgestor.module').then( m => m.PerfilgestorPageModule),
    pathMatch: 'full',
    canActivate:[CheckRoleGestorGuard]
  },
  {
    path: 'actufotoseguridad',
    loadChildren: () => import('./pages/rolsecurity/actufotoseguridad/actufotoseguridad.module').then( m => m.ActufotoseguridadPageModule),
    pathMatch: 'full',
    canActivate:[CheckRoleGuard]
  },
  {
    path: 'camaraescaner',
    loadChildren: () => import('./pages/rolsecurity/camaraescaner/camaraescaner.module').then( m => m.CamaraescanerPageModule),
    pathMatch: 'full',
  },
  {
    path: 'entrenarmaquina',
    loadChildren: () => import('./pages/rolsecurity/entrenarmaquina/entrenarmaquina.module').then( m => m.EntrenarmaquinaPageModule),
    pathMatch: 'full',
    canActivate:[CheckRoleGuard]
  },
  {
    path: 'listadoseguridad',
    loadChildren: () => import('./pages/rolsecurity/listadoseguridad/listadoseguridad.module').then( m => m.ListadoseguridadPageModule),
    pathMatch: 'full',
    canActivate:[CheckRoleGuard]
  },
  {
    path: 'perfilseguridad',
    loadChildren: () => import('./pages/rolsecurity/perfilseguridad/perfilseguridad.module').then( m => m.PerfilseguridadPageModule),
    pathMatch: 'full',
    canActivate:[CheckRoleGuard]
  },
  {
    path: 'registroinvitado',
    loadChildren: () => import('./pages/rolsecurity/registroinvitado/registroinvitado.module').then( m => m.RegistroinvitadoPageModule),
    pathMatch: 'full',
    canActivate:[CheckRoleGuard]
  },
  {
    path: 'rolseguridad',
    loadChildren: () => import('./pages/rolsecurity/rolseguridad/rolseguridad.module').then( m => m.RolseguridadPageModule),
    pathMatch: 'full',
    canActivate:[CheckRoleGuard]
  },
  {
    path: 'inicioinv',
    loadChildren: () => import('./pages/rolinvit/inicioinv/inicio.module').then( m => m.InicioPageModule),
    pathMatch: 'full',
    canActivate:[CheckRoleInvitadoGuard]
  },
  {
    path: 'cambiocontrasena',
    loadChildren: () => import('./pages/cambiocontrasena/cambiocontrasena.module').then( m => m.CambiocontrasenaPageModule),
    pathMatch: 'full',
  },
  {
    path: 'perfilinvitado',
    loadChildren: () => import('./pages/rolinvit/perfilinvitado/perfilinvitado.module').then( m => m.PerfilinvitadoPageModule),
    pathMatch: 'full',
    canActivate:[CheckRoleInvitadoGuard]
  },
  {
    path: 'entrenmaquiinvitado',
    loadChildren: () => import('./pages/rolinvit/entrenmaquiinvitado/entrenmaquiinvitado.module').then( m => m.EntrenmaquiinvitadoPageModule),
    pathMatch: 'full',
    canActivate:[CheckRoleInvitadoGuard]
  },
  {
    path: 'actufotoinvitado',
    loadChildren: () => import('./pages/rolinvit/actufotoinvitado/actufotoinvitado.module').then( m => m.ActufotoinvitadoPageModule),
    pathMatch: 'full',
    canActivate:[CheckRoleInvitadoGuard]
  },
  {
    path: 'base-excel',
    loadChildren: () => import('./pages/rolgest/base-excel/base-excel.module').then( m => m.BaseExcelPageModule),
    pathMatch: 'full',
    canActivate:[CheckRoleGestorGuard]
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules,  useHash: true })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
