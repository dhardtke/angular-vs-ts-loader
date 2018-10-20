import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {RouterModule} from "@angular/router";
import {Stub567Component} from "./stub567.component";

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild([{
            path: "",
            component: Stub567Component
        }])
    ],
    declarations: [
        Stub567Component
    ]
})
export class Stub567Module {

}
