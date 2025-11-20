
# Nx Angular — Node — Electron Starter

<img src="./ui/ganatan-about-github.png" align="right" width="140" height="140" alt="ganatan logo">

## 🎯 Objectifs du projet

- Construire une stack FullStack complète avec Angular 20, Node.js (TypeScript) et Electron
- Monorepo Nx modulaire
- Exécution front Angular dans Electron + backend TypeScript
- Lint, tests unitaires, tests e2e, build, serve, packaging Electron
- Prêt pour CI/CD

---

**👉 English version available here** : [English](./README.md)

---

## 📘 Table des matières

- Vue d’ensemble
- Structure du projet
- Applications
- Tests Unitaires & E2E
- Développement
- Build & Packaging Electron
- Scripts Nx
- Architecture
- Auteur & Licence

## 🧱 Vue d’ensemble

Monorepo combinant:
- Desktop : Electron (CommonJS)
- Web : Angular 20
- API locale : Node TypeScript
- Orchestration Nx

## 🧬 Structure du projet

```
nx-angular-node-electron/
├── apps/
│   ├── backend-typescript/
│   ├── backend-typescript-e2e/
│   ├── electron/
│   ├── electron-e2e/
│   ├── frontend-angular/
│   └── frontend-angular-e2e/
├── tools/scripts/generate-project-structure.ts
├── mock/
└── README.md
```

## 🧩 Applications

### Frontend — Angular 20
Serve:
```
nx serve frontend-angular
```

Tests:
```
nx test frontend-angular
nx e2e frontend-angular-e2e
```

### Backend — Node TypeScript
Serve:
```
nx serve backend-typescript
```

Tests:
```
nx test backend-typescript
nx e2e backend-typescript-e2e
```

### Electron — Process Main CJS
Serve:
```
nx serve electron
```

## 🧪 Tests

```
nx test <app>
nx e2e <app>
```

## ⚙️ Développement

```
nx run-many -t serve -p frontend-angular backend-typescript electron
```

## 🏗️ Build & Packaging

```
nx build frontend-angular
nx build backend-typescript
nx build electron
npx electron-builder
```

## 🔧 Scripts Nx

| Commande | Description |
|----------|-------------|
| nx serve | Démarrer une app |
| nx build | Compiler |
| nx test | Tests unitaires |
| nx e2e | Tests end-to-end |

## 🏛️ Architecture

Angular (renderer) → Backend TS (API) → Electron main (CJS)

## 👤 Auteur & Licence

Auteur : Danny — https://www.ganatan.com  
Licence : MIT
