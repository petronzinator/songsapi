import { Controller, Get, Post, Body } from '@nestjs/common';
import { BooksService } from './books.service';
import { CreateBookRequest } from './models';

@Controller('Books')
export class BooksController {

    constructor(private service: BooksService) { }

    @Get()
    async getAllBooks() {
        return {
            data: await this.service.getAll()
        }
    }

    @Post()
    async addBook(@Body() book: CreateBookRequest) {
        const addedBook = await this.service.addOne(book);
        return new Promise((resolve) => {
            setTimeout(() => {
                resolve(addedBook)
            }, 3000)
        })
    }
}
