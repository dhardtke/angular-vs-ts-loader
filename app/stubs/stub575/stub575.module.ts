import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {RouterModule} from "@angular/router";
import {Stub575Component} from "./stub575.component";

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild([{
            path: "",
            component: Stub575Component
        }])
    ],
    declarations: [
        Stub575Component
    ]
})
export class Stub575Module {

}
