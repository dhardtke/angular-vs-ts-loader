import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {RouterModule} from "@angular/router";
import {Stub80Component} from "./stub80.component";

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild([{
            path: "",
            component: Stub80Component
        }])
    ],
    declarations: [
        Stub80Component
    ]
})
export class Stub80Module {

}
