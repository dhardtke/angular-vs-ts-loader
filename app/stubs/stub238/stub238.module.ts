import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {RouterModule} from "@angular/router";
import {Stub238Component} from "./stub238.component";

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild([{
            path: "",
            component: Stub238Component
        }])
    ],
    declarations: [
        Stub238Component
    ]
})
export class Stub238Module {

}
