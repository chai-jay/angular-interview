# angular-interview
For working session while interviewing candidates

## Steps:

### Step 1 - Install Bootstrap and Setup app shell

#### Install Bootstrap
https://github.com/angular/angular-cli/wiki/stories-include-bootstrap
* Run `npm install bootstrap@next --save`.
* Add `"../node_modules/bootstrap/dist/css/bootstrap.min.css"` to `app[0].styles` property of file `.angular-cli.json`.

#### Setup app shell

In `app.component.html`:
* Remove default code.
* Add Bootstrap grid container.
* *Optional* Add a Bootstrap navbar element.

# AngularInterview

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 1.4.5.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `-prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
