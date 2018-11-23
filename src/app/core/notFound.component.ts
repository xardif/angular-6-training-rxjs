import { Component, Inject } from "@angular/core";

@Component({
  selector: "paNotFound",
  template: "<h3>Sorry something went wrong</h3><button routerLink='/'>Start over</button>"
})
export class NotFoundComponent {
  
}
