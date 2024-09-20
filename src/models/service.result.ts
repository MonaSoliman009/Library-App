// Server Side Result Returned for API Methods

// Client Side Result Returned for Angular Service
export interface ServiceResult<T> {
  success?: boolean;
  status?: boolean;
  Message: string;
  Data?: T;
}
