import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {RouterModule} from "@angular/router";
import {Stub741Component} from "./stub741.component";

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild([{
            path: "",
            component: Stub741Component
        }])
    ],
    declarations: [
        Stub741Component
    ]
})
export class Stub741Module {

}
