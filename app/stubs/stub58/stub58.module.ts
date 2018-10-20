import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {RouterModule} from "@angular/router";
import {Stub58Component} from "./stub58.component";

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild([{
            path: "",
            component: Stub58Component
        }])
    ],
    declarations: [
        Stub58Component
    ]
})
export class Stub58Module {

}
