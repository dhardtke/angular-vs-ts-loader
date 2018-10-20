import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {RouterModule} from "@angular/router";
import {Stub799Component} from "./stub799.component";

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild([{
            path: "",
            component: Stub799Component
        }])
    ],
    declarations: [
        Stub799Component
    ]
})
export class Stub799Module {

}
