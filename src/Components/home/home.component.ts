import { Component } from '@angular/core';
import { CharacterCartComponentComponent } from "../charactercart-component/charactercart-component.component";
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CharacterCartComponentComponent,RouterOutlet],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
