import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {RouterModule} from "@angular/router";
import {Stub115Component} from "./stub115.component";

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild([{
            path: "",
            component: Stub115Component
        }])
    ],
    declarations: [
        Stub115Component
    ]
})
export class Stub115Module {

}
