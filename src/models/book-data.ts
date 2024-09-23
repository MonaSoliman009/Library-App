import { Author } from "./author-data";

export interface BookData {
    key: string;
    title: string;
    cover_id: number;
    authors:any[];
    first_publish_year:number
    Editions_Count:number;
    number_of_pages:number
    created:{type:string,value:string}
}

export interface BookDataResponse {
   works:BookData[]
}
