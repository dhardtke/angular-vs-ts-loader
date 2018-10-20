import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {RouterModule} from "@angular/router";
import {Stub225Component} from "./stub225.component";

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild([{
            path: "",
            component: Stub225Component
        }])
    ],
    declarations: [
        Stub225Component
    ]
})
export class Stub225Module {

}
