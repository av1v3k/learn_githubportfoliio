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

Thus, an Angular Universal application generates two versions of the same Angular application, one for the 'server' inside server folder and another for the 'browser' in browser folder.


server.ts: This contains the Node.js Express application that will host the server-side-rendered version of our portfolio application.
main.server.ts: This is the main entry point of our Angular Universal application.
app.server.module.ts: This is the main application module of the server-side-rendered application.
tsconfig.server.json: This is the TypeScript configuration for our Angular Universal application.

Global JavaScript objects such as window and document are unavailable when rendering an Angular application in the server because there is no browser. Angular provides abstraction APIs for some objects, such as the DOCUMENT injection token. If you need to enable them conditionally, you can inject the PLATFORM_ID token and use the isPlatformServer or isPlatformBrowser methods from the @angular/common npm package to check on which platform your application is currently running:



import { Inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
export class CheckPlatformComponent {
  isBrowser: boolean;
  
  constructor( @Inject(PLATFORM_ID) platformId: any) {
    this.isBrowser = isPlatformBrowser(platformId);
  }
}  

How to increase speed of rendering the application ?

# Pre-rendering


npm run prerender

- will generate 2 files under /browser folder.
- index.html => has non-empty <app-root>
- index.original.html => has empty <app-root>

In index.html file,

All component templates and styles have been prerendered in the main HTML file, meaning we can view our application on a browser even without JavaScript enabled!



npm run serve:ssr

even when javascript is disabled, the page is rendering the dynamic contents. Hurrey!

The application is pre-rendered.



Now, enable the Javascript.

The application makes one HTTP request for the browser-rendered version and another for the SSR application because both versions have a different state. We can prevent the previous behavior by sharing the state between the server and the browser. More specifically, we can transfer the state of the server to the browser using a special-purpose Angular module of the Angular Universal library called TransferHttpCacheModule.


To install TransferHttpCacheModule in our GitHub portfolio application, follow these steps:

1. import { TransferHttpCacheModule } from '@nguniversal/common'; in app.module.ts

after adding in import: [] of ngModules, run

npm run prerender

and 

npm run serve:ssr


# For SEO


import { Meta, Title } from '@angular/platform-browser';

constructor(private githubService: GithubService, private titleService: Title, private meta: Meta) {}


this.titleService.setTitle('GitHub portfolio app');
this.meta.addTags([
  {
    name: 'description',
    content: `${this.username}'s GitHub portfolio`
  },
  {
    name: 'author',
    content: this.username
  }
]);


Questions to ask yourself:

How do we subscribe to an observable in the template of a component?
What command do we use to install Angular Universal?
How can we differentiate programmatically between browser and server platforms?
What command generates a prerendered version of an SSR application?
What Angular module do we use to transfer the state from the server to the browser?
What Angular service do we use to set the title of an Angular application?
What Angular service do we use to set meta tags in an Angular application?