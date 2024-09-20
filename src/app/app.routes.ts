import { Routes } from '@angular/router';
import { HomeComponent } from './modules/pages/home/home.component';
import { NotFoundComponent } from './modules/pages/not-found/not-found.component';

export const routes: Routes = [

    {
        path: '',
        component:HomeComponent,
        pathMatch: 'full'
      },
      { path: 'home',  component: HomeComponent },

      {
        path: "",
        loadChildren: () =>import('./modules/pages/pages.module').then(m =>m.PagesModule)
      },
      {
        path:"**",
        component: NotFoundComponent
      }
];
