import { Author } from './author-data';



interface IObject {
  type: string; value: string
}
export interface BookData {
  key: string;
  title: string;
  cover_id: number;
  authors: { type: { key: string }; author: { key: string } }[];
  first_publish_year: number;
  Editions_Count: number;
  number_of_pages: number;
  created: IObject;
  covers: number[];
  last_modified: IObject;
  latest_revision: number;
  revision: number;
  subject_places: string[];
  subjects: string[];
 isFavorite?:boolean;
  type: { key: string };
}

export interface AuthorData {
  created: IObject;
  key: string;
  last_modified: IObject;
  latest_revision: number;
  name: string;
  revision: number;
  type: { key: string };
}


export interface OpenLibraryBook {
  title: string;
  author_name: string[];
  cover_i?: number;
  first_publish_year?: number;
  key: string;
  cover_edition_key: string;
  edition_count: number
}

export interface ApiResponse {
  docs: OpenLibraryBook[]
  documentation_url: string
  numFound: number
  numFoundExact: boolean
  num_found: number
  offset: null
  q: string
  start: number
}
