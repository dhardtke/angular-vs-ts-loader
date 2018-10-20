import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {RouterModule} from "@angular/router";
import {Stub731Component} from "./stub731.component";

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild([{
            path: "",
            component: Stub731Component
        }])
    ],
    declarations: [
        Stub731Component
    ]
})
export class Stub731Module {

}
