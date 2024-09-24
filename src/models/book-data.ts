import { Author } from './author-data';



interface IObject{
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

  type: { key: string };
}

export interface AuthorData {
  created: IObject;
  key: string;
  last_modified:IObject;
  latest_revision: number;
  name: string;
  revision: number;
  type: { key: string };
}
