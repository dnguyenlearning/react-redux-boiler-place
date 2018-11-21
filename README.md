# README #

This README would normally document whatever steps are necessary to get xpo-ab-testing up and running on your local machine

### What is this repository for? ###
This repository contains the source code for xpo curator cms

### How do I get set up? ###

* Summary of set up
1. Clone repo (git+ssh://git@bitbucket.org/knorexteam/xpo-designer-abtesting.git)

2. `npm install` (node >=8)
-  Install dependences for project.

3. `npm run dev` 
-  Wepack will run and open 0.0.0.0:8080
-  Any changes in src folder will automatically update browser.

5. `npm run docs`
-  Generate document from source code

6. `npm run prod`
-  To test production code in local.

### Deployment Process (Jenkin)

1. Fetch Repo.

2. npm install

3. npm run build

4. Run Dockerfile.

### Contribution guidelines ###

* Writing tests
* Code review
* Other guidelines

### Who do I talk to? ###

* Repo owner or admin
* Other community or team contact

### Known issues
* jest does not compatible with babel 7. The current solution is workaround !!!!