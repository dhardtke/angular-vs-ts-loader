import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {RouterModule} from "@angular/router";
import {Stub505Component} from "./stub505.component";

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild([{
            path: "",
            component: Stub505Component
        }])
    ],
    declarations: [
        Stub505Component
    ]
})
export class Stub505Module {

}
