import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {RouterModule} from "@angular/router";
import {Stub806Component} from "./stub806.component";

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild([{
            path: "",
            component: Stub806Component
        }])
    ],
    declarations: [
        Stub806Component
    ]
})
export class Stub806Module {

}
