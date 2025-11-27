# Nx Angular - Node - Electron Starter

<img src="./ui/ganatan-about-github.png" align="right" width="140" height="140" alt="ganatan logo">

## Project Goals

-   Frontend with Angular 20, Backend with Node.js (TypeScript), Desktop
    app with Electron
-   Nx monorepo
-   Angular integration inside Electron
-   TypeScript backend exposing a REST API
-   Lint, unit tests, e2e tests, build, Electron packaging

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

-   MODE=html → Electron loads the HTML mock
-   MODE=angular → Electron loads the Angular build

------------------------------------------------------------------------

# 3. Test Electron alone (HTML mock frontend)

Check `.env`:

    MODE=html

Run Electron:

``` bash
npm run start:electron
```

Electron starts with the HTML mock frontend.

------------------------------------------------------------------------

# 4. Test Angular alone (browser)

Set `.env`:

    MODE=angular

Start Angular:

``` bash
npm run start:frontend
```

Open:

    http://localhost:4200

------------------------------------------------------------------------

# 5. Build Angular frontend for Electron

``` bash
npm run build:frontend
```

The Angular build is generated in `dist/frontend-angular/`.

Test inside Electron:

``` bash
npm run start:electron
```

Electron now loads Angular locally.

------------------------------------------------------------------------

# 6. Test the Node/TypeScript backend

Start the backend:

``` bash
npm run start:backend
```

Endpoints:

    http://localhost:3000/api/catalog/titles
    http://localhost:3000/api/inventory/items

------------------------------------------------------------------------

# 7. Test Angular + Backend (development mode)

Backend:

``` bash
npm run start:backend
```

Frontend:

``` bash
npm run start:frontend
```

Angular (4200) consumes the backend API (3000).

------------------------------------------------------------------------

# 8. Build the backend

``` bash
npm run build:backend
```

Output:

    dist/backend-typescript/

------------------------------------------------------------------------

# 9. Final build: Electron packaging

Build frontend:

``` bash
npm run build:frontend
```

Build backend:

``` bash
npm run build:backend
```

Build Electron:

``` bash
npm run build:electron
```

Generated executable:

    dist/electron/win-unpacked/GanatanElectronApp.exe

The app loads Angular inside Electron and connects to the backend on
localhost:3000.

------------------------------------------------------------------------

# 10. Quick Summary

  -----------------------------------------------------------------------
  Scenario                          Commands
  --------------------------------- -------------------------------------
  Electron + HTML mock              MODE=html → `npm run start:electron`

  Angular only                      MODE=angular →
                                    `npm run start:frontend`

  Backend only                      `npm run start:backend`

  Electron + Angular (build)        `npm run build:frontend` →
                                    `npm run start:electron`

  Full packaged version             build front + build back +
                                    `npm run build:electron`
  -----------------------------------------------------------------------

------------------------------------------------------------------------

