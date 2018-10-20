import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {RouterModule} from "@angular/router";
import {Stub123Component} from "./stub123.component";

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild([{
            path: "",
            component: Stub123Component
        }])
    ],
    declarations: [
        Stub123Component
    ]
})
export class Stub123Module {

}
