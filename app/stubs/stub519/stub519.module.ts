import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {RouterModule} from "@angular/router";
import {Stub519Component} from "./stub519.component";

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild([{
            path: "",
            component: Stub519Component
        }])
    ],
    declarations: [
        Stub519Component
    ]
})
export class Stub519Module {

}
