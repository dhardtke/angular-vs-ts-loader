import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {RouterModule} from "@angular/router";
import {Stub796Component} from "./stub796.component";

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild([{
            path: "",
            component: Stub796Component
        }])
    ],
    declarations: [
        Stub796Component
    ]
})
export class Stub796Module {

}
