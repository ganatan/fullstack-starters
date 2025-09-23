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

## 📂 Structure du dépôt

```
STARTERS/
├── .gitlab/                        # GitLab CI/CD pipelines
│   ├── angular/                    # CI templates for Angular
│   └── springboot/                 # CI templates for Spring Boot
│
├── angular/                        # Angular starters
│   ├── angular-bootstrap/          # Angular + Bootstrap
│   ├── angular-eslint/             # Angular + ESLint (linting)
│   ├── angular-ssr/                # Angular Universal (Server Side Rendering)
│   └── angular-starter/            # Minimal Angular starter
│
├── javascript/                     # Node.js / JavaScript starter
│   └── javascript-starter/         # Minimal Node.js starter
│
├── springboot/                     # Spring Boot starters
│   ├── springboot-checkstyle/      # Starter with Checkstyle
│   ├── springboot-coverage/        # Starter with tests + JaCoCo/Coverage
│   ├── springboot-crud/            # Simple CRUD
│   ├── springboot-crud-jpa/        # CRUD with JPA
│   ├── springboot-crud-layered/    # Layered architecture CRUD
│   ├── springboot-kafka/           # Kafka integration
│   ├── springboot-logging/         # Advanced logging starter
│   ├── springboot-oracle/          # Oracle starter
│   ├── springboot-oracle-jdbc/     # Oracle with JDBC starter
│   ├── springboot-rabbitmq/        # RabbitMQ integration
│   └── springboot-starter/         # Minimal Spring Boot starter
│
├── .gitignore                      # Git ignored files
├── .gitlab-ci.yml                  # Main entry for CI/CD pipelines
└── README.md                       # Main documentation
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

