import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { BookData } from '../../models/book-data';
import { Work } from '../../models/service.result';

@Injectable({ providedIn: 'root' })
export class FavoriteService {

  private favoritesSubject = new BehaviorSubject<Work[]>([]);
  favorites$ = this.favoritesSubject.asObservable();

  private favorites: Work[] = [];

  toggleFavorite(book: Work) {
    const index = this.favorites.findIndex(b => b.key === book.key);

    if (index > -1) {
      this.favorites.splice(index, 1);
      book.isFavorite = false;
    } else {
      this.favorites.push(book);
      book.isFavorite = true;
    }

    this.favoritesSubject.next([...this.favorites]);
  }

  getFavorites() {
    return this.favorites;
  }
}
