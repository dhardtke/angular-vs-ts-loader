import {Component} from "@angular/core";

@Component({
    selector: "nav-comp",
    templateUrl: "./nav.component.html"
})
export class NavComponent {
    public links = new Array(1000);
}
