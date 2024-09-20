import { Routes } from '@angular/router';
import { HomeComponent } from './modules/pages/home/home.component';

export const routes: Routes = [

    {
        path: '',
        component:HomeComponent,
        pathMatch: 'full'
      },
      {
        path: "",
        loadChildren: () => import('./modules/pages/pages.module').then(m => m.PagesModule),
        // canActivate: [AuthGuard]
      }
];
