import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {RouterModule} from "@angular/router";
import {Stub886Component} from "./stub886.component";

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild([{
            path: "",
            component: Stub886Component
        }])
    ],
    declarations: [
        Stub886Component
    ]
})
export class Stub886Module {

}
