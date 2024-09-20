import { Component, OnDestroy, OnInit } from '@angular/core';
import { GlobalService } from '../../../../services/global-service/global-service.service';
import { BooksService } from '../../../../services/books-service/books.service';
import { BookData } from '../../../../models/book-data';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent implements OnInit , OnDestroy{
  private sub: any;
  booksInfo: BookData[]=[];

  constructor(private _BooksService:BooksService) {}
  ngOnInit() {
    // this._globaleServie.showLocalLoader();
    // this.sub = this._BooksService.getBooksData().subscribe((res) => {
  
     
    //   if(res){
    //     this.booksInfo = res.works.splice(0,9);
    //     console.log(this.booksInfo);
    //     // this._globaleServie.hideLocalLoader();

    //   }
    // else {
    //     // this._HelperMethodsService.errorAlert(res.Message);
    //   }
    // });
   
  }
  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }
}
