import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { SearchComponent } from './search/search.component';
import { FavoriteComponent } from './favorite/favorite.component';
import { routes } from './pages.routes';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [],
  imports: [
    HomeComponent,SearchComponent,FavoriteComponent,
    CommonModule,
    RouterModule.forChild(routes)  // Lazy loading child routes

  ]
})
export class PagesModule { }
