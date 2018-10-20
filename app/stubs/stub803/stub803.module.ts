import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {RouterModule} from "@angular/router";
import {Stub803Component} from "./stub803.component";

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild([{
            path: "",
            component: Stub803Component
        }])
    ],
    declarations: [
        Stub803Component
    ]
})
export class Stub803Module {

}
