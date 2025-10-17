# Proceso de trabajo

## 1. Planificación inicial
- Alcance: conversor con 3 campos y botón habilitado solo si todo es válido.
- Criterios de aceptación: ver `docs/criterios-aceptacion.md`.

## 2. Scaffold
- Generación de app Angular 18 con componentes standalone.
- Estructura base y dependencias instaladas.

## 3. Diseño de arquitectura
- Servicio de dominio para la conversión (Kelvin como base).
- Componente con formulario reactivo y validación.

## 4. Implementación
- `TemperatureService` con métodos `convert()` y validaciones simples.
- `ConverterComponent` con formulario, validadores y presentación del resultado.
- Estilos SCSS mínimos para emular el mockup.

## 5. Pruebas
- Unitarias para el servicio (Celsius↔Fahrenheit, Celsius→Kelvin y retorno).
- Ver `docs/pruebas.md` y `docs/pruebas-manuales.md`.

## 6. Documentación
- Se crean múltiples archivos en `docs/` (ver índice en `docs/README.md`).

## 7. Verificación manual
- Inicio del dev server y validaciones visuales.

## 8. Mantenimiento
- Registro de cambios en `docs/changelog.md`.
