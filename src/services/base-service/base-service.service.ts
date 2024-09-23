import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import {  map } from "rxjs/operators";
import { GlobalService, MessageType } from "../global-service/global-service.service";
import { ServiceResult } from "../../models/service.result";

export class BaseService {
  constructor(
    protected serviceUrl: string,
    protected httpClient: HttpClient,
    protected globalService: GlobalService
  ) { }

  protected get<TModel>(
    actionName?: string,
    id?: string,
  ): Observable<TModel> {
    // for any get
    const path = id
      ? `${this.serviceUrl}/${actionName}/${id}`
      : actionName
        ? `${this.serviceUrl}/${actionName}`
        : `${this.serviceUrl}`;

    return this.httpClient.get<TModel>(path).pipe(
      map((resultVM: TModel) => {
        return resultVM;
      })
    );
  }

  // protected getWithQueryParams<TModel>(
  //   actionName: string,
  //   quereyParams: any,
  //   id?:string
  // ): Observable<ServiceResult<TModel>> {
  //   // for any get
  //   const path = id
  //     ? `${this.serviceUrl}/${actionName}/${id}`
  //     : `${this.serviceUrl}/${actionName}`;

  //   return this.httpClient.get<ServiceResult<TModel>>(path, { params: quereyParams }).pipe(
  //     map((resultVM: ServiceResult<TModel>) => {
  //       return this.handleResponse<TModel>(resultVM);
  //     })
  //   );
  // }

  // protected post<TModel>(
  //   actionName: string,
  //   data: any,
  //   displaySucessMessage = false
  // ) {
  //   return this.httpClient.post<ServiceResult<TModel>>(`${this.serviceUrl}/${actionName}`, data).pipe(
  //     map((resultVM: ServiceResult<TModel>) => {
  //       return this.handleResponse<TModel>(resultVM, displaySucessMessage);
  //     })
  //   );
  // }
  // protected postWithParams<TModel>(
  //   actionName: string,
  //   params: string,
  //   data: any
  // ) {
  //   return this.httpClient
  //     .post<ServiceResult<TModel>>(`${this.serviceUrl}/${actionName}/${params}`, data)
  //     .pipe(
  //       map((resultVM: ServiceResult<TModel>) => {
  //         return this.handleResponse<TModel>(resultVM);
  //       })
  //     );
  // }

  // protected put<TModel>(actionName: string, data: any) {
  //   return this.httpClient.put<ServiceResult<TModel>>(`${this.serviceUrl}/${actionName}`, data).pipe(
  //     map((resultVM: ServiceResult<TModel>) => {
  //       return this.handleResponse<TModel>(resultVM);
  //     })
  //   );
  // }

  // protected delete<TModel>(
  //   actionName: string,
  //   id?:string
  // ): Observable<ServiceResult<TModel>> {
  //   // for any get
  //   const path = id
  //     ? `${this.serviceUrl}/${actionName}/${id}`
  //     : `${this.serviceUrl}/${actionName}`;

  //   return this.httpClient.delete<ServiceResult<TModel>>(path).pipe(
  //     map((resultVM: ServiceResult<TModel>) => {
  //       return this.handleResponse<TModel>(resultVM);
  //     })
  //   );
  // }


}
