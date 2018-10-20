import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {RouterModule} from "@angular/router";
import {Stub983Component} from "./stub983.component";

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild([{
            path: "",
            component: Stub983Component
        }])
    ],
    declarations: [
        Stub983Component
    ]
})
export class Stub983Module {

}
