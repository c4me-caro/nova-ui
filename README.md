# nova-ui
mini framework web para obtener componentes prediseñados
## Deployment

Para ejecutar localmente este proyecto, primero se requiere descargar el repositorio

```bash
  git clone https://github.com/c4me-caro/nova-ui.git
```

Lo siguiente es abrir la carpeta y compilar

```bash
  cd nova-ui
  pnpm run build
```

Finalmente ir a la carpeta `dist` y copiar los archivos estáticos a tu proyecto HTML

```bash
  cp dist/* miproy/*
```
## Instalación

Agregar el proyecto a tus archivos HTML

```html
<link rel="stylesheet" href="miproy/nova-ui.css">
<script type="module" src="miproy/nova-ui.es.js"></script>
```
    
## Uso de los Componentes

botones
```html
<nv-button text="mi boton" type="mitipo"></nv-button>
```

| Type       | Background | Hover-Background |
| :--------- | :----------|:---------------- |
| `primary`  | primary    | primary-hover    |
| `secondary`| secondary  | secondary-hover  |
| `inactive` | Default    | Default          |
| `accert`   | positive   | positive-dark    |


alerts
```html
<nv-alert title="bolder" text="less bold"></nv-alert>
```

badges
```html
<nv-badge text="a badge" type="mitipo"></nv-badge>
```
| Type       | Background     |
| :--------- | :------------- |
| `active`   | primary-color  | 
| `alert`    | secondary-color|
| `inactive` | text-color     |
| `accert`   | positive-color | 

hero
```html
<nv-hero image="miimage.png">
    <div class="content">
        <h1>Mi Hero Presentacion</h1>
        <h3>Mi Hero Subtitulo</h3>
        <p>MI hero parrafo de ejemplo</p>
    </div>
</nv-hero>
```

toast
```html
<nv-toast></nv-toast>
```

crear un nuevo toast
```js
window.dispatchEvent(new CustomEvent('launch-toast', {
    detail: { msg: 'mititulo', text: 'mitexto' }
}));
```

navegacion
```html
<nv-navbar logo="milogo.png">
    <nv-nav-item text="Inicio"></nv-nav-item>
    <nv-nav-item text="Contacto" types="active"></nv-nav-item>
</nv-navbar>
```
## Color Reference

| Variable                   |Color por defecto|
| :--------------------------|:----------------|
|--primary-color             | #ba85ee
|--primary-hover-color       | #a258eb
|--secondary-light-color     | #f9dada
|--secondary-color           | #ee8685
|--secondary-hover-color     | #e75b5a
|--secondary-dark-color      | #8a3a39
|--background-color          | #f1f1f3
|--background-component-color| #ffffff
|--text-color                | #757589
|--text-emphasys-color       | #232329
|--text-emphasys-darker-color| #020207
|--inactive-color            | #dbdbdb
|--positive-color            | #7ce87c
|--positive-dark-color       | #5fc85f

puedes modificar estos valores agregando las variables dentro del objeto `:root` en css

```css
:root {
  --background-color: #151515;
  --background-component-color: #020207;
  --text-color: #bbbbbb;
  --text-emphasys-color: #f1f1f1;
  --text-emphasys-darker-color: #ffffff;
}
```