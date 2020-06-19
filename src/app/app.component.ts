import { Component, Injector } from "@angular/core";
import { PopupService } from "./services/popup.service";
import { PopupComponent } from "./components/popup/popup.component";
import { createCustomElement } from '@angular/elements';

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
})
export class AppComponent {
  title = "customelements";
  constructor(injector: Injector, public popup: PopupService) {
    debugger;
    // Convert `PopupComponent` to a custom element.
    const PopupElement = createCustomElement(PopupComponent, { injector });
    // customElement is a DOM property
    customElements.define("popup-element", PopupElement);
  }
}
