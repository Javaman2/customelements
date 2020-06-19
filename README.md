# Customelements

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 9.0.7.

We've been creating cutom components in Angular for a long time.  However, in HTM5 there is a [custom element](https://www.google.com/search?q=html+custom+elements) specification which is a bare-bones, closer to the metal construct.

What is Angular bridge to get there?  It's (casting) the document.createElement value to a NGElement WithProperites.
This allows us to inject a "native" custom element directly into the DOM as shown here.

```typescript
showAsElement(message: string) {
    // Create element
    const popupEl: NgElement &
      WithProperties<PopupComponent> = document.createElement(
      "popup-element"
    ) as any;

    // Listen to the close event
    popupEl.addEventListener("closed", () =>
      document.body.removeChild(popupEl)
    );

    // Set the message
    popupEl.message = message;

    // Add to the DOM
    document.body.appendChild(popupEl);
  }
```


## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
