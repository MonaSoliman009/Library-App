import { Component } from '@angular/core';
import { HeaderComponent } from "../components/header/header.component";
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-pages-layout',
  standalone: true,
  imports: [HeaderComponent,RouterOutlet],
  templateUrl: './pages-layout.component.html',
  styleUrl: './pages-layout.component.scss'
})
export class PagesLayoutComponent {

}
