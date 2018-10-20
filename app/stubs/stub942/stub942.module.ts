import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {RouterModule} from "@angular/router";
import {Stub942Component} from "./stub942.component";

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild([{
            path: "",
            component: Stub942Component
        }])
    ],
    declarations: [
        Stub942Component
    ]
})
export class Stub942Module {

}
