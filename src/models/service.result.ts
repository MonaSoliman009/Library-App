// Server Side Result Returned for API Methods

import { Author } from './author-data';
import { BookData } from './book-data';

// Client Side Result Returned for Angular Service
export interface ServiceResult<T> extends BookData {
  success?: boolean;
  status?: boolean;
  Message?: string;
  works?: T;
}

export interface BooksApiCallResponse {
  key: string;
  name: string;
  subject_type: string;
  work_count: number;
  works: Work[];
}

export interface Work {
  authors: Author[];
  availability: Availability;
  cover_edition_key: string;
  cover_id: number;
  edition_count: number;
  first_publish_year: number;
  has_fulltext: boolean;
  ia: string;
  ia_collection: string[];
  key: string;
  lending_edition: string;
  lending_identifier: string;
  lendinglibrary: boolean;
  printdisabled: boolean;
  public_scan: boolean;
  subject: string[];
  title: string;
}

interface Availability {
  available_to_borrow: boolean;
  available_to_browse: boolean;
  available_to_waitlist: boolean;
  identifier: string;
  is_browseable: boolean;
  is_lendable: boolean;
  is_previewable: boolean;
  is_printdisabled: boolean;
  is_readable: boolean;
  is_restricted: boolean;
  isbn: null | string;
  last_loan_date: null | string;
  last_waitlist_date: null | string;
  num_waitlist: null | string;
  oclc: null | string;
  openlibrary_edition: string;
  openlibrary_work: string;
  status: string;
  __src__: string;
}
