import { Router } from '@angular/router';
import { AuthentificationService } from '../demo/service/auth.service';
import { inject } from '@angular/core';
import { tap } from 'rxjs';




export const authentificationGuard = () => {
  const router = inject(Router);
  const service = inject(AuthentificationService);
  return service.isLoggedIn$.pipe(
    tap((isLoggedIn) => {
        if (!isLoggedIn) {
            router.navigate(['/login']);
        }
    })
);
};
