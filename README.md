# GhPortfolio

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 16.2.14.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.


## Commands Executed on this repo:

 ng new gh-portfolio --routing=false --style=scss --directory=. --dry-run

 npm install bootstrap

 Inside src\styles.scss file, 
    @import "bootstrap/scss/bootstrap";

 TIP: When we import a stylesheet format using the @import rule, we omit the extension of the file.

 npm install bootstrap-icons

 Inside src\styles.scss file,
    @import "bootstrap-icons/font/bootstrap-icons";


 ng generate service github --skip-tests

 ng generate component personal-info --skip-tests

 ng generate interface user

 ng generate component panel

 ng generate interface repository

 ng generate component repositories

 ng generate interface organization

 ng generate component organizations 


# Integrating Angular Universal

ng add @nguniversal/express-engine
