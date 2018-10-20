import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {RouterModule} from "@angular/router";
import {Stub476Component} from "./stub476.component";

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild([{
            path: "",
            component: Stub476Component
        }])
    ],
    declarations: [
        Stub476Component
    ]
})
export class Stub476Module {

}
