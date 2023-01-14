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
It needs to be unique for every component.

## What is data-binding?
It is like communication between Typescript code (business logic) and Template (HTML pages).
Ability to provide dynamic content.

-> It can be done with:
**A**: **OUTPUT DATA** i.e from TS to HTML
1. **String interpolation**:
   {{ data }}
2. **Property Binding**:
   [property] = "data"

**B**: **React to user events**  i.e. from HTML to TS
1. **Event Binding**:
   (event) = "click"

## A: ONE ADDITIONAL WAY OF DATA BINDING:
COMBINATION OF A AND B ABOVE:
i.e. two way binding.

[(ngModel)] = "data"

check line 121 in this ReadMe


## Property binding vs String Interpolation
1. If you want to print something in your template : user sting interpolation
2. If you want to change some property of an HTML element or component, use property binding.


## EVENT Binding
Check servers.component.ts : onCreateServer
and server.component.html : (click)="onCreateServer()"

**Bindable Properties and Events**
How do you know to which Properties or Events of HTML Elements you may bind? You can basically bind to all Properties and Events - a good idea is to console.log()  the element you're interested in to see which properties and events it offers.

Important: For events, you don't bind to onclick but only to click (=> (click)).

The MDN (Mozilla Developer Network) offers nice lists of all properties and events of the element you're interested in. Googling for YOUR_ELEMENT properties  or YOUR_ELEMENT events  should yield nice results.

## Passing and using data with event binding.
**Check** : onUpdateServerName in servers.component.ts file
and input event on line 29 in respective html file.


**Important**: FormsModule is Required for **Two-Way-Binding**!
Important: For Two-Way-Binding (covered in the next lecture) to work, you need to enable the ngModel  directive. This is done by adding the FormsModule  to the imports[]  array in the AppModule.

You then also need to add the import from @angular/forms  in the app.module.ts file:

import { FormsModule } from '@angular/forms'; 


## Two way data binding : event + property binding
Check line 41 in servers.component.html
[(ngModel)]="serverName"
above syntax has [] for property and () for event.

## Combining all forms of data-binding.
check code from line 46 to 61 from dervers.componet.html.

## Udemy Assignment on all forms of data  binding
Check code from line 13 to 36 in app.component.html

























--

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 15.1.1.

## B: Development server

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
