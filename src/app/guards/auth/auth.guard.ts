import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {
  Router,
  CanActivate,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  CanActivateChild,
  UrlSegment,
  CanLoad
} from '@angular/router';
import { tap, take } from 'rxjs/operators';
import { Route } from '@angular/compiler/src/core';
import { AuthService } from 'src/app/core/auth/auth.service';


@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private authService: AuthService, private router: Router) { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> {
    return this.checkAuthState(state.url);
  }

  canActivateChild(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> {
    return this.checkAuthState(state.url);
  }

  canLoad(route: Route, segments: UrlSegment[]): Observable<boolean> {
    const url = segments.map(s => `/${s}`).join('');
    return this.checkAuthState(url).pipe(take(1));
  }


  private checkAuthState(redirect: string): Observable<boolean> {
    return this.authService.isAuthenticated.pipe(tap(is => {
      if (!is) {
        this.router.navigate(['/login'], {
          queryParams: { redirect }
        });
      }
    }));
  }
}
