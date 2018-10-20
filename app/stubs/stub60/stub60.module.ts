import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {RouterModule} from "@angular/router";
import {Stub60Component} from "./stub60.component";

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild([{
            path: "",
            component: Stub60Component
        }])
    ],
    declarations: [
        Stub60Component
    ]
})
export class Stub60Module {

}
