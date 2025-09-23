# Starters

This repository contains several **fullstack starters** covering different technologies:  
- **Backend Node.js** (JavaScript and TypeScript)  
- **Frontend Angular**  
- **Backend Java Spring Boot**  

Each starter is a minimal project, **fully functional and ready to use**, including:  
- A simple **CI/CD** pipeline (`install`, `lint`, `test`, `build`, `docker & deploy`)  
- **Docker** and **OpenShift** deployment scripts  

These starters provide a common foundation to learn, compare, and quickly set up modern fullstack applications.

---

**👉 Version française disponible ici** : [![Français](./ui/version-fr.png)](./README-fr.md)

---

## 🔗 Projects List

### Angular
- [angular-starter](angular/angular-starter/README.md) – Minimal Angular starter  
- [angular-eslint](angular/angular-eslint/README.md) – Angular + ESLint  
- [angular-bootstrap](angular/angular-bootstrap/README.md) – Angular + Bootstrap  
- [angular-ssr](angular/angular-ssr/README.md) – Angular Universal (SSR)  

### JavaScript
- [javascript-starter](javascript/javascript-starter/README.md) – Minimal JavaScript Node.js starter  

### TypeScript
- [typescript-starter](javascript/typescript-starter/README.md) – Minimal TypeScript Node.js starter  

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

## 🔧 Continuous Integration (CI)

| Project           | GitHub CI | GitLab CI |
|-------------------|-----------|-----------|
| Angular Starter   | [![GitHub CI](https://github.com/ganatan/starters/actions/workflows/angular-starter.yml/badge.svg?branch=master)](https://github.com/ganatan/starters/actions/workflows/angular-starter.yml) | [![GitLab CI](https://gitlab.com/ganatan/starters/badges/master/pipeline.svg?job=build:angular-starter)](https://gitlab.com/ganatan/starters/-/jobs?scope=success&job=build:angular-starter) |
| Angular Bootstrap | [![GitHub CI](https://github.com/ganatan/starters/actions/workflows/angular-bootstrap.yml/badge.svg?branch=master)](https://github.com/ganatan/starters/actions/workflows/angular-bootstrap.yml) | [![GitLab CI](https://gitlab.com/ganatan/starters/badges/master/pipeline.svg?job=build:angular-bootstrap)](https://gitlab.com/ganatan/starters/-/jobs?scope=success&job=build:angular-bootstrap) |
| Spring Boot Starter | — | [![GitLab CI](https://gitlab.com/ganatan/starters/badges/master/pipeline.svg?job=build:springboot-starter)](https://gitlab.com/ganatan/starters/-/jobs?scope=success&job=build:springboot-starter) |

---

## ⚙️ CI/CD

This repository integrates two complementary pipeline systems:

### 🔹 GitLab CI/CD
- GitLab templates are stored in `.gitlab/angular` and `.gitlab/springboot`.  
- The root `.gitlab-ci.yml` file includes the appropriate templates.  

### 🔹 GitHub Actions
- Workflows are stored in `.github/workflows/` (organized by project: `angular-starter.yml`, `angular-bootstrap.yml`, etc.).  

---

## ▶️ Quick Start

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
