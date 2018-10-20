import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {RouterModule} from "@angular/router";
import {Stub765Component} from "./stub765.component";

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild([{
            path: "",
            component: Stub765Component
        }])
    ],
    declarations: [
        Stub765Component
    ]
})
export class Stub765Module {

}
