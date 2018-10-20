import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {RouterModule} from "@angular/router";
import {Stub866Component} from "./stub866.component";

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild([{
            path: "",
            component: Stub866Component
        }])
    ],
    declarations: [
        Stub866Component
    ]
})
export class Stub866Module {

}
