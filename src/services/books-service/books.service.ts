import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { GlobalService } from '../global-service/global-service.service';
import { BaseService } from '../base-service/base-service.service';
import { environment } from '../../environments/environment.prod';
import { BookData } from '../../models/book-data';
import { Observable } from 'rxjs';
import { BooksApiCallResponse, ServiceResult } from '../../models/service.result';

@Injectable({
  providedIn: 'root',
})
export class BooksService extends BaseService {

  constructor(
    private _globaleService: GlobalService,
    private _http: HttpClient
  ) {
    super(environment.baseUrl, _http, _globaleService);
  }

  getBooksData(): Observable< BooksApiCallResponse> {
    return this.get<BooksApiCallResponse>(`subjects/finance.json`);
  }

  getBookDetails(id: string): Observable<BookData> {
    return this.get<BookData>(`works/${id}.json`);
  }
}
