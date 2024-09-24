import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BooksService } from '../../../../services/books-service/books.service';
import { BookData } from '../../../../models/book-data';
import { CommonModule } from '@angular/common';
import { AuthorsService } from '../../../../services/authors-service/authors.service';
import { Author } from '../../../../models/author-data';
@Component({
  selector: 'app-book-details',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './book-details.component.html',
  styleUrl: './book-details.component.scss'
})
export class BookDetailsComponent {
  id: string | null = null; 
  private sub: any;
  book: BookData={} as BookData;
authors:Author[]=[]
  constructor(private route: ActivatedRoute,private _BooksService:BooksService,
    private _AuthorsService:AuthorsService
  ) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      this.id = params.get('id');
      // console.log(this.id); 
          // this._globaleServie.showLocalLoader();
    this.sub = this._BooksService.getBookdetails(this.id?? '').subscribe((res) => {
  
     
      if(res){
        this.book = res;
        console.log(res);
        this.book.authors.forEach((author)=>{
          this._AuthorsService.getAuthordetails(author.author.key.substring(1,)).subscribe((res) => {
            if(res){
              this.authors.push(res)
              console.log("author",res);
            }
          })
        })
        // this._globaleServie.hideLocalLoader();

      }
    else {
        // this._HelperMethodsService.errorAlert(res.Message);
      }
    });
    });
  }
}
