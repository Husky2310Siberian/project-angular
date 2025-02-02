import { Component } from '@angular/core';
import { RouterOutlet , RouterLink} from '@angular/router';
import { ListGroupMenuComponent } from "./components/list-group-menu/list-group-menu.component";
import { HeaderComponent } from "./components/header/header.component";
import { FooterComponent } from "./components/footer/footer.component";
import { NavbarComponent } from './components/navbar/navbar.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, ListGroupMenuComponent, HeaderComponent, FooterComponent , NavbarComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'example-3';
}