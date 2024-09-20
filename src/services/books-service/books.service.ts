import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { GlobalService } from '../global-service/global-service.service';
import { BaseService } from '../base-service/base-service.service';
import { environment } from '../../environments/environment.prod';
import { BookData } from '../../models/book-data';

@Injectable({
  providedIn: 'root'
})
export class BooksService extends BaseService {
  // https://openlibrary.org/subjects/finance.json 
  //https://covers.openlibrary.org/b/id/(cover_id).jpg  cover
  constructor(private _globaleService: GlobalService,
    private _http: HttpClient) { 
    super(environment.baseUrl, _http, _globaleService);

  }

  getBooksData(){
    return this.get<BookData>(`subjects/finance.json`)
 
   }
}
