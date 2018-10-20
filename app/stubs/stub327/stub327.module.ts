import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {RouterModule} from "@angular/router";
import {Stub327Component} from "./stub327.component";

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild([{
            path: "",
            component: Stub327Component
        }])
    ],
    declarations: [
        Stub327Component
    ]
})
export class Stub327Module {

}
