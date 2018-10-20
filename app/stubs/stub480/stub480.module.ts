import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {RouterModule} from "@angular/router";
import {Stub480Component} from "./stub480.component";

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild([{
            path: "",
            component: Stub480Component
        }])
    ],
    declarations: [
        Stub480Component
    ]
})
export class Stub480Module {

}
