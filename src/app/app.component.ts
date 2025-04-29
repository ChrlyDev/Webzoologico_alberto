import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NuevocomponenteComponent } from './components/nuevocomponente/nuevocomponente.component';
import { OtronuevocomponenteComponent } from './components/otronuevocomponente/otronuevocomponente.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NuevocomponenteComponent, OtronuevocomponenteComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Mi Amor';
  etiqueta = 'Esto es una etiqueta feliz ;)';
}
