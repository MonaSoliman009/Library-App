export interface BookData {
    key: string;
    title: string;
    cover_id: number;
    authors:Author[];
    first_publish_year:number
}

interface Author{
    key: string;
    name: string;
}
