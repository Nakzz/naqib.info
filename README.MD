# Build and deploy instructions

- Run CMS on port 5000 (nvm use on CMS)
- npm run-script start
- In client(nvm use), npm run-script build
- Build new docker images and Deploy: docker-compose up --build -d

# Production 
- Build, tag and push images from dev server. 
```
docker build -t naqibprio/naqibinfo_cms:1.01 ./cms_keystone
docker build -t naqibprio/naqibinfo:1.03 ./client_nextjs
docker push naqibprio/naqibinfo_cms:1.01
docker push naqibprio/naqibinfo:1.03
```


# Naqib's Cosmos 🚀

TODO: Write a short project description 📝

## Table of Contents 🗂️

1. [Installation](#installation)
2. [Usage](#usage)
3. [Testing](#testing)
4. [Contribution](#contribution)
5. [License](#license)

## Installation 🔧

TODO: Describe how to install your project. This can include any necessary prerequisites and dependencies. 

## Usage 🖥️

TODO: Explain how to use your project. If it's an application, describe how to run it. If it's a library, show some examples of how to use it in code.

## Testing 🧪

TODO: Write about the tests that are included in your project, and how to run them.

## Contribution 🤝

TODO: Describe how others can contribute to your project. You may want to include guidelines for coding style, branching, and committing, as well as the process for submitting pull requests.

## License 📄

TODO: Include a copy of the license, or a link to it. Explain what the license means for people who want to use or contribute to your project.
