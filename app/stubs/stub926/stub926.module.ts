import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {RouterModule} from "@angular/router";
import {Stub926Component} from "./stub926.component";

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild([{
            path: "",
            component: Stub926Component
        }])
    ],
    declarations: [
        Stub926Component
    ]
})
export class Stub926Module {

}
