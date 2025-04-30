import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import { AnimalComponent } from './components/animal/animal.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, AnimalComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'Mi Amor';
  etiqueta = 'Esto es una etiqueta feliz ;)';
}
