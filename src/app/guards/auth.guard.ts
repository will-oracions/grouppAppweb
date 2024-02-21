import { Injectable } from '@angular/core';
import {
    Router,
} from '@angular/router';
import { tap } from 'rxjs/operators';
import { AuthentificationService } from '../demo/service/auth.service';

@Injectable({
    providedIn: 'root'
})
export class AuthGuard {
    constructor(private router: Router, private authService: AuthentificationService) { }

    CanActivateFn() {
        return this.authService.isLoggedIn$.pipe(
            tap((isLoggedIn) => {
                if (!isLoggedIn) {
                    this.router.navigate(['/login']);
                }
            })
        );
    }
}