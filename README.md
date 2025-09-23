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

## 📂 Repository Structure

```
STARTERS/
├── .gitlab/                        # GitLab CI/CD pipelines
│   ├── angular/                    # CI templates for Angular
│   └── springboot/                 # CI templates for Spring Boot
│
├── angular/                        # Angular starters
│   ├── [angular-bootstrap/](angular/angular-bootstrap/README.md)       # Angular + Bootstrap
│   ├── [angular-eslint/](angular/angular-eslint/README.md)             # Angular + ESLint (linting)
│   ├── [angular-ssr/](angular/angular-ssr/README.md)                   # Angular Universal (Server Side Rendering)
│   └── [angular-starter/](angular/angular-starter/README.md)           # Minimal Angular starter
│
├── javascript/                     # Node.js / JavaScript starter
│   └── [javascript-starter/](javascript/javascript-starter/README.md)  # Minimal Node.js starter
│
├── springboot/                     # Spring Boot starters
│   ├── [springboot-checkstyle/](springboot/springboot-checkstyle/README.md)      # Starter with Checkstyle
│   ├── [springboot-coverage/](springboot/springboot-coverage/README.md)          # Starter with tests + JaCoCo/Coverage
│   ├── [springboot-crud/](springboot/springboot-crud/README.md)                  # Simple CRUD
│   ├── [springboot-crud-jpa/](springboot/springboot-crud-jpa/README.md)          # CRUD with JPA
│   ├── [springboot-crud-layered/](springboot/springboot-crud-layered/README.md)  # Layered architecture CRUD
│   ├── [springboot-kafka/](springboot/springboot-kafka/README.md)                # Kafka integration
│   ├── [springboot-logging/](springboot/springboot-logging/README.md)            # Advanced logging starter
│   ├── [springboot-oracle/](springboot/springboot-oracle/README.md)              # Oracle starter
│   ├── [springboot-oracle-jdbc/](springboot/springboot-oracle-jdbc/README.md)    # Oracle with JDBC starter
│   ├── [springboot-rabbitmq/](springboot/springboot-rabbitmq/README.md)          # RabbitMQ integration
│   └── [springboot-starter/](springboot/springboot-starter/README.md)            # Minimal Spring Boot starter
│
├── .gitignore                      # Git ignored files
├── .gitlab-ci.yml                  # Main entry for CI/CD pipelines
└── README.md                       # Main documentation
```

---

## 🔧 Continuous Integration  (CI)

| Projet            | Badge CI |
|-------------------|----------|
| Angular Starter   | [![Angular Starter CI](https://github.com/ganatan/starters/actions/workflows/angular-starter.yml/badge.svg?branch=master)](https://github.com/ganatan/starters/actions/workflows/angular-starter.yml) |
| Angular Bootstrap | [![Angular Bootstrap CI](https://github.com/ganatan/starters/actions/workflows/angular-bootstrap.yml/badge.svg?branch=master)](https://github.com/ganatan/starters/actions/workflows/angular-bootstrap.yml) |

---


## 🚀 Purpose

The purpose of this repository is to provide a **common base** for different kinds of projects:

- **Angular**: modern frontend with SSR, Bootstrap, and linting.
- **JavaScript (Node.js)**: simple backend in JavaScript.
- **Spring Boot (Java)**: production-ready backends with integrations (Oracle, Kafka, RabbitMQ, etc.).

Each project is built to be **quick to clone and run**, with ready-to-use **GitLab CI/CD examples**.

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



