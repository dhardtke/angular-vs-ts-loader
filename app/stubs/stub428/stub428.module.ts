import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {RouterModule} from "@angular/router";
import {Stub428Component} from "./stub428.component";

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild([{
            path: "",
            component: Stub428Component
        }])
    ],
    declarations: [
        Stub428Component
    ]
})
export class Stub428Module {

}
