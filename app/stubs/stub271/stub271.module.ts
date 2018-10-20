import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {RouterModule} from "@angular/router";
import {Stub271Component} from "./stub271.component";

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild([{
            path: "",
            component: Stub271Component
        }])
    ],
    declarations: [
        Stub271Component
    ]
})
export class Stub271Module {

}
