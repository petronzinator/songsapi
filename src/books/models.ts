export interface BookListItem {
    id: string;
    title: string;
    author: string;
    format: string;
    onLoan: boolean;
}

export class CreateBookRequest {
    title: string;
    author: string;
    format: string;
    onLoan: boolean;
}