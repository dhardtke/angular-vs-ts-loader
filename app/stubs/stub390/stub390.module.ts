import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {RouterModule} from "@angular/router";
import {Stub390Component} from "./stub390.component";

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild([{
            path: "",
            component: Stub390Component
        }])
    ],
    declarations: [
        Stub390Component
    ]
})
export class Stub390Module {

}
