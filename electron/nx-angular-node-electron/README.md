# Nx Angular - Node - Electron Starter

<img src="./ui/ganatan-about-github.png" align="right" width="140" height="140" alt="ganatan logo">


## Objectifs du projet

-   Frontend Angular 20, Backend Node.js (TypeScript) et Desktop Electron
-   Monorepo Nx 
-   Intégration Angular → Electron
-   Backend TypeScript servant une API REST
-   Lint, tests unitaires, e2e, build, packaging Electron

------------------------------------------------------------------------

# 1. Installation

``` bash
git clone https://github.com/ganatan/nx-angular-node-electron.git
cd nx-angular-node-electron
npm install
```

------------------------------------------------------------------------

# 2. Configuration (.env)

    # FRONTEND
    MODE=html        # angular | html
    DEVTOOLS=false

-   MODE=html → Electron charge le mock HTML
-   MODE=angular → Electron charge le build Angular

------------------------------------------------------------------------

# 3. Tester Electron seul (frontend HTML mock)

Vérifier dans `.env` :

    MODE=html

Lancer Electron :

``` bash
npm run start:electron
```

Electron démarre avec le frontend HTML.

------------------------------------------------------------------------

# 4. Tester Angular seul (navigateur)

Mettre dans `.env` :

    MODE=angular

Démarrer Angular :

``` bash
npm run start:frontend
```

Ouvrir :

    http://localhost:4200

------------------------------------------------------------------------

# 5. Builder le frontend Angular pour Electron

``` bash
npm run build:frontend
```

-   Le build Angular est généré dans `dist/frontend-angular/`.

Tester dans Electron :

``` bash
npm run start:electron
```

Electron charge maintenant Angular en local.

------------------------------------------------------------------------

# 6. Tester le backend Node/TypeScript

Démarrer le backend :

``` bash
npm run start:backend
```

Endpoints accessibles :

    http://localhost:3000/api/catalog/titles
    http://localhost:3000/api/inventory/items

------------------------------------------------------------------------

# 7. Tester Angular + Backend (mode dev)

Backend :

``` bash
npm run start:backend
```

Frontend Angular :

``` bash
npm run start:frontend
```

Angular (4200) consomme l'API backend (3000).

------------------------------------------------------------------------

# 8. Builder le backend

``` bash
npm run build:backend
```

Build généré dans :

    dist/backend-typescript/

------------------------------------------------------------------------

# 9. Build final : Packaging Electron

Builder le frontend :

``` bash
npm run build:frontend
```

Builder le backend :

``` bash
npm run build:backend
```

Builder Electron :

``` bash
npm run build:electron
```

Le binaire est généré dans :

    dist/electron/win-unpacked/GanatanElectronApp.exe

Lancement : l'app charge Angular dans Electron et appelle l'API backend
sur localhost:3000.

------------------------------------------------------------------------

# 10. Résumé rapide

  -----------------------------------------------------------------------
  Scénario                        Commandes
  ------------------------------- ---------------------------------------
  Electron + HTML mock            MODE=html → `npm run start:electron`

  Angular seul                    MODE=angular → `npm run start:frontend`

  Backend seul                    `npm run start:backend`

  Electron + Angular (build)      `npm run build:frontend` →
                                  `npm run start:electron`

  Version finale packagée         build front + build back +
                                  `npm run build:electron`
  -----------------------------------------------------------------------

------------------------------------------------------------------------
