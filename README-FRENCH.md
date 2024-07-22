# Guide de Configuration pour Contentful

## URL Figma

[Contentful](https://www.figma.com/file/XtVr3JRCGWyZESYxd9EhZK/Contentful?node-id=0%3A1&t=SNnU6FgNUQXktIFb-1)

## Étapes

### Installation et Configuration

```bash
npm install
npm run dev
```

### Structure

Créer les composants Hero et Projects.

### Hero

Configurer le composant Hero.

### Images Sympas

Utilisez des images de Undraw.
[Undraw](https://undraw.co/)

### Données

Explorer data.js.

### Headless CMS

Un CMS headless est un système de gestion de contenu uniquement côté serveur qui offre aux créateurs de contenu une interface intuitive pour créer et gérer du contenu, tout en laissant la couche de présentation frontale à un système ou une plateforme distincte. Cette approche permet une plus grande flexibilité et évolutivité, car le contenu peut être facilement distribué à plusieurs canaux et appareils, sans être limité par les contraintes d’un système front-end particulier.

### Contentful

Créer un compte Contentful : Contentful
Créer des Données
Configurer le type de contenu et créer quelques entrées.

### Explorer l'API

Obtenir space ID , access token et explorer des exemples de code.
space ID : 9ix2xvakrnc9
access token : YRPCpuQ1Ghr0JhIbcT8my8efWgpYsCwr4tOU_1bmHdY

### Installer le SDK

-npm install contentful

### Obtenir les Entrées

```js
import { createClient } from "contentful";

const client = createClient({
  space: "qz00uzgg3leh",
  environment: "master", // par défaut à 'master' si non défini
  accessToken: import.meta.env.VITE_API_KEY,
});

client
  .getEntries({ content_type: "projects" })
  .then((response) => console.log(response.items))
  .catch(console.error);
```

### Hook Personnalisé

Créer un hook personnalisé avec les valeurs d'état de chargement et de projets.

### Analyser les Données

Configurer le tableau des projets.

### Configurer le Composant Produits

Afficher les données dans le composant Produits.
