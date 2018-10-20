import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {RouterModule} from "@angular/router";
import {Stub272Component} from "./stub272.component";

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild([{
            path: "",
            component: Stub272Component
        }])
    ],
    declarations: [
        Stub272Component
    ]
})
export class Stub272Module {

}
