import { Injectable } from '@angular/core';
import {
  CanActivate,
  ActivatedRouteSnapshot,
  RouterStateSnapshot
} from '@angular/router';
import { RegistrationService } from './registration.service';

@Injectable()
export class CanActivateRouteGuard implements CanActivate {

  constructor(private registrationService: RegistrationService) { }
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    return this.registrationService.isAuth();
  }
}