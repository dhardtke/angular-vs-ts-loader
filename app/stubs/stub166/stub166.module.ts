import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {RouterModule} from "@angular/router";
import {Stub166Component} from "./stub166.component";

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild([{
            path: "",
            component: Stub166Component
        }])
    ],
    declarations: [
        Stub166Component
    ]
})
export class Stub166Module {

}
