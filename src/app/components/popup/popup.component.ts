import { EventEmitter, Component, OnInit, Input, Output } from "@angular/core";
import {
  trigger,
  state,
  style,
  transition,
  animate,
} from "@angular/animations";

@Component({
  selector: "app-popup",
  templateUrl: "./popup.component.html",
  styleUrls: ["./popup.component.css"],
  host: {
    "[@state]": "state",
  },
  animations: [
    trigger("state", [
      state("opened", style({ transform: "translateY(0%)" })),
      state(
        "void, closed",
        style({ transform: "translateY(100%)", opacity: 0 })
      ),
      transition("* => *", animate("100ms ease-in")),
    ]),
  ],
})
export class PopupComponent implements OnInit {
  constructor() {}
  state: "opened" | "closed" = "closed";
  ngOnInit(): void {} 
  @Output() closed = new EventEmitter();
  @Input() 
  get message() {
    return this._message
  }
  set message(message: string) {
    this. _message = message;
    this.state = "opened";
  }
  _message: string;
}
