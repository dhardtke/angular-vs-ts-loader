import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {RouterModule} from "@angular/router";
import {Stub293Component} from "./stub293.component";

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild([{
            path: "",
            component: Stub293Component
        }])
    ],
    declarations: [
        Stub293Component
    ]
})
export class Stub293Module {

}
