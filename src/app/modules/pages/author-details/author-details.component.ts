import { Component, OnInit } from '@angular/core';
import { AuthorsService } from '../../../../services/authors-service/authors.service';
import { ActivatedRoute } from '@angular/router';
import { Author } from '../../../../models/author-data';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-author-details',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './author-details.component.html',
  styleUrl: './author-details.component.scss',
})
export class AuthorDetailsComponent implements OnInit {
  constructor(
    private route: ActivatedRoute,
    private _AuthorsService: AuthorsService
  ) {}
  id: string | null = null;
  author: Author={} as Author;

  ngOnInit(): void {
    this.route.paramMap.subscribe((params) => {
      this.id = params.get('id');
      console.log(this.id);
      // this._globaleServie.showLocalLoader();

      this._AuthorsService
        .getAuthordetails(`${this.id}`)
        .subscribe((res) => {
          if (res) {
            console.log('author', res.docs[0]);
            res.docs[0].top_subjects= res.docs[0].top_subjects.splice(0,5)
          //  if(!res.birth_date ){
          //   res.birth_date="There is no available birth date for this author"
          //  }
            this.author=res.docs[0]
          }
        });
    });

    // this._globaleServie.hideLocalLoader();
  }
}
