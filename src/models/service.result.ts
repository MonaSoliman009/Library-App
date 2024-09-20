// Server Side Result Returned for API Methods

import { BookData } from "./book-data";

// Client Side Result Returned for Angular Service
export interface ServiceResult<T> {
  success?: boolean;
  status?: boolean;
  Message: string;
  works: BookData[];
}
