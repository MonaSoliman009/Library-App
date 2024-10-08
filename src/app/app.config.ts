import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';
import { provideAnimations } from '@angular/platform-browser/animations';

import { provideToastr } from 'ngx-toastr';
import { routes } from './app.routes';
import { provideHttpClient, withFetch } from '@angular/common/http';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes) ,
    provideToastr(),provideHttpClient(
    withFetch(),
  ),
  provideAnimations(), // required animations providers
  provideToastr(), // Toastr providers
]
};
