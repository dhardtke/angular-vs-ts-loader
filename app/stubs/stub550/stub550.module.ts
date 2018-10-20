import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {RouterModule} from "@angular/router";
import {Stub550Component} from "./stub550.component";

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild([{
            path: "",
            component: Stub550Component
        }])
    ],
    declarations: [
        Stub550Component
    ]
})
export class Stub550Module {

}
