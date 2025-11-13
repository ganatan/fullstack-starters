# Installation
  npm init -y
  
  npm install typescript --save-dev
  npm install nodemon
  npm install ts-node
  
  npx tsc --init

# package.json
  {
    "name": "00-typescript-starter",
    "version": "1.0.0",
    "description": "typescript-starter",
    "main": "index.js",
    "scripts": {
      "dev": "nodemon --watch src --exec ts-node src/app.ts",
      "start": "node dist/app.js",
      "build": "tsc",
      "serve": "ts-node src/app.ts"
    },
    "keywords": [],
    "author": "",
    "license": "ISC",
    "type": "commonjs",
    "devDependencies": {
      "typescript": "5.9.3"
    },
    "dependencies": {
      "nodemon": "3.1.11",
      "ts-node": "10.9.2"
    }
  }

# ts.config.json

  {
    "compilerOptions": {
      "outDir": "./dist",
      "module": "nodenext",
      "target": "esnext",
      "types": [],
      "sourceMap": true,
      "declaration": true,
      "declarationMap": true,
      "noUncheckedIndexedAccess": true,
      "exactOptionalPropertyTypes": true,
      "strict": true,
      "jsx": "react-jsx",
      "verbatimModuleSyntax": true,
      "isolatedModules": true,
      "noUncheckedSideEffectImports": true,
      "moduleDetection": "force",
      "skipLibCheck": true,
    }
  }