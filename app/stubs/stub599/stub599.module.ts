import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {RouterModule} from "@angular/router";
import {Stub599Component} from "./stub599.component";

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild([{
            path: "",
            component: Stub599Component
        }])
    ],
    declarations: [
        Stub599Component
    ]
})
export class Stub599Module {

}
