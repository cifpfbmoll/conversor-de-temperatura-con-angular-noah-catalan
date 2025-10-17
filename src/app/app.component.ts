import { Component } from '@angular/core';
import { ConverterComponent } from './features/converter/converter.component';

@Component({
  selector: 'app-root',
  standalone: true,
  // Mostramos el conversor como vista principal
  imports: [ConverterComponent],
  template: `
    <main class="container">
      <h1>Conversor de Temperatura de Noah Catalán</h1>
      <app-converter />
    </main>
  `,
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'temp-converter';
}
