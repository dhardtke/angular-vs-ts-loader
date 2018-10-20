import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {RouterModule} from "@angular/router";
import {Stub7Component} from "./stub7.component";

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild([{
            path: "",
            component: Stub7Component
        }])
    ],
    declarations: [
        Stub7Component
    ]
})
export class Stub7Module {

}
