import { Component, OnDestroy, OnInit } from '@angular/core';
import { GlobalService, MessageType } from '../../../../services/global-service/global-service.service';
import { BooksService } from '../../../../services/books-service/books.service';
import { BookData } from '../../../../models/book-data';
import { Router } from '@angular/router';
import { LocalspinnerComponent } from '../../shared/components/localspinner/localspinner.component';
import { CommonModule } from '@angular/common';
import { Work } from '../../../../models/service.result';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [LocalspinnerComponent,CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent implements OnInit, OnDestroy {
  private sub: any;
  books: Work[] = [];

  constructor(private _BooksService: BooksService, private router: Router,
    public _globaleServie :GlobalService
  ) {}
  ngOnInit() {
    this._globaleServie.showLocalLoader();
    this.sub = this._BooksService.getBooksData().subscribe((res) => {
      if (res) {
        console.log(res);
        
        this.books = res.works.splice(0, 9);
        
        this._globaleServie.hideLocalLoader();
      } else {
        this._globaleServie.messageAlert(MessageType.Error,"Error getting Data , Try Again");
      }
    },(err)=>{
      this._globaleServie.messageAlert(MessageType.Error,"Error getting Data , Try Again");

    });
  }
  redirectToBookDetails(key: string) {
    this.router.navigateByUrl(`/book/${key.split('/')[2]}`);
  }
  redirectToAuthorDetails(key: string) {
    this.router.navigateByUrl(`/author/${key}`);
  }
  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }
}
