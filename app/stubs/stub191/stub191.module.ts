import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {RouterModule} from "@angular/router";
import {Stub191Component} from "./stub191.component";

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild([{
            path: "",
            component: Stub191Component
        }])
    ],
    declarations: [
        Stub191Component
    ]
})
export class Stub191Module {

}
