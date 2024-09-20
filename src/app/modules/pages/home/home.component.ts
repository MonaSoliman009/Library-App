import { Component, OnDestroy, OnInit } from '@angular/core';
import { GlobalService } from '../../../../services/global-service/global-service.service';
import { BooksService } from '../../../../services/books-service/books.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent implements OnInit , OnDestroy{
  private sub: any;
  constructor(private _BooksService:BooksService,public _globaleServie: GlobalService) {}
  ngOnInit() {
    this._globaleServie.showLocalLoader();
    this.sub = this._BooksService.g().subscribe((res) => {
     
      if(res.Data){
        this.doctorInfo = res.Data;
        this._globaleServie.hideLocalLoader();

      }
    else {
        this._HelperMethodsService.errorAlert(res.Message);
      }
    });
   
  }
  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }
}
