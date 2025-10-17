# Troubleshooting

## Error TS2729: inyección usada antes de inicialización
- Síntoma: `Property 'tempService' is used before its initialization`.
- Causa: acceso a `this.tempService` en inicializador de campo.
- Solución: exponer `units` con un getter en `ConverterComponent`.

## Botón no se habilita
- Verifica que el valor sea numérico (coma o punto).
- Revisa que "Desde" y "Hacia" estén seleccionados.

## Pruebas no ejecutan
- `npm test` requiere Chrome/Chromium. Instalar o usar un runner alternativo.
