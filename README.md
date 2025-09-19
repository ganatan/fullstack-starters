# Starters

Ce dépôt regroupe plusieurs **starters** (projets de démarrage) pour différents environnements et technologies.  
Chaque starter est conçu comme un projet minimal fonctionnel, prêt à être utilisé, testé et enrichi.

---

**👉 Looking for the English version?** : [![English](./ui/version-en.png)](./README.en.md)

---

## 📂 Structure du dépôt

```
002-STARTERS/
├── .gitlab/                # Pipelines GitLab CI/CD spécifiques
│   ├── angular/            # Templates CI pour Angular
│   └── springboot/         # Templates CI pour Spring Boot
│
├── angular/                # Starters Angular
│   ├── bootstrap/          # Angular + Bootstrap
│   ├── eslint/             # Angular + ESLint (linting)
│   ├── ssr/                # Angular Universal (Server Side Rendering)
│   └── starter/            # Starter Angular minimal
│
├── javascript/             # Starter Node.js / JavaScript
│
├── springboot/             # Starters Spring Boot
│   ├── checkstyle/         # Starter avec Checkstyle
│   ├── coverage/           # Starter avec tests + JaCoCo/Coverage
│   ├── crud/               # CRUD simple
│   ├── crud-jpa/           # CRUD avec JPA
│   ├── crud-layered/       # CRUD architecture en couches
│   ├── kafka/              # Intégration Kafka
│   ├── logging/            # Starter logging avancé
│   ├── oracle/             # Starter Spring Boot + Oracle
│   ├── oracle-jdbc/        # Starter Oracle via JDBC
│   ├── rabbitmq/           # Intégration RabbitMQ
│   └── starter/            # Starter Spring Boot minimal
│
├── .gitignore              # Fichiers ignorés par Git
├── .gitlab-ci.yml          # Entrée principale pour les pipelines CI/CD
└── README.md               # Documentation principale
```

---

## 🔧 Intégration Continue (CI)

| Projet            | Badge CI |
|-------------------|----------|
| Angular Starter   | [![Angular Starter CI](https://github.com/ganatan/starters/actions/workflows/angular-starter.yml/badge.svg?branch=master)](https://github.com/ganatan/starters/actions/workflows/angular-starter.yml) |
| Angular Bootstrap | [![Angular Bootstrap CI](https://github.com/ganatan/starters/actions/workflows/angular-bootstrap.yml/badge.svg?branch=master)](https://github.com/ganatan/starters/actions/workflows/angular-bootstrap.yml) |

---

## 🚀 Objectif

L’objectif de ce dépôt est de fournir une **base commune** pour différents types de projets :

- **Angular** : frontend moderne avec SSR, Bootstrap, linting.
- **JavaScript (Node.js)** : backend simple en JavaScript.
- **Spring Boot (Java)** : backends prêts à l’emploi avec différentes intégrations (Oracle, Kafka, RabbitMQ, etc.).

Chaque projet est pensé pour être **rapide à cloner et exécuter**, avec des exemples de **CI/CD GitLab** intégrés.

---

## ⚙️ CI/CD

Ce dépôt intègre deux systèmes de pipelines complémentaires :

### 🔹 GitLab CI/CD
- Les templates GitLab sont stockés dans `.gitlab/angular` et `.gitlab/springboot`.  
- Le fichier racine `.gitlab-ci.yml` inclut les templates adaptés.  

### 🔹 GitHub Actions
- Les workflows sont stockés dans `.github/workflows/` (organisation par projet : `angular-starter.yml`, `angular-bootstrap.yml`, etc.).  

---

## ▶️ Démarrage rapide

### Angular

```bash
cd angular/starter
npm install
npm run start
```

### JavaScript (Node.js)

```bash
cd javascript
npm install
npm run start
```

### Spring Boot

```bash
cd springboot/starter
mvn spring-boot:run
```

---

