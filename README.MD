# Build and deploy instructions

- Run CMS on port 5000 (nvm use on CMS)
- npm run-script start
- In client(nvm use), npm run-script build
- Build new docker images and Deploy: docker-compose up --build -d

# Production 
- Build, tag and push images from dev server. 
```
docker build -t naqibprio/naqibinfo_cms:1.00 ./cms_keystone
docker build -t naqibprio/naqibinfo:1.03 ./client_nextjs
docker push naqibprio/naqibinfo_cms:1.00
docker push naqibprio/naqibinfo:1.03
```

# Future plans

## Auth microservice
[] Build Auth microservice
[] Add 401 and 402 for code-server 


## Client Application
[] Add login, and sign up page to client
[] Move static content to CMS
[] 

## Photography website
[] Photography portfolio site

## Admin application
[] Admin- status and up for services
[] Admin- monitor services
[] admin - 
