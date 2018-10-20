import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {RouterModule} from "@angular/router";
import {Stub459Component} from "./stub459.component";

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild([{
            path: "",
            component: Stub459Component
        }])
    ],
    declarations: [
        Stub459Component
    ]
})
export class Stub459Module {

}
