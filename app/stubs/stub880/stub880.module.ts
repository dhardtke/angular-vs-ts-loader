import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {RouterModule} from "@angular/router";
import {Stub880Component} from "./stub880.component";

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild([{
            path: "",
            component: Stub880Component
        }])
    ],
    declarations: [
        Stub880Component
    ]
})
export class Stub880Module {

}
