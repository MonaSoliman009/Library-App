import { Component } from '@angular/core';
import { BookData } from '../../../../models/book-data';
import { FavoriteService } from '../../../../services/favorites-service/favorites.service';
import { Work } from '../../../../models/service.result';

@Component({
  selector: 'app-favorite',
  standalone: true,
  imports: [],
  templateUrl: './favorite.component.html',
  styleUrl: './favorite.component.scss'
})
export class FavoriteComponent {
favorites: Work[] = [];

constructor(private favService: FavoriteService) {}

ngOnInit() {
  this.favService.favorites$.subscribe(favs => {
    this.favorites = favs;
  });
}
}
