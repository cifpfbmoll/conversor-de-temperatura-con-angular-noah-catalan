# Arquitectura

- `TemperatureService` actúa como capa de dominio y fuente de verdad de las unidades soportadas. Internamente utiliza Kelvin como unidad base para simplificar fórmulas.
- `ConverterComponent` encapsula el formulario reactivo, valida entradas y dispara la conversión a través del servicio.
- `AppComponent` (standalone) importa y renderiza el `ConverterComponent` como vista principal.

## Decisiones clave
- Formularios reactivos: mejores para validación y control de estado.
- Kelvin como unidad intermedia: reduce combinatoria de fórmulas.
- Comentarios en español en archivos clave para fines didácticos.
