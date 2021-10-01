import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { BookService } from '../services/book.service';
import { Book } from '../model/book';
@Component({
  selector: 'app-book-details',
  templateUrl: './book-details.component.html',
  styleUrls: ['./book-details.component.scss']
})
export class BookDetailsComponent implements OnInit {
  bookId!: number;
  BookDetails$!: Book;
  constructor(
    private bookService: BookService
    ) { }

  ngOnInit(){
    this.getBookListById();
    this.getAllBookList();
  }
  getAllBookList(){
    this.bookService.getAllBooks().subscribe((data) => {              
      console.log(data);

    });
  }
  getBookListById(){
    this.bookService.getBookById(this.bookId).subscribe((data) => {              
      this.BookDetails$=data;
      console.log(this.BookDetails$);

    });
  }
  addToCart(){
    // this.bookService.addToCart(bookId).subscribe();
    this.bookService.getBookById(this.bookId);
  }
}
