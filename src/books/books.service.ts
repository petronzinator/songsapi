import { Injectable } from '@nestjs/common';
import { BookListItem, CreateBookRequest } from './models';
import * as cuid from 'cuid';
@Injectable()
export class BooksService {

    private books: BookListItem[] = [
        { id: '1', title: 'Like a Prayer', author: 'Madonna', format: 'HardCover', onLoan: true },
        { id: '2', title: 'Planet Rock', author: 'Afrika Bambaata', format: 'HardCover', onLoan: true },
        { id: '3', title: 'Don\'t Believe the Hype', author: 'Public Enemy', format: 'HardCover', onLoan: true }
    ];


    async getAll() {
        return this.books;
    }

    async addOne(book: CreateBookRequest) {
        const bookToAdd: BookListItem = {
            ...book,
            id: cuid(),
        };
        this.books = [bookToAdd, ...this.books];
        return bookToAdd;
    }
}
