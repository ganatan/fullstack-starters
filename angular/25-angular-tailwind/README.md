# Installation
  npm install -D tailwindcss@latest

# Creer Fichier src
  
  src/tailwind.css :
    @import "tailwindcss";

# Compilation
  npx tailwindcss -i ./src/tailwind.css -o ./src/styles.css --watch    

# Scripts package.json

    "tailwind:dev": "tailwindcss -i ./src/tailwind.css -o ./src/styles.css --watch",
    "tailwind:build": "tailwindcss -i ./src/tailwind.css -o ./src/styles.css --minify",
    "build": "npm run tailwind:build && ng build",
