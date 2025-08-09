# jacksblog

Application front-end de blog construite avec Vue 3 et Vite. Le projet privilégie une DX rapide, un build performant et un stylage utilitaire via Tailwind CSS. La gestion des dépendances utilise pnpm.

## Sommaire
- Fonctionnalités
- Prérequis
- Démarrage rapide
- Variables d’environnement
- Structure du projet
- Scripts utiles
- Architecture et conventions
- Déploiement
- Contribution
- Licence
- Support

## Fonctionnalités
- Vue 3 (Composition API) + Vite pour un développement rapide
- Tailwind CSS pour le stylage
- Organisation modulaire: pages, composants, composables, services, stores
- Gestion des dépendances avec pnpm

## Prérequis
- Node.js (version LTS recommandée)
- pnpm installé globalement
  - Installation pnpm: 
  ```bash
  npm i -g pnpm
  ```

## Démarrage rapide
- Installer les dépendances:
  ```bash
  pnpm install
  ```

- Lancer le serveur de développement:
  ```bash
  pnpm dev
  ```

- Construire pour la production:
  ```bash
  pnpm build
  ```

## Variables d’environnement
Un fichier d’exemple est fourni.

- Copier l’exemple:
  ```bash
  cp .env.dist .env
  ```

- Éditer les variables selon votre environnement (remplacez les placeholders):
  ```bash
  # Exemple
  VITE_API_BASE_URL=https://api.exemple.tld
  ```

Astuce: vous pouvez utiliser des variantes locales comme `.env.local`.

## Structure du projet
- src/
  - assets/ — styles globaux et ressources
  - components/ — composants UI et layout
  - composables/ — logique réutilisable (hooks)
  - pages/ — vues/pages de l’application
  - services/ — accès aux données (API, etc.)
  - stores/ — état global (ex: Pinia)
  - App.vue / main.js — bootstrap de l’app
- public/ — fichiers statiques servis tels quels
- index.html — point d’entrée HTML
- Config: vite.config.js, postcss.config.js, tailwind.config.js

## Scripts utiles
- Audit des paquets:
  ```bash
  pnpm audit
  ```

- Nettoyage du cache pnpm puis réinstallation:
  ```bash
  pnpm store prune
  pnpm install
  ```

## Architecture et conventions
- Composants: privilégier des composants présentations réutilisables (UI) et séparer la logique métier dans des composables/services.
- Composables: extraire la logique partagée (fetch, pagination, filtrage).
- Services: centraliser les appels réseau; retourner des données prêtes à l’emploi côté composants.
- Stores: regrouper l’état global et les actions; éviter le couplage avec des composants spécifiques.
- Styles: utiliser Tailwind pour les utilitaires et extraire les styles globaux communs dans `assets/`.

## Déploiement
- Générer le build de production:
  ```bash
  pnpm build
  ```
- Déployer le dossier `dist/` sur votre hébergeur (Netlify, Vercel, nginx, etc.).
- Configurer les variables d’environnement (préfixées `VITE_`) sur la plateforme de déploiement.

## Contribution
1. Créez une branche: 
   ```bash
   git switch -c feat/ma-fonctionnalite
   ```
2. Commits atomiques et messages explicites.
3. Ouvrez une Pull Request avec description (et captures si utile).

## Licence
À définir par le propriétaire du projet.

## Support
- Utilisez pnpm pour éviter les conflits de lockfile.
- En cas de souci:
  ```bash
  rm -rf node_modules pnpm-lock.yaml
  pnpm install
  ```
- Vérifiez votre version de Node.js (LTS recommandée).
- Assurez-vous que vos variables d’environnement sont correctement définies.
