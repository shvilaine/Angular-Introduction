import { Component } from '@angular/core';
import { AppComponent } from '../app.component';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [AppComponent],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent {

}
