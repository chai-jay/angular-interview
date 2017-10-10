# angular-interview
For working session while interviewing candidates. This focuses on lazy loading and creating a Reactive Form.

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

### Step 2 - Create lazily-loaded FormComponent

* Run angular-cli command `ng g m form --routing` to generate `FormModule` and `FormRoutingModule`.
    * *Note:* Can also generate `FormRoutingModule` separately if `--routing` flag not used.
* Run angular-cli command `ng g c form/form` to generate `FormComponent`.
* Add new route definition in `form-routing.module.ts`:
`{ path: '', component: FormComponent }`
* Add new route definition in `app-routing.module.ts`:
```
{ path: 'form', loadChildren: './form/form.module#FormModule' },
{ path: '**', redirectTo: 'form' }
```
* Verify it works by going to any path and seeing that it redirects to '/form' and Network debugging tool shows a `___.chunk.js`.

### Step 3 - Adding reactive form to FormComponent - Creating FormGroup

* Import `ReactiveFormsModule` to `FormModule`.
* In `FormComponent`, create the FormGroup for form (eg login form with username and password):
    * Method 1: Use FormBuilder to build out FormGroup
    ```
    import { FormBuilder, FormGroup, Validators } from '@angular/forms';
    ...
    public loginForm: FormGroup;

    constructor(private formBuilder: FormBuilder) {}
    
    ngOnInit() {
        this.loginForm = this.formBuilder.group({
            username: ['', Validators.required, Validators.minLength(4)],
            password: ['', Validators.required, Validators.minLength(8)]
        });
    }
    ```

    * Method 2: Define FormGroup object and explicitly declare each prop as a FormControl.
    ```
    import { FormControl, FormGroup, Validators } from '@angular/forms';
    ...
    public loginForm: FormGroup;

    constructor(private formBuilder: FormBuilder) {}
    
    ngOnInit() {
        this.loginForm = new FormGroup({
            username: new FormControl('', [Validators.required, Validators.minLength(4)]),
            password: new FormControl('', [Validators.required, Validators.minLength(8)])
        });
    }
    ```

### Step 4 - Adding reactive form to FormComponent - Hooking template to FormGroup

* Create form template and bind the FormGroup to template of `FormComponent`. Adhere to the following requirements:
    * Submit button should be disabled if the FormGroup is invalid.
    * Add basic validation error msg per input that shows if FormControl has been touched and it is invalid.
    * Don't bind submit event for now. 
    ```
    <form [formGroup]="loginForm">
        <div>
            <label for="username">Username</label>
            <input type="text" id="username" formControlName="username" />
            <div [hidden]="loginForm.get('username').valid || loginForm.get('username').untouched">Username is required</div>
        </div>
        <div>
            <label for="password">Password</label>
            <input type="password" id="password" formControlName="password" />
            <div [hidden]="loginForm.get('password').valid || loginForm.get('password').untouched">Password is required</div>
        </div>
        <button type="submit" [disabled]="!loginForm.valid">Submit</button>
    </form>
    ```

### Step 5 - Adding submit to FormComponent and subscribe to Observable stream

* Add a method `onSubmit()` to `FormComponent` class. 
* Bind the submit event to method in template `(submit)="onSubmit()"`
* Import `HttpClientModule` to `FormModule` so we can use `HttpClient`: `import { HttpClientModule } from '@angular/common/http';`
    * *Note:* Can also use `HttpModule` though it's deprecated.
* Create a `FormService` to abstract out handling of Ajax calls:
    * Run `ng g s form/form --module=form` to scaffold service
    * Import `HttpClient` to make GET request to mock backend server "https://jsonplaceholder.typicode.com/users/1"
    * Return observable stream that `FormComponent` will subscribe to
    ```
    import { HttpClient } from '@angular/common/http';
    import { Observable } from 'rxjs/Observable';
    ...
    constructor(private httpClient: HttpClient) { }

    public login(username: string, password: string): Observable<any> {
        return this.httpClient.get('https://jsonplaceholder.typicode.com/users/1');
    }
    ```
* Display the data from observable stream in template using `async` and `json` pipes:
    * Add property `user$` of type `Observable<any>` to `FormComponent` class.
    * In `FormComponent`'s `onSubmit()` method, set `this.user$` to returned value of `FormService.login()`:
    ```
    public onSubmit(): void {
        const username = this.loginForm.get('username').value,
            password = this.loginForm.get('password').value;

        this.user$ = this.formService.login(username, password);
    }
    ```
    * In template of `FormComponent` unwrap result of observable with `async` and `json` pipes:
    `<p [hidden]="!user$">{{ user$ | async | json }}</p>`

### Step 6 - CSS Freestyle on FormComponent's template

* CSS freestyling on FormComponent!

### Further optimizations:

* Component for navbar
* CoreModule for navbar, FormService
* SharedModule for CommonModule
* Maybe make login a promise since login isn't a good example for Observables.
* Write unit tests and e2e tests
* Etc

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
