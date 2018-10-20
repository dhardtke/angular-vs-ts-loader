import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {RouterModule} from "@angular/router";
import {Stub84Component} from "./stub84.component";

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild([{
            path: "",
            component: Stub84Component
        }])
    ],
    declarations: [
        Stub84Component
    ]
})
export class Stub84Module {

}
