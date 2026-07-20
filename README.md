# ViveFacilWeb
Pagina web vive facil

## Deploy (Firebase Hosting)

```bash
ng build
firebase deploy
```

`ng build` compila en modo `production` por defecto (usa `environment.prod.ts`, apuntando a `https://tomesoft1.pythonanywhere.com`) y deja el resultado en `dist/vivefacilweb`. `firebase deploy` sube ese directorio según `firebase.json`.

Requiere tener `firebase-tools` instalado (`npm i -g firebase-tools`) y haber corrido `firebase login` una vez.
