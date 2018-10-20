import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {RouterModule} from "@angular/router";
import {Stub834Component} from "./stub834.component";

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild([{
            path: "",
            component: Stub834Component
        }])
    ],
    declarations: [
        Stub834Component
    ]
})
export class Stub834Module {

}
