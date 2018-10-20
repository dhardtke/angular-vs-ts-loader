import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {RouterModule} from "@angular/router";
import {Stub6Component} from "./stub6.component";

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild([{
            path: "",
            component: Stub6Component
        }])
    ],
    declarations: [
        Stub6Component
    ]
})
export class Stub6Module {

}
