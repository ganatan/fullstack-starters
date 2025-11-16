const fs = require('fs');
const path = require('path');

const indexPath = path.resolve('src/renderer/dist/angular-starter/browser/index.html');

const csp = `
  default-src 'self';
  script-src 'self' https://www.googletagmanager.com;
  style-src 'self' 'unsafe-inline';
  img-src 'self' data:;
  connect-src ws://localhost:8080;
  object-src 'none';
`.replace(/\n/g, ' ').trim();

try {
  let html = fs.readFileSync(indexPath, 'utf-8');
  html = html.replace(
    '<head>',
    `<head><meta http-equiv="Content-Security-Policy" content="${csp}">`
  );
  fs.writeFileSync(indexPath, html, 'utf-8');
  console.log('✅ CSP injecté dans index.html');
} catch (err) {
  console.error('❌ Impossible d’injecter le CSP', err);
  process.exit(1);
}
