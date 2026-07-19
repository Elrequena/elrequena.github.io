# Requena Labs

Landing page personal construido con Angular 21. Aplicacion standalone con signals, change detection on-push y estetica de circuito impreso (PCB) con pulsos animados.

## Caracteristicas

- **Estetica PCB** — Fondo de circuito impreso con trazas, vias, chips IC y pulsos electricos animados que recorren toda la pantalla.
- **Dark mode** — Toggle con persistencia en `localStorage` y deteccion de preferencia del sistema.
- **Responsive** — Layout adaptivo con cards de proyectos centradas en desktop y apiladas en movil.
- **Componentes standalone** — Arquitectura modular sin modulos, cada componente es autocontenido.
- **Zoneless** — Bootstrap con `provideZonelessChangeDetection` (Angular 21).

## Tecnologias

| Paquete | Uso |
|---|---|
| Angular 21 | Framework principal |
| TypeScript | Lenguaje principal |
| SCSS | Estilos con variables CSS y dark mode |
| SVG animado | Fondo PCB con `<animateMotion>` |

## Inicio rapido

### Requisitos

- [Node.js](https://nodejs.org/) >= 24.15.0
- [pnpm](https://pnpm.io/) >= 11.1.3

### Instalacion

```bash
pnpm install
```

### Servidor de desarrollo

```bash
pnpm start
```

Navega a `http://localhost:4200/`. La aplicacion se recarga automaticamente al modificar archivos fuente.

### Build de produccion

```bash
ng build --configuration production
```

Los artefactos se generan en `dist/browser/`.

### Tests unitarios

```bash
pnpm test
```

Ejecuta los tests unitarios via [Karma](https://karma-runner.github.io).

## Estructura del proyecto

```
src/app/
├── components/
│   ├── circuit-background/   # Fondo SVG PCB con pulsos animados
│   ├── header/               # Toolbar con toggle dark mode
│   ├── hero/                 # Titulo principal y subtitulo
│   ├── project-card/         # Card individual de proyecto
│   └── footer/               # Pie de pagina
├── app.component.*           # Componente raiz (ensambla componentes)
└── main.ts                   # Bootstrap con provideZonelessChangeDetection
```

## Deploy en GitHub Pages

### Configuracion

Este repositorio es la pagina principal (`<usuario>.github.io`), por lo que el `base-href` debe ser `/`.

### Build de produccion

```bash
ng build --configuration production
```

Los archivos se generan en `dist/browser/`.

### Desplegar

```bash
pnpm run deploy
```

Este script ejecuta el build de produccion y publica los archivos en la rama `gh-pages` del repositorio usando git directamente.

### URL final

```
https://<usuario>.github.io/
```

## Licencia

MIT
