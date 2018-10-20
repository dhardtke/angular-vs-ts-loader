import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {RouterModule} from "@angular/router";
import {Stub259Component} from "./stub259.component";

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild([{
            path: "",
            component: Stub259Component
        }])
    ],
    declarations: [
        Stub259Component
    ]
})
export class Stub259Module {

}
