import { Component, OnInit } from '@angular/core';
import { AuthorsService } from '../../../../services/authors-service/authors.service';
import { ActivatedRoute } from '@angular/router';
import { Author } from '../../../../models/author-data';
import { CommonModule } from '@angular/common';
import { GlobalService, MessageType } from '../../../../services/global-service/global-service.service';
import { LocalspinnerComponent } from '../../shared/components/localspinner/localspinner.component';

@Component({
  selector: 'app-author-details',
  standalone: true,
  imports: [LocalspinnerComponent, CommonModule],
  templateUrl: './author-details.component.html',
  styleUrl: './author-details.component.scss',
})
export class AuthorDetailsComponent implements OnInit {
  constructor(
    private route: ActivatedRoute,
    private _AuthorsService: AuthorsService,
    public _globaleServie: GlobalService
  ) {}
  id: string | null = null;
  author: Author = {} as Author;

  ngOnInit(): void {
    this.route.paramMap.subscribe((params) => {
      this.id = params.get('id');
 
      this._globaleServie.showLocalLoader();

      this._AuthorsService.getAuthordetails(`${this.id}`).subscribe({
        error: () => {
          this._globaleServie.messageAlert(
            MessageType.Error,
            'Error getting Data , Try Again'
          );
        },
        next: (res) => {
          this._globaleServie.hideLocalLoader();

          if (res) {
            console.log('author', res);
            res.docs[0].top_subjects = res.docs[0].top_subjects.splice(0, 5);
            this.author = res.docs[0];
          }else{
            this._globaleServie.messageAlert(
              MessageType.Error,
              'Error getting Data , Try Again'
            );
          }
        },
      });
    });
  }
}
