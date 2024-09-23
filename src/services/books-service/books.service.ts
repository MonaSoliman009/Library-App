import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { GlobalService } from '../global-service/global-service.service';
import { BaseService } from '../base-service/base-service.service';
import { environment } from '../../environments/environment.prod';
import { BookData, BookDataResponse } from '../../models/book-data';
import { Observable } from 'rxjs';
import { ServiceResult } from '../../models/service.result';

@Injectable({
  providedIn: 'root',
})
export class BooksService extends BaseService {
  // https://openlibrary.org/subjects/finance.json
  //https://covers.openlibrary.org/b/id/(cover_id).jpg  cover
  constructor(
    private _globaleService: GlobalService,
    private _http: HttpClient
  ) {
    super(environment.baseUrl, _http, _globaleService);
  }

  getBooksData(): Observable< BookDataResponse> {
    return this.get<BookDataResponse>(`subjects/finance.json`);
  }

  getBookdetails(id: string): Observable<BookData> {
    return this.get<BookData>(`works/${id}.json`);
  }
  // https://openlibrary.org/works/OL21177W/editions.json
}
