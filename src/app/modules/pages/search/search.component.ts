import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { debounceTime, distinctUntilChanged, Subject, switchMap } from 'rxjs';
import { BookData, OpenLibraryBook } from '../../../../models/book-data';
import { BooksService } from '../../../../services/books-service/books.service';
import { Router } from '@angular/router';
import { GlobalService, MessageType } from '../../../../services/global-service/global-service.service';
import { LocalspinnerComponent } from '../../shared/components/localspinner/localspinner.component';

@Component({
  selector: 'app-search',
  standalone: true,
  imports: [FormsModule,LocalspinnerComponent],
  templateUrl: './search.component.html',
  styleUrl: './search.component.scss'
})
export class SearchComponent {
  searchSubject = new Subject<string>();
  books: OpenLibraryBook[] = [];
  term: string = ""
  constructor(private bookService: BooksService, private router: Router,
    public _globaleServie: GlobalService

  ) { }

  ngOnInit() {
    this.searchSubject.pipe(
      debounceTime(300),
      distinctUntilChanged(),
      switchMap(term => this.bookService.searchBooks(term))
    ).subscribe({
      error: (err) => {
        this._globaleServie.messageAlert(
          MessageType.Error,
          'Error getting Data , Try Again'
        );
      },
      next: (res: any) => {
            this._globaleServie.hideLocalLoader();

        this.books = res.docs.map((book: any) => ({
          title: book.title,
          key: book.key,
          author: book.author_name?.[0],
          cover: book.cover_i
            ? `https://covers.openlibrary.org/b/id/${book.cover_i}-M.jpg`
            : null
        }));
      }
    });
  }
  onSearch() {
    this._globaleServie.showLocalLoader();
    this.searchSubject.next(this.term);
  }
  redirectToBookDetails(key: string) {
    this.router.navigateByUrl(`/book/${key.split('/')[2]}`);
  }
}
