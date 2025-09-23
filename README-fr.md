# Starters

Ce dépôt regroupe plusieurs **starters fullstack** couvrant différentes technologies :  
- **Backend Node.js** (JavaScript et TypeScript)  
- **Frontend Angular**  
- **Backend Java Spring Boot**  

Chaque starter est un projet minimal **fonctionnel et prêt à l’emploi**, avec :  
- Un pipeline **CI/CD** simple (`install`, `lint`, `test`, `build`, `docker & deploy`)  
- Des scripts de déploiement **Docker** et **OpenShift**  

---

**👉 Looking for the English version?** : [![English](./ui/version-en.png)](./README.md)

---

---
## 🔗 Liens Directs

### Angular
- [angular-starter](angular/angular-starter/README.md) – Minimal Angular starter  
- [angular-eslint](angular/angular-eslint/README.md) – Angular + ESLint  
- [angular-bootstrap](angular/angular-bootstrap/README.md) – Angular + Bootstrap  
- [angular-ssr](angular/angular-ssr/README.md) – Angular Universal (SSR)  

### JavaScript
- [javascript-starter](javascript/javascript-starter/README.md) – Minimal Node.js starter  

### Spring Boot
- [springboot-starter](springboot/springboot-starter/README.md) – Minimal Spring Boot starter  
- [springboot-checkstyle](springboot/springboot-checkstyle/README.md) – Starter with Checkstyle  
- [springboot-coverage](springboot/springboot-coverage/README.md) – Starter with JaCoCo coverage  
- [springboot-crud](springboot/springboot-crud/README.md) – Simple CRUD  
- [springboot-crud-jpa](springboot/springboot-crud-jpa/README.md) – CRUD with JPA  
- [springboot-crud-layered](springboot/springboot-crud-layered/README.md) – Layered architecture CRUD  
- [springboot-kafka](springboot/springboot-kafka/README.md) – Kafka integration  
- [springboot-logging](springboot/springboot-logging/README.md) – Advanced logging starter  
- [springboot-oracle](springboot/springboot-oracle/README.md) – Oracle starter  
- [springboot-oracle-jdbc](springboot/springboot-oracle-jdbc/README.md) – Oracle with JDBC starter  
- [springboot-rabbitmq](springboot/springboot-rabbitmq/README.md) – RabbitMQ integration  
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

