import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {RouterModule} from "@angular/router";
import {Stub429Component} from "./stub429.component";

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild([{
            path: "",
            component: Stub429Component
        }])
    ],
    declarations: [
        Stub429Component
    ]
})
export class Stub429Module {

}
