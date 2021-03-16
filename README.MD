# Build and deploy instructions
- Run CMS on port 5000 (nvm use on CMS)
-   npm run-script start
- In client(nvm use), npm run-script build
- Build new docker images and Deploy: docker-compose up --build -d