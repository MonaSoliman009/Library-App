import { Injectable } from '@angular/core';
import { GlobalService } from '../global-service/global-service.service';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment.prod';
import { BaseService } from '../base-service/base-service.service';
import { Observable } from 'rxjs';
import { ServiceResult } from '../../models/service.result';
import { Author } from '../../models/author-data';

@Injectable({
  providedIn: 'root'
})
export class AuthorsService extends BaseService{

  constructor(
    private _globaleService: GlobalService,
    private _http: HttpClient
  ) {
    super(environment.baseUrl, _http, _globaleService);
  }
  getAuthordetails(name: string): Observable<any> {
    return this.get<any>(`search/authors.json?q=${name}`);
  }
}
