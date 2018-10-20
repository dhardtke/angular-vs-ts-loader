import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {RouterModule} from "@angular/router";
import {Stub527Component} from "./stub527.component";

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild([{
            path: "",
            component: Stub527Component
        }])
    ],
    declarations: [
        Stub527Component
    ]
})
export class Stub527Module {

}
