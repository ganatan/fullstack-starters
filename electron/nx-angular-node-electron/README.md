
# Nx Angular — Node — Electron Starter (EN)

<img src="./ui/ganatan-about-github.png" align="right" width="140" height="140" alt="ganatan logo">

## Project Goals
- FullStack environment with Angular 20, Node.js TypeScript and Electron
- Nx monorepo orchestration
- Electron renderer + Angular UI + Node API
- Lint, build, test, e2e, packaging support
- CI/CD ready

## Overview
Monorepo combining:
- Electron Desktop
- Angular 20 Web UI
- Node TypeScript backend
- Nx executors and task pipeline

## Structure
```
nx-angular-node-electron/
├── apps/
│   ├── frontend-angular/
│   ├── backend-typescript/
│   ├── electron/
│   ├── frontend-angular-e2e/
│   ├── backend-typescript-e2e/
│   └── electron-e2e/
├── tools/scripts/
└── mock/
```

## Best Practices — design/
```
apps/frontend-angular/design/
```
UI prototyping workspace:
- HTML/CSS/JS prototypes
- WebSocket tests
- POC before Angular implementation
- Faster workflow and clean codebase

## Applications
### Angular
```
nx serve frontend-angular
nx test frontend-angular
nx e2e frontend-angular-e2e
```

### Node Backend
```
nx serve backend-typescript
nx test backend-typescript
nx e2e backend-typescript-e2e
```

### Electron (CJS)
```
nx serve electron
```

## Development
Run all apps:
```
nx run-many -t serve -p frontend-angular backend-typescript electron
```

## Build & Packaging
```
nx build frontend-angular
nx build backend-typescript
nx build electron
npx electron-builder
```

## Nx Commands
| Command | Description |
|--------|-------------|
| nx serve | start app |
| nx build | build app |
| nx test | unit tests |
| nx e2e | end-to-end tests |

## Architecture
Angular Renderer → Node TS API → Electron Main (CJS)

## Author
Danny — https://www.ganatan.com  
MIT License
