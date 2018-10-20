import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {RouterModule} from "@angular/router";
import {Stub867Component} from "./stub867.component";

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild([{
            path: "",
            component: Stub867Component
        }])
    ],
    declarations: [
        Stub867Component
    ]
})
export class Stub867Module {

}
