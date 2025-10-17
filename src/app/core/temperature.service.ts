import { Injectable } from '@angular/core';

// Servicio de dominio para convertir temperaturas entre unidades comunes.
// Mantener la lógica aquí facilita las pruebas unitarias y la reutilización.
@Injectable({ providedIn: 'root' })
export class TemperatureService {
  // Unidades soportadas
  readonly units = ['Celsius', 'Fahrenheit', 'Kelvin'] as const;
  type = '';

  // Convierte cualquier valor a Kelvin (unidad base interna)
  private toKelvin(value: number, from: string): number {
    switch (from) {
      case 'Celsius':
        return value + 273.15;
      case 'Fahrenheit':
        return (value - 32) * (5 / 9) + 273.15;
      case 'Kelvin':
        return value;
      default:
        throw new Error(`Unidad de origen no soportada: ${from}`);
    }
  }

  // Convierte desde Kelvin a la unidad destino
  private fromKelvin(k: number, to: string): number {
    switch (to) {
      case 'Celsius':
        return k - 273.15;
      case 'Fahrenheit':
        return (k - 273.15) * (9 / 5) + 32;
      case 'Kelvin':
        return k;
      default:
        throw new Error(`Unidad de destino no soportada: ${to}`);
    }
  }

  // API pública: convierte entre dos unidades.
  // Redondea a 2 decimales por conveniencia de UI.
  convert(value: number, from: string, to: string): number {
    if (Number.isNaN(value)) {
      throw new Error('Valor numérico inválido');
    }
    const k = this.toKelvin(value, from);
    const result = this.fromKelvin(k, to);
    return Math.round(result * 100) / 100;
  }
}
