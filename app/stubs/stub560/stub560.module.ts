import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {RouterModule} from "@angular/router";
import {Stub560Component} from "./stub560.component";

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild([{
            path: "",
            component: Stub560Component
        }])
    ],
    declarations: [
        Stub560Component
    ]
})
export class Stub560Module {

}
