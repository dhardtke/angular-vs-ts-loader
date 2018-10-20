import {Component} from "@angular/core";

@Component({
    selector: "app-component",
    template: `
        <nav-comp></nav-comp>
        <hr />
        <div>
            <router-outlet></router-outlet>
        </div>`
})
export class AppComponent {
}
