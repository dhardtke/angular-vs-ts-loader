import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {RouterModule} from "@angular/router";
import {Stub168Component} from "./stub168.component";

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild([{
            path: "",
            component: Stub168Component
        }])
    ],
    declarations: [
        Stub168Component
    ]
})
export class Stub168Module {

}
