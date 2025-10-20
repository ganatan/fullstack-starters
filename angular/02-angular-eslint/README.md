# angular-eslint

  ng add @angular-eslint/schematics

  Répondre oui à la question
  The package @angular-eslint/schematics@20.3.0 will be installed and executed.

# Test du code source
  npm run lint

# Modifier les rules de lint
  dans 

  eslint.config.js

    rules: {
        "@angular-eslint/directive-selector": [
          "error",
          {
            type: "attribute",
            prefix: "app",
            style: "camelCase",
          },
        ],
        "@angular-eslint/component-selector": [
          "error",
          {
            type: "element",
            prefix: "app",
            style: "kebab-case",
          },
        ],
        "no-console": ["error", { "allow": ["warn", "error"] }]
      },

# Rajouter une erreur

dans app.ts

  export class App {
    protected readonly title = signal('angular-starter');

    constructor() {
      console.log('Error lint');
    }
  }

  npm run lint

    13:5  error  Unexpected console statement. Only these console methods are allowed: warn, error  no-console


# Fichier gitlab-ci Modele

  image: node:20

  stages:
    - install
    - lint
    - test
    - build

  install:angular-eslint:
    stage: install
    script:
      - echo "Installing dependencies"
      - cd angular/eslint
      - npm ci
    cache:
      paths:
        - angular/eslint/node_modules/
      policy: pull-push
    artifacts:
      paths:
        - angular/eslint/node_modules/
      expire_in: 1h
    rules:
      - changes:
          - angular/eslint/**/*

  lint:angular-eslint:
    stage: lint
    script:
      - echo "Running ESLint"
      - cd angular/eslint
      - npm run lint
    dependencies:
      - install:angular-eslint
    rules:
      - changes:
          - angular/eslint/**/*

  test:angular-eslint:
    stage: test
    script:
      - echo "Installing Chromium for headless tests"
      - apt-get update && apt-get install -y chromium
      - export CHROME_BIN=/usr/bin/chromium
      - cd angular/eslint
      - echo "Running Angular unit tests in ChromeHeadless"
      - npm run test:ci
    dependencies:
      - install:angular-eslint
    rules:
      - changes:
          - angular/eslint/**/*

  build:angular-eslint:
    stage: build
    script:
      - echo "Building Angular app for production"
      - cd angular/eslint
      - npm run build --configuration=production
    dependencies:
      - install:angular-eslint
    artifacts:
      paths:
        - angular/eslint/dist/
      expire_in: 1 week
    rules:
      - changes:
          - angular/eslint/**/*
