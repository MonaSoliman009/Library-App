import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { SearchComponent } from './search/search.component';
import { FavoriteComponent } from './favorite/favorite.component';

export const routes: Routes = [
  {
    path: 'search',
    component: SearchComponent,
  },
  {
    path: 'favorite',
    component: FavoriteComponent,
  },
];
