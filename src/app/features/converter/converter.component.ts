import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { TemperatureService } from '../../core/temperature.service';

@Component({
  selector: 'app-converter',
  standalone: true,
  // Importamos módulos necesarios para el template y formularios reactivos
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './converter.component.html',
  styleUrl: './converter.component.scss'
})
export class ConverterComponent {
  // Formulario reactivo para capturar valor y unidades
  form: FormGroup;

  // Resultado a mostrar tras convertir
  result?: { input: number; from: string; output: number; to: string };

  // Unidades soportadas (se exponen como getter para evitar usar DI antes de tiempo)
  get units(): string[] {
    return this.tempService.units as unknown as string[];
  }

  constructor(private fb: FormBuilder, private tempService: TemperatureService) {
    // Creamos el formulario con validaciones mínimas
    this.form = this.fb.group({
      value: [null, [Validators.required, Validators.pattern(/^[-+]?\d*(?:\.|,)?\d+$/)]],
      from: [null, Validators.required],
      to: [null, Validators.required],
    });
  }

  // Handler de envío. Solo se llama si el formulario es válido.
  onSubmit(): void {
    const raw = this.form.value;
    const value = parseFloat(String(raw.value).replace(',', '.'));
    const from = raw.from as string;
    const to = raw.to as string;
    const output = this.tempService.convert(value, from, to);
    this.result = { input: value, from, output, to };
  }
}
