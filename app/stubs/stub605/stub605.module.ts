import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {RouterModule} from "@angular/router";
import {Stub605Component} from "./stub605.component";

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild([{
            path: "",
            component: Stub605Component
        }])
    ],
    declarations: [
        Stub605Component
    ]
})
export class Stub605Module {

}
