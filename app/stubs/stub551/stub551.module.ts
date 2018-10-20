import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {RouterModule} from "@angular/router";
import {Stub551Component} from "./stub551.component";

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild([{
            path: "",
            component: Stub551Component
        }])
    ],
    declarations: [
        Stub551Component
    ]
})
export class Stub551Module {

}
