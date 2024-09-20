import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { PagesLayoutComponent } from "./modules/shared/pages-layout/pages-layout.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, PagesLayoutComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'LibraryApp';
}
