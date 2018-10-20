import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {RouterModule} from "@angular/router";
import {Stub758Component} from "./stub758.component";

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild([{
            path: "",
            component: Stub758Component
        }])
    ],
    declarations: [
        Stub758Component
    ]
})
export class Stub758Module {

}
