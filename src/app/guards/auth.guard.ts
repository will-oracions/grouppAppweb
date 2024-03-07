import { Injectable } from '@angular/core';
import {
    Router,
} from '@angular/router';
import { tap } from 'rxjs/operators';
import { AuthentificationsService } from '../demo/service/auth.service';

@Injectable({
    providedIn: 'root'
})
export class AuthGuard {
    constructor(private router: Router, private authService: AuthentificationsService) { }

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