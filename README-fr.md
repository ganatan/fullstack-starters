# Starters

Ce dépôt contient plusieurs **starters fullstack** couvrant différentes technologies :  
- **Backend Node.js** (JavaScript et TypeScript)  
- **Frontend Angular**  
- **Backend Java Spring Boot**  

Chaque starter est un projet minimal, **fonctionnel et prêt à l’emploi**, comprenant :  
- Un pipeline **CI/CD** simple (`install`, `lint`, `test`, `build`, `docker & deploy`)  
- Des scripts de déploiement **Docker** et **OpenShift**  

Ces starters fournissent une base commune pour apprendre, comparer et mettre rapidement en place des applications fullstack modernes.

---

**👉 English version available here** : [English](./README.md)

---

## 🔗 Liste des projets

### Angular
- [angular-starter](angular/angular-starter/README.md) – Starter Angular minimal  
- [angular-eslint](angular/angular-eslint/README.md) – Angular + ESLint  
- [angular-bootstrap](angular/angular-bootstrap/README.md) – Angular + Bootstrap  
- [angular-ssr](angular/angular-ssr/README.md) – Angular Universal (SSR)  

### JavaScript
- [javascript-starter](javascript/javascript-starter/README.md) – Starter Node.js minimal en JavaScript  

### TypeScript
- [typescript-starter](javascript/typescript-starter/README.md) – Starter Node.js minimal en TypeScript  

### Spring Boot
- [springboot-starter](springboot/springboot-starter/README.md) – Starter Spring Boot minimal  
- [springboot-checkstyle](springboot/springboot-checkstyle/README.md) – Starter avec Checkstyle  
- [springboot-api-client](springboot/springboot-api-client/README.md) – Starter with api-client
- [springboot-coverage](springboot/springboot-coverage/README.md) – Starter avec JaCoCo coverage  
- [springboot-crud](springboot/springboot-crud/README.md) – CRUD simple  
- [springboot-crud-jpa](springboot/springboot-crud-jpa/README.md) – CRUD avec JPA  
- [springboot-crud-layered](springboot/springboot-crud-layered/README.md) – CRUD avec architecture en couches  
- [springboot-kafka](springboot/springboot-kafka/README.md) – Intégration Kafka  
- [springboot-logging](springboot/springboot-logging/README.md) – Starter avec logging avancé  
- [springboot-oracle](springboot/springboot-oracle/README.md) – Starter Oracle  
- [springboot-oracle-jdbc](springboot/springboot-oracle-jdbc/README.md) – Starter Oracle avec JDBC  
- [springboot-rabbitmq](springboot/springboot-rabbitmq/README.md) – Intégration RabbitMQ  

## 🔧 Intégration Continue (CI)

| Projet            | GitHub CI | GitLab CI |
|-------------------|-----------|-----------|
| Angular Starter   | [![GitHub CI](https://github.com/ganatan/starters/actions/workflows/angular-starter.yml/badge.svg?branch=master)](https://github.com/ganatan/starters/actions/workflows/angular-starter.yml) | [![GitLab CI](https://gitlab.com/ganatan/starters/badges/master/pipeline.svg?job=build:angular-starter)](https://gitlab.com/ganatan/starters/-/jobs?scope=success&job=build:angular-starter) |
| Angular Bootstrap | [![GitHub CI](https://github.com/ganatan/starters/actions/workflows/angular-bootstrap.yml/badge.svg?branch=master)](https://github.com/ganatan/starters/actions/workflows/angular-bootstrap.yml) | [![GitLab CI](https://gitlab.com/ganatan/starters/badges/master/pipeline.svg?job=build:angular-bootstrap)](https://gitlab.com/ganatan/starters/-/jobs?scope=success&job=build:angular-bootstrap) |
| Spring Boot Starter | — | [![GitLab CI](https://gitlab.com/ganatan/starters/badges/master/pipeline.svg?job=build:springboot-starter)](https://gitlab.com/ganatan/starters/-/jobs?scope=success&job=build:springboot-starter) |

---

## ⚙️ CI/CD

Ce dépôt intègre deux systèmes de pipeline complémentaires :

### 🔹 GitLab CI/CD
- Les templates GitLab sont stockés dans `.gitlab/angular` et `.gitlab/springboot`.  
- Le fichier racine `.gitlab-ci.yml` inclut les templates correspondants.  

### 🔹 GitHub Actions
- Les workflows sont stockés dans `.github/workflows/` (organisés par projet : `angular-starter.yml`, `angular-bootstrap.yml`, etc.).  

---

## ▶️ Démarrage rapide

### Angular

```bash
cd angular/angular-starter
npm install
npm run start
```

### JavaScript (Node.js)

```bash
cd javascript/javascript-starter
npm install
npm run start
```

### TypeScript (Node.js)

```bash
cd typescript/typescript-starter
npm install
npm run start
```

### Spring Boot

```bash
cd springboot/springboot-starter
mvn spring-boot:run
```
