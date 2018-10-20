import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {RouterModule} from "@angular/router";
import {Stub287Component} from "./stub287.component";

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild([{
            path: "",
            component: Stub287Component
        }])
    ],
    declarations: [
        Stub287Component
    ]
})
export class Stub287Module {

}
