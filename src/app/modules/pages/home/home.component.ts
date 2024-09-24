import { Component, OnDestroy, OnInit } from '@angular/core';
import { GlobalService } from '../../../../services/global-service/global-service.service';
import { BooksService } from '../../../../services/books-service/books.service';
import { BookData } from '../../../../models/book-data';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent implements OnInit, OnDestroy {
  private sub: any;
  books: BookData[] = [];

  constructor(private _BooksService: BooksService, private router: Router) {}
  ngOnInit() {
    // this._globaleServie.showLocalLoader();
    this.sub = this._BooksService.getBooksData().subscribe((res) => {
      if (res) {
        this.books = res.works.splice(0, 9);
        console.log(this.books);
        // this._globaleServie.hideLocalLoader();
      } else {
        // this._HelperMethodsService.errorAlert(res.Message);
      }
    });
  }
  redirectToBookDetails(key: string) {
    this.router.navigateByUrl(`/book/${key.split('/')[2]}`);
  }
  redirectToAuthorDetails(key: string) {
    this.router.navigateByUrl(`/author/${key}`);
  }
  ngOnDestroy(): void {
    // this.sub.unsubscribe();
  }
}
