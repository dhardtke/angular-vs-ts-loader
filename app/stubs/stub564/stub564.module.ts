import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {RouterModule} from "@angular/router";
import {Stub564Component} from "./stub564.component";

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild([{
            path: "",
            component: Stub564Component
        }])
    ],
    declarations: [
        Stub564Component
    ]
})
export class Stub564Module {

}
