# MyFirstAngularProjectUdemy

## Details:
1. Upadated node version
2. Installed : **npm install -g @angular/cli**
3. **ng new project-name**
4. **cd project-name**
5. To run app: **ng serve**
   


## For Bootstrap:
1. **npm install --save bootstrap@3**  // to install locally in the project
2. In 'sngular.json' add bootstrap part as below: 
   "styles": [
              "node_modules/bootstrap/dist/css/bootstrap.min.css",
              "src/styles.css"
            ],
3. Run: **ng serve** to load new configuration.

## Creating component with CLI and nesting component:
1. **ng generate component component-name** OR **ng g c component-name** e.g. ng g c servers
2. In html file of new component, here servers: have two : <app-server></app-server>
<app-server></app-server>
3. Make sure if app.module.ts is updated with possible imports for new components in declarations section.
4. In app.component.html file : <app-servers></app-servers>
5. and run : **ng serve**
6. Inspect the browser in developer tools, you will see something like below: 
   <app-servers>
      <app-server></app-server>
      <app-server></app-server>
   </app-servers>

## Working with component templates: 
i.e. Instead of using external template file e.g. server.component.html in this example, you can also use inline template, which means you define HTML code in typescript code.

1. go in servers.component.ts and instead of 'templateUrl', make it 'template'
   i.e. change templateUrl: './servers.component.html'
   to template: '<app-server></app-server>'
   or template: '<app-server></app-server><app-server></app-server>', without wrapping as it is not supported format with wrappping.
2. ng serve
3. For wrapping the template html code write it in backticks instead of single quotes.
   template: `
    <app-server></app-server>
    <app-server></app-server>`,

    *********** **But using external templates is good in case of multiple lines of html code**.

## Working with component styles:
Stules and Inline styles:
### Both styleUrls and styles are arrays.

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  // styleUrls: ['./app.component.css']
  styles: [`
  h1 {
    color: red;
  }
  `]
})


## Understanding the component Selector.


--

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 15.1.1.

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
