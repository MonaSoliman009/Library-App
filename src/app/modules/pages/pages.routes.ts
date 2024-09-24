import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { SearchComponent } from './search/search.component';
import { FavoriteComponent } from './favorite/favorite.component';
import { BookDetailsComponent } from './book-details/book-details.component';
import { AuthorDetailsComponent } from './author-details/author-details.component';

export const routes: Routes = [
  {
    path: 'search',
    component: SearchComponent,
  },
  {
    path: 'favorite',
    component: FavoriteComponent,
  },
  {
    path: 'book/:id',
    component: BookDetailsComponent,
  },
  {
    path: 'author/:id',
    component: AuthorDetailsComponent,
  },
];
