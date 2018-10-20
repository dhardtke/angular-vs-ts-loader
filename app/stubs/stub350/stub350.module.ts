import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {RouterModule} from "@angular/router";
import {Stub350Component} from "./stub350.component";

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild([{
            path: "",
            component: Stub350Component
        }])
    ],
    declarations: [
        Stub350Component
    ]
})
export class Stub350Module {

}
