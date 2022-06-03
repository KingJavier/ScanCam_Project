import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, Router, UrlTree } from '@angular/router';
import { TaskService } from '../../services/task.service';

@Injectable({
  providedIn: 'root'
})
export class CheckRoleInvitadoGuard implements CanActivate {
  constructor(
    private authSvc: TaskService,
    private router: Router
  ) { }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): boolean {
    const role = localStorage.getItem('role');

    // eslint-disable-next-line no-cond-assign
    if (role !== 'invitado') {
      this.router.navigate(['login']);
      // Si devolvemos FALSE no de permitirá el acceso
      return false;
    } else {
      return true;
    }
  }
  // eslint-disable-next-line @typescript-eslint/type-annotation-spacing

}
