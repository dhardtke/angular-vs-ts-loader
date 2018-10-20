import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {RouterModule} from "@angular/router";
import {Stub358Component} from "./stub358.component";

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild([{
            path: "",
            component: Stub358Component
        }])
    ],
    declarations: [
        Stub358Component
    ]
})
export class Stub358Module {

}
