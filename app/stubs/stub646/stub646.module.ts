import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {RouterModule} from "@angular/router";
import {Stub646Component} from "./stub646.component";

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild([{
            path: "",
            component: Stub646Component
        }])
    ],
    declarations: [
        Stub646Component
    ]
})
export class Stub646Module {

}
