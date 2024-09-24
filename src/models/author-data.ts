export interface Author {
  key: string;
  name: string;
  birth_date?: string;
  death_date?: string;
  work_count: number;
  top_subjects: string[];
  top_work: string;
  alternate_names: string[];
  type: string;
  _version_: number;
}

export interface AuthorDetailsResponse {
  docs: Author[];
  numFound: string;
  numFoundExact: boolean;
  start: number;
}
