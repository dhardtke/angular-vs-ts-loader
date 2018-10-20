import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {RouterModule} from "@angular/router";
import {Stub669Component} from "./stub669.component";

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild([{
            path: "",
            component: Stub669Component
        }])
    ],
    declarations: [
        Stub669Component
    ]
})
export class Stub669Module {

}
