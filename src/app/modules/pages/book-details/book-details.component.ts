import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BooksService } from '../../../../services/books-service/books.service';
import { AuthorData, BookData } from '../../../../models/book-data';
import { CommonModule } from '@angular/common';
import { AuthorsService } from '../../../../services/authors-service/authors.service';
import { Author } from '../../../../models/author-data';
import {
  GlobalService,
  MessageType,
} from '../../../../services/global-service/global-service.service';
import { LocalspinnerComponent } from '../../shared/components/localspinner/localspinner.component';
@Component({
  selector: 'app-book-details',
  standalone: true,
  imports: [LocalspinnerComponent, CommonModule],
  templateUrl: './book-details.component.html',
  styleUrl: './book-details.component.scss',
})
export class BookDetailsComponent implements OnInit, OnDestroy {
  id: string | null = null;
  private sub: any;
  book: BookData = {} as BookData;
  authors: AuthorData[] = [];
  constructor(
    private route: ActivatedRoute,
    private _BooksService: BooksService,
    private _AuthorsService: AuthorsService,
    public _globaleServie: GlobalService,
    private router: Router
  ) {}

  ngOnInit(): void {
    window.scroll({ 
      top: 0, 
      left: 0, 
      behavior: 'smooth' 
});
    this.route.paramMap.subscribe({
      error: (err) => {
        this._globaleServie.messageAlert(
          MessageType.Error,
          'Error getting Data , Try Again'
        );
      },
      next: (params) => {
        this.id = params.get('id');
        // console.log(this.id);
        this._globaleServie.showLocalLoader();
        this.sub = this._BooksService.getBookDetails(this.id ?? '').subscribe({
          error: (err) => {
            this._globaleServie.messageAlert(
              MessageType.Error,
              'Error getting Data , Try Again'
            );
          },
          next: (res) => {
            if (res) {
              this.book = res;
              console.log(res);

              this.book.authors.forEach((author) => {
                // console.log('author', author.author.key.substring(1));

                this._AuthorsService
                  .getAuthorDetailsByKey(author.author.key.substring(1))
                  .subscribe((res) => {
                    console.log(res);

                    if (res) {
                      this.authors.push(res);
                    } else {
                      this._globaleServie.messageAlert(
                        MessageType.Error,
                        'Error getting Data , Try Again'
                      );
                    }
                  });
              });
              this._globaleServie.hideLocalLoader();
            } else {
              this._globaleServie.messageAlert(
                MessageType.Error,
                'Error getting Data , Try Again'
              );
            }
          },
        });
      },
    });
  }

  redirectToAuthorDetails(key: string) {
    this.router.navigateByUrl(`/author/${key}`);
  }
  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }
}
